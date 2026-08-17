import { buildWhatsAppUrl, whatsappMessages } from '../config/whatsapp';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';

export function Hero() {
  const whatsappUrl = buildWhatsAppUrl(whatsappMessages.general);

  return (
    <Section id="inicio" spacing="xl" className="relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-brand-500)_0%,_transparent_60%)] opacity-5 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_var(--color-ink-50)_0%,_transparent_100%)] pointer-events-none" aria-hidden="true" />

      <Container size="xl">
        <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold tracking-wide mb-6">
              Desarrollo web en Honduras
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-[1.05] tracking-tight text-balance">
              Tu negocio merece una web que <span className="text-brand-600">haga más que verse bien.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-600 max-w-xl mx-auto lg:mx-0 text-pretty">
              Diseñamos sitios web y soluciones digitales modernas para negocios y profesionales
              que quieren crecer en Internet. Profesional, accesible y adaptada a ti.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button variant="outline" size="lg" href="/contacto" className="w-full sm:w-auto">
                Solicitar cotización
              </Button>
              <Button variant="outline" size="lg" href="/proyectos" className="w-full sm:w-auto">
                Ver proyectos
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center gap-2 px-5 py-2.5 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                aria-label="Contactar por WhatsApp"
              >
                <img src="/whatsapp.png" alt="" className="w-6 h-6" aria-hidden="true" />
                WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-ink-500">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <span>Sitios rápidos y seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <span>Diseño responsive incluido</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <span>WhatsApp integrado</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <span>SEO básico configurado</span>
              </div>
            </div>
          </div>

          {/* Visual - Project showcase */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-card border border-ink-200 overflow-hidden">
              {/* Browser mockup */}
              <div className="bg-ink-100 px-4 py-3 flex items-center gap-1.5 border-b border-ink-200">
                <div className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true" />
                <div className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true" />
                <div className="flex-1 text-center text-xs text-ink-500 font-mono">
                  conoce-san-luis.devsolutionshn.hn
                </div>
              </div>
              <div className="aspect-[4/3] bg-ink-50 relative overflow-hidden">
                {/* Project preview - actual screenshot */}
                <img
                  src="/projects/conocesanluis-og.jpg"
                  alt="Conoce San Luis - Experiencia web interactiva"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Subtle decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl" aria-hidden="true" />
                  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-brand-100/30 rounded-full blur-3xl" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 lg:-left-8 bg-white rounded-xl shadow-card border border-ink-200 p-4 flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-500 delay-300">
              <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-brand-600" />
              </div>
              <div>
                <p className="font-semibold text-ink-900">Carga rápida</p>
                <p className="text-xs text-ink-500">Core Web Vitals optimizados</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}