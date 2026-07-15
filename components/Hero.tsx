'use client';

import { motion } from 'motion/react';
import { buttonHover, heroChild, heroContainer } from '@/lib/motion-config';

const heroFeatures = [
  { icon: '🍣', label: 'Freshly Made Daily' },
  { icon: '⚡', label: 'Quick & Easy' },
  { icon: '🌿', label: 'Premium Quality' },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white md:py-32"
    >
      <motion.div
        className="mx-auto max-w-4xl px-4 text-center sm:px-6"
        initial="initial"
        animate="animate"
        variants={heroContainer}
      >
        <motion.h1
          className="text-4xl font-bold leading-tight md:text-5xl"
          variants={heroChild}
        >
          Fresh Sushi. Fresh Juice. Fresh Energy.
        </motion.h1>

        <motion.p className="mt-6 text-lg text-gray-300 md:text-xl" variants={heroChild}>
          Made daily in Yeperenye Centre, Alice Springs. Premium ingredients.
          Uncompromising quality.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={heroChild}
        >
          <motion.a href="#menu" className="btn-primary" {...buttonHover}>
            Browse Menu
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-secondary bg-transparent text-white hover:bg-white hover:text-gray-900"
            {...buttonHover}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
          variants={heroChild}
        >
          {heroFeatures.map((feature) => (
            <motion.div
              key={feature.label}
              className="flex flex-col items-center gap-2 rounded-xl bg-white/5 p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <span className="text-3xl" aria-hidden="true">
                {feature.icon}
              </span>
              <span className="font-medium text-gray-100">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
