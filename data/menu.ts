// Transcribed directly from the Nature's Brew Co. digital menu board photo, plus the
// "Hot Coffee $5" chalkboard and display-cabinet price tags visible in the same shot.
// Two ingredient words on the board were hard to read with full confidence — see the
// inline "Confirm with business owner" comments below. Nothing else here is guessed.

export type MenuCategoryId =
  | 'low-fat-smoothies'
  | 'green-smoothies'
  | 'super-smoothies'
  | 'protein-smoothies'
  | 'dairy-free'
  | 'kids-friendly'
  | 'breakfast-smoothies'
  | 'fresh-juices'
  | 'coffee';

export type MenuAccent =
  | 'green'
  | 'mint'
  | 'mango'
  | 'berry'
  | 'orange'
  | 'blueberry'
  | 'coffee';

export type MenuTag = 'popular' | 'dairy-free' | 'kids' | 'protein' | 'green' | 'breakfast';

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  description: string;
  accent: MenuAccent;
  /** Regular / large pricing shown on the category header of the menu board (AUD). */
  priceRegular?: number;
  priceLarge?: number;
  calorieNote?: string;
}

export interface MenuProduct {
  id: string;
  categoryId: MenuCategoryId;
  name: string;
  /** Ingredients as listed on the menu board. */
  description: string;
  tags?: MenuTag[];
  /** Only set when a product is priced differently from its category (e.g. Recharge Chiller). */
  priceRegular?: number;
  priceLarge?: number;
  calorieNote?: string;
  featured?: boolean;
}

export interface MenuExtra {
  id: string;
  name: string;
  price: number;
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'low-fat-smoothies',
    label: 'Low Fat Smoothies',
    description: 'Lighter fruit blends, full of flavour.',
    accent: 'green',
    priceRegular: 7.0,
    priceLarge: 7.5,
    calorieNote: 'Reg 300–350 cal · Large 410–470 cal',
  },
  {
    id: 'green-smoothies',
    label: 'Green Smoothies',
    description: 'Leafy greens blended with fresh fruit.',
    accent: 'green',
    priceRegular: 7.5,
    priceLarge: 8.5,
    calorieNote: 'Reg 140–180 cal · Large 210–300 cal',
  },
  {
    id: 'super-smoothies',
    label: 'Super Smoothies',
    description: 'Bigger blends packed with extra fruit.',
    accent: 'blueberry',
    priceRegular: 7.5,
    priceLarge: 8.5,
    calorieNote: 'Reg 300–365 cal · Large 400–490 cal',
  },
  {
    id: 'protein-smoothies',
    label: 'Protein Smoothies',
    description: 'Fruit smoothies with added whey protein.',
    accent: 'berry',
    priceRegular: 7.5,
    priceLarge: 8.5,
  },
  {
    id: 'dairy-free',
    label: 'Dairy Free',
    description: 'Sorbet-based smoothies made without dairy.',
    accent: 'mint',
    priceRegular: 7.5,
    priceLarge: 8.5,
    calorieNote: 'Reg 240–260 cal · Large 320–340 cal',
  },
  {
    id: 'kids-friendly',
    label: 'Kids Friendly',
    description: 'Smaller, fruity smoothies for little ones.',
    accent: 'mango',
    priceRegular: 7.0,
  },
  {
    id: 'breakfast-smoothies',
    label: 'Breakfast Smoothies',
    description: 'A fruity, fibre-filled start to the morning.',
    accent: 'orange',
    priceRegular: 7.5,
    priceLarge: 8.5,
    calorieNote: 'Reg 300–325 cal · Large 400–425 cal',
  },
  {
    id: 'fresh-juices',
    label: 'Fresh Juices',
    description: 'Cold, freshly juiced fruit and vegetables.',
    accent: 'mango',
    priceRegular: 7.5,
    priceLarge: 8.5,
    calorieNote: 'Reg 190–200 cal · Large 210–370 cal',
  },
  {
    id: 'coffee',
    label: 'Coffee',
    description: 'Coffee favourites, hot or iced.',
    accent: 'coffee',
    priceRegular: 6.0,
    priceLarge: 6.5,
  },
];

