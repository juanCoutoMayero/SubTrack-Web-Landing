import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl flex items-center justify-between px-8 py-4 rounded-full glass border border-white/10"
      >
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-[#F59773] flex items-center justify-center font-bold text-[#1A120D]">
            S
          </div>
          <span className="text-xl font-bold font-['Outfit'] tracking-tight">SubTrack</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {isHome ? (
            <>
              <a href="#features" className="hover:text-[#F59773] transition-colors">Features</a>
              <a href="#faq" className="hover:text-[#F59773] transition-colors">FAQ</a>
            </>
          ) : (
            <Link
              to="/"
              className="hover:text-[#F59773] transition-colors"
            >
              Home
            </Link>
          )}
          <Link
            to="/privacy"
            className={`transition-colors ${location.pathname === '/privacy' ? 'text-[#F59773]' : 'hover:text-[#F59773]'}`}
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className={`transition-colors ${location.pathname === '/terms' ? 'text-[#F59773]' : 'hover:text-[#F59773]'}`}
          >
            Terms
          </Link>

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
