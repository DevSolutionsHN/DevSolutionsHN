import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
  /** Si se proporciona, renderiza como <a> en lugar de <button> */
  href?: string;
  /** Target para enlaces (ej. _blank) */
  target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
  /** Rel para enlaces (ej. noopener noreferrer) */
  rel?: AnchorHTMLAttributes<HTMLAnchorElement>['rel'];
}

export const Button = forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>) => {
    const {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      className,
      href,
      target,
      rel,
      ...rest
    } = props;
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-ink-900 text-white hover:bg-ink-800 active:bg-ink-950',
      secondary: 'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700',
      outline: 'border-2 border-ink-900 text-ink-900 hover:bg-ink-50 active:bg-ink-100',
      ghost: 'text-ink-600 hover:bg-ink-100 active:bg-ink-200',
      whatsapp: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800 flex items-center gap-2',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-5 py-2.5 text-base gap-2',
      lg: 'px-7 py-3.5 text-lg gap-2.5',
    };

    const isLink = !!href;
    const Component = isLink ? 'a' : 'button';
    const ComponentRef = Component as React.ElementType;

    const linkProps = isLink
      ? { href, target, rel: rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined) }
      : {};

    const buttonProps = isLink ? {} : { disabled: disabled || loading, type: 'button' };

    return (
      <ComponentRef
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], fullWidth && 'w-full', className)}
        {...linkProps}
        {...buttonProps}
        {...rest}
      >
        {loading && !isLink && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </ComponentRef>
    );
  }
);

Button.displayName = 'Button';