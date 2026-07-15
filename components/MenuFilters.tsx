'use client';

import { useRef } from 'react';
import { Search } from 'lucide-react';
import { menuCategories } from '@/data/menu';
import { cn } from '@/lib/utils';

interface MenuFiltersProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

export default function MenuFilters({
  activeCategory,
  onCategoryChange,
  search,
  onSearchChange,
}: MenuFiltersProps) {
  const tabIds = ['all', ...menuCategories.map((c) => c.id)];
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const nextIndex =
      event.key === 'ArrowRight'
        ? (index + 1) % tabIds.length
        : (index - 1 + tabIds.length) % tabIds.length;
    const nextId = tabIds[nextIndex];
    onCategoryChange(nextId);
    tabRefs.current[nextId]?.focus();
  }

  return (
    <div className="flex flex-col gap-5">
      <div
        role="tablist"
        aria-label="Menu categories"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0"
      >
        <button
          ref={(el) => {
            tabRefs.current.all = el;
          }}
          type="button"
          role="tab"
          id="tab-all"
          aria-selected={activeCategory === 'all'}
          aria-controls="menu-panel"
          tabIndex={activeCategory === 'all' ? 0 : -1}
          onClick={() => onCategoryChange('all')}
          onKeyDown={(event) => handleKeyDown(event, 0)}
          className={cn(
            'shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            activeCategory === 'all'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
          )}
        >
          All
        </button>
        {menuCategories.map((category, index) => (
          <button
            key={category.id}
            ref={(el) => {
              tabRefs.current[category.id] = el;
            }}
            type="button"
            role="tab"
            id={`tab-${category.id}`}
            aria-selected={activeCategory === category.id}
            aria-controls="menu-panel"
            tabIndex={activeCategory === category.id ? 0 : -1}
            onClick={() => onCategoryChange(category.id)}
            onKeyDown={(event) => handleKeyDown(event, index + 1)}
            className={cn(
              'shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground'
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <label className="relative block">
        <span className="sr-only">Search the menu</span>
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search the menu, e.g. mango"
          className="h-12 w-full rounded-xl border border-input bg-white pl-11 pr-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </label>
    </div>
  );
}
