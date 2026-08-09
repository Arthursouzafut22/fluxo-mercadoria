export type Auth = {
  token: string | null;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  getUser?: () => User;
};

export type User = {
  name: string;
  email: string;
};
