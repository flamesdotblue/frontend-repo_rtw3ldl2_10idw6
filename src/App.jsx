import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Row from './components/Row.jsx';
import Footer from './components/Footer.jsx';

const buildItems = (prefix) => {
  const palettes = [
    'bg-gradient-to-tr from-red-700 to-red-500',
    'bg-gradient-to-tr from-indigo-700 to-indigo-500',
    'bg-gradient-to-tr from-emerald-700 to-emerald-500',
    'bg-gradient-to-tr from-amber-700 to-amber-500',
    'bg-gradient-to-tr from-fuchsia-700 to-fuchsia-500',
    'bg-gradient-to-tr from-sky-700 to-sky-500',
    'bg-gradient-to-tr from-rose-700 to-rose-500',
    'bg-gradient-to-tr from-violet-700 to-violet-500',
  ];
  return Array.from({ length: 14 }).map((_, i) => ({
    id: `${prefix}-${i + 1}`,
    title: `${prefix} ${i + 1}`,
    bg: palettes[i % palettes.length],
    badge: i % 3 === 0 ? 'NEW' : i % 2 === 0 ? 'HD' : '4K',
  }));
};

function App() {
  const rows = [
    { title: 'Trending Now', items: buildItems('Trending') },
    { title: 'Top Picks for You', items: buildItems('Top Pick') },
    { title: 'Popular on Netflix', items: buildItems('Popular') },
    { title: 'New Releases', items: buildItems('New Release') },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <Hero onMoreInfo={() => {}} />
        <div className="mx-auto mt-6 max-w-7xl space-y-8">
          {rows.map((row) => (
            <Row key={row.title} title={row.title} items={row.items} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
