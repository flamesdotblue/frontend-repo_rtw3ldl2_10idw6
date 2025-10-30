import React from 'react';
import { Search, Bell, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-8">
          <a href="#" className="text-2xl font-extrabold tracking-tight text-red-600">
            N
            <span className="inline-block -skew-x-6 text-red-600">E</span>
            TFLIX
          </a>
          <nav className="hidden gap-6 text-sm text-gray-200 md:flex">
            <a className="hover:text-white" href="#home">Home</a>
            <a className="hover:text-white" href="#tv">TV Shows</a>
            <a className="hover:text-white" href="#movies">Movies</a>
            <a className="hover:text-white" href="#new">New & Popular</a>
            <a className="hover:text-white" href="#my-list">My List</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-gray-200">
          <button aria-label="Search" className="rounded px-2 py-1 hover:text-white">
            <Search size={20} />
          </button>
          <button aria-label="Notifications" className="rounded px-2 py-1 hover:text-white">
            <Bell size={20} />
          </button>
          <div className="flex items-center gap-2 rounded-md bg-black/30 px-2 py-1 ring-1 ring-white/10">
            <User size={20} className="text-white" />
            <span className="hidden text-sm text-gray-200 sm:block">Profile</span>
            <ChevronDown size={18} className="text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
