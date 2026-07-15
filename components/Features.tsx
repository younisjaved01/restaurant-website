'use client';

import { motion } from 'framer-motion';
import { Blend, Layers, Smile, Timer, type LucideIcon } from 'lucide-react';
import { fadeInUp, staggerChild, staggerContainer } from '@/lib/motion-config';

interface WhyChooseCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const cards: WhyChooseCard[] = [
  {
    icon: Blend,
    title: 'Blended fresh',
    description: 'Every smoothie and juice is blended fresh when you order.',
  },
  {
    icon: Layers,
    title: 'Plenty of choice',
    description: 'Low fat, green, protein, dairy free, kids’ and breakfast options.',
  },
  {
    icon: Timer,
    title: 'Quick and convenient',
    description: 'A fast stop for smoothies, coffee and food to go.',
  },
  {
    icon: Smile,
    title: 'Friendly local stop',
    description: 'A friendly local spot to grab something fresh, any time of day.',
  },
];

export default function Features() {
  return (
    <section id="why-us" className="bg-secondary/40 py-20 sm:py-28">
      <div className="container-brand">
        <motion.div {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Why choose us</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl">
            Why Nature&apos;s Brew Co.
          </h2>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerChild.variants}
              className="flex flex-col items-center rounded-2xl border border-border bg-white p-8 text-center shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                <card.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold text-brand-charcoal">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
