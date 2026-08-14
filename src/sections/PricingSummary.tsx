import { packages, maintenancePackage } from '../data/packages';
import { formatPrice } from '../lib/format';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section, SectionHeader } from '../components/ui/Section';
import { cn } from '../lib/cn';

export function PricingSummary() {
  const mainPackages = packages.filter((p) => p.id !== 'personalizado');

  return (
    <Section id="precios" spacing="lg" className="bg-ink-50">
      <Container size="xl">
        <SectionHeader
          align="center"
          eyebrow="Inversión"
          title="Precios claros, sin letra chica"
          description="Elige el paquete que se ajuste a tu momento. El precio final se confirma tras hablar de tu proyecto — sin sorpresas."
        />

        <div className="mt-14 overflow-x-auto pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-max lg:min-w-0">
            {mainPackages.map((pkg) => (
              <article key={pkg.id}>
                <Card variant={pkg.popular ? 'elevated' : 'bordered'} padding="lg" className={cn('h-full flex flex-col', pkg.popular && 'border-2 border-brand-400 relative')}>
                  {pkg.popular && (
                    <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2">
                      Más elegido
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle>{pkg.name}</CardTitle>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-ink-900">{formatPrice(pkg.priceFrom)}</span>
                      <span className="text-ink-500">/ proyecto</span>
                    </div>
                    <CardDescription className="mt-2">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-3">
                    <ul className="space-y-2.5">
                      {pkg.includes.slice(0, 6).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink-600">
                          <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                      {pkg.includes.length > 6 && (
                        <li className="text-sm text-brand-600 font-medium">+{pkg.includes.length - 6} características más</li>
                      )}
                    </ul>
                    {pkg.notIncludes && pkg.notIncludes.length > 0 && (
                      <div className="pt-2 border-t border-ink-100">
                        <p className="text-xs text-ink-500 mb-2">No incluye:</p>
                        <ul className="space-y-1">
                          {pkg.notIncludes.slice(0, 2).map((item, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-xs text-ink-400">
                              <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

            {/* Custom package */}
            <article>
              <Card variant="bordered" padding="lg" className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>Personalizado</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-ink-900">Cotización</span>
                  </div>
                  <CardDescription className="mt-2">Para sistemas, reservas, dashboards e integraciones especiales.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-3">
                  <ul className="space-y-2.5">
                    {packages.find((p) => p.id === 'personalizado')?.includes.slice(0, 6).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink-600">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-ink-500 pt-2 border-t border-ink-100">Cada proyecto es único. Hablemos y te damos precio exacto.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" fullWidth href="/contacto?tipo=system&paquete=personalizado">
                    Solicitar cotización
                  </Button>
                </CardFooter>
              </Card>
            </article>
          </div>
        </div>

        {/* Maintenance mention */}
        <div className="mt-10 p-6 bg-white rounded-2xl border border-ink-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-ink-900">{maintenancePackage.name}</p>
                <p className="text-sm text-ink-600">{maintenancePackage.description}</p>
              </div>
            </div>
            <Button variant="outline" size="sm" href={maintenancePackage.ctaHref}>
              {maintenancePackage.ctaText}
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-xs text-ink-500 max-w-2xl mx-auto space-y-1">
          <p>Los precios son referenciales ("desde") y aplican a proyectos base. El precio final depende del alcance real, funcionalidades y contenido.</p>
          <p>No incluyen dominio (~$10-15/año), hosting optimizado si se requiere VPS/dedicado, pasarelas de pago ni servicios de terceros.</p>
          <p>Proyectos &gt; $300: 50% al inicio y 50% al entregar. Proyectos ≤ $300: pago único.</p>
          <p>Mantenimiento: desde $15/mes (paquete Presencia); paquetes mayores según alcance.</p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" href="/precios">
            Ver todos los paquetes y detalles
          </Button>
        </div>
      </Container>
    </Section>
  );
}