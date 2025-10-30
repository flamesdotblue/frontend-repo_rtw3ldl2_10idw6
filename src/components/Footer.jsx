import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 text-sm text-gray-400 md:grid-cols-4">
        <div className="space-y-3">
          <p className="text-gray-500">Questions? Contact us.</p>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#">FAQ</a></li>
            <li><a className="hover:underline" href="#">Investor Relations</a></li>
            <li><a className="hover:underline" href="#">Privacy</a></li>
            <li><a className="hover:underline" href="#">Speed Test</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-gray-500">Help Center</p>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#">Account</a></li>
            <li><a className="hover:underline" href="#">Media Center</a></li>
            <li><a className="hover:underline" href="#">Jobs</a></li>
            <li><a className="hover:underline" href="#">Cookie Preferences</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-gray-500">Legal</p>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#">Ways to Watch</a></li>
            <li><a className="hover:underline" href="#">Terms of Use</a></li>
            <li><a className="hover:underline" href="#">Corporate Information</a></li>
            <li><a className="hover:underline" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-gray-500">More</p>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#">Only on Netflix</a></li>
            <li><a className="hover:underline" href="#">Redeem Gift Cards</a></li>
            <li><a className="hover:underline" href="#">Buy Gift Cards</a></li>
            <li><a className="hover:underline" href="#">Speed Test</a></li>
          </ul>
        </div>
      </div>
      <div className="pb-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Netflix clone UI for demo purposes.
      </div>
    </footer>
  );
};

export default Footer;
