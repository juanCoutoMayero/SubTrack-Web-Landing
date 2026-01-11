import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onNavigate: (view: 'home' | 'privacy') => void;
  currentView: 'home' | 'privacy';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl flex items-center justify-between px-8 py-4 rounded-full glass border border-white/10"
      >
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-[#F59773] flex items-center justify-center font-bold text-[#1A120D]">
            S
          </div>
          <span className="text-xl font-bold font-['Outfit'] tracking-tight">SubTrack</span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {currentView === 'home' ? (
            <>
              <a href="#features" className="hover:text-[#F59773] transition-colors">Features</a>
              <a href="#faq" className="hover:text-[#F59773] transition-colors">FAQ</a>
            </>
          ) : (
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#F59773] transition-colors"
            >
              Home
            </button>
          )}
          <button
            onClick={() => onNavigate('privacy')}
            className={`transition-colors ${currentView === 'privacy' ? 'text-[#F59773]' : 'hover:text-[#F59773]'}`}
          >
            Privacy
          </button>
        </div>

        <a
          href="https://apps.apple.com/us/app/subb/id6756507119"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-white text-[#1A120D] text-sm font-bold hover:bg-[#F59773] transition-colors"
        >
          Get Started
        </a>
      </motion.nav>
    </header>
  );
};

export default Header;
