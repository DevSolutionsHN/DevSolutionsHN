import {
  Globe,
  ShoppingBag,
  Settings,
  MessageSquare,
  Search,
  FileText,
  Code,
  CheckCircle,
  Rocket,
  Puzzle,
  Palette,
  Zap,
  Tag,
  MinusCircle,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '../../lib/cn';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  ShoppingBag,
  Settings,
  MessageSquare,
  Search,
  FileText,
  Code,
  CheckCircle,
  Rocket,
  Puzzle,
  Palette,
  Zap,
  Tag,
  MinusCircle,
};

export interface IconProps {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
  'aria-hidden'?: boolean;
}

export const Icon = ({ name, size = 24, className, strokeWidth = 2, ...props }: IconProps) => {
  const IconComponent = iconMap[name] || Globe;
  return (
    <IconComponent
      size={size}
      className={cn('shrink-0', className)}
      strokeWidth={strokeWidth}
      aria-hidden={props['aria-hidden'] ?? true}
    />
  );
};
