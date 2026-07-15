import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoBadgeProps {
  variant?: 'sm' | 'lg';
  className?: string;
}

// Text-based recreation of the supplied circular badge logo: script "Nature's",
// bold "BREW", letter-spaced "CO." stacked on a green disc.
export function LogoBadge({ variant = 'sm', className }: LogoBadgeProps) {
  const sizeClasses = variant === 'lg' ? 'h-32 w-32 sm:h-40 sm:w-40' : 'h-10 w-10';
  const text =
    variant === 'lg'
      ? {
          script: 'text-lg sm:text-2xl',
          brew: 'text-3xl sm:text-4xl',
          co: 'text-[11px] sm:text-sm tracking-[0.4em]',
        }
      : {
          script: 'text-[7px]',
          brew: 'text-[11px]',
          co: 'text-[5px] tracking-[0.2em]',
        };

  return (
    <span
      className={cn(
        'relative flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-greenBright to-brand-green text-white shadow-soft ring-4 ring-white/50',
        sizeClasses,
        className
      )}
      aria-hidden="true"
    >
      <span className="flex flex-col items-center justify-center gap-0.5 leading-none">
        <span className={cn('font-heading italic', text.script)}>Nature&apos;s</span>
        <span className={cn('font-heading font-extrabold tracking-tight', text.brew)}>
          BREW
        </span>
        <span className={cn('font-heading font-semibold', text.co)}>CO.</span>
      </span>
    </span>
  );
}

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className, light }: LogoProps) {
  return (
    <Link
      href="#home"
      className={cn(
        'inline-flex items-center gap-2.5 font-heading text-lg font-bold leading-none tracking-tight',
        light ? 'text-white' : 'text-brand-charcoal',
        className
      )}
    >
      <LogoBadge />
      <span>
        Nature&apos;s Brew <span className={light ? 'text-brand-greenBright' : 'text-primary'}>Co.</span>
      </span>
    </Link>
  );
}
