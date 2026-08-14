import { differentiators } from '../data/process';
import { Icon } from '../components/ui/Icon';
import { Card, CardContent } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section, SectionHeader } from '../components/ui/Section';

export function Differential() {
  return (
    <Section id="diferencial" spacing="lg" className="bg-ink-50">
      <Container size="lg">
        <SectionHeader
          align="center"
          eyebrow="Por qué DevSolutionsHN"
          title="No somos una agencia más. Somos tu socio técnico."
          description="Elegimos trabajar contigo, no para ti. Eso cambia todo."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff) => (
            <article key={diff.id}>
              <Card variant="bordered" padding="lg" className="h-full">
                <CardContent className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                    <Icon name={diff.icon} size={24} className="text-brand-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink-900">{diff.title}</h3>
                  <p className="text-ink-600 text-sm leading-relaxed">{diff.description}</p>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}