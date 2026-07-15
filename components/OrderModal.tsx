'use client';

import { useState } from 'react';
import { Phone, MapPin, UtensilsCrossed } from 'lucide-react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Dialog, DialogClose, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ContactLink } from '@/components/ContactLink';
import { business } from '@/data/business';

interface OrderModalProps {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  className?: string;
  children: React.ReactNode;
}

export default function OrderModal({ variant, size, className, children }: OrderModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant={variant} size={size} className={className} onClick={() => setOpen(true)}>
        {children}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogClose />
        <DialogTitle>Order from Nature&apos;s Brew Co.</DialogTitle>
        <DialogDescription>
          We don&apos;t currently offer online ordering. Here&apos;s the fastest way to get your
          fresh smoothie, juice or coffee.
        </DialogDescription>
        <div className="mt-6 flex flex-col gap-3">
          <ContactLink
            value={business.phone}
            href={business.phoneHref}
            className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:bg-secondary"
          >
            <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block font-heading font-semibold text-foreground">
                Call the store
              </span>
              <span className="block text-sm text-muted-foreground">{business.phone}</span>
            </span>
          </ContactLink>
          <a
            href="#menu"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:bg-secondary"
          >
            <UtensilsCrossed className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="font-heading font-semibold text-foreground">View the menu</span>
          </a>
          <ContactLink
            value={business.mapsUrl}
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors hover:bg-secondary"
          >
            <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <span className="font-heading font-semibold text-foreground">Get directions</span>
          </ContactLink>
        </div>
      </Dialog>
    </>
  );
}
