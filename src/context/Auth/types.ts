export type Auth = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  //   getUser: () => "";
};
