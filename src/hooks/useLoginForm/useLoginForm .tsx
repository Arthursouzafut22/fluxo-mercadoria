import type { LoginForm } from "../../pages/Login/types/type";
import { AuthService } from "../../services/auth/authService";
import { toast } from "react-toastify";
import type { AuthPayload } from "./types";
import { useAuth } from "../../context/Auth/useAuth";
import { useNavigate } from "react-router-dom";

export function useLoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  async function onsubmit(data: LoginForm) {
    try {
      const auth = (await AuthService.Login(data)) as AuthPayload;
      
      if (auth.success === true) {
        toast.success(auth.message);
        login(auth.accessToken as string);
        setTimeout(() => navigate("/dashboard"), 2000);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  return { onsubmit };
}
