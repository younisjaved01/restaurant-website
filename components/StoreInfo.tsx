'use client';

import { motion } from 'framer-motion';
import { Clock, Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import { business } from '@/data/business';
import { buttonVariants } from '@/components/ui/button';
import { ContactLink } from '@/components/ContactLink';
import { fadeInUp } from '@/lib/motion-config';

const socialIcons = { instagram: Instagram, facebook: Facebook };

export default function StoreInfo() {
  return (
    <section id="visit" className="bg-brand-mint/40 py-20 sm:py-28">
      <div className="container-brand">
        <motion.div {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Visit us</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl">
            Come Say Hello
          </h2>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="mx-auto mt-12 grid max-w-3xl gap-6 rounded-3xl bg-white p-8 shadow-card sm:grid-cols-2 sm:p-10"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-heading text-sm font-bold text-brand-charcoal">Address</p>
                <p className="text-sm text-muted-foreground">
                  {business.address}, {business.locality}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-heading text-sm font-bold text-brand-charcoal">Phone</p>
                <p className="text-sm text-muted-foreground">{business.phone}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-heading text-sm font-bold text-brand-charcoal">Opening Hours</p>
                <ul className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                  {business.openingHours.map((entry) => (
                    <li key={entry.day} className="flex justify-between gap-4">
                      <span>{entry.day}</span>
                      <span>{entry.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              {business.social.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <ContactLink
                    key={link.label}
                    value={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </ContactLink>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
            <ContactLink
              value={business.phone}
              href={business.phoneHref}
              className={buttonVariants({ variant: 'primary', size: 'lg', className: 'flex-1' })}
            >
              Call the Store
            </ContactLink>
            <ContactLink
              value={business.mapsUrl}
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'outline', size: 'lg', className: 'flex-1' })}
            >
              Get Directions
            </ContactLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
