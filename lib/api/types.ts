export const orderDirs = ["asc", "desc"] as const;
export type OrderDir = (typeof orderDirs)[number];

export type APISingleResponse<T> = {
  data: T;
};

export type APIListResponse<T> = {
  data: T[];
  meta?: {
    page: number;
    perPage: number;
    lastPage: number;
    total: number;
    totalQuantity: number;
  };
};

export type APIErrorResponse<Meta = string[]> = {
  message: string;
  errorCode: string;
  meta?: Meta;
};
