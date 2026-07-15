'use client';

import { motion } from 'motion/react';
import { buttonHover, fadeInUp } from '@/lib/motion-config';

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-2xl px-4 text-center sm:px-6"
        {...fadeInUp}
      >
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Ready to Order?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Fresh sushi and juice delivered to your door, or order ahead for pickup at
          Yeperenye Centre.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a href="#menu" className="btn-primary" {...buttonHover}>
            Start Ordering
          </motion.a>
          <motion.a href="#contact" className="btn-secondary" {...buttonHover}>
            Learn More
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
