import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-4xl"
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary-500 shadow-xl">
            <img 
              src="/me.jpeg" 
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-3 text-white">
            {personalInfo.name}
          </h1>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl font-medium mb-6 text-primary-400"
        >
          {personalInfo.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-slate-300"
        >
          {personalInfo.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-primary-500/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
          >
            <Github size={18} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          
          <a
            href={`mailto:${personalInfo.email}`}
            className="glass-effect px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-primary-500/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105"
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
    </section>
  );
};

export default Hero;
