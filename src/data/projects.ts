import type { Project } from '../types';

/**
 * Portafolio de proyectos de DevSolutionsHN
 *
 * ⚠️ INSTRUCCIONES PARA AGREGAR NUEVOS PROYECTOS:
 * 1. Agregar objeto al array `projects`
 * 2. Colocar imagen en `public/projects/` (ej: proyecto-nombre.jpg)
 * 3. Si el proyecto está en desarrollo, usar `status: 'development'` y `demoUrl` para preview
 * 4. Si es proyecto real de cliente, `status: 'live'` y `url` para producción
 * 5. Si es concepto/demo interno, `status: 'concept'`
 */
export const projects: Project[] = [
  {
    id: 'conoce-san-luis',
    title: 'Conoce San Luis',
    category: 'Sitio web / Experiencia local',
    description:
      'Proyecto web creado para presentar San Luis, Honduras, destacando su identidad, lugares, cultura y esencia local mediante una experiencia visual moderna.',
    image: '/projects/conocesanluis-og.jpg',
    url: 'https://devsolutionshn.github.io/conoce-san-luis/',
    tags: ['Astro', 'TypeScript', 'Diseño responsivo', 'SEO', 'Experiencia local'],
    featured: true,
    status: 'live',
    ctaText: 'Ver proyecto',
  },
  {
    id: 'barberia',
    title: 'Sistema de reservas para barbería',
    category: 'Sistema web / Reservas',
    description:
      'Experiencia web para una barbería moderna con servicios, perfiles de barberos y sistema de reservas integrado con WhatsApp.',
    image: '/projects/barberia-og.jpg',
    // ⚠️ AGREGAR URL REAL CUANDO ESTÉ DISPONIBLE:
    // url: 'https://tudominio.hn/barberia',
    demoUrl: '#', // Placeholder para demo cuando esté listo
    tags: ['React', 'TypeScript', 'Tailwind', 'Reservas', 'WhatsApp API', 'Dashboard'],
    featured: true,
    status: 'development',
    ctaText: 'Próximamente',
  },
  // Espacio para Demo 3
  // {
  //   id: 'demo-3',
  //   title: 'Nombre del proyecto',
  //   category: 'Categoría',
  //   description: 'Descripción...',
  //   image: '/projects/demo3-og.jpg',
  //   url: 'https://...',
  //   tags: ['Tech1', 'Tech2'],
  //   featured: false,
  //   status: 'concept',
  //   ctaText: 'Ver proyecto',
  // },
  // Espacio para Proyecto real #1
  // {
  //   id: 'proyecto-real-1',
  //   title: 'Nombre del cliente/proyecto',
  //   category: 'Tipo de proyecto',
  //   description: 'Descripción del proyecto real...',
  //   image: '/projects/proyecto1-og.jpg',
  //   url: 'https://cliente.hn',
  //   tags: ['React', 'Node', 'PostgreSQL'],
  //   featured: true,
  //   status: 'live',
  //   ctaText: 'Ver caso de éxito',
  // },
  // Espacio para Proyecto real #2
];

/** Proyectos destacados para la Home (máximo 3) */
export const featuredProjects = projects.filter((p) => p.featured);

/** Obtener proyecto por ID */
export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

/** Obtener proyectos por estado */
export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter((p) => p.status === status);
}