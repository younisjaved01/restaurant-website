'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    let frame = requestAnimationFrame(raf);

    function handleAnchorClick(event: MouseEvent) {
      const anchor = (event.target as HTMLElement)?.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -88 });
      history.pushState(null, '', href);
    }

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
