'use client';

import { motion } from 'framer-motion';
import { LogoBadge } from '@/components/Logo';
import { fadeInUp } from '@/lib/motion-config';

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="container-brand grid items-center gap-12 lg:grid-cols-[auto,1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto"
        >
          <LogoBadge variant="lg" />
        </motion.div>

        <motion.div {...fadeInUp} className="text-center lg:text-left">
          <p className="section-eyebrow">About us</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl">
            Your local stop for something fresh.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground lg:mx-0">
            Nature&apos;s Brew Co. brings together fresh smoothies, colourful juices, coffee and
            convenient food in one friendly local stop. Whether you&apos;re starting the morning,
            taking a lunch break or looking for a refreshing drink, the menu offers something for
            every kind of day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
