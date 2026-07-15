import {
  Blend,
  Coffee,
  Citrus,
  Droplet,
  Dumbbell,
  Leaf,
  Smile,
  Sunrise,
  type LucideIcon,
} from 'lucide-react';
import type { MenuAccent, MenuCategoryId } from '@/data/menu';
import type { BadgeProps } from '@/components/ui/badge';

export const categoryIcons: Record<MenuCategoryId, LucideIcon> = {
  'low-fat-smoothies': Blend,
  'green-smoothies': Leaf,
  'super-smoothies': Blend,
  'protein-smoothies': Dumbbell,
  'dairy-free': Droplet,
  'kids-friendly': Smile,
  'breakfast-smoothies': Sunrise,
  'fresh-juices': Citrus,
  coffee: Coffee,
};

interface AccentStyle {
  badge: NonNullable<BadgeProps['variant']>;
  bar: string;
  text: string;
}

export const accentStyles: Record<MenuAccent, AccentStyle> = {
  green: { badge: 'green', bar: 'bg-primary', text: 'text-primary' },
  mint: { badge: 'mint', bar: 'bg-brand-greenBright', text: 'text-brand-greenDark' },
  mango: { badge: 'mango', bar: 'bg-fruit-mango', text: 'text-fruit-mango' },
  berry: { badge: 'berry', bar: 'bg-fruit-berry', text: 'text-fruit-berry' },
  orange: { badge: 'orange', bar: 'bg-fruit-orange', text: 'text-fruit-orange' },
  blueberry: { badge: 'blueberry', bar: 'bg-fruit-blueberry', text: 'text-fruit-blueberry' },
  coffee: { badge: 'coffee', bar: 'bg-brand-charcoal', text: 'text-brand-charcoal' },
};
