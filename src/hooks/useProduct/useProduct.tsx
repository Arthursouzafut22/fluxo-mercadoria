import { toast } from "react-toastify";
import type { FormProductType } from "../../components/FormProduct/type";
import { useAuth } from "../../context/Auth/useAuth";
import { Product } from "../../services/product/createProduct";

export default function useProduct() {
  const { token } = useAuth();

  async function onsubmit(data: FormProductType) {
    try {
      const product = await Product.crateProduct(data, token as string);

      if (product.success === true) {
        toast.success(product.message);
        return true;
      }
    } catch (error: unknown) {
      console.log(error);
      return false;
    }
  }

  return { onsubmit };
}
