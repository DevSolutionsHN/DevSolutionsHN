/**
 * Tipos TypeScript compartidos para DevSolutionsHN
 */

/** Servicios principales que ofrece DevSolutionsHN */
export type ServiceType = 'web' | 'store' | 'system';

export interface Service {
  id: ServiceType;
  title: string;
  shortTitle: string;
  description: string;
  problem: string;
  solution: string;
  examples: string[];
  benefits: string[];
  ctaText: string;
  ctaHref: string;
  icon: string; // nombre del icono de Lucide
}

/** Paquetes de precios */
export interface Package {
  id: string;
  name: string;
  priceFrom: number; // precio base en USD
  priceLabel: string; // ej: "Desde $199"
  description: string;
  includes: string[];
  notIncludes?: string[];
  ctaText: string;
  ctaHref: string;
  popular?: boolean;
  category: 'presence' | 'professional' | 'store' | 'custom';
}

/** Proyectos del portafolio */
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string; // ruta a imagen/placeholder
  url?: string; // URL real del proyecto (si existe)
  demoUrl?: string; // URL del demo (para proyectos en desarrollo)
  tags: string[];
  featured: boolean;
  status: 'live' | 'development' | 'concept';
  ctaText: string;
}

/** Preguntas frecuentes */
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'process' | 'technical' | 'maintenance';
}

/** Pasos del proceso */
export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

/** Diferenciales / Ventajas */
export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/** Tipo de proyecto en el formulario de contacto */
export type ProjectType = 'web' | 'store' | 'system' | 'other';

export interface ContactFormData {
  name: string;
  business: string;
  whatsapp: string;
  email: string;
  projectType: ProjectType;
  budget?: string;
  message: string;
}

/** Configuración de navegación */
export interface NavItem {
  label: string;
  href: string;
}

/** Props comunes para secciones */
export interface SectionProps {
  id?: string;
  className?: string;
  'aria-labelledby'?: string;
}