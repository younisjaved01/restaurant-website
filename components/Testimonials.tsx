'use client';

import { motion } from 'motion/react';
import { testimonials } from '@/lib/data';
import { cardHover, staggerChild, staggerContainer } from '@/lib/motion-config';

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          What Our Customers Say
        </h2>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
          {...staggerContainer}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="card-shadow flex flex-col bg-white p-8"
              {...staggerChild}
              {...cardHover}
            >
              <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <motion.span
                    key={index}
                    aria-hidden="true"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
              <p className="mt-4 flex-1 italic text-gray-700">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="mt-4 font-semibold text-gray-900">— {testimonial.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
