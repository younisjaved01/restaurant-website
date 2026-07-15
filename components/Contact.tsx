'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Loader2, MapPin, Phone } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ContactLink } from '@/components/ContactLink';
import { business } from '@/data/business';
import { contactFormResolver, type ContactFormValues } from '@/lib/validations';
import { fadeInUp } from '@/lib/motion-config';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: contactFormResolver });

  async function onSubmit() {
    setStatus('submitting');

    // No form backend is configured yet. This intentionally skips any real network
    // request instead of pretending to send an email. To go live, connect a service
    // such as Formspree (https://formspree.io) or Resend (https://resend.com) here,
    // e.g. `await fetch('https://formspree.io/f/your-id', { method: 'POST', body: ... })`.
    await new Promise((resolve) => setTimeout(resolve, 700));

    setStatus('success');
    reset();
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="container-brand">
        <motion.div {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Get in touch</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl">
            Send Us a Message
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a question about the menu, extras or catering? Send a message or reach out
            directly.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-[minmax(0,260px),1fr]">
          <motion.div {...fadeInUp} className="space-y-4">
            <ContactLink
              value={business.phone}
              href={business.phoneHref}
              className={buttonVariants({ variant: 'primary', className: 'w-full' })}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call the Store
            </ContactLink>
            <ContactLink
              value={business.mapsUrl}
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'outline', className: 'w-full' })}
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </ContactLink>
            <div className="rounded-xl border border-border p-4">
              <p className="flex items-center gap-2 font-heading text-sm font-bold text-brand-charcoal">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                Opening Hours
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {business.openingHours.map((entry) => (
                  <li key={entry.day} className="flex justify-between gap-3">
                    <span>{entry.day}</span>
                    <span>{entry.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            {status === 'success' ? (
              <div
                role="status"
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-primary/30 bg-secondary p-10 text-center"
              >
                <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
                <p className="font-heading text-lg font-bold text-brand-charcoal">
                  Thanks — message received!
                </p>
                <p className="max-w-sm text-sm text-muted-foreground">
                  This is a demo confirmation. Connect a form service (see the code comment in
                  Contact.tsx) so messages are actually delivered.
                </p>
                <Button variant="outline" size="sm" onClick={() => setStatus('idle')}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 rounded-2xl border border-border p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      autoComplete="name"
                      invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1.5 text-sm text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 text-sm text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p id="phone-error" role="alert" className="mt-1.5 text-sm text-destructive">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1.5 text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-sm text-destructive">
                    Something went wrong. Please try again.
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' && (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  )}
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
