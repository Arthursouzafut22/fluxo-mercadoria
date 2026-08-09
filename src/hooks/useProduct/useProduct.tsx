import { toast } from "react-toastify";
import type { FormProductType } from "../../components/FormProduct/type";
import { useAuth } from "../../context/Auth/useAuth";
import { CreateProduct } from "../../services/product/createProduct";
import React from "react";
import type { ProductProps } from "../../services/product/type";
import { GetProducts } from "../../services/product/getProduct";
import { DeleteProduct } from "../../services/product/deleteProduct";
import { UpdateProduct } from "../../services/product/updateProduct";

export default function useProduct() {
  const { token } = useAuth();
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  const [loading, setLoading] = React.useState(true);

  async function onsubmit(data: FormProductType) {
    try {
      const payload = await CreateProduct.execute(data);

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

        const productList = await GetProducts.execute();

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
      await DeleteProduct.execute(id, setProducts);
    } catch (error) {
      console.error(error);
    }
  }

  async function onsubmitUpdate(data: FormProductType, id: number) {
    try {
      const payload = await UpdateProduct.execute(data, id);

      if (payload) {
        // Substitui o produto antigo pelo atualizado na lista
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? payload.data : product
          )
        );

        toast.success(payload.message || "Produto atualizado com sucesso!");
        return true;
      }
    } catch (error: unknown) {
      console.log(error);
      toast.error("Erro ao atualizar produto.");
      return false;
    }
  }

  return { onsubmit, products, loading, deleteProduct, onsubmitUpdate };
}
