
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl flex items-center justify-between px-8 py-4 rounded-full glass border border-white/10"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#F59773] flex items-center justify-center font-bold text-[#1A120D]">
            S
          </div>
          <span className="text-xl font-bold font-['Outfit'] tracking-tight">SubTrack</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#features" className="hover:text-[#F59773] transition-colors">Features</a>
          <a href="#faq" className="hover:text-[#F59773] transition-colors">FAQ</a>
          <a href="#privacy" className="hover:text-[#F59773] transition-colors">Privacy</a>
        </div>

        <button className="px-5 py-2 rounded-full bg-white text-[#1A120D] text-sm font-bold hover:bg-[#F59773] transition-colors">
          Get Started
        </button>
      </motion.nav>
    </header>
  );
};

export default Header;
