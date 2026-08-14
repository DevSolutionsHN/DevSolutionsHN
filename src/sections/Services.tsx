import { services } from '../data/services';
import { Icon } from '../components/ui/Icon';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section, SectionHeader } from '../components/ui/Section';

export function Services() {
  return (
    <Section id="servicios" spacing="lg">
      <Container size="xl">
        <SectionHeader
          align="center"
          eyebrow="Qué hacemos"
          title="Tres formas de ayudarte a crecer en Internet"
          description="Cada negocio es diferente. Estos son nuestros servicios principales, pero todo se adapta a lo que tú necesitas."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article key={service.id} className="group">
              <Card variant="bordered" padding="lg" hover className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-brand-100 flex items-center justify-center mb-4 group-hover:bg-brand-200 transition-colors">
                    <Icon name={service.icon} size={28} className="text-brand-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-ink-600 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.examples.slice(0, 4).map((ex, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-ink-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" aria-hidden="true" />
                        {ex}
                      </div>
                    ))}
                    {service.examples.length > 4 && (
                      <div className="text-sm text-brand-600 font-medium">
                        +{service.examples.length - 4} más
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" fullWidth href={service.ctaHref} className="group-hover:bg-brand-600 transition-colors">
                    {service.ctaText}
                  </Button>
                </CardFooter>
              </Card>
            </article>
          ))}
        </div>

        {/* CTA to full services page */}
        <div className="mt-14 text-center">
          <p className="text-ink-600 mb-4">¿Necesitas algo más específico?</p>
          <Button variant="outline" size="lg" href="/servicios">
            Ver todos los servicios
          </Button>
        </div>
      </Container>
    </Section>
  );
}