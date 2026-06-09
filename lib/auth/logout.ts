"use client";

import { axios } from "@/lib/api/fetcher/axios";
import { apiUrls } from "@/lib/api/apiUrls";

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

export async function logout() {
  try {
    const rt = typeof window !== "undefined" ? localStorage.getItem(REFRESH_TOKEN) : null;
    if (rt) {
      await axios.post(apiUrls.logout(), { refreshToken: rt });
    }
  } catch {}
  if (typeof window !== "undefined") {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }
}

