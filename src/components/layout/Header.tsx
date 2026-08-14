import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { buildWhatsAppUrl } from '../../config/whatsapp';
import { mainNav } from '../../data/navigation';
import { Icon } from '../ui/Icon';
import { Container } from '../ui/Container';
import { siteConfig } from '../../config/siteConfig';
import { cn } from '../../lib/cn';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const whatsappUrl = buildWhatsAppUrl();

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
          mobileMenuOpen
            ? 'bg-white shadow-soft transition-none'
            : scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-soft'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <Container size="xl">
          <nav
            className="flex items-center justify-between h-16 lg:h-18"
            aria-label="Navegación principal"
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 text-ink-900 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-md"
              aria-label={`${siteConfig.name} - Inicio`}
            >
              <svg
                className="w-8 h-8 text-brand-600"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="32" height="32" rx="8" fill="currentColor" />
                <path
                  d="M8 12h16M8 16h12M8 20h8"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-bold text-xl tracking-tight hidden sm:block">
                DevSolutionsHN
              </span>
              <span className="font-bold text-xl tracking-tight sm:hidden">DSHN</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 relative',
                    location.pathname === item.href
                      ? 'text-brand-600'
                      : 'text-ink-600 hover:text-ink-900'
                  )}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA - Solo WhatsApp */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                aria-label="Contactar por WhatsApp"
              >
                <Icon name="MessageSquare" size={16} strokeWidth={2.5} />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-ink-600 hover:bg-ink-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? (
                <Icon name="MessageSquare" size={24} strokeWidth={2.5} />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden fixed inset-0 top-16 left-0 right-0 bg-white z-50 py-6 shadow-lg animate-in slide-in-from-top-2 duration-200"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
            >
              <Container size="xl">
                <div className="flex flex-col gap-2">
                  {mainNav.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        'px-4 py-3 rounded-xl text-lg font-medium transition-colors border border-ink-200',
                        location.pathname === item.href
                          ? 'bg-brand-50 text-brand-700 border-brand-200'
                          : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 flex flex-col gap-3">
                    <Link
                      to="/contacto"
                      className="px-4 py-3 rounded-xl text-lg font-medium text-ink-600 hover:bg-ink-50 hover:text-ink-900 transition-colors border border-ink-200 text-center"
                    >
                      Contacto
                    </Link>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-lg font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
                    >
                      <Icon name="MessageSquare" size={20} strokeWidth={2.5} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          )}
        </Container>
      </header>

      {/* Floating WhatsApp Button - fixed to viewport */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 animate-in slide-in-from-bottom-4 duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 lg:bottom-8 lg:right-8"
        aria-label="Contactar por WhatsApp"
        style={{ position: 'fixed' }}
      >
        <Icon name="MessageSquare" size={28} strokeWidth={2.5} className="text-white" />
      </a>
    </>
  );
}