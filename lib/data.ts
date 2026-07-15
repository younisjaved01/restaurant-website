export interface MenuItem {
  id: number;
  name: string;
  price: number;
  desc: string;
}

export interface MenuCategories {
  sushi: MenuItem[];
  donburi: MenuItem[];
  juices: MenuItem[];
}

export type MenuCategoryKey = keyof MenuCategories;

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const menuCategories: MenuCategories = {
  sushi: [
    {
      id: 1,
      name: 'Crunchy Chicken Avocado',
      price: 8.5,
      desc: 'Crispy, fresh, delicious',
    },
    { id: 2, name: 'Tuna Avocado', price: 9.0, desc: 'Premium tuna selection' },
    { id: 3, name: 'Crispy Chicken Nigiri', price: 7.5, desc: 'Pack of 4' },
    { id: 4, name: 'California Roll', price: 9.5, desc: 'Classic favorite' },
    { id: 5, name: 'Spicy Tuna Roll', price: 10.0, desc: 'For spice lovers' },
    { id: 6, name: 'Tempura Prawns', price: 11.0, desc: 'Crispy & succulent' },
  ],
  donburi: [
    {
      id: 7,
      name: 'Katsu + Teriyaki Chicken',
      price: 14.5,
      desc: 'Combo special',
    },
    {
      id: 8,
      name: 'Japanese Curry Bento',
      price: 13.0,
      desc: 'Mild to medium heat',
    },
    {
      id: 9,
      name: 'Teriyaki Chicken Teppanyaki',
      price: 14.0,
      desc: 'Pan-fried perfection',
    },
    {
      id: 10,
      name: 'Teppanyaki Udon Noodles',
      price: 12.5,
      desc: 'Thick, chewy noodles',
    },
  ],
  juices: [
    {
      id: 11,
      name: 'Fresh Cold Pressed Juice',
      price: 6.5,
      desc: 'Mixed fruits',
    },
    { id: 12, name: 'Smoothie (Various)', price: 7.0, desc: 'Pick your flavor' },
    { id: 13, name: 'Protein Smoothie', price: 8.5, desc: 'Protein-packed' },
    { id: 14, name: 'Fresh Coffee', price: 4.5, desc: 'Daily brew' },
    { id: 15, name: 'Milk Tea', price: 6.0, desc: 'Creamy & smooth' },
  ],
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'Fantastic sushi!! The freshness is incredible. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'James K.',
    text: 'Delicious fresh food and great service. Best sushi in Alice Springs.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma L.',
    text: 'Perfect for quick lunch. Love their juice combos!',
    rating: 5,
  },
];

export const features: Feature[] = [
  {
    id: 1,
    title: 'Freshly Made Daily',
    description: 'Premium ingredients prepared fresh every single day',
    icon: '🍣',
  },
  {
    id: 2,
    title: 'Custom Juice Blends',
    description: 'Squeeze fresh juices made to order in minutes',
    icon: '⚡',
  },
  {
    id: 3,
    title: 'Premium Quality',
    description: 'Only the finest ingredients from trusted suppliers',
    icon: '🌿',
  },
];
