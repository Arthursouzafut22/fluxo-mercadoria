import { toast } from "react-toastify";
import type { FormProductType } from "../../components/FormProduct/type";
import { useAuth } from "../../context/Auth/useAuth";
import { CreateProduct } from "../../services/product/createProduct";
import React from "react";
import type { ProductProps } from "../../services/product/type";
import { GetProducts } from "../../services/product/getProduct";

export default function useProduct() {
  const { token } = useAuth();
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  const [loading, setLoading] = React.useState(true);
  console.log(products)

  async function onsubmit(data: FormProductType) {
    try {
      const product = await CreateProduct.execute(data, token as string);

      if (product.success === true) {
        toast.success(product.message);
        return true;
      }
    } catch (error: unknown) {
      console.log(error);
      return false;
    }
  }

  React.useEffect(() => {
    if (!token) return;

    async function allProducts() {
      try {
        setLoading(true);

        const productList = await GetProducts.execute(token as string);

        setProducts(productList);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    allProducts();
  }, [token]);

  return { onsubmit, products, loading };
}
