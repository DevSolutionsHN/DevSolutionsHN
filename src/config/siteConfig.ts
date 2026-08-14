/**
 * Configuración central de DevSolutionsHN
 *
 * ⚠️ DATOS OBLIGATORIOS A CONFIGURAR MANUALMENTE ANTES DEL DEPLOY:
 *   - whatsappNumber: Reemplazar con el número real de DevSolutionsHN (formato 504XXXXXXXX)
 *   - email: Verificar que sea el correo oficial
 *   - FORMSPREE_ENDPOINT: Configurar en .env (ver .env.example)
 */

export const siteConfig = {
  // ─── Identidad del negocio ───────────────────────────────────────────────
  name: 'DevSolutionsHN',
  legalName: 'DevSolutionsHN',
  tagline: 'Creamos sitios web y soluciones digitales adaptadas a lo que realmente necesita tu negocio.',
  description:
    'Desarrollo web profesional para negocios en Honduras. Páginas web, tiendas online y sistemas personalizados que ayudan a conseguir clientes y trabajar mejor.',

  // ─── Contacto ────────────────────────────────────────────────────────────
  whatsappNumber: '50489454813',
  email: 'devsolutionshn@gmail.com',
  domain: 'devsolutionshn.hn',

  // ─── Redes sociales (opcional, actualizar cuando existan) ────────────────
  social: {
    instagram: 'https://instagram.com/devsolutionshn',
    linkedin: 'https://www.linkedin.com/company/devsolutionshn',
    github: 'https://github.com/devsolutionshn',
  },

  // ─── SEO ─────────────────────────────────────────────────────────────────
  siteUrl: 'https://devsolutionshn.hn',
  ogImage: '/og-image.svg',
  locale: 'es_HN',
  author: 'DevSolutionsHN',

  // ─── Analytics (dejar preparado, no activar hasta configurar) ────────────
  analytics: {
    googleAnalyticsId: '', // Ej: G-XXXXXXXXXX
    metaPixelId: '', // Ej: 000000000000000
  },

  // ─── Año actual para el footer ───────────────────────────────────────────
  get year() {
    return new Date().getFullYear();
  },
} as const;

export type SiteConfig = typeof siteConfig;
