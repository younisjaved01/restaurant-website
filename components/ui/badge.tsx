import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold',
  {
    variants: {
      variant: {
        green: 'bg-secondary text-secondary-foreground',
        mint: 'bg-brand-mint text-brand-greenDark',
        mango: 'bg-fruit-mango/15 text-fruit-mango',
        berry: 'bg-fruit-berry/15 text-fruit-berry',
        orange: 'bg-fruit-orange/15 text-fruit-orange',
        blueberry: 'bg-fruit-blueberry/15 text-fruit-blueberry',
        coffee: 'bg-brand-charcoal/10 text-brand-charcoal',
        outline: 'border border-border text-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'green',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
