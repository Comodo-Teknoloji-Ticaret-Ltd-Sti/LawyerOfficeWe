import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DundarAI from './components/DundarAI';

function MainContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DundarAI />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>

      <Header />      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
      <Footer /></div>
    </HashRouter>
  );
}

export default App;