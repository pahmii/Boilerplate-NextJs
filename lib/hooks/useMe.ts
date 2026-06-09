"use client";

import { useQuery } from "@tanstack/react-query";
import { apiUrls } from "../api/apiUrls";
import { axios } from "../api/fetcher/axios";
import type { AxiosResponse } from "axios";

export const roles = ["admin", "client"] as const;
type Role = (typeof roles)[number];

export interface User {
  id: string;
  name: string;
  email: string;
  roles: Role[];
}

export type APISingleResponse<T> = {
  data: T;
};

export const useMe = () => {
  const { data, error, isLoading } = useQuery<
    AxiosResponse<APISingleResponse<User>>,
    Error
  >({
    queryKey: ["me"],
    queryFn: async () => {
      const response = await axios.get<APISingleResponse<User>>(apiUrls.me());

      return response;
    },
  });

  return { me: data?.data?.data, error, isLoading };
};
