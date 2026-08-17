import { Icon } from '../components/ui/Icon';
import { Container } from '../components/ui/Container';
import { Section, SectionHeader } from '../components/ui/Section';

const problemPoints = [
  {
    icon: 'MessageSquare',
    title: 'Información dispersa',
    description: 'Tus datos están repartidos entre Instagram, Facebook, WhatsApp y Google Maps. El cliente no encuentra todo en un lugar.',
  },
  {
    icon: 'Search',
    title: 'No apareces en Google',
    description: 'Sin web propia, tu negocio no existe para quien busca en Google. Pierdes clientes que buscan exactamente lo que ofreces.',
  },
  {
    icon: 'Zap',
    title: 'Dependencia total de RRSS',
    description: 'Los algoritmos cambian, las cuentas se bloquean, el alcance baja. Tu presencia digital no debería depender de terceros.',
  },
];

const solutionPoints = [
  {
    icon: 'Globe',
    title: 'Centralizas todo',
    description: 'Una web propia reúne: quién eres, qué ofreces, precios, galería, ubicación, contacto y WhatsApp en un solo lugar.',
  },
  {
    icon: 'CheckCircle',
    title: 'Generas confianza',
    description: 'Un sitio profesional transmite seriedad. El cliente ve que inviertes en tu negocio y se siente seguro al contactarte.',
  },
  {
    icon: 'Rocket',
    title: 'Tienes control',
    description: 'Tu web, tus reglas. Cambias contenido cuando quieres, mides resultados y construyes un activo digital propio.',
  },
];

export function Problem() {
  return (
    <Section id="problema" spacing="lg" className="bg-ink-50">
      <Container size="lg">
        <SectionHeader
          align="center"
          eyebrow="El problema"
          title="Muchos negocios dependen solo de redes sociales y WhatsApp"
          description="Las redes son útiles, pero no sustituyen una presencia digital propia. Una web profesional complementa y potencia lo que ya haces en redes."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {/* Problema */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-ink-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <Icon name="MessageSquare" size={20} className="text-red-600" />
              </div>
              Situación actual
            </h3>
            <div className="space-y-6">
              {problemPoints.map((point, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-ink-200">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <Icon name={point.icon} size={22} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink-900 mb-1">{point.title}</h4>
                    <p className="text-ink-600 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solución */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-ink-900 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
              </div>
              Con una web profesional
            </h3>
            <div className="space-y-6">
              {solutionPoints.map((point, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-ink-200">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                    <Icon name={point.icon} size={22} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink-900 mb-1">{point.title}</h4>
                    <p className="text-ink-600 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-ink-600 mb-4">
            No se trata de elegir entre web o redes. Se trata de <strong className="text-ink-900">usar ambas bien</strong>.
          </p>
          <a href="/contacto" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium">
            Hablemos de tu caso
          </a>
        </div>
      </Container>
    </Section>
  );
}