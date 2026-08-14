import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const spacings = {
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-20 lg:py-24',
  lg: 'py-20 sm:py-28 lg:py-32',
  xl: 'py-24 sm:py-32 lg:py-40',
};

export const Section = ({
  children,
  id,
  spacing = 'md',
  className,
  ...props
}: SectionProps) => {
  return (
    <section id={id} className={cn(spacings[spacing], className)} {...props}>
      {children}
    </section>
  );
};

export interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-ink-600 text-pretty">{description}</p>
      )}
    </div>
  );
};
