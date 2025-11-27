import React, { useEffect, useState } from 'react';
import BlackHoleScene from './components/BlackHole';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <BlackHoleScene />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Languages />
        <Projects />
        <Footer />
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
