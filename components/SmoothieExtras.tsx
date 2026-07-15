'use client';

import { motion } from 'framer-motion';
import {
  Cherry,
  Citrus,
  Dumbbell,
  Leaf,
  ShieldCheck,
  Sparkles,
  Sprout,
  Wheat,
  type LucideIcon,
} from 'lucide-react';
import { menuExtras } from '@/data/menu';
import { fadeInUp, staggerChild, staggerContainer } from '@/lib/motion-config';

const extraIcons: Record<string, LucideIcon> = {
  'chia-seeds': Sprout,
  'flax-seeds': Sprout,
  'goji-berries': Cherry,
  protein: Dumbbell,
  spinach: Leaf,
  kale: Leaf,
  lemon: Citrus,
  mint: Leaf,
  'wheatgrass-powder': Wheat,
  'immunity-booster': ShieldCheck,
  'acai-powder': Sparkles,
};

export default function SmoothieExtras() {
  return (
    <section id="extras" className="bg-white py-20 sm:py-28">
      <div className="container-brand">
        <motion.div {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Build your smoothie</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl">
            Make it yours.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Boost any smoothie with an extra for {formatPrice(menuExtras[0]?.price)} each.
          </p>
        </motion.div>

        <motion.ul
          {...staggerContainer}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {menuExtras.map((extra) => {
            const Icon = extraIcons[extra.id] ?? Sprout;
            return (
              <motion.li
                key={extra.id}
                variants={staggerChild.variants}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-brand-mint/40 p-5 text-center transition-colors hover:bg-brand-mint"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-card">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-heading text-sm font-bold text-brand-charcoal">
                  {extra.name}
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  +{formatPrice(extra.price)}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

function formatPrice(price?: number) {
  return price != null ? `$${price.toFixed(2)}` : 'Ask us about smoothie extras';
}
