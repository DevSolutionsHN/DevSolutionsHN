import { processSteps } from '../data/process';
import { faqs } from '../data/faq';
import { buildWhatsAppUrl, whatsappMessages } from '../config/whatsapp';
import { Icon } from '../components/ui/Icon';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section, SectionHeader } from '../components/ui/Section';
import { cn } from '../lib/cn';

const processFAQs = faqs.filter((f) => f.category === 'process');

export function Proceso() {
  return (
    <>
      {/* Hero */}
      <Section id="proceso" spacing="xl" className="relative bg-ink-50">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold tracking-wide mb-4">
              Cómo trabajamos
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-[1.05] tracking-tight text-balance mb-6">
              Un proceso claro, <span className="text-brand-600">sin sorpresas</span>
            </h1>
            <p className="text-lg text-ink-600 leading-relaxed">
              De la idea a la web publicada en 6 pasos. Tú decides el ritmo, nosotros ponemos la experiencia.
            </p>
          </div>
        </Container>
      </Section>

      {/* Process Steps */}
      <Section spacing="lg">
        <Container size="xl">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-3.5rem)] bg-gradient-to-b from-brand-200 via-brand-300 to-brand-200" aria-hidden="true" />

            <div className="relative space-y-10 lg:space-y-16">
              {processSteps.map((step, index) => (
                <article key={step.id} className="relative">
                  <div className={cn('relative flex gap-6', index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse')}>
                    {/* Step number + icon */}
                    <div className={cn('relative flex-shrink-0', 'lg:w-20 lg:flex lg:items-center lg:justify-center')}>
                      <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-brand-200 flex items-center justify-center shadow-soft lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0">
                        <span className="text-3xl font-bold text-brand-600">{step.id}</span>
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-brand-100/50 hidden lg:block" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <div className={cn('flex-1 pt-5 lg:pt-0', index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:pl-8')}>
                      <Card variant="bordered" padding="lg">
                        <CardContent className="space-y-4">
                          <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center lg:mx-auto lg:ml-auto">
                            <Icon name={step.icon} size={28} className="text-brand-600" />
                          </div>
                          <h3 className="text-xl font-semibold text-ink-900 text-center lg:text-left">{step.title}</h3>
                          <p className="text-ink-600 text-center lg:text-left leading-relaxed">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* What to expect */}
      <Section spacing="lg" className="bg-ink-50">
        <Container size="lg">
          <SectionHeader
            align="center"
            title="Qué puedes esperar de nosotros"
            description="No solo entregamos código. Acompañamos todo el camino."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: 'MessageSquare', title: 'Comunicación constante', desc: 'WhatsApp directo, videollamadas cuando haga falta, respuestas en horas, no días.' },
              { icon: 'CheckCircle', title: 'Validación en cada paso', desc: 'Nada se publica sin tu visto bueno. Revisamos diseños, funcionalidades y textos contigo.' },
              { icon: 'Code', title: 'Código que se entiende', desc: 'Limpio, documentado y mantenible. Si mañana quieres cambiar algo, no es un lío.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-ink-200 text-center">
                <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={28} className="text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-ink-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline estimate */}
      <Section spacing="lg">
        <Container size="lg">
          <SectionHeader
            align="center"
            title="Tiempos orientativos"
            description="Cada proyecto es distinto, pero esto te da una idea:"
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left" role="table">
              <thead>
                <tr className="border-b border-ink-200">
                  <th className="pb-3 font-semibold text-ink-900">Tipo de proyecto</th>
                  <th className="pb-3 font-semibold text-ink-900 text-center">Duración estimada</th>
                  <th className="pb-3 font-semibold text-ink-900 text-center">Entregas parciales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                <tr>
                  <td className="py-4 font-medium text-ink-900">Página web (Paquete Presencia)</td>
                  <td className="py-4 text-center text-ink-600">1-3 semanas</td>
                  <td className="py-4 text-center text-ink-600">Diseño → Desarrollo → Revisión</td>
                </tr>
                <tr className="bg-ink-50/50">
                  <td className="py-4 font-medium text-ink-900">Web empresarial (Paquete Profesional)</td>
                  <td className="py-4 text-center text-ink-600">3-5 semanas</td>
                  <td className="py-4 text-center text-ink-600">Wireframes → Diseño → Desarrollo → Revisión</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-ink-900">Tienda online</td>
                  <td className="py-4 text-center text-ink-600">5-6 semanas</td>
                  <td className="py-4 text-center text-ink-600">Estructura → Catálogo → Carrito → Admin → Pruebas</td>
                </tr>
                <tr className="bg-ink-50/50">
                  <td className="py-4 font-medium text-ink-900">Sistema personalizado</td>
                  <td className="py-4 text-center text-ink-600">6-8 semanas</td>
                  <td className="py-4 text-center text-ink-600">Análisis → Diseño → Backend → Frontend → Pruebas → Entrega</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-sm text-ink-500">
            Estos son tiempos base. La rapidez depende de qué tan claro tengas el contenido y qué tan rápido nos des feedback.
          </p>
        </Container>
      </Section>

      {/* FAQ Process */}
      <Section spacing="lg" className="bg-ink-50">
        <Container size="lg">
          <SectionHeader align="center" title="Preguntas sobre el proceso" />
          <dl className="mt-10 space-y-3 max-w-3xl mx-auto" role="list">
            {processFAQs.map((faq) => (
              <div key={faq.id}>
                <Card variant="bordered" padding="md">
                  <dt className="font-semibold text-ink-900">{faq.question}</dt>
                  <dd className="mt-2 text-ink-600 text-sm leading-relaxed">{faq.answer}</dd>
                </Card>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section spacing="xl" className="bg-ink-900">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Empezamos con el paso 1?
            </h2>
            <p className="text-ink-300 mb-8 leading-relaxed">
              Cuéntanos tu idea. Sin compromiso, sin presión. Solo una conversación para ver si encajamos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-white/50" href="/contacto">
                Cuéntanos tu idea
              </Button>
              <a
                href={buildWhatsAppUrl(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors w-full sm:w-auto"
              >
                <img src="/whatsapp.png" alt="" className="w-6 h-6" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}