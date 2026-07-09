import { toast } from "react-toastify";
import type { FormRegister } from "../pages/Register/types/type";
import { registerUser } from "../services/registerService";
import { useNavigate } from "react-router";

type PayloadUser = {
  data: null;
  success: boolean;
  message: string;
};

export function useRegister() {
  const navigate = useNavigate();
  
  async function onsubmit(data: FormRegister) {
    try {
      const user = (await registerUser(data)) as PayloadUser;
      console.log(user);

      if (user.success) {
        toast.success(user.message);
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
        console.log(error.message);
      }
    }
  }

  return { onsubmit };
}
