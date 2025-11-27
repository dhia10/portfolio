import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl"
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cosmic-blue shadow-2xl" style={{ boxShadow: '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(99, 102, 241, 0.4)' }}>
            <img 
              src="/me.jpeg" 
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{ color: '#ffffff', textShadow: '0 0 30px rgba(99, 102, 241, 0.8), 0 0 60px rgba(59, 130, 246, 0.5)' }}>
            {personalInfo.name}
          </h1>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: '#3b82f6', textShadow: '0 0 20px rgba(59, 130, 246, 0.7)' }}
        >
          {personalInfo.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: '#e5e7eb', textShadow: '0 0 10px rgba(0, 0, 0, 0.8)' }}
        >
          {personalInfo.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect px-6 py-3 rounded-full flex items-center gap-2 hover:bg-cosmic-purple/20 transition-all duration-300 hover:scale-105"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          
          <a
            href={`mailto:${personalInfo.email}`}
            className="glass-effect px-6 py-3 rounded-full flex items-center gap-2 hover:bg-cosmic-blue/20 transition-all duration-300 hover:scale-105"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          
          <div className="glass-effect px-6 py-3 rounded-full flex items-center gap-2">
            <Phone size={20} />
            <span>{personalInfo.phone}</span>
          </div>
          
          <div className="glass-effect px-6 py-3 rounded-full flex items-center gap-2">
            <MapPin size={20} />
            <span>{personalInfo.location}</span>
          </div>
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default Hero;
