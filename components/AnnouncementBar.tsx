import { Leaf } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-greenDark py-2 text-center text-xs font-semibold text-white sm:text-sm">
      <p className="container-brand flex items-center justify-center gap-2">
        <Leaf className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" aria-hidden="true" />
        <span>Fresh smoothies, juices and coffee made daily.</span>
      </p>
    </div>
  );
}
