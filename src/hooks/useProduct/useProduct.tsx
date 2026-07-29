import { toast } from "react-toastify";
import type { FormProductType } from "../../components/FormProduct/type";
import { useAuth } from "../../context/Auth/useAuth";
import { CreateProduct } from "../../services/product/createProduct";
import React from "react";
import type { ProductProps } from "../../services/product/type";
import { GetProducts } from "../../services/product/getProduct";
import { DeleteProduct } from "../../services/product/deleteProduct";

export default function useProduct() {
  const { token } = useAuth();
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  const [loading, setLoading] = React.useState(true);

  async function onsubmit(data: FormProductType) {
    try {
      const payload = await CreateProduct.execute(data, token as string);

      if (payload) {
        setProducts((prevProducts) => [...prevProducts, payload.data]);
        toast.success(payload.message || "Produto criado com sucesso!");
        return true;
      }
    } catch (error: unknown) {
      console.log(error);
      toast.error("Erro ao cadastrar produto.");
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

  async function deleteProduct(id: number) {
    try {
      await DeleteProduct.execute(String(token), id, setProducts);
    } catch (error) {
      console.error(error);
    }
  }

  return { onsubmit, products, loading, deleteProduct };
}
