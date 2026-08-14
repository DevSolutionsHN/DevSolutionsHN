import type { ProcessStep, Differentiator } from '../types';

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Cuéntanos tu idea',
    description:
      'Hablamos por WhatsApp, videollamada o formulario. Queremos entender tu negocio, tus objetivos y qué necesitas que la web resuelva.',
    icon: 'MessageSquare',
  },
  {
    id: 2,
    title: 'Analizamos tu necesidad',
    description:
      'Revisamos tu situación actual, estudiamos a tu competencia y definimos la mejor solución: qué tipo de web, qué funcionalidades, qué prioridades.',
    icon: 'Search',
  },
  {
    id: 3,
    title: 'Te presentamos una propuesta',
    description:
      'Entregamos un documento claro: alcance, precio, cronograma, tecnología y entregables. Sin letra chica. Tú revisas, preguntas y apruebas.',
    icon: 'FileText',
  },
  {
    id: 4,
    title: 'Desarrollamos',
    description:
      'Construimos tu proyecto con código limpio, diseño profesional y buenas prácticas. Te mostramos avances y validamos contigo en hitos clave.',
    icon: 'Code',
  },
  {
    id: 5,
    title: 'Revisamos contigo',
    description:
      'Antes de publicar, hacemos una sesión de pruebas: revisamos todo en móvil y escritorio, corregimos detalles y te enseñamos a usar tu web.',
    icon: 'CheckCircle',
  },
  {
    id: 6,
    title: 'Publicamos',
    description:
      'Configuramos dominio, SSL, hosting y ponemos tu web en línea. Te entregamos accesos, documentación y quedamos disponibles para lo que necesites.',
    icon: 'Rocket',
  },
];

export const differentiators: Differentiator[] = [
  {
    id: 'direct-communication',
    title: 'Comunicación directa',
    description:
      'Hablas con quien desarrolla tu proyecto. Sin intermediarios, sin tickets, sin vueltas.',
    icon: 'MessageSquare',
  },
  {
    id: 'adapted-solutions',
    title: 'Soluciones adaptadas',
    description:
      'No usamos plantillas genéricas. Cada web se diseña y desarrolla pensando en tu negocio específico.',
    icon: 'Puzzle',
  },
  {
    id: 'modern-design',
    title: 'Diseño moderno',
    description:
      'Interfaces limpias, profesionales y actuales. Tu web transmite seriedad desde el primer segundo.',
    icon: 'Palette',
  },
  {
    id: 'custom-development',
    title: 'Desarrollo personalizado',
    description:
      'Código escrito para tu caso, no copiado. Mantenible, escalable y sin dependencias innecesarias.',
    icon: 'Code',
  },
  {
    id: 'performance',
    title: 'Enfoque en rendimiento',
    description:
      'Webs que cargan rápido, funcionan bien en móvil y posicionan en Google. Técnica invisible, resultados visibles.',
    icon: 'Zap',
  },
  {
    id: 'clear-pricing',
    title: 'Precios claros',
    description:
      'Paquetes con precios "desde" transparentes. Sabes qué incluye y qué no antes de decidir.',
    icon: 'Tag',
  },
  {
    id: 'no-bloat',
    title: 'Sin funcionalidades innecesarias',
    description:
      'Solo construimos lo que tu negocio usa. Nada de paneles complejos que no vas a tocar ni features de relleno.',
    icon: 'MinusCircle',
  },
];