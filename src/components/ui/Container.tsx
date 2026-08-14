import { type HTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  paddingX?: boolean;
}

const maxWidths = {
  sm: 'max-w-3xl', // ~768px
  md: 'max-w-5xl', // ~1024px
  lg: 'max-w-6xl', // ~1152px
  xl: 'max-w-7xl', // ~1280px
  full: 'max-w-full',
};

export const Container = ({
  children,
  size = 'xl',
  paddingX = true,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(
        'mx-auto',
        maxWidths[size],
        paddingX && 'px-5 sm:px-8 lg:px-10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};