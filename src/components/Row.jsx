import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Row = ({ title, items = [] }) => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.min(900, el.clientWidth * 0.9);
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="relative space-y-3">
      <h2 className="px-4 text-xl font-semibold text-white md:text-2xl">{title}</h2>
      <div className="group relative">
        <button
          aria-label="Scroll left"
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/70 p-2 text-white ring-1 ring-white/10 transition hover:bg-black/90 group-hover:block"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="scrollbar-hide relative flex snap-x gap-3 overflow-x-auto px-4 py-2"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="group/card relative h-40 w-64 shrink-0 snap-start overflow-hidden rounded-md bg-zinc-800 ring-1 ring-white/10 md:h-48 md:w-80"
            >
              <div className={`absolute inset-0 ${item.bg ?? 'bg-gradient-to-tr from-zinc-700 to-zinc-900'}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="line-clamp-1 text-sm font-semibold text-white md:text-base">
                  {item.title}
                </p>
                <div className="mt-2 flex items-center gap-2 opacity-0 transition-opacity group-hover/card:opacity-100">
                  <button className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black hover:bg-white">
                    <Play size={14} /> Play
                  </button>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-gray-200 ring-1 ring-white/10">
                    {item.badge || 'HD'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          aria-label="Scroll right"
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/70 p-2 text-white ring-1 ring-white/10 transition hover:bg-black/90 group-hover:block"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Row;
