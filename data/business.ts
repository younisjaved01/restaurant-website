export interface OpeningHours {
  day: string;
  hours: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'instagram' | 'facebook';
}

export interface BusinessDetails {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  locality: string;
  address: string;
  phone: string;
  phoneHref: string;
  email: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  openingHours: OpeningHours[];
  social: SocialLink[];
}

// Confirm all placeholder values below with the business owner before launch.
// Nothing here is guessed — every unconfirmed field is a clearly labelled placeholder.
/** True while a business detail is still an unfilled `[Add ...]` placeholder. */
export function isPlaceholder(value: string): boolean {
  return value.trim().startsWith('[');
}

export const business: BusinessDetails = {
  name: "Nature's Brew Co.",
  shortName: "Nature's Brew",
  tagline: 'Freshly blended. Naturally better.',
  description:
    "Nature's Brew Co. brings together fresh smoothies, colourful juices, coffee and convenient food in one friendly local stop.",
  locality: 'Alice Springs',
  address: '[Add confirmed Nature’s Brew Co. address]',
  phone: '[Add phone number]',
  phoneHref: 'tel:+61',
  email: '[Add email address]',
  mapsUrl: '[Add Google Maps link]',
  mapsEmbedUrl: '',
  openingHours: [
    { day: 'Monday – Friday', hours: '[Add confirmed hours]' },
    { day: 'Saturday', hours: '[Add confirmed hours]' },
    { day: 'Sunday', hours: '[Add confirmed hours]' },
  ],
  social: [
    { label: 'Instagram', href: '[Add Instagram link]', icon: 'instagram' },
    { label: 'Facebook', href: '[Add Facebook link]', icon: 'facebook' },
  ],
};
