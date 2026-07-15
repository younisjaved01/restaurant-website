export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' } as const,
  viewport: { once: true, margin: '0px 0px -100px 0px' },
};

export const fadeIn = {
  initial: { opacity: 0, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' } as const,
  viewport: { once: true, margin: '0px 0px -100px 0px' },
};

export const staggerContainer = {
  initial: 'initial',
  whileInView: 'whileInView',
  viewport: { once: true, margin: '0px 0px -100px 0px' },
  variants: {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  },
};

export const staggerChild = {
  variants: {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' } as const,
    },
  },
};

export const heroContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export const heroChild = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' } as const,
};

export const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 10 } as const,
};

export const cardHover = {
  whileHover: { y: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' },
  transition: { type: 'spring', stiffness: 300, damping: 10 } as const,
};

export const mobileMenuVariants = {
  initial: { opacity: 0, x: 300 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 300 },
  transition: { type: 'spring', stiffness: 300, damping: 30 } as const,
};

export const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export const modalVariants = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 16, scale: 0.98 },
  transition: { type: 'spring', stiffness: 340, damping: 30 } as const,
};

export const tabPanelVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25, ease: 'easeOut' } as const,
};
