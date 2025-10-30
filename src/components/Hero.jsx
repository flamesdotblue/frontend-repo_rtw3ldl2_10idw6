import React from 'react';
import { Play, Info } from 'lucide-react';

const Hero = ({ onMoreInfo }) => {
  return (
    <section id="home" className="relative h-[70vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
            Watch anywhere. Cancel anytime. Ready to watch? Hit play to start.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">
              <Play size={20} /> Play
            </button>
            <button onClick={onMoreInfo} className="inline-flex items-center gap-2 rounded bg-gray-500/30 px-6 py-3 font-semibold text-white ring-1 ring-white/20 transition hover:bg-gray-500/40">
              <Info size={20} /> More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