export const menuProducts: MenuProduct[] = [
  // Low Fat Smoothies
  {
    id: 'berry-delight',
    categoryId: 'low-fat-smoothies',
    name: 'Berry Delight',
    description: 'Strawberries, blueberries, raspberries, banana, apple juice, vanilla yogurt and ice.',
    featured: true,
  },
  {
    id: 'mango-dream',
    categoryId: 'low-fat-smoothies',
    name: 'Mango Dream',
    description: 'Mango, banana, orange juice, yogurt and ice.',
    featured: true,
  },
  {
    id: 'blueberry-blues',
    categoryId: 'low-fat-smoothies',
    name: 'Blueberry Blues',
    description: 'Blueberries, banana, low fat or soy milk, vanilla yogurt and ice.',
  },
  {
    id: 'strawberry-wild',
    categoryId: 'low-fat-smoothies',
    name: 'Strawberry Wild',
    description: 'Strawberries, banana, low fat or soy milk, yogurt and ice.',
  },
  {
    id: 'passion-mango',
    categoryId: 'low-fat-smoothies',
    name: 'Passion Mango',
    description: 'Passionfruit, mango, yogurt, tropical juice and ice.',
  },
  {
    id: 'chocolate-silk',
    categoryId: 'low-fat-smoothies',
    name: 'Chocolate Silk',
    description: 'Chocolate, low fat or soy milk, banana, vanilla yogurt and ice.',
  },
  {
    id: 'banana-heaven',
    categoryId: 'low-fat-smoothies',
    name: 'Banana Heaven',
    description: 'Banana, honey, vanilla yogurt, low fat or soy milk and ice.',
  },
  {
    id: 'watermelon-wonder',
    categoryId: 'low-fat-smoothies',
    name: 'Watermelon Wonder',
    description: 'Freshly juiced watermelon, banana, low fat or soy milk, vanilla yogurt and ice.',
  },
  {
    id: 'just-peachy',
    categoryId: 'low-fat-smoothies',
    name: 'Just Peachy',
    description: 'Peaches, mango, mango nectar, yogurt and ice.',
  },

  // Green Smoothies
  {
    id: 'natures-tonic',
    categoryId: 'green-smoothies',
    name: "Nature's Tonic",
    description: 'Spinach, kale, mango, banana, coconut water, wheatgrass powder and ice.',
    tags: ['green'],
    featured: true,
  },
  {
    id: 'gardens-gift',
    categoryId: 'green-smoothies',
    name: "Garden's Gift",
    description: 'Kale, celery, strawberry, banana, cucumber, orange juice, chia seeds and ice.',
    tags: ['green'],
  },
  {
    id: 'tropical-lust',
    categoryId: 'green-smoothies',
    name: 'Tropical Lust',
    description: 'Spinach, pineapple chunks, mango, tropical juice, wheatgrass powder and ice.',
    tags: ['green'],
  },
  {
    id: 'pear-grape-fusion',
    categoryId: 'green-smoothies',
    name: 'Pear Grape Fusion',
    description: 'Pear, red grapes, spinach, banana, coconut water and ice.',
    tags: ['green'],
  },
  {
    id: 'avocado-special',
    categoryId: 'green-smoothies',
    name: 'Avocado Special',
    description: 'Avocado, banana, spinach, honey, low fat / soy milk or coconut water and ice.',
    tags: ['green'],
  },

  // Super Smoothies
  {
    id: 'alice-special',
    categoryId: 'super-smoothies',
    name: 'Alice Special',
    description: 'Mango, kale, banana, mango nectar, chia seeds, yogurt, sorbet and ice.',
    featured: true,
  },
  {
    id: 'caribbean-special',
    categoryId: 'super-smoothies',
    // Confirm with business owner: printed as "macao powder" on the board — transcribed
    // here as the likely intended ingredient, cacao powder.
    name: 'Caribbean Special',
    description: 'Coconut water, pineapple, peaches, yogurt, cacao powder, banana, flax seeds and ice.',
  },
  {
    id: 'berry-sensation',
    categoryId: 'super-smoothies',
    name: 'Berry Sensation',
    description:
      'Mixed berries, spinach, banana, raw cashews, low fat or soy milk, yogurt, sorbet, goji berries and ice.',
  },

  // Protein Smoothies
  {
    id: 'invincible',
    categoryId: 'protein-smoothies',
    name: 'Invincible',
    description: 'Spinach, banana, mango, dates, coconut water or low fat or soy milk, whey protein and ice.',
    tags: ['protein'],
    calorieNote: 'Reg 180 cal · Large 290 cal',
    featured: true,
  },
  {
    id: 'ultimate-blast',
    categoryId: 'protein-smoothies',
    name: 'Ultimate Blast',
    description:
      'Blueberries, strawberries, raspberries, banana, vanilla yogurt, low fat or soy milk, whey protein and ice.',
    tags: ['protein'],
    calorieNote: 'Reg 290 cal · Large 420 cal',
  },

  // Dairy Free
  {
    id: 'mango-madness',
    categoryId: 'dairy-free',
    name: 'Mango Madness',
    description: 'Mango, passionfruit, mango nectar, sorbet and ice.',
    tags: ['dairy-free'],
  },
  {
    id: 'omg-berries',
    categoryId: 'dairy-free',
    name: 'OMG Berries',
    description: 'Raspberries, blueberries, strawberries, apple juice, sorbet and ice.',
    tags: ['dairy-free'],
  },

  // Kids Friendly
  {
    id: 'frooti-fun',
    categoryId: 'kids-friendly',
    name: 'Frooti Fun',
    description: 'Banana, mango, apple juice, low fat yogurt, flax seeds (optional) and ice.',
    tags: ['kids'],
  },
  {
    id: 'coolers',
    categoryId: 'kids-friendly',
    name: 'Coolers',
    description: 'Spinach, banana, freshly juiced watermelon, whole milk or low fat milk, strawberry yogurt and ice.',
    tags: ['kids'],
  },

  // Breakfast Smoothies
  {
    id: 'sunrise',
    categoryId: 'breakfast-smoothies',
    name: 'Sunrise',
    description: 'Blueberries, corn cereal, banana, low fat or soy milk, flax seeds, low fat vanilla yogurt and ice.',
    tags: ['breakfast'],
    featured: true,
  },
  {
    id: 'rise-n-shine',
    categoryId: 'breakfast-smoothies',
    name: 'Rise N Shine',
    description:
      'Banana, strawberries, toasted muesli, dates, honey, low fat or soy milk, low fat vanilla yogurt and ice.',
    tags: ['breakfast'],
  },
  {
    id: 'almond-breeze',
    categoryId: 'breakfast-smoothies',
    name: 'Almond Breeze',
    description:
      'Natural almonds, banana, oats, raspberries, strawberry yogurt, low fat / soy milk or coconut water and ice.',
    tags: ['breakfast'],
  },

  // Fresh Juices
  {
    id: 'orchard-juice',
    categoryId: 'fresh-juices',
    name: 'Orchard Juice',
    description: 'Freshly juiced oranges, pear, apple, carrot, celery, beetroot, wheatgrass powder and ice.',
    featured: true,
  },
  {
    id: 'summer-cooler',
    categoryId: 'fresh-juices',
    name: 'Summer Cooler',
    description:
      'Freshly juiced watermelon, strawberries, orange, pineapple, ginger and wheatgrass powder and ice.',
  },
  {
    id: 'hangover-cure',
    categoryId: 'fresh-juices',
    name: 'Hangover Cure',
    description: 'Freshly juiced orange, apple, beetroot, lemon, carrots, mint and ice.',
  },

  // Coffee
  {
    id: 'iced-coffee',
    categoryId: 'coffee',
    name: 'Iced Coffee',
    description: 'Coffee, low fat milk, sugar syrup and ice.',
    calorieNote: 'Reg 145 cal · Large 225 cal',
  },
  {
    id: 'iced-mocha-coffee',
    categoryId: 'coffee',
    name: 'Iced Mocha Coffee',
    description: 'Cocoa powder, coffee, low fat milk, sugar syrup and ice.',
    calorieNote: 'Reg 165 cal · Large 265 cal',
  },
  {
    id: 'recharge-chiller',
    categoryId: 'coffee',
    name: 'Recharge Chiller',
    description: 'Milk, coffee, sugar syrup, vanilla icecream and ice.',
    priceRegular: 7.0,
    priceLarge: 7.5,
    calorieNote: 'Reg 250 cal · Large 370 cal',
    featured: true,
  },
  {
    id: 'hot-coffee',
    categoryId: 'coffee',
    name: 'Hot Coffee',
    description: 'Hot brewed coffee, from the in-store specials board.',
    priceRegular: 5.0,
    tags: ['popular'],
  },
];

