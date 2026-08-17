import { buildWhatsAppUrl, whatsappMessages } from '../config/whatsapp';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';

export function FinalCTA() {
  const whatsappUrl = buildWhatsAppUrl(whatsappMessages.general);

  return (
    <Section id="contacto" spacing="xl" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-ink-900" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-brand-500)_0%,_transparent_70%)] opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
      </div>

      <Container size="lg">
        <div className="relative text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-500/20 text-brand-400 text-sm font-semibold tracking-wide mb-6">
            ¿Listo para empezar?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight text-balance mb-6">
            ¿Tienes una idea? <span className="text-brand-300">Hagámosla realidad.</span>
          </h2>
          <p className="text-lg text-ink-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Cuéntanos qué necesita tu negocio y te ayudaremos a encontrar la solución adecuada.
            Sin compromiso, sin presión, solo una conversación honesta.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" size="lg" href="/contacto" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-white/50">
              Solicitar cotización
            </Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors w-full sm:w-auto"
            >
              <img src="/whatsapp.png" alt="" className="w-6 h-6" aria-hidden="true" />
              Contactar por WhatsApp
            </a>
          </div>

          <p className="mt-8 text-sm text-ink-500">
            Respondemos en menos de 24h. Horario: Lun-Vie 8:00-20:00 (Honduras, UTC-6)
          </p>
        </div>
      </Container>
    </Section>
  );
}