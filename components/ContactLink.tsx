import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { isPlaceholder } from '@/data/business';
import { cn } from '@/lib/utils';

interface ContactLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The raw business detail this link points to — checked for placeholder state. */
  value: string;
  children: ReactNode;
}

/**
 * Renders a real link once `value` has been filled in, otherwise a visually matching,
 * inert element — avoids broken `tel:` / maps navigation while placeholders are in place.
 */
export function ContactLink({ value, href, className, children, ...props }: ContactLinkProps) {
  if (isPlaceholder(value)) {
    return (
      <span
        aria-disabled="true"
        title="Add this detail in data/business.ts to enable this link"
        className={cn(className, 'cursor-not-allowed opacity-60')}
      >
        {children}
      </span>
    );
  }

  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}
