'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { featuredProducts } from '@/data/menu';
import { fadeInUp, staggerChild, staggerContainer } from '@/lib/motion-config';

export default function FeaturedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="favourites" className="bg-white py-20 sm:py-28">
      <div className="container-brand">
        <motion.div {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Fan favourites</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl">
            Nature&apos;s Favourites
          </h2>
          <p className="mt-4 text-muted-foreground">
            A few of the most popular picks from the Nature&apos;s Brew Co. menu board.
          </p>
        </motion.div>

        {/* Desktop / tablet grid */}
        <motion.div
          {...staggerContainer}
          className="mt-12 hidden grid-cols-2 gap-6 sm:grid lg:grid-cols-4"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={staggerChild.variants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile carousel */}
        <div className="mt-10 sm:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex">
              {featuredProducts.map((product) => (
                <div key={product.id} className="min-w-0 flex-[0_0_84%] pl-4">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous favourite"
              onClick={scrollPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-brand-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to favourite ${index + 1}`}
                  aria-current={index === selectedIndex}
                  onClick={() => scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === selectedIndex ? 'w-6 bg-primary' : 'w-2 bg-border'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next favourite"
              onClick={scrollNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-brand-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
