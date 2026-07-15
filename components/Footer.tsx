'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { staggerChild, staggerContainer } from '@/lib/motion-config';

const contactItems = [
  {
    icon: MapPin,
    label: 'Location',
    content: 'Shop 25, Yeperenye Centre, Hartley St, Alice Springs, NT 0870',
  },
  {
    icon: Phone,
    label: 'Phone',
    content: '+61 8 8953 8990',
    href: 'tel:+61889538990',
  },
  {
    icon: Clock,
    label: 'Hours',
    content: 'Daily 6:30 AM - 3:40 PM',
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 py-16 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          {...staggerContainer}
        >
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon className="h-6 w-6 text-red-500" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-gray-400">{item.content}</p>
                </div>
              </>
            );

            return (
              <motion.div key={item.label} className="flex items-start gap-3" {...staggerChild}>
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-start gap-3 hover:text-white"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Tanaka&apos;s Sushi &amp; Juice Bar. All
            rights reserved.
          </p>
          <p>Freshly made. Every day.</p>
        </div>
      </div>
    </footer>
  );
}
