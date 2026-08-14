import { siteConfig } from './siteConfig';

/**
 * Genera un enlace de WhatsApp con mensaje predefinido.
 * El número se toma de siteConfig.whatsappNumber (placeholder hasta configurar).
 */
export function buildWhatsAppUrl(message?: string): string {
  const phone = siteConfig.whatsappNumber;
  const text =
    message ||
    'Hola, estoy interesado en crear una web para mi negocio. Me gustaría conocer más sobre los servicios de DevSolutionsHN.';
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const whatsappMessages = {
  general:
    'Hola, estoy interesado en crear una web para mi negocio. Me gustaría conocer más sobre los servicios de DevSolutionsHN.',
  web:
    'Hola, necesito una página web para mi negocio. ¿Podrían ayudarme con una cotización?',
  store:
    'Hola, quiero crear una tienda online para mi negocio. Me gustaría conocer los precios y opciones.',
  system:
    'Hola, necesito un sistema web personalizado para mi negocio (reservas, dashboard, etc.). ¿Podemos hablar sobre mi proyecto?',
  maintenance:
    'Hola, ya tengo una web y me interesa el servicio de mantenimiento. ¿Podrían darme más información?',
} as const;
