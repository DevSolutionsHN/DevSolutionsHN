/**
 * Utilidad para combinar clases CSS condicionalmente.
 * Reemplaza dependencia externa (clsx) con implementación propia ligera.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
