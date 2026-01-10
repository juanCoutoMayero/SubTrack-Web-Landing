
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  LayoutDashboard, 
  CalendarClock, 
  PieChart, 
  ChevronDown, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  CheckCircle2,
  Info
} from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#F59773] selection:text-[#1A120D]">
      <Header />
      <main>
        <Hero />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
