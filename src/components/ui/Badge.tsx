import { type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'info' | 'outline';
  size?: 'sm' | 'md';
}

export const Badge = ({ variant = 'default', size = 'md', className, ...props }: BadgeProps) => {
  const variants = {
    default: 'bg-ink-900 text-white',
    secondary: 'bg-brand-500 text-white',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    info: 'bg-blue-100 text-blue-800',
    outline: 'bg-transparent border-2 border-ink-300 text-ink-700',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};