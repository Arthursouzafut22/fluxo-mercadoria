export function formatDate(date: Date) {
  return new Date(date).toLocaleString("pt-BR");
}

export function formatDateThow(data: string): string {
  if (!data) return "";
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}
