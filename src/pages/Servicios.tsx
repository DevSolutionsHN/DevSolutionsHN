import { services } from '../data/services';
import { buildWhatsAppUrl, whatsappMessages } from '../config/whatsapp';
import { Icon } from '../components/ui/Icon';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';

export function Servicios() {
  return (
    <>
      {/* Hero */}
      <Section id="servicios" spacing="xl" className="relative bg-ink-50">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold tracking-wide mb-4">
              Nuestros servicios
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-[1.05] tracking-tight text-balance mb-6">
              Creamos soluciones digitales <span className="text-brand-600">que funcionan para tu negocio</span>
            </h1>
            <p className="text-lg text-ink-600 leading-relaxed">
              Tres categorías principales. Cada una se adapta a lo que necesitas. Sin plantillas rígidas, sin funcionalidades de relleno.
            </p>
          </div>
        </Container>
      </Section>

      {/* Service 1: Páginas Web */}
      <Section id="web" spacing="lg">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mb-6">
                <Icon name="Globe" size={32} className="text-brand-600" />
              </div>
              <span className="inline-block px-3 py-1 text-sm font-semibold uppercase tracking-wider text-brand-600 mb-4 block">
                Servicio 1
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 leading-tight mb-4">
                Páginas web profesionales
              </h2>
              <p className="text-lg text-ink-600 mb-8 leading-relaxed">
                {services[0].description}
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-ink-900">El problema</h3>
                <p className="text-ink-600">{services[0].problem}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-ink-900">Nuestra solución</h3>
                <p className="text-ink-600">{services[0].solution}</p>
              </div>

              <Button variant="primary" size="lg" className="w-full sm:w-auto" href={services[0].ctaHref}>
                {services[0].ctaText}
              </Button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-ink-900 mb-4 flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  Beneficios incluidos
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {services[0].benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-ink-700">
                      <svg className="w-5 h-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-ink-900 mb-4 flex items-center gap-2">
                  <Icon name="List" size={20} className="text-brand-600" />
                  Ejemplos de proyectos
                </h3>
                <ul className="space-y-2">
                  {services[0].examples.map((ex, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-ink-200">
                      <span className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0 text-sm font-medium text-brand-600">{i + 1}</span>
                      <span className="text-ink-700">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service 2: Tiendas Online */}
      <Section id="store" spacing="lg" className="bg-ink-50">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                <Icon name="ShoppingBag" size={32} className="text-green-600" />
              </div>
              <span className="inline-block px-3 py-1 text-sm font-semibold uppercase tracking-wider text-green-600 mb-4 block">
                Servicio 2
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 leading-tight mb-4">
                Tiendas online
              </h2>
              <p className="text-lg text-ink-600 mb-8 leading-relaxed">
                {services[1].description}
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-ink-900">El problema</h3>
                <p className="text-ink-600">{services[1].problem}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-ink-900">Nuestra solución</h3>
                <p className="text-ink-600">{services[1].solution}</p>
              </div>

              <Button variant="secondary" size="lg" className="w-full sm:w-auto" href={services[1].ctaHref}>
                {services[1].ctaText}
              </Button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-ink-900 mb-4 flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  Beneficios incluidos
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {services[1].benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-ink-700">
                      <svg className="w-5 h-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-ink-900 mb-4 flex items-center gap-2">
                  <Icon name="List" size={20} className="text-brand-600" />
                  Qué incluye tu tienda
                </h3>
                <ul className="space-y-2">
                  {services[1].examples.map((ex, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-ink-200">
                      <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 text-sm font-medium text-green-600">{i + 1}</span>
                      <span className="text-ink-700">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                  <Icon name="AlertCircle" size={18} className="text-amber-600" />
                  Nota importante
                </h4>
                <p className="text-amber-700 text-sm">
                  No incluimos pasarelas de pago complejas (tarjetas, PayPal) por defecto.
                  Los pedidos se gestionan vía WhatsApp. Si necesitas pago online, se cotiza aparte.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service 3: Sistemas Personalizados */}
      <Section id="system" spacing="lg">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                <Icon name="Settings" size={32} className="text-purple-600" />
              </div>
              <span className="inline-block px-3 py-1 text-sm font-semibold uppercase tracking-wider text-purple-600 mb-4 block">
                Servicio 3
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 leading-tight mb-4">
                Sistemas web personalizados
              </h2>
              <p className="text-lg text-ink-600 mb-8 leading-relaxed">
                {services[2].description}
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-ink-900">El problema</h3>
                <p className="text-ink-600">{services[2].problem}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-ink-900">Nuestra solución</h3>
                <p className="text-ink-600">{services[2].solution}</p>
              </div>

              <Button variant="primary" size="lg" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700" href={services[2].ctaHref}>
                {services[2].ctaText}
              </Button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-ink-900 mb-4 flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  Beneficios incluidos
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {services[2].benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-ink-700">
                      <svg className="w-5 h-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-ink-900 mb-4 flex items-center gap-2">
                  <Icon name="List" size={20} className="text-brand-600" />
                  Ejemplos de lo que podemos hacer
                </h3>
                <ul className="space-y-2">
                  {services[2].examples.map((ex, i) => (
                    <li key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-ink-200">
                      <span className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 text-sm font-medium text-purple-600">{i + 1}</span>
                      <span className="text-ink-700">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-brand-50 border border-brand-200 rounded-xl">
                <h4 className="font-semibold text-brand-800 mb-2 flex items-center gap-2">
                  <Icon name="Lightbulb" size={18} className="text-brand-600" />
                  ¿No ves lo que buscas?
                </h4>
                <p className="text-brand-700 text-sm">
                  Si tu negocio necesita algo que no está en esta lista, escríbenos.
                  Lo analizamos y te decimos si podemos hacerlo y cuánto costaría.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" className="bg-ink-900">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Cuál se ajusta a lo que necesitas?
            </h2>
            <p className="text-ink-300 mb-8 leading-relaxed">
              Si no estás seguro, no te preocupes. Hablamos, entendemos tu caso y te recomendamos lo mejor.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-white/50" href="/contacto">
                Solicitar cotización
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