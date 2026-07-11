import { createContext } from "react";
import type { Auth } from "./types";

export const AuthContext = createContext<Auth>({} as Auth);
