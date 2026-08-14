import { processSteps } from '../data/process';
import { Icon } from '../components/ui/Icon';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section, SectionHeader } from '../components/ui/Section';
import { cn } from '../lib/cn';

export function Process() {
  return (
    <Section id="proceso" spacing="lg">
      <Container size="xl">
        <SectionHeader
          align="center"
          eyebrow="Cómo trabajamos"
          title="Un proceso claro, sin sorpresas"
          description="De la idea a la web publicada en 6 pasos. Tú decides el ritmo, nosotros ponemos la experiencia."
        />

        <div className="mt-14 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-2.5rem)] bg-gradient-to-b from-brand-200 via-brand-300 to-brand-200" aria-hidden="true" />

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
                      <CardContent className="space-y-3">
                        <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center lg:mx-auto lg:ml-auto">
                          <Icon name={step.icon} size={24} className="text-brand-600" />
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

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-ink-600 mb-4">¿Listo para el paso 1?</p>
          <Button size="lg" href="/contacto">
            Cuéntanos tu idea
          </Button>
        </div>
      </Container>
    </Section>
  );
}