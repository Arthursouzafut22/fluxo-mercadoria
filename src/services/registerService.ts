import type { FormRegister } from "../pages/Register/types/type";

export async function registerUser(data: FormRegister) {
  try {
    const result = await fetch(
      "https://controle-mercadoria.onrender.com/v1/usuarios",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const payload = await result.json();

    if (!result.ok) {
      throw new Error(payload.message);
    }

    return payload;
  } catch (error) {
    console.error("Erro detalhado na captura:", error);
    throw error;
  }
}
