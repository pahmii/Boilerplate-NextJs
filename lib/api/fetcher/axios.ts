import { CreateAxiosDefaults, isAxiosError, default as realAxios } from "axios";
import { apiUrls } from "../apiUrls";
import { TokenResponse } from "../auth";
import { APIErrorResponse, APISingleResponse } from "../types";

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
// const forceLogout = async (id?: string) => {

//   try {
//     const rt = localStorage.getItem(REFRESH_TOKEN)

//     localStorage.removeItem(ACCESS_TOKEN)
//     localStorage.removeItem(REFRESH_TOKEN)
//     if (window === undefined) {
//       throw new CustomError('Cannot redirect, due to handle by server side')
//     }

//     await axios.post(apiUrls.logout(), { refreshToken: rt })

//     window.location.href = urls.tableId(id as string)
//   } catch (e) {
//     if (e instanceof CustomError) {
//       throw e
//     }

//     window.location.href = urls.tableId(id as string)
//   }
// }

const fetchToken = async () => {
  const at = localStorage.getItem(ACCESS_TOKEN);
  const rt = localStorage.getItem(REFRESH_TOKEN);

  await navigator.locks.request(
    "refreshing-token",
    {
      mode: "exclusive",
    },
    async () => {
      const latestAT = localStorage.getItem(ACCESS_TOKEN);
      if (at !== latestAT) {
        return;
      }

      const { data } = await axios.put<APISingleResponse<TokenResponse>>(
        apiUrls.refreshToken(),
        { refreshToken: rt },
      );

      const fetchedToken = data.data;

      localStorage.setItem(ACCESS_TOKEN, fetchedToken.accessToken);
      localStorage.setItem(REFRESH_TOKEN, fetchedToken.refreshToken);
    },
  );
};

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;

  return config;
});

axios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (e) => {
    try {
      if (!isAxiosError<APIErrorResponse>(e)) {
        throw e;
      }

      const prevReq = e.config;

      if (prevReq === undefined) {
        throw e;
      }

      if (e.response?.status !== 401) {
        if (
          prevReq.url === apiUrls.refreshToken() &&
          e.response?.status === 422
        ) {
          // window.location.href = urls.login(id as string)
          return;
        }
        throw e;
      }

      if (prevReq.url === apiUrls.logout()) {
        throw e;
      }

      // if (prevReq.url === apiUrls.refreshToken()) {
      //   await forceLogout(id as string)
      //   return
      // }
      if (prevReq.url === apiUrls.login()) {
        throw e;
      }

      await fetchToken();

      const accessToken = localStorage.getItem(ACCESS_TOKEN);

      prevReq.headers.Authorization = `Bearer ${accessToken}`;

      return axios(prevReq);
    } catch (e) {
      throw e;
    }
  },
);
