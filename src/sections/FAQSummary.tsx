import { faqs } from '../data/faq';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section, SectionHeader } from '../components/ui/Section';

const homeFAQs = faqs.slice(0, 5);

export function FAQSummary() {
  return (
    <Section id="faq" spacing="lg">
      <Container size="lg">
        <SectionHeader
          align="center"
          eyebrow="Preguntas frecuentes"
          title="Respuestas rápidas a dudas comunes"
          description="Si tu pregunta no está aquí, escríbenos por WhatsApp y te respondemos."
        />

        <div className="mt-12">
          <dl className="space-y-3 max-w-3xl mx-auto" role="list">
            {homeFAQs.map((faq) => (
              <div key={faq.id}>
                <Card variant="bordered" padding="md">
                  <CardHeader className="mb-0">
                    <dt className="font-semibold text-ink-900 text-left">{faq.question}</dt>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <dd className="text-ink-600 text-sm leading-relaxed text-left">{faq.answer}</dd>
                  </CardContent>
                </Card>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 text-center">
          <Button variant="ghost" size="md" href="/faq" className="text-brand-600 hover:text-brand-700 font-medium text-base">
            Ver todas las preguntas
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </Container>
    </Section>
  );
}