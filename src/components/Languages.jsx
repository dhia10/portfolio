import React from 'react';
import { motion } from 'framer-motion';
import { languages } from '../data/portfolio';

const Languages = () => {
  return (
    <section className="relative z-10 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          style={{ color: '#ffffff', textShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
        >
          Languages
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect p-8 rounded-2xl text-center bg-black/40"
            >
              <h3 className="text-3xl font-bold mb-3 text-white" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
                {lang.name}
              </h3>
              <p className="text-cosmic-cyan font-medium text-lg" style={{ textShadow: '0 0 5px rgba(6, 182, 212, 0.5)' }}>
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
