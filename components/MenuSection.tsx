'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MenuFilters from '@/components/MenuFilters';
import MenuItem from '@/components/MenuItem';
import { menuCategories, menuProducts } from '@/data/menu';
import { fadeInUp, tabPanelVariants } from '@/lib/motion-config';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const categoriesToShow =
    activeCategory === 'all'
      ? menuCategories
      : menuCategories.filter((c) => c.id === activeCategory);

  const query = search.trim().toLowerCase();

  const groups = categoriesToShow
    .map((category) => ({
      category,
      products: menuProducts.filter(
        (product) =>
          product.categoryId === category.id &&
          (!query ||
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query))
      ),
    }))
    .filter((group) => group.products.length > 0);

  return (
    <section id="menu" className="bg-muted/60 py-20 sm:py-28">
      <div className="container-brand">
        <motion.div {...fadeInUp} className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Full menu</p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl">
            The Digital Menu
          </h2>
          <p className="mt-4 text-muted-foreground">
            Browse every smoothie, juice and coffee on the Nature&apos;s Brew Co. board.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 max-w-3xl">
          <MenuFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            search={search}
            onSearchChange={setSearch}
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              id="menu-panel"
              role="tabpanel"
              aria-labelledby={`tab-${activeCategory}`}
              variants={tabPanelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-10"
            >
              {groups.length === 0 && (
                <p className="text-center text-muted-foreground">
                  No menu items match your search.
                </p>
              )}
              {groups.map(({ category, products }) => (
                <div key={category.id}>
                  <div className="mb-1 flex items-baseline justify-between gap-4">
                    <h3 className="font-heading text-xl font-bold text-brand-charcoal">
                      {category.label}
                    </h3>
                    {category.priceRegular != null && (
                      <span className="whitespace-nowrap text-sm font-semibold text-muted-foreground">
                        Reg ${category.priceRegular.toFixed(2)}
                        {category.priceLarge != null &&
                          ` · Large $${category.priceLarge.toFixed(2)}`}
                      </span>
                    )}
                  </div>
                  {category.calorieNote && (
                    <p className="mb-4 text-xs text-muted-foreground">{category.calorieNote}</p>
                  )}
                  <ul className="mt-4 space-y-3">
                    {products.map((product) => (
                      <MenuItem key={product.id} product={product} />
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
