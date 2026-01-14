import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Privacy from './components/Privacy';
import Terms from './components/Terms';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#F59773] selection:text-[#1A120D]">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <FAQ />
            </>
          } />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
