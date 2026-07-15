'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Blend, Citrus, Coffee, Leaf, Sandwich, Store, type LucideIcon } from 'lucide-react';
import { Dialog, DialogClose, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { galleryItems, type GalleryItem } from '@/data/gallery';
import { accentStyles } from '@/lib/accent';
import { fadeInUp, staggerChild, staggerContainer } from '@/lib/motion-config';

const iconMap: Record<GalleryItem['icon'], LucideIcon> = {
  blend: Blend,
  citrus: Citrus,
  coffee: Coffee,
  leaf: Leaf,
  sandwich: Sandwich,
  store: Store,
};

export default function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="container-brand">
        <motion.div {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Gallery</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl">
            A Peek Inside
          </h2>
          <p className="mt-4 text-muted-foreground">
            More photos of the store, drinks and cabinet will be added here soon.
          </p>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
        >
          {galleryItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            const accent = accentStyles[item.accent];
            const tall = index === 0 || index === 4;

            return (
              <motion.button
                key={item.id}
                type="button"
                variants={staggerChild.variants}
                onClick={() => setActive(item)}
                className={`group relative overflow-hidden rounded-2xl text-left shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  tall ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
                }`}
              >
                <span className={`absolute inset-0 ${accent.bar}`} aria-hidden="true" />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-opacity group-hover:from-black/70"
                  aria-hidden="true"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white/90 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden="true" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <span className="block font-heading text-sm font-bold sm:text-base">
                    {item.title}
                  </span>
                  <span className="block text-xs text-white/80">{item.caption}</span>
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        {active && (
          <>
            <DialogClose />
            <div
              className={`mb-4 flex h-40 items-center justify-center rounded-xl ${accentStyles[active.accent].bar}`}
            >
              {(() => {
                const Icon = iconMap[active.icon];
                return <Icon className="h-14 w-14 text-white" aria-hidden="true" />;
              })()}
            </div>
            <DialogTitle>{active.title}</DialogTitle>
            <DialogDescription>{active.caption}</DialogDescription>
          </>
        )}
      </Dialog>
    </section>
  );
}
