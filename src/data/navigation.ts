import type { NavItem } from '../types';

export const mainNav: NavItem[] = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Precios', href: '/precios' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Proceso', href: '/proceso' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contacto', href: '/contacto' },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Servicios',
    items: [
      { label: 'Páginas web', href: '/servicios#web' },
      { label: 'Tiendas online', href: '/servicios#store' },
      { label: 'Sistemas personalizados', href: '/servicios#system' },
    ],
  },
  {
    title: 'Recursos',
    items: [
      { label: 'Proyectos', href: '/proyectos' },
      { label: 'Proceso de trabajo', href: '/proceso' },
      { label: 'Preguntas frecuentes', href: '/faq' },
      { label: 'Precios', href: '/precios' },
    ],
  },
  {
    title: 'Contacto',
    items: [
      { label: 'Solicitar cotización', href: '/contacto' },
      { label: 'WhatsApp', href: '#whatsapp' },
    ],
  },
];
