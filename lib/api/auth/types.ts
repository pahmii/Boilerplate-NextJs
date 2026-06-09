export type LoginRequest = {
  email: string;
  password: string;
};

export type RefreshTokenRequest = {
  refreshToken: string;
};

export type TokenResponse = {
  type: "Bearer";
  accessToken: string;
  refreshToken: string;
};
