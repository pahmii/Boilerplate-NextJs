"use client";

import { CreateAxiosDefaults, isAxiosError, default as realAxios } from "axios";
import { apiUrls } from "../apiUrls";
import { urls } from "@/lib/routes";
import { APISingleResponse } from "@/lib/hooks";
import { TokenResponse } from "@/lib/auth";
import { APIErrorResponse } from "../types";

export const axiosConfig: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const axios = realAxios.create(axiosConfig);

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

const forceLogout = async () => {
  try {
    const rt = localStorage.getItem(REFRESH_TOKEN);

    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);

    if (typeof window === "undefined") {
      return;
    }

    // Only attempt logout API call if we actually had a refresh token
    if (rt) {
      await axios.post(apiUrls.logout(), { refreshToken: rt }).catch(() => {});
    }

    window.location.href = urls.login();
  } catch {
    if (typeof window !== "undefined") {
      window.location.href = urls.login();
    }
  }
};

let isRefreshing = false;
let failedQueue: {
  resolve: (token: string) => void;
  reject: (error: any) => void;
}[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token!);
    }
  });
  failedQueue = [];
};

const fetchToken = async (): Promise<string> => {
  const rt = localStorage.getItem(REFRESH_TOKEN);

  if (!rt) {
    await forceLogout();
    throw new Error("No refresh token available");
  }

  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      failedQueue.push({ resolve, reject });
    });
  }

  isRefreshing = true;

  try {
    const { data } = await axios.post<APISingleResponse<TokenResponse>>(
      apiUrls.refreshToken(),
      { refreshToken: rt },
    );

    const fetchedToken = data.data;

    localStorage.setItem(ACCESS_TOKEN, fetchedToken.accessToken);
    localStorage.setItem(REFRESH_TOKEN, fetchedToken.refreshToken);

    processQueue(null, fetchedToken.accessToken);
    return fetchedToken.accessToken;
  } catch (error) {
    processQueue(error, null);
    await forceLogout();
    throw error;
  } finally {
    isRefreshing = false;
  }
};

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (config) => config,
  async (e) => {
    if (!isAxiosError<APIErrorResponse>(e)) {
      return Promise.reject(e);
    }

    const prevReq = e.config;
    if (!prevReq) {
      return Promise.reject(e);
    }

    if (e.response?.status !== 401) {
      if (
        prevReq.url === apiUrls.refreshToken() &&
        e.response?.status === 422
      ) {
        await forceLogout();
      }
      return Promise.reject(e);
    }

    if (
      prevReq.url === apiUrls.logout() ||
      prevReq.url === apiUrls.login() ||
      prevReq.url === apiUrls.refreshToken()
    ) {
      return Promise.reject(e);
    }

    try {
      const newAccessToken = await fetchToken();
      prevReq.headers.Authorization = `Bearer ${newAccessToken}`;
      return axios(prevReq);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  },
);
