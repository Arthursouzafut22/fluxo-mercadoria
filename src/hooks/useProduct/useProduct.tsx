import { toast } from "react-toastify";
import type { FormProductType } from "../../components/FormProduct/type";
import { CreateProduct } from "../../services/product/createProduct";
import React from "react";
import type { ProductProps } from "../../services/product/type";
import { GetProducts } from "../../services/product/getProduct";
import { DeleteProduct } from "../../services/product/deleteProduct";
import { UpdateProduct } from "../../services/product/updateProduct";

export default function useProduct() {
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Criar produto...
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

  // Listar produtos...
  React.useEffect(() => {
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
  }, []);

  // Deletar produto...
  async function deleteProduct(id: number) {
    try {
      setLoading(true);
      await DeleteProduct.execute(id, setProducts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // Atualizar produto...
  async function onSubmitUpdate(data: FormProductType, id: number) {
    try {
      const response = await UpdateProduct.execute(data, id);

      if (response && response.success && response.data) {
        const item = response.data;

        const updatedProduct: ProductProps = {
          id: item.id,
          nome: item.nome,
          descricao: item.descricao,
          categoria: item.categoria,
          preco_custo: item.preco_custo,
          preco_venda: item.preco_venda,
          quantidade_estoque: item.quantidade_estoque,
          lucro: item.lucro,
          usuario_id: item.usuario_id,
        };

        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? updatedProduct : product
          )
        );

        toast.success(response.message || "Produto atualizado com sucesso!");
        return true;
      }
    } catch (error: unknown) {
      console.log(error);
      toast.error("Erro ao atualizar produto.");
      return false;
    }
  }

  return { onsubmit, products, loading, deleteProduct, onSubmitUpdate };
}
