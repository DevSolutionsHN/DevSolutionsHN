import type { Package } from '../types';

/**
 * Precios realistas basados en el mercado hondureño actual (2026).
 * Conversión aproximada: 1 USD ≈ 25 HNL
 *
 * Referencias de mercado Honduras:
 * - Landing page básica: $150-300
 * - Web empresarial 3-5 páginas: $300-600
 * - E-commerce básico: $500-1000
 * - Sistemas personalizados: $800-3000+
 *
 * Los precios "desde" reflejan proyectos base; el final depende del alcance.
 */
export const packages: Package[] = [
  {
    id: 'presencia',
    name: 'Presencia',
    priceFrom: 150,
    priceLabel: 'Desde $150',
    description:
      'Para negocios que necesitan una web profesional y funcional sin complicaciones.',
    includes: [
      'Diseño responsive (móvil, tablet, escritorio)',
      'Página informativa (inicio, servicios, contacto)',
      'Formulario de contacto funcional',
      'Botón de WhatsApp integrado',
      'Ubicación en mapa (Google Maps)',
      'Enlaces a redes sociales',
      'SEO básico (títulos, descripciones, estructura)',
      'Publicación y configuración de dominio',
      'Certificado SSL (HTTPS)',
      'Optimización de velocidad básica',
    ],
    ctaText: 'Solicitar cotización',
    ctaHref: '/contacto?tipo=web&paquete=presencia',
    category: 'presence',
  },
  {
    id: 'profesional',
    name: 'Profesional',
    priceFrom: 250,
    priceLabel: 'Desde $250',
    description:
      'Para empresas que necesitan una presencia más completa y personalizada.',
    includes: [
      'Todo lo del paquete Presencia',
      'Hasta 5 páginas (inicio, nosotros, servicios, galería/portafolio, contacto)',
      'Diseño personalizado (no plantilla)',
      'Galería de imágenes / portafolio',
      'Sección de servicios detallada',
      'Preguntas frecuentes (FAQ)',
      'Formularios avanzados (cotización, registro, etc.)',
      'SEO completo (schema, sitemap, meta tags)',
      'Optimización de rendimiento (Core Web Vitals)',
      'Integraciones sencillas (calendario, chat, newsletter)',
      'Panel para editar textos e imágenes básicas',
    ],
    ctaText: 'Solicitar cotización',
    ctaHref: '/contacto?tipo=web&paquete=profesional',
    popular: true,
    category: 'professional',
  },
  {
    id: 'tienda',
    name: 'Tienda Online',
    priceFrom: 450,
    priceLabel: 'Desde $450',
    description:
      'Para negocios que quieren vender productos o recibir pedidos por Internet.',
    includes: [
      'Todo lo del paquete Profesional',
      'Catálogo de productos ilimitado (hasta 100 iniciales)',
      'Fichas de producto (imágenes, variantes, stock, precios)',
      'Carrito de compras',
      'Proceso de pedido con confirmación por WhatsApp',
      'Panel de administración: productos, pedidos, clientes',
      'Gestión de estados de pedido (pendiente, confirmado, entregado)',
      'Notificaciones automáticas al cliente y al negocio',
      'Categorías y filtros de búsqueda',
      'Opciones de envío y recojo local',
    ],
    notIncludes: [
      'Pasarela de pagos online (tarjetas, PayPal) — se cotiza aparte si se requiere',
      'Integración con ERP/contabilidad — se cotiza aparte',
      'App móvil nativa — no incluida',
    ],
    ctaText: 'Solicitar cotización',
    ctaHref: '/contacto?tipo=store&paquete=tienda',
    category: 'store',
  },
  {
    id: 'personalizado',
    name: 'Personalizado',
    priceFrom: 0,
    priceLabel: 'Cotización',
    description:
      'Para reservas, sistemas, dashboards, automatizaciones e integraciones especiales.',
    includes: [
      'Análisis de tu proceso actual',
      'Propuesta técnica y funcional',
      'Desarrollo a medida (no plantillas)',
      'Base de datos y backend según necesidad',
      'Panel de administración completo',
      'Roles y permisos de usuarios',
      'API para integraciones externas',
      'Pruebas y capacitación',
      'Documentación técnica',
    ],
    notIncludes: [
      'No hay lista cerrada: cada proyecto es único',
      'El precio final depende 100% del alcance y funcionalidades',
    ],
    ctaText: 'Solicitar cotización',
    ctaHref: '/contacto?tipo=system&paquete=personalizado',
    category: 'custom',
  },
];

/** Mantenimiento opcional */
export const maintenancePackage = {
  name: 'Mantenimiento opcional',
  priceFrom: 15,
  priceLabel: 'Desde $15/mes',
  description:
    'Después de publicar tu sitio, podemos ayudarte a mantenerlo actualizado y funcionando bien.',
  includes: [
    'Pequeños cambios de texto e imágenes (hasta 2h/mes)',
    'Actualización de contenido (horarios, precios, novedades)',
    'Correcciones de errores',
    'Soporte por WhatsApp/email',
    'Monitoreo de uptime y rendimiento',
    'Actualizaciones de seguridad y plugins',
    'Backups periódicos',
  ],
  notIncludes: [
    'Funcionalidades nuevas o cambios grandes — se cotizan aparte',
    'Rediseño completo — no incluido',
    'SEO avanzado continuo — se cotiza aparte',
    'Creación de contenido (textos, fotos) — no incluido',
  ],
  ctaText: 'Consultar mantenimiento',
  ctaHref: '/contacto?tipo=maintenance',
};

/** Nota legal de precios */
export const pricingDisclaimer = [
  'Los precios mostrados son referenciales ("desde") y aplican a proyectos base.',
  'El precio final depende del alcance real, funcionalidades, contenido y tiempos.',
  'No incluyen: dominio ($10-15/año), hosting optimizado si se requiere VPS/dedicado, pasarelas de pago, ni servicios de terceros.',
  'Proyectos > $300: 50% al inicio y 50% al entregar. Proyectos ≤ $300: pago único.',
  'Mantenimiento: desde $15/mes (paquete Presencia); paquetes mayores según alcance.',
  'Todos los precios en USD. Pago en Honduras: transferencia bancaria, depósito o efectivo (según acuerdo).',
];