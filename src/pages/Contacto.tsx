import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { FormEvent } from 'react';
import { buildWhatsAppUrl, whatsappMessages } from '../config/whatsapp';
import { siteConfig } from '../config/siteConfig';
import { packages } from '../data/packages';
import { Icon } from '../components/ui/Icon';
import { Button } from '../components/ui/Button';
import { Input, Textarea, Select } from '../components/ui/Input';
import type { SelectOption } from '../components/ui/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';

const projectTypeOptions: SelectOption[] = [
  { value: 'web', label: 'Página web' },
  { value: 'store', label: 'Tienda online' },
  { value: 'system', label: 'Sistema web personalizado' },
  { value: 'other', label: 'Otro / No estoy seguro' },
];

const budgetOptions: SelectOption[] = [
  { value: '', label: 'Selecciona un rango (opcional)' },
  { value: '150-250', label: '$150 - $250 (Presencia)' },
  { value: '250-450', label: '$250 - $450 (Profesional)' },
  { value: '450-900', label: '$450 - $900 (Tienda Online)' },
  { value: '900+', label: '$900+ (Personalizado)' },
  { value: 'no-se', label: 'No tengo un presupuesto definido' },
];

const prefillFromParams = (params: URLSearchParams) => {
  const tipo = params.get('tipo') || 'web';
  const paquete = params.get('paquete') || '';
  return { tipo, paquete };
};

