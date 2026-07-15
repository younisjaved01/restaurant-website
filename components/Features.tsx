'use client';

import { motion } from 'motion/react';
import { features } from '@/lib/data';
import { cardHover, staggerChild, staggerContainer } from '@/lib/motion-config';

export default function Features() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Why Choose Us
        </h2>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          {...staggerContainer}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="card-shadow flex flex-col items-center bg-white p-8 text-center"
              {...staggerChild}
              {...cardHover}
            >
              <motion.span
                className="text-4xl"
                aria-hidden="true"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                {feature.icon}
              </motion.span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
