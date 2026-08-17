import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { Servicios } from './pages/Servicios';
import { Precios } from './pages/Precios';
import { Proyectos } from './pages/Proyectos';
import { Proceso } from './pages/Proceso';
import { FAQ } from './pages/FAQ';
import { Contacto } from './pages/Contacto';
import { siteConfig } from './config/siteConfig';
import { useEffect } from 'react';

/**
 * Scroll to top on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const main = document.getElementById('main-content');
    if (main) {
      main.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);
  return null;
}

/**
 * Page-specific SEO metadata
 */
const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: `${siteConfig.name} | Desarrollo web profesional en Honduras`,
    description: siteConfig.description,
  },
  '/servicios': {
    title: `Servicios | ${siteConfig.name}`,
    description: 'Páginas web, tiendas online y sistemas personalizados para negocios en Honduras. Soluciones digitales adaptadas a tu necesidad.',
  },
  '/precios': {
    title: `Precios y paquetes | ${siteConfig.name}`,
    description: 'Precios transparentes desde $150. Paquetes Presencia, Profesional, Tienda Online y Personalizado. Sin letra chica.',
  },
  '/proyectos': {
    title: `Portafolio | ${siteConfig.name}`,
    description: 'Proyectos reales y en desarrollo. Conoce San Luis, sistema de reservas para barbería y más. Trabajo que habla por sí solo.',
  },
  '/proceso': {
    title: `Cómo trabajamos | ${siteConfig.name}`,
    description: 'Proceso de 6 pasos: idea, análisis, propuesta, desarrollo, revisión, publicación. Tiempos claros, comunicación constante.',
  },
  '/faq': {
    title: `Preguntas frecuentes | ${siteConfig.name}`,
    description: 'Respuestas a dudas comunes sobre precios, proceso, tecnología, mantenimiento y más. ¿No está tu pregunta? Escríbenos por WhatsApp.',
  },
  '/contacto': {
    title: `Contacto y cotización | ${siteConfig.name}`,
    description: 'Solicita tu cotización gratis. Formulario rápido, WhatsApp directo, correo. Respondemos en menos de 24h.',
  },
};

function SEO({ path }: { path: string }) {
  const meta = pageMetadata[path] || pageMetadata['/'];
  const fullTitle = meta.title;
  const url = `${siteConfig.siteUrl}${path}`;
  const ogImage = `${siteConfig.siteUrl}${siteConfig.ogImage}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={meta.description} />
      <meta name="author" content={siteConfig.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={siteConfig.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
}

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <SEO path={location.pathname} />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="precios" element={<Precios />} />
          <Route path="proyectos" element={<Proyectos />} />
          <Route path="proceso" element={<Proceso />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </>
  );
}