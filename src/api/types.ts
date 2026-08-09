export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  expiration: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  accessToken: string;
  refreshToken: string;
}