export const menuExtras: MenuExtra[] = [
  { id: 'chia-seeds', name: 'Chia Seeds', price: 1.5 },
  { id: 'flax-seeds', name: 'Flax Seeds', price: 1.5 },
  { id: 'goji-berries', name: 'Goji Berries', price: 1.5 },
  { id: 'protein', name: 'Protein', price: 1.5 },
  { id: 'spinach', name: 'Spinach', price: 1.5 },
  { id: 'kale', name: 'Kale', price: 1.5 },
  { id: 'lemon', name: 'Lemon', price: 1.5 },
  { id: 'mint', name: 'Mint', price: 1.5 },
  { id: 'wheatgrass-powder', name: 'Wheatgrass Powder', price: 1.5 },
  { id: 'immunity-booster', name: 'Immunity Booster', price: 1.5 },
  { id: 'acai-powder', name: 'Acai Powder', price: 1.5 },
];

export function getCategory(id: MenuCategoryId): MenuCategory {
  const category = menuCategories.find((c) => c.id === id);
  if (!category) throw new Error(`Unknown menu category: ${id}`);
  return category;
}

/** Resolves a product's effective price, falling back to its category's price. */
export function getProductPrice(product: MenuProduct): { regular?: number; large?: number } {
  const category = getCategory(product.categoryId);
  return {
    regular: product.priceRegular ?? category.priceRegular,
    large: product.priceLarge ?? category.priceLarge,
  };
}

export const featuredProducts: MenuProduct[] = menuProducts.filter((p) => p.featured);
