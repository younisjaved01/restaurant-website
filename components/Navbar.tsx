'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu as MenuIcon, X } from 'lucide-react';
import {
  backdropVariants,
  mobileMenuItem,
  mobileMenuPanel,
  navLinkHover,
} from '@/lib/motion-config';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Menu', href: '#menu' },
  { label: 'Catering', href: '#catering' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
        aria-label="Main navigation"
      >
        <a href="#top" className="text-lg font-bold text-gray-900">
          Tanaka&apos;s <span className="text-red-600">Sushi &amp; Juice Bar</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="font-medium text-gray-700 transition-colors hover:text-red-600"
              {...navLinkHover}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-gray-900 md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={() => setIsOpen(false)}
              {...backdropVariants}
            />
            <motion.div
              key="mobile-menu"
              className="fixed right-0 top-0 z-50 flex h-full w-64 flex-col gap-2 bg-white p-6 shadow-xl md:hidden"
              {...mobileMenuPanel}
            >
              <motion.button
                type="button"
                className="mb-4 flex min-h-[44px] min-w-[44px] items-center justify-center self-end rounded-lg text-gray-900"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                {...mobileMenuItem}
              >
                <X size={28} />
              </motion.button>
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-red-600"
                  whileHover={{ x: 4 }}
                  onClick={() => setIsOpen(false)}
                  {...mobileMenuItem}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