export function Contacto() {
  const [searchParams] = useSearchParams();
  const { tipo, paquete } = prefillFromParams(searchParams);

  const [formData, setFormData] = useState({
    name: '',
    business: '',
    whatsapp: '',
    email: '',
    projectType: tipo,
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Tu nombre es requerido' : '';
      case 'business':
        return value.trim().length < 2 ? 'Nombre del negocio/emprendimiento requerido' : '';
      case 'whatsapp':
        return value.trim().length < 8 ? 'Ingresa un WhatsApp válido (ej: 31234567)' : '';
      case 'email':
        return value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Correo inválido' : '';
      case 'projectType':
        return value ? '' : 'Selecciona un tipo de proyecto';
      case 'message':
        return value.trim().length < 10 ? 'Cuéntanos un poco más (mín. 10 caracteres)' : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);

    try {
      // Prepare Formspree data
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      if (!formspreeEndpoint) {
        throw new Error('Formspree endpoint not configured');
      }

      const projectTypeLabel = projectTypeOptions.find((o) => o.value === formData.projectType)?.label || formData.projectType;
      const packageLabel = packages.find((p) => p.id === paquete)?.name || '';

      const body = new URLSearchParams();
      body.append('name', formData.name);
      body.append('business', formData.business);
      body.append('whatsapp', formData.whatsapp);
      body.append('email', formData.email);
      body.append('projectType', projectTypeLabel);
      body.append('budget', formData.budget || 'No especificado');
      body.append('message', formData.message);
      if (packageLabel) body.append('package', packageLabel);
      body.append('_subject', `Nueva cotización: ${projectTypeLabel} - ${formData.business}`);
      body.append('_replyto', formData.email);

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) throw new Error('Error al enviar');

      setSubmitted(true);
      setFormData({ name: '', business: '', whatsapp: '', email: '', projectType: tipo, budget: '', message: '' });
    } catch {
      setErrors({ form: 'No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.' });
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl = buildWhatsAppUrl(
    whatsappMessages[formData.projectType as keyof typeof whatsappMessages] || whatsappMessages.general
  );

  return (
    <>
      {/* Hero */}
      <Section id="contacto" spacing="xl" className="relative bg-ink-50">
        <Container size="xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-semibold tracking-wide mb-4">
              Contacto
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 leading-[1.05] tracking-tight text-balance mb-6">
              Hablemos de <span className="text-brand-600">tu proyecto</span>
            </h1>
            <p className="text-lg text-ink-600 leading-relaxed">
              Sin compromiso, sin presión. Solo cuéntanos qué necesitas y te respondemos en menos de 24h.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Form + Info */}
      <Section spacing="lg">
        <Container size="xl">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form - 2/3 width */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card variant="elevated" padding="xl" className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-ink-900 mb-2">¡Solicitud enviada!</h2>
                  <p className="text-ink-600 mb-6 max-w-md mx-auto">
                    Gracias {formData.name || ''}. Hemos recibido tu solicitud de cotización para <strong>{projectTypeOptions.find(o => o.value === tipo)?.label || 'tu proyecto'}</strong>.
                    Te contactaremos por WhatsApp o correo en menos de 24 horas (horario Honduras: Lun-Vie 8-20).
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button variant="whatsapp" size="lg" href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageSquare" size={18} strokeWidth={2.5} />
                      Seguir por WhatsApp
                    </Button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-brand-600 hover:text-brand-700 font-medium"
                    >
                      Enviar otra solicitud
                    </button>
                  </div>
                </Card>
              ) : (
                <Card variant="elevated" padding="xl">
                  <CardHeader>
                    <CardTitle>Solicitar cotización</CardTitle>
                    <CardDescription>
                      Completa el formulario y te enviaremos una propuesta con alcance, precio y cronograma.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {errors.form && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm" role="alert">
                        {errors.form}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          name="name"
                          label="Tu nombre *"
                          placeholder="Juan Pérez"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.name}
                          required
                          autoComplete="name"
                        />
                        <Input
                          name="business"
                          label="Negocio / Emprendimiento *"
                          placeholder="Mi Cafetería, Clínica Dental, etc."
                          value={formData.business}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.business}
                          required
                          autoComplete="organization"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Input
                          name="whatsapp"
                          label="WhatsApp *"
                          placeholder="Agrega tu número de WhatsApp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.whatsapp}
                          required
                          type="tel"
                          autoComplete="tel"
                        />
                        <Input
                          name="email"
                          label="Correo electrónico"
                          placeholder="juan@ejemplo.com"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.email}
                          type="email"
                          autoComplete="email"
                        />
                      </div>

                      <Select
                        name="projectType"
                        label="Tipo de proyecto *"
                        options={projectTypeOptions}
                        value={formData.projectType}
                        onChange={handleChange}
                        error={errors.projectType}
                        required
                        placeholder="Selecciona..."
                      />

                      <Select
                        name="budget"
                        label="Presupuesto aproximado (opcional)"
                        options={budgetOptions}
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="Selecciona..."
                      />

                      <Textarea
                        name="message"
                        label="Cuéntanos tu idea *"
                        placeholder="Ej: Necesito una web para mi restaurante con menú online, reservas y galería. Quiero que se vea moderna y cargue rápido en móvil..."
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.message}
                        required
                        rows={5}
                      />

                      <Button type="submit" variant="primary" size="lg" fullWidth loading={submitting}>
                        {submitting ? 'Enviando...' : 'Enviar solicitud'}
                      </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-ink-500">
                      ¿Prefieres WhatsApp directo?{' '}
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:text-brand-700 font-medium">
                        Escríbenos aquí
                      </a>
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar - 1/3 width */}
            <div className="space-y-6">
              {/* WhatsApp Card */}
              <Card variant="bordered" padding="lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <Icon name="MessageSquare" size={20} className="text-green-600" />
                    </div>
                    WhatsApp directo
                  </CardTitle>
                  <CardDescription>La forma más rápida. Respondemos en horas.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="whatsapp" fullWidth size="lg" href={buildWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageSquare" size={20} strokeWidth={2.5} />
                    Abrir WhatsApp
                  </Button>
                  <p className="text-sm text-ink-500 text-center">
                    Número: <code className="font-mono text-ink-700">+504 {siteConfig.whatsappNumber.replace('504', '').replace(/(\d{4})(\d{4})/, '$1-$2')}</code>
                  </p>
                </CardContent>
              </Card>

              {/* Info Card */}
              <Card variant="bordered" padding="lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-brand-600" />
                    </div>
                    Correo electrónico
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:text-brand-700 font-medium">
                    {siteConfig.email}
                  </a>
                  <p className="mt-2 text-sm text-ink-500">Respondemos en 24h hábiles.</p>
                </CardContent>
              </Card>

              {/* Quick package selection if coming from pricing */}
              {paquete && (
                <Card variant="bordered" padding="lg" className="border-brand-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Badge variant="secondary" className="mr-2">{paquete}</Badge>
                      Paquete seleccionado
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-ink-600">
                      {packages.find(p => p.id === paquete)?.description}
                    </p>
                    <p className="mt-2 text-sm text-brand-600 font-medium">
                      El formulario ya tiene este paquete preseleccionado.
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Hours */}
              <Card variant="ghost" padding="lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-ink-100 flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-ink-600" />
                    </div>
                    Horario de atención
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm text-ink-600">
                    <div className="flex justify-between"><span>Lunes a Sábado</span><span className="font-medium text-ink-900">8:00 - 20:00</span></div>
                    <div className="flex justify-between"><span>Zona horaria</span><span className="font-medium text-ink-900">Honduras (UTC-6)</span></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section spacing="xl" className="bg-ink-900">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Aún tienes dudas?
            </h2>
            <p className="text-ink-300 mb-8 leading-relaxed">
              Escríbenos por WhatsApp y resolvemos todo en una conversación. Sin formularios, sin esperas.
            </p>
            <a
              href={buildWhatsAppUrl(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <Icon name="MessageSquare" size={20} strokeWidth={2.5} />
              Preguntar por WhatsApp
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}