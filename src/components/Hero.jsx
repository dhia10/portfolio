import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4 pt-16">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white" style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}>
                {personalInfo.name}
              </h1>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-medium text-primary-400" style={{ textShadow: '0 0 20px rgba(14, 165, 233, 0.4)' }}
            >
              {personalInfo.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg leading-relaxed text-slate-300"
            >
              {personalInfo.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-primary-500/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20"
              >
                <Github size={18} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="glass-effect px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-primary-500/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20"
              >
                <Mail size={18} />
                <span className="text-sm font-medium">Email</span>
              </a>
              
              <div className="glass-effect px-5 py-2.5 rounded-lg flex items-center gap-2">
                <Phone size={18} />
                <span className="text-sm font-medium">{personalInfo.phone}</span>
              </div>
              
              <div className="glass-effect px-5 py-2.5 rounded-lg flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-sm font-medium">{personalInfo.location}</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Cosmic glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500 blur-3xl opacity-30 animate-pulse"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl" style={{ boxShadow: '0 0 60px rgba(14, 165, 233, 0.5), 0 0 100px rgba(6, 182, 212, 0.3)' }}>
                <img 
                  src="/me.jpeg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Orbiting particles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary-400 rounded-full animate-orbit" style={{ boxShadow: '0 0 10px rgba(14, 165, 233, 0.8)' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
