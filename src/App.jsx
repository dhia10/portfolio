import React, { useEffect, useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load heavy components for better performance
const Starfield = lazy(() => import('./components/Starfield'));
const CosmicParticles = lazy(() => import('./components/CosmicParticles'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Languages = lazy(() => import('./components/Languages'));
const Projects = lazy(() => import('./components/Projects'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices for performance optimization
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(mobile);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Suspense fallback={
        <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-white text-lg">Loading...</p>
          </div>
        </div>
      }>
        {/* Starfield - Simplified on mobile */}
        <Starfield isMobile={isMobile} />
        
        {/* Cosmic Particles - Reduced on mobile */}
        <CosmicParticles isMobile={isMobile} />
      </Suspense>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Education />
          <Certifications />
          <Experience />
          <Skills />
          <Languages />
          <Projects />
          <Footer />
        </Suspense>
      </div>
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary-500 via-accent-blue to-accent-cyan transition-all duration-300"
          style={{
            width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
          }}
        />
      </div>
    </div>
  );
}

export default App;
