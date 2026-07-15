'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { backdropVariants, modalVariants } from '@/lib/motion-config';

interface DialogContextValue {
  onOpenChange: (open: boolean) => void;
  titleId: string;
}

const DialogContext = React.createContext<DialogContextValue | null>(null);

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  const titleId = React.useId();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const triggerElRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (open) {
      triggerElRef.current = document.activeElement as HTMLElement;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previousOverflow;
        triggerElRef.current?.focus?.();
      };
    }
    return undefined;
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const node = contentRef.current;
    const focusable = node?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    focusable?.[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onOpenChange(false);
        return;
      }
      if (event.key !== 'Tab' || !node) return;
      const items = node.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <DialogContext.Provider value={{ onOpenChange, titleId }}>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4">
            <motion.div
              className="absolute inset-0 bg-brand-charcoal/50 backdrop-blur-sm"
              variants={backdropVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={() => onOpenChange(false)}
              aria-hidden="true"
            />
            <motion.div
              ref={contentRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative z-10 w-full max-w-md rounded-t-2xl bg-white p-6 shadow-soft sm:rounded-2xl"
            >
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </DialogContext.Provider>,
    document.body
  );
}

export function DialogTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  const ctx = React.useContext(DialogContext);
  return (
    <h2
      id={ctx?.titleId}
      className={cn('font-heading text-xl font-semibold text-foreground', className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('mt-1 text-sm text-muted-foreground', className)} {...props} />;
}

export function DialogClose({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ctx = React.useContext(DialogContext);
  return (
    <button
      type="button"
      aria-label="Close dialog"
      onClick={() => ctx?.onOpenChange(false)}
      className={cn(
        'absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      {...props}
    >
      <X className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
