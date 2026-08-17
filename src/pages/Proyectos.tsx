import { getProjectsByStatus } from '../data/projects';
import { buildWhatsAppUrl, whatsappMessages } from '../config/whatsapp';
import { Icon } from '../components/ui/Icon';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section, SectionHeader } from '../components/ui/Section';


export function Proyectos() {
  const liveProjects = getProjectsByStatus('live');
  const devProjects = getProjectsByStatus('development');
  const conceptProjects = getProjectsByStatus('concept');

  return (
    <>
      {/* Hero */}
      <Section id="proyectos" spacing="xl" className="relative bg-ink-50">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold tracking-wide mb-4">
              Portafolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-[1.05] tracking-tight text-balance mb-6">
              Proyectos que <span className="text-brand-600">hablan por sí solos</span>
            </h1>
            <p className="text-lg text-ink-600 leading-relaxed">
              No usamos plantillas genéricas. Cada proyecto nace de entender el negocio y resolver un problema real.
              Aquí verás trabajo real y proyectos en desarrollo.
            </p>
          </div>
        </Container>
      </Section>

      {/* Live Projects */}
      {liveProjects.length > 0 && (
        <Section spacing="lg">
          <Container size="xl">
            <SectionHeader
              align="center"
              eyebrow="En producción"
              title="Proyectos reales, clientes reales"
            />
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {liveProjects.map((project) => (
                <article key={project.id}>
                  <Card variant="elevated" padding="none" hover className="h-full overflow-hidden flex flex-col group">
                    <div className="aspect-video relative bg-ink-100 overflow-hidden">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors w-full sm:w-auto"
                        >
                          Ver proyecto
                        </a>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4 flex-1">
                      <span className="text-xs text-ink-500 uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-lg font-semibold text-ink-900 group-hover:text-brand-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-ink-600 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="outline" size="sm">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <Badge variant="outline" size="sm">+{project.tags.length - 4}</Badge>
                        )}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 mt-2"
                      >
                        Ver en vivo
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Development Projects */}
      {(devProjects.length > 0 || conceptProjects.length > 0) && (
        <Section spacing="lg" className="bg-ink-50">
          <Container size="xl">
            <SectionHeader
              align="center"
              eyebrow="En progreso"
              title="Proyectos en desarrollo"
              description="Estamos construyendo nuevas soluciones. Vuelve pronto para ver el resultado final."
            />
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {[...devProjects, ...conceptProjects].map((project) => (
                <article key={project.id}>
                  <Card variant="bordered" padding="none" hover className="h-full overflow-hidden flex flex-col border-2 border-dashed border-ink-300">
                    <div className="aspect-video relative bg-ink-100 overflow-hidden">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {project.demoUrl && project.demoUrl !== '#' && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors w-full sm:w-auto"
                          >
                            Ver preview
                          </a>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4 flex-1">
                      <span className="text-xs text-ink-500 uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-lg font-semibold text-ink-900">{project.title}</h3>
                      <p className="text-sm text-ink-600 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="outline" size="sm">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <Badge variant="outline" size="sm">+{project.tags.length - 4}</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Empty state / CTA for future projects */}
      <Section spacing="xl" className="bg-ink-900">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-2xl bg-ink-800 border border-ink-700 flex items-center justify-center mx-auto mb-6">
              <Icon name="Puzzle" size={32} className="text-ink-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Tu proyecto podría estar aquí?
            </h2>
            <p className="text-ink-300 mb-8 leading-relaxed">
              Estamos buscando negocios en Honduras que quieran dar el salto a una presencia digital profesional.
              Hablemos y construyamos algo juntos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 text-base font-medium text-white border-2 border-white/30 rounded-lg transition-colors w-full sm:w-auto hover:bg-white/10 hover:border-white/50"
              >
                Empezar mi proyecto
              </a>
              <a
                href={buildWhatsAppUrl(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors w-full sm:w-auto"
              >
                <Icon name="MessageSquare" size={20} strokeWidth={2.5} />
                WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}