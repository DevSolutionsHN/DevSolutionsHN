import { packages, maintenancePackage, pricingDisclaimer } from '../data/packages';
import { formatPrice } from '../lib/format';
import { buildWhatsAppUrl, whatsappMessages } from '../config/whatsapp';
import { faqs } from '../data/faq';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section, SectionHeader } from '../components/ui/Section';
import { Icon } from '../components/ui/Icon';
import { cn } from '../lib/cn';

const pricingFAQs = faqs.filter((f) => f.category === 'pricing');

export function Precios() {
  return (
    <>
      {/* Hero */}
      <Section id="precios" spacing="xl" className="relative bg-ink-50">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold tracking-wide mb-4">
              Inversión transparente
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-[1.05] tracking-tight text-balance mb-6">
              Precios claros, <span className="text-brand-600">sin sorpresas</span>
            </h1>
            <p className="text-lg text-ink-600 leading-relaxed">
              Cada paquete tiene precio base. El total exacto se define al conocer tu caso.
              Pagas 50% al iniciar y 50% al entregar — sin letras chicas.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Packages */}
      <Section spacing="lg">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <article key={pkg.id}>
                <Card
                  variant={pkg.popular ? 'elevated' : 'bordered'}
                  padding="lg"
                  hover
                  className={cn(
                    'h-full flex flex-col transition-all duration-300',
                    pkg.popular && 'border-2 border-brand-400 relative ring-2 ring-brand-400/20',
                    'hover:-translate-y-1 hover:shadow-xl hover:border-brand-300',
                    'focus-within:ring-2 focus-within:ring-brand-500 focus-within:ring-offset-2'
                  )}
                >
                  {pkg.popular && (
                    <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2">
                      Más elegido
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle>{pkg.name}</CardTitle>
                    <div className="mt-3 flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-ink-900">{formatPrice(pkg.priceFrom)}</span>
                      {pkg.priceFrom > 0 && <span className="text-ink-500 self-end mb-1">/ proyecto</span>}
                    </div>
                    <CardDescription className="mt-3">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <ul className="space-y-3" role="list">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-ink-600">
                          <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {pkg.notIncludes && pkg.notIncludes.length > 0 && (
                      <div className="pt-4 border-t border-ink-100">
                        <p className="text-xs font-medium text-ink-500 mb-3 uppercase tracking-wider">No incluye:</p>
                        <ul className="space-y-2" role="list">
                          {pkg.notIncludes.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-ink-400">
                              <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button variant={pkg.popular ? 'primary' : 'outline'} fullWidth href={pkg.ctaHref}>
                      {pkg.ctaText}
                    </Button>
                  </CardFooter>
                </Card>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Payment terms */}
      <Section spacing="lg" className="bg-ink-50">
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-ink-900 mb-4 flex items-center gap-2">
                <Icon name="Tag" size={24} className="text-brand-600" />
                Cómo funciona el pago
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-ink-200">
                  <h3 className="font-semibold text-ink-900 mb-2">Todos los proyectos</h3>
                  <p className="text-ink-600">50% al iniciar · 50% al entregar y publicar.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-ink-200">
                  <h3 className="font-semibold text-ink-900 mb-2">Métodos aceptados (Honduras)</h3>
                  <p className="text-ink-600">Transferencia bancaria, depósito, efectivo (según acuerdo).</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-ink-200">
                  <h3 className="font-semibold text-ink-900 mb-2">Moneda</h3>
                  <p className="text-ink-600">Todos los precios en USD. Conversión al tipo de cambio del día.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ink-900 mb-4 flex items-center gap-2">
                <img src="/whatsapp.png" alt="" className="w-6 h-6" aria-hidden="true" />
                Lo que NO está incluido en los precios
              </h2>
              <ul className="space-y-3" role="list">
                <li className="flex items-start gap-3 p-4 bg-white rounded-xl border border-ink-200">
                  <Icon name="Globe" size={20} className="text-ink-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-ink-900">Dominio propio</p>
                    <p className="text-sm text-ink-600">~$10-15/año (ej: tunegocio.com)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white rounded-xl border border-ink-200">
                  <Icon name="Server" size={20} className="text-ink-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-ink-900">Hosting optimizado</p>
                    <p className="text-sm text-ink-600">Hosting compartido optimizado incluido; VPS o dedicado se cotiza aparte si tu proyecto lo requiere</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white rounded-xl border border-ink-200">
                  <Icon name="CreditCard" size={20} className="text-ink-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-ink-900">Pasarelas de pago</p>
                    <p className="text-sm text-ink-600">Stripe, PayPal, tarjetas — integración y comisiones por separado</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white rounded-xl border border-ink-200">
                  <Icon name="FileText" size={20} className="text-ink-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-ink-900">Redacción y fotos</p>
                    <p className="text-sm text-ink-600">Tú das el contenido; nosotros estructuramos. Redacción pro se cotiza aparte</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white rounded-xl border border-ink-200">
                  <Icon name="Zap" size={20} className="text-ink-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-ink-900">Funcionalidades extra</p>
                    <p className="text-sm text-ink-600">Lo que no esté en el paquete elegido se cotiza por separado</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Maintenance */}
      <Section spacing="lg">
        <Container size="lg">
          <Card variant="elevated" padding="xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:items-start">
              <div className="flex items-center gap-4 md:max-w-xl">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-900">{maintenancePackage.name}</h3>
                  <p className="text-ink-600 mt-1">{maintenancePackage.description}</p>
                  <p className="text-2xl font-bold text-ink-900 mt-2">{maintenancePackage.priceLabel}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button variant="outline" size="lg" href={maintenancePackage.ctaHref}>
                  Consultar mantenimiento
                </Button>
                <Button variant="whatsapp" size="lg" href={buildWhatsAppUrl(whatsappMessages.maintenance)} target="_blank" rel="noopener noreferrer">
                  <img src="/whatsapp.png" alt="" className="w-6 h-6" aria-hidden="true" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Maintenance includes */}
            <div className="mt-8 pt-8 border-t border-ink-100 grid sm:grid-cols-2 gap-4">
              {maintenancePackage.includes.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-ink-700">
                  <svg className="w-5 h-5 flex-shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-ink-100 text-sm text-ink-500">
              <p className="font-medium">No incluye:</p>
              <ul className="space-y-1 mt-1">
                {maintenancePackage.notIncludes.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 flex-shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Container>
      </Section>

      {/* FAQ Pricing */}
      <Section spacing="lg" className="bg-ink-50">
        <Container size="lg">
          <SectionHeader align="center" title="Preguntas sobre precios" />
          <dl className="mt-10 space-y-3 max-w-3xl mx-auto" role="list">
            {pricingFAQs.map((faq) => (
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

      {/* Disclaimer */}
      <Section spacing="md" className="border-t border-ink-200">
        <Container size="lg">
          <div className="text-center text-sm text-ink-500 max-w-3xl mx-auto space-y-2">
            {pricingDisclaimer.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section spacing="xl" className="bg-ink-900">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Listo para conocer tu precio exacto?
            </h2>
            <p className="text-ink-300 mb-8 leading-relaxed">
              Cuéntanos tu proyecto y en 24h tendrás una propuesta clara con alcance, precio y cronograma.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg" href="/contacto" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-white/50">
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