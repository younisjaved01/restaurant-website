'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion, useReducedMotion } from 'framer-motion';
import { Apple, Cherry, CheckCircle2, Citrus, Grape, Leaf, Sprout, Wheat } from 'lucide-react';
import { fadeInUp, staggerChild, staggerContainer } from '@/lib/motion-config';

const ingredientIcons = [Apple, Citrus, Grape, Cherry, Leaf, Sprout, Wheat, Apple];

const points = [
  'Fresh fruit combinations blended into every smoothie and juice',
  'Made fresh when you order',
  'Options across low fat, green, protein, dairy free and kids’ smoothies',
  'Smoothies, juices, coffee and breakfast choices on one menu',
];

// Drawn directly from real menu-board ingredients — not an invented list.
const ingredients = [
  'Strawberries',
  'Blueberries',
  'Mango',
  'Banana',
  'Spinach',
  'Kale',
  'Avocado',
  'Pineapple',
  'Watermelon',
  'Chia Seeds',
  'Wheatgrass',
  'Coconut Water',
  'Ginger',
  'Beetroot',
  'Oats',
  'Almonds',
];

export default function IngredientsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 28,
        ease: 'none',
        repeat: -1,
      });
      return () => tween.kill();
    }, trackRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section className="overflow-hidden bg-brand-mint/50 py-20 sm:py-28">
      <div className="container-brand grid items-center gap-12 lg:grid-cols-2">
        <motion.div {...fadeInUp}>
          <p className="section-eyebrow">Fresh, always</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl">
            Real ingredients. Freshly blended.
          </h2>
          <motion.ul {...staggerContainer} className="mt-6 space-y-4">
            {points.map((point) => (
              <motion.li
                key={point}
                variants={staggerChild.variants}
                className="flex items-start gap-3 text-base text-brand-charcoal/90"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative flex h-64 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green via-brand-greenBright to-fruit-mango sm:h-80"
        >
          <div className="grid grid-cols-4 gap-4 p-8 opacity-90">
            {ingredientIcons.map((Icon, i) => (
              <span
                key={i}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm"
                aria-hidden="true"
              >
                <Icon className="h-6 w-6" />
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-16 border-y border-brand-greenDark/10 py-6">
        <div
          className="flex w-max gap-10 whitespace-nowrap"
          ref={trackRef}
          aria-hidden="true"
        >
          {[...ingredients, ...ingredients].map((item, index) => (
            <span
              key={index}
              className="font-heading text-lg font-semibold text-brand-greenDark/70"
            >
              {item}
              <span className="ml-10 text-brand-greenBright">•</span>
            </span>
          ))}
        </div>
        <span className="sr-only">
          Ingredients used across the menu: {ingredients.join(', ')}
        </span>
      </div>
    </section>
  );
}
