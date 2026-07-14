export type Auth = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  getUser?: () => User;
};

export type User = {
  name: string;
  email: string;
};
