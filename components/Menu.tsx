'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { menuCategories, MenuCategoryKey } from '@/lib/data';
import { cardHover, staggerChild, staggerContainer } from '@/lib/motion-config';

interface Tab {
  key: MenuCategoryKey;
  label: string;
}

const tabs: Tab[] = [
  { key: 'sushi', label: 'Sushi' },
  { key: 'donburi', label: 'Donburi & Teppanyaki' },
  { key: 'juices', label: 'Juices & Drinks' },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState<MenuCategoryKey>('sushi');

  return (
    <section id="menu" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Our Menu
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Explore our range of freshly made sushi, donburi, teppanyaki, and juices.
        </p>

        <div
          className="mt-10 flex flex-wrap justify-center gap-3"
          role="tablist"
          aria-label="Menu categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`min-h-[44px] rounded-full px-6 py-2 font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-red-600 text-white'
                  : 'border-2 border-gray-300 bg-white text-gray-700 hover:border-red-600'
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
          {...staggerContainer}
        >
          {menuCategories[activeTab].map((item) => (
            <motion.div
              key={item.id}
              className="card-shadow flex items-center justify-between bg-white p-6"
              {...staggerChild}
              {...cardHover}
            >
              <div>
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
              <span className="ml-4 whitespace-nowrap text-lg font-bold text-red-600">
                ${item.price.toFixed(2)}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
