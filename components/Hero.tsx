'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Apple, Cherry, Citrus, Grape, Leaf } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { LogoBadge } from '@/components/Logo';
import { heroChild, heroContainer } from '@/lib/motion-config';

const floaters = [
  { Icon: Apple, className: 'left-[6%] top-[14%] text-fruit-berry', delay: 0 },
  { Icon: Citrus, className: 'right-[10%] top-[8%] text-fruit-mango', delay: 0.4 },
  { Icon: Grape, className: 'right-[4%] top-[52%] text-fruit-blueberry', delay: 0.8 },
  { Icon: Cherry, className: 'left-[2%] top-[58%] text-fruit-orange', delay: 1.2 },
  { Icon: Leaf, className: 'left-[38%] top-[4%] text-brand-green', delay: 0.2 },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-mint via-white to-white pb-20 pt-14 sm:pb-28 sm:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(53,199,89,0.16), transparent 40%), radial-gradient(circle at 85% 15%, rgba(243,167,18,0.14), transparent 40%), radial-gradient(circle at 80% 80%, rgba(108,92,231,0.12), transparent 40%)',
        }}
        aria-hidden="true"
      />

      <div className="container-brand relative grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial="initial"
          animate="animate"
          variants={heroContainer}
          className="relative z-10 text-center lg:text-left"
        >
          <motion.p variants={heroChild} className="section-eyebrow">
            <Leaf className="h-4 w-4" aria-hidden="true" />
            Alice Springs&apos; fresh smoothie stop
          </motion.p>

          <motion.h1
            variants={heroChild}
            className="mt-5 text-balance font-heading text-4xl font-bold leading-[1.08] text-brand-charcoal sm:text-5xl lg:text-6xl"
          >
            Freshly blended.
            <br />
            <span className="text-primary">Naturally better.</span>
          </motion.h1>

          <motion.p
            variants={heroChild}
            className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground lg:mx-0"
          >
            Smoothies, fresh juices, coffee and healthy favourites made for busy days and better
            choices.
          </motion.p>

          <motion.div
            variants={heroChild}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href="#menu" className={buttonVariants({ size: 'lg', className: 'w-full sm:w-auto' })}>
              Explore the Menu
            </a>
            <a
              href="#visit"
              className={buttonVariants({
                variant: 'secondary',
                size: 'lg',
                className: 'w-full sm:w-auto',
              })}
            >
              Visit Nature&apos;s Brew
            </a>
          </motion.div>
        </motion.div>

        <div className="relative z-10 mx-auto flex h-[320px] w-full max-w-md items-center justify-center sm:h-[420px]">
          {floaters.map(({ Icon, className, delay }, index) => (
            <motion.span
              key={index}
              className={`absolute rounded-full bg-white p-3 shadow-card ${className}`}
              initial={{ opacity: 0, y: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, -14, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.6 + delay },
                y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay },
              }}
            >
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
            </motion.span>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative flex h-56 w-56 items-center justify-center rounded-full bg-white/60 shadow-soft ring-1 ring-black/5 backdrop-blur-sm sm:h-72 sm:w-72"
          >
            <LogoBadge variant="lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
