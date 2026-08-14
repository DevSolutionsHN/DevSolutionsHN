/**
 * Formatea un número como precio en USD.
 */
export function formatPrice(amount: number): string {
  if (amount === 0) return 'Cotización';
  return new Intl.NumberFormat('es-HN', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Convierte USD a Lempiras (aproximado: 1 USD = 25 HNL).
 */
export function usdToHnl(amount: number): number {
  return amount * 25;
}
