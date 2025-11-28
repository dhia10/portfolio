import React from 'react';
import { motion } from 'framer-motion';
import { languages } from '../data/portfolio';

const Languages = () => {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white"
          style={{ textShadow: '0 0 30px rgba(14, 165, 233, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)' }}
        >
          Languages
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect p-4 sm:p-6 rounded-xl text-center hover:border-primary-500/50 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white">
                {lang.name}
              </h3>
              <p className="text-primary-400 font-medium text-xs sm:text-sm">
                {lang.proficiency}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
