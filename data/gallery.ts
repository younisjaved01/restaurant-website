// A photo of the menu board and display cabinet was supplied and used to source the menu
// content and logo design, but no standalone photography was provided for the gallery
// itself. Each entry below renders as a tasteful branded CSS panel (gradient + icon)
// instead of a photo. Add a real `image` path (e.g. '/images/gallery/counter.jpg') once
// photos are available and the Gallery component will automatically switch to next/image
// for that entry — no other code changes needed.

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  accent: 'green' | 'mint' | 'mango' | 'berry' | 'orange' | 'blueberry' | 'coffee';
  icon: 'blend' | 'citrus' | 'coffee' | 'leaf' | 'sandwich' | 'store';
  image?: string;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'smoothie-bar',
    title: 'The Smoothie Bar',
    caption: 'Fresh blends, made to order',
    accent: 'green',
    icon: 'blend',
    alt: "Nature's Brew Co. smoothie bar counter",
  },
  {
    id: 'juice-press',
    title: 'Fresh Juice',
    caption: 'Cold blended daily',
    accent: 'mango',
    icon: 'citrus',
    alt: "Fresh juice being prepared at Nature's Brew Co.",
  },
  {
    id: 'coffee-counter',
    title: 'Coffee Counter',
    caption: 'Hot and iced coffee favourites',
    accent: 'coffee',
    icon: 'coffee',
    alt: "Nature's Brew Co. coffee counter",
  },
  {
    id: 'grab-and-go',
    title: 'Grab & Go Cabinet',
    caption: 'Muffins and fresh fruit salad',
    accent: 'berry',
    icon: 'sandwich',
    alt: "Nature's Brew Co. grab-and-go display cabinet",
  },
  {
    id: 'fresh-ingredients',
    title: 'Fresh Ingredients',
    caption: 'Real fruit, blended fresh',
    accent: 'blueberry',
    icon: 'leaf',
    alt: 'Fresh fruit ingredients used at Nature’s Brew Co.',
  },
  {
    id: 'storefront',
    title: 'Visit Us',
    caption: 'Your local stop for something fresh',
    accent: 'mint',
    icon: 'store',
    alt: "Nature's Brew Co. storefront",
  },
];
