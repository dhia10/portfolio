import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4 sm:px-6 pt-20 sm:pt-16">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 text-white leading-tight" style={{ textShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}>
                {personalInfo.name}
              </h1>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary-400 leading-snug" style={{ textShadow: '0 0 20px rgba(14, 165, 233, 0.4)' }}
            >
              {personalInfo.title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-300"
            >
              {personalInfo.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 sm:gap-3 pt-4"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-2 hover:bg-primary-500/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20"
              >
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm font-medium">GitHub</span>
              </a>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="glass-effect px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-2 hover:bg-primary-500/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/20"
              >
                <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm font-medium">Email</span>
              </a>
              
              <div className="glass-effect px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-2">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm font-medium">{personalInfo.phone}</span>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 via-cyan-500 to-purple-500 blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Full photo with cosmic frame */}
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[450px] rounded-2xl overflow-hidden border-2 border-primary-500/50 shadow-2xl" 
                   style={{ 
                     boxShadow: '0 0 40px rgba(14, 165, 233, 0.4), 0 0 80px rgba(6, 182, 212, 0.2), inset 0 0 60px rgba(14, 165, 233, 0.1)',
                     background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05), rgba(6, 182, 212, 0.05))'
                   }}>
                <img 
                  src="/me.jpeg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '1/1.2' }}
                />
                
                {/* Cosmic overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Orbiting particles around photo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-orbit" style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)', animationDuration: '8s' }}></div>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-orbit" style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)', animationDuration: '12s', animationDelay: '2s' }}></div>
                <div className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-orbit" style={{ boxShadow: '0 0 8px rgba(168, 85, 247, 0.8)', animationDuration: '10s', animationDelay: '1s' }}></div>
              </div>
              
              {/* Floating cosmic particles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
