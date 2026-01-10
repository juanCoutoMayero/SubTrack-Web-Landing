
import React from 'react';
import { motion } from 'framer-motion';
import AppStoreButton from './AppStoreButton';
import Mockup from './Mockup';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F59773]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#F59773]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59773]/10 text-[#F59773] border border-[#F59773]/20 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59773] animate-pulse" />
            Now Available for iOS
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-['Outfit'] leading-[1.1] mb-6 tracking-tight"
          >
            Take Control of Your <br />
            <span className="text-[#F59773]">Subscriptions</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Never miss a renewal again. Centralize your spending, track trials, and save money with SubTrack.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <AppStoreButton />
            <p className="text-white/40 text-sm italic">Join 50k+ users tracking better.</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative w-full flex justify-center"
        >
          <div className="relative group">
            {/* Background Accent for Mockup */}
            <div className="absolute inset-0 bg-[#F59773]/20 blur-[100px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />
            <Mockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
