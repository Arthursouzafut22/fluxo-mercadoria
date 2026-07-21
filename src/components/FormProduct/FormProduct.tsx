import { Input } from "../Input/Input";
import * as S from "./style";
import type { FormProductProps } from "./type";


export default function FormProduct({ closeModal }: FormProductProps) {
  return (
    <S.WrapperForm onClick={(e) => e.stopPropagation()}>
      <h2>Novo produto</h2>
      <S.Form>
        <Input
          label="NOME"
          id="name"
          required
          // {...register("email", { required: true })}
        />
        <Input
          label="Descrição"
          id="description"
          required
          // {...register("email", { required: true })}
        />

        <S.BoxInputsFlex>
          <Input
            type="number"
            label="Preço custo"
            id="costprice"
            required
            // {...register("email", { required: true })}
          />
          <Input
            type="number"
            label="Preço venda"
            id="sellingprice"
            required
            // {...register("email", { required: true })}
          />
        </S.BoxInputsFlex>
        <S.BoxInputStock>
          <Input
            type="number"
            label="Estoque inicial"
            id="stock"
            value={0}
            required
            // {...register("email", { required: true })}
          />
          <p>Registrado como entrada inicial no histórico.</p>
        </S.BoxInputStock>

        <S.BoxButton>
          <S.Button color onClick={closeModal}>
            Cancelar
          </S.Button>
          <S.Button>Salvar</S.Button>
        </S.BoxButton>
      </S.Form>
    </S.WrapperForm>
  );
}
