export function formatCurrencyBRL(value: number | string) {
  if (value === null || value === undefined) return;

  const format = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return format;
}
