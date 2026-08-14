import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'web',
    title: 'Páginas web',
    shortTitle: 'Páginas web',
    description:
      'Sitios web profesionales y rápidos para negocios que quieren una presencia digital sólida.',
    problem:
      'Tu negocio depende solo de redes sociales y no tienes un lugar propio donde mostrar quién eres, qué ofreces y cómo contactarte.',
    solution:
      'Creamos una página web clara, moderna y profesional que centraliza tu información y genera confianza en tus clientes.',
    examples: [
      'Landing pages',
      'Páginas empresariales',
      'Sitios informativos',
      'Portafolios',
      'Páginas para negocios locales',
    ],
    benefits: [
      'Presencia profesional',
      'Información clara y organizada',
      'Botón de contacto y WhatsApp',
      'Ubicación en mapa',
      'SEO básico para aparecer en Google',
      'Diseño responsive (móvil y escritorio)',
      'Carga rápida',
      'Publicación incluida',
    ],
    ctaText: 'Cotizar página web',
    ctaHref: '/contacto?tipo=web',
    icon: 'Globe',
  },
  {
    id: 'store',
    title: 'Tiendas online',
    shortTitle: 'Tiendas online',
    description:
      'Tu negocio en Internet para vender productos o recibir pedidos las 24 horas.',
    problem:
      'Tienes productos que solo vendes por mensaje y pierdes ventas cuando no puedes responder de inmediato.',
    solution:
      'Desarrollamos una tienda online donde tus clientes ven catálogo, hacen pedidos y te contactan por WhatsApp — sin complicaciones.',
    examples: [
      'Catálogo de productos',
      'Carrito de compras',
      'Pedidos por WhatsApp',
      'Panel de administración básica',
      'Funcionalidades personalizadas',
    ],
    benefits: [
      'Catálogo organizado',
      'Productos con imágenes y precios',
      'Carrito y pedidos',
      'Integración con WhatsApp',
      'Administración sencilla',
      'Adaptable a tu tipo de negocio',
    ],
    ctaText: 'Cotizar tienda online',
    ctaHref: '/contacto?tipo=store',
    icon: 'ShoppingBag',
  },
  {
    id: 'system',
    title: 'Sistemas web personalizados',
    shortTitle: 'Sistemas a medida',
    description:
      'Soluciones web adaptadas a tu proceso de negocio cuando una página no es suficiente.',
    problem:
      'Necesitas reservas, citas, un panel de control o automatizar procesos, pero no existe una herramienta que encaje con tu negocio.',
    solution:
      'Desarrollamos un sistema a tu medida: desde reservas hasta dashboards internos, diseñado para cómo trabajas tú.',
    examples: [
      'Reservas y citas',
      'Dashboards y reportes',
      'Gestión de clientes',
      'Administración interna',
      'Automatizaciones',
      'Integraciones con otras herramientas',
    ],
    benefits: [
      'Hecho para tu proceso',
      'Ahorro de tiempo',
      'Menos errores manuales',
      'Escalable',
      'Acceso desde cualquier dispositivo',
    ],
    ctaText: 'Cotizar sistema',
    ctaHref: '/contacto?tipo=system',
    icon: 'Settings',
  },
];
