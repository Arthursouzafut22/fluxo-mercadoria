import { API_URL } from "../services/api";
import { authStorage } from "./authStorage";
import type { RefreshTokenResponse } from "./types";

interface QueueItem {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}

let isRefreshing = false;
let failedQueue: QueueItem[] = [];

const processQueue = (error: unknown, token: string | null = null): void => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error || !token) reject(error);
    else resolve(token);
  });
  failedQueue = [];
};

async function refreshAccessToken(): Promise<string> {
  const refreshToken = authStorage.getRefreshToken();

  if (!refreshToken) {
    throw new Error("Nenhum refresh token disponível.");
  }

  const response = await fetch(`${API_URL}/autenticacao/refresh-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    throw new Error("Falha ao renovar o token.");
  }

  const data: RefreshTokenResponse = await response.json();
  authStorage.setTokens(data.accessToken, data.refreshToken);
  return data.accessToken;
}

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {},
  _isRetry: boolean = false
): Promise<Response> {
  const accessToken = authStorage.getAccessToken();

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (accessToken) {
    (headers as Record<string, string>).Authorization = `Bearer ${accessToken}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (response.status !== 401 || _isRetry) {
    return response;
  }

  if (isRefreshing) {
    return new Promise<string>((resolve, reject) => {
      failedQueue.push({ resolve, reject });
    }).then((newToken) => {
      return apiFetch(
        endpoint,
        {
          ...options,
          headers: { ...options.headers, Authorization: `Bearer ${newToken}` },
        },
        true
      );
    });
  }

  isRefreshing = true;

  try {
    const newAccessToken = await refreshAccessToken();
    processQueue(null, newAccessToken);

    return apiFetch(
      endpoint,
      {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${newAccessToken}`,
        },
      },
      true
    );
  } catch (refreshError) {
    processQueue(refreshError, null);
    authStorage.clearTokens();
    window.location.href = "/login";
    throw refreshError;
  } finally {
    isRefreshing = false;
  }
}
