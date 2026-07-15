'use client';

import { motion } from 'framer-motion';
import { Coffee, Croissant, Salad, Sandwich } from 'lucide-react';
import { fadeInUp } from '@/lib/motion-config';

const cabinetItems = [
  { icon: Croissant, name: 'Muffins', price: '$4.00', confirmed: true },
  { icon: Salad, name: 'Fruit Salad (large)', price: '$7.50', confirmed: true },
  { icon: Coffee, name: 'Hot Coffee', price: '$5.00', confirmed: true },
  { icon: Sandwich, name: 'Sandwiches, banana bread, coconuts, water & snacks', price: null, confirmed: false },
];

export default function CoffeeBreakfast() {
  return (
    <section className="bg-gradient-to-b from-brand-cream to-white py-20 sm:py-28">
      <div className="container-brand grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative order-2 flex h-72 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-charcoal via-brand-charcoal/90 to-fruit-orange/40 sm:h-96 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-6 text-white">
            {cabinetItems.map(({ icon: Icon, name }) => (
              <div key={name} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className="max-w-[9rem] text-xs font-semibold leading-snug">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeInUp} className="order-1 lg:order-2">
          <p className="section-eyebrow bg-brand-cream text-brand-charcoal">Coffee &amp; grab-and-go</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl">
            Coffee, breakfast and food to go.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Alongside the smoothie and juice bar, Nature&apos;s Brew Co. keeps a display cabinet
            stocked with muffins, sandwiches, banana bread and fruit bowls — plus fresh coconuts,
            bottled water and packaged snacks for something quick on the go.
          </p>

          <ul className="mt-8 space-y-3">
            {cabinetItems.map(({ icon: Icon, name, price }) => (
              <li
                key={name}
                className="flex items-center justify-between gap-4 rounded-xl border border-border bg-white/70 px-4 py-3"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="font-heading text-sm font-semibold text-brand-charcoal">
                    {name}
                  </span>
                </span>
                <span className="whitespace-nowrap text-sm font-bold text-brand-charcoal">
                  {price ?? 'In-store pricing'}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
