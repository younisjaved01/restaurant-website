'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { getCategory, getProductPrice, type MenuProduct } from '@/data/menu';
import { accentStyles, categoryIcons } from '@/lib/accent';
import { cardHover } from '@/lib/motion-config';

const tagLabels: Record<string, string> = {
  popular: 'Popular',
  'dairy-free': 'Dairy free',
  kids: 'Kids',
  protein: 'Protein',
  green: 'Green',
  breakfast: 'Breakfast',
};

interface ProductCardProps {
  product: MenuProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const category = getCategory(product.categoryId);
  const accent = accentStyles[category.accent];
  const price = getProductPrice(product);
  const Icon = categoryIcons[product.categoryId];

  return (
    <motion.article
      {...cardHover}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card"
    >
      <div className="relative flex h-28 items-center justify-center bg-muted">
        <div className={`absolute inset-0 opacity-10 ${accent.bar}`} aria-hidden="true" />
        <Icon className={`relative h-10 w-10 ${accent.text}`} aria-hidden="true" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <Badge variant={accent.badge}>{category.label}</Badge>
          {price.regular != null && (
            <span className="whitespace-nowrap font-heading text-lg font-bold text-brand-charcoal">
              ${price.regular.toFixed(2)}
              {price.large != null && (
                <span className="ml-1 text-xs font-medium text-muted-foreground">
                  / ${price.large.toFixed(2)} lge
                </span>
              )}
            </span>
          )}
        </div>

        <h3 className="mt-3 font-heading text-lg font-bold text-brand-charcoal">
          {product.name}
        </h3>
        <p className="mt-1.5 line-clamp-3 text-sm text-muted-foreground">{product.description}</p>

        {product.tags && product.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tagLabels[tag] ?? tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
