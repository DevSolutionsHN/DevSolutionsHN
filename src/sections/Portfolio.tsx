import { featuredProjects } from '../data/projects';
import { Icon } from '../components/ui/Icon';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section, SectionHeader } from '../components/ui/Section';

export function Portfolio() {
  return (
    <Section id="proyectos" spacing="lg">
      <Container size="xl">
        <SectionHeader
          align="center"
          eyebrow="Portafolio"
          title="Proyectos que hablan por sí solos"
          description="No usamos plantillas genéricas. Cada proyecto nace de entender el negocio y resolver un problema real."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <article key={project.id} className="group">
              <Card variant="elevated" padding="none" hover className="h-full overflow-hidden flex flex-col">
                {/* Project Image */}
                <div className="aspect-video relative bg-ink-100 overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Button variant="primary" size="sm" className="w-full sm:w-auto" href={project.url || project.demoUrl || '/proyectos'} target={project.url ? '_blank' : undefined} rel={project.url ? 'noopener noreferrer' : undefined}>
                      {project.ctaText}
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-ink-500 uppercase tracking-wider">{project.category}</span>
                    <Badge
                      variant={project.status === 'live' ? 'success' : project.status === 'development' ? 'info' : 'secondary'}
                      className="group-hover:scale-105 transition-transform"
                    >
                      {project.status === 'live' ? 'En línea' : project.status === 'development' ? 'En desarrollo' : 'Concepto'}
                    </Badge>
                  </div>
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
                </CardContent>
              </Card>
            </article>
          ))}

          {/* Placeholder for next project */}
          <article className="md:col-span-2">
            <Card variant="bordered" padding="none" hover className="h-full border-2 border-dashed border-ink-300">
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center p-12 text-center">
                <div className="w-20 h-20 rounded-2xl bg-ink-100 flex items-center justify-center mb-6">
                  <Icon name="Puzzle" size={32} className="text-ink-400" />
                </div>
                <h3 className="text-xl font-semibold text-ink-900 mb-2">Espacio para tu proyecto</h3>
                <p className="text-ink-600 max-w-md mb-6">
                  ¿Tienes un negocio que necesita una web profesional? Tu proyecto podría estar aquí.
                  Hablemos y construyamos algo juntos.
                </p>
                <Button variant="primary" size="lg" href="/proyectos">
                  Empezar mi proyecto
                </Button>
              </div>
            </Card>
          </article>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button variant="outline" size="lg" href="/proyectos">
            Ver portafolio completo
          </Button>
        </div>
      </Container>
    </Section>
  );
}