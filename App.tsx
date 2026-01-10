import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Privacy from './components/Privacy';

type View = 'home' | 'privacy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  return (
    <div className="min-h-screen selection:bg-[#F59773] selection:text-[#1A120D]">
      <Header onNavigate={setCurrentView} currentView={currentView} />
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <Features />
            <FAQ />
          </>
        ) : (
          <Privacy onBack={() => setCurrentView('home')} />
        )}
      </main>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
};

export default App;
