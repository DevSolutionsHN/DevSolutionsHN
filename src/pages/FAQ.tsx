import { faqs } from '../data/faq';
import { buildWhatsAppUrl, whatsappMessages } from '../config/whatsapp';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Icon } from '../components/ui/Icon';

const categories = [
  { key: 'general', label: 'General', icon: 'MessageSquare' },
  { key: 'pricing', label: 'Precios y pagos', icon: 'Tag' },
  { key: 'process', label: 'Proceso', icon: 'CheckCircle' },
  { key: 'technical', label: 'Técnico', icon: 'Code' },
  { key: 'maintenance', label: 'Mantenimiento', icon: 'Settings' },
] as const;

const scrollToCategory = (key: string) => {
  const element = document.getElementById(`faq-${key}`);
  if (element) {
    const headerOffset = 350;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

export function FAQ() {
  return (
    <>
      {/* Hero */}
      <Section id="faq" spacing="xl" className="relative bg-ink-50">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold tracking-wide mb-4">
              Preguntas frecuentes
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-[1.05] tracking-tight text-balance mb-6">
              Respuestas a <span className="text-brand-600">tus dudas</span>
            </h1>
            <p className="text-lg text-ink-600 leading-relaxed">
              Hemos reunido las preguntas que más nos hacen. Si no encuentras la tuya, escríbenos por WhatsApp.
            </p>
          </div>
        </Container>
      </Section>

      {/* Categories Tabs */}
      <Section spacing="md" className="bg-white border-y border-ink-200 sticky top-16 z-40">
        <Container size="xl">
          <nav aria-label="Categorías de preguntas" className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                data-category={cat.key}
                onClick={() => scrollToCategory(cat.key)}
                className="faq-tab px-4 py-2 text-sm font-medium text-ink-600 hover:text-ink-900 hover:bg-ink-50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <Icon name={cat.icon} size={16} className="inline mr-2" />
                {cat.label}
              </button>
            ))}
          </nav>
        </Container>
      </Section>

      {/* FAQ Content */}
      <Section spacing="lg">
        <Container size="xl">
          {categories.map((cat) => {
            const categoryFAQs = faqs.filter((f) => f.category === cat.key);
            return (
              <div key={cat.key} id={`faq-${cat.key}`} className="faq-category mb-16" data-category={cat.key}>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-ink-200">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
                    <Icon name={cat.icon} size={20} className="text-brand-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-ink-900">{cat.label}</h2>
                </div>

                <dl className="space-y-4 max-w-3xl" role="list">
                  {categoryFAQs.map((faq) => (
                    <div key={faq.id} className="group">
                      <Card variant="bordered" padding="md" className="group-hover:border-brand-300 transition-colors">
                        <dt className="font-semibold text-ink-900 flex items-start gap-3">
                          <img src="/whatsapp.png" alt="" className="w-6 h-6 text-brand-400 flex-shrink-0 mt-0.5 group-hover:text-brand-600 transition-colors" aria-hidden="true" />
                          {faq.question}
                        </dt>
                        <dd className="mt-3 text-ink-600 leading-relaxed pl-7 border-l border-ink-200">
                          {faq.answer}
                        </dd>
                      </Card>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </Container>
      </Section>

      {/* Still have questions */}
      <Section spacing="xl" className="bg-ink-900">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-ink-800 border border-ink-700 flex items-center justify-center mx-auto mb-6">
              <img src="/whatsapp.png" alt="" className="w-8 h-8" aria-hidden="true" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Tu pregunta no está aquí?
            </h2>
            <p className="text-ink-300 mb-8 leading-relaxed">
              Escríbenos por WhatsApp y te respondemos personalmente. Sin bots, sin plantillas.
            </p>
            <a
              href={buildWhatsAppUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <img src="/whatsapp.png" alt="" className="w-6 h-6" aria-hidden="true" />
              Preguntar por WhatsApp
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}