export function formatePrice(amount) {
  return `$${(amount / 100).toFixed(2)}`;
}
