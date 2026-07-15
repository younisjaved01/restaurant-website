import { Badge } from '@/components/ui/badge';
import { getCategory, getProductPrice, type MenuProduct } from '@/data/menu';
import { accentStyles } from '@/lib/accent';

const tagLabels: Record<string, string> = {
  popular: 'Popular',
  'dairy-free': 'Dairy free',
  kids: 'Kids',
  protein: 'Protein',
  green: 'Green',
  breakfast: 'Breakfast',
};

interface MenuItemProps {
  product: MenuProduct;
  showCategory?: boolean;
}

export default function MenuItem({ product, showCategory }: MenuItemProps) {
  const category = getCategory(product.categoryId);
  const accent = accentStyles[category.accent];
  const price = getProductPrice(product);

  return (
    <li className="flex gap-4 rounded-xl border border-border bg-white p-4 sm:p-5">
      <span className={`mt-1 h-full w-1 shrink-0 rounded-full ${accent.bar}`} aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-heading text-base font-bold text-brand-charcoal sm:text-lg">
            {product.name}
          </h3>
          {price.regular != null && (
            <span className="whitespace-nowrap font-heading text-base font-bold text-brand-charcoal">
              ${price.regular.toFixed(2)}
              {price.large != null && (
                <span className="ml-1 text-xs font-medium text-muted-foreground">
                  / ${price.large.toFixed(2)} lge
                </span>
              )}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {showCategory && <Badge variant={accent.badge}>{category.label}</Badge>}
          {product.tags?.map((tag) => (
            <Badge key={tag} variant="outline">
              {tagLabels[tag] ?? tag}
            </Badge>
          ))}
          {product.calorieNote && (
            <span className="text-xs text-muted-foreground">{product.calorieNote}</span>
          )}
        </div>
      </div>
    </li>
  );
}
