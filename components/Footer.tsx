import { Facebook, Instagram } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { ContactLink } from '@/components/ContactLink';
import { business } from '@/data/business';
import { menuCategories } from '@/data/menu';

const socialIcons = { instagram: Instagram, facebook: Facebook };

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Favourites', href: '#favourites' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal py-12 text-white/70 sm:py-16">
      <div className="container-brand grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Fresh smoothies, juices, coffee and grab-and-go food in one friendly local stop.
          </p>
          <div className="mt-5 flex gap-3">
            {business.social.map((link) => {
              const Icon = socialIcons[link.icon];
              return (
                <ContactLink
                  key={link.label}
                  value={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </ContactLink>
              );
            })}
          </div>
        </div>

        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
            Menu Categories
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {menuCategories.slice(0, 6).map((category) => (
              <li key={category.id}>
                <a href="#menu" className="transition-colors hover:text-white">
                  {category.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
            Visit Us
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{business.address}</li>
            <li>{business.locality}</li>
            <li>{business.phone}</li>
            {business.openingHours.map((entry) => (
              <li key={entry.day}>
                {entry.day}: {entry.hours}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-brand mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {business.name} All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
