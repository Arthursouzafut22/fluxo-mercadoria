import { toast } from "react-toastify";
import type { FormRegister } from "../../pages/Register/types/type";
import { RegisterService } from "../../services/register/registerService";
import type { UserPayload } from "./types";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();

  async function onsubmit(data: FormRegister) {
    try {
      const user = (await RegisterService.createUser(data)) as UserPayload;

      if (user.success) {
        toast.success(user.message);
        setTimeout(() => navigate("/login"), 2000);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  }

  return { onsubmit };
}
