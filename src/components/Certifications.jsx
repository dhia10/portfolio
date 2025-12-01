import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../data/portfolio';

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          style={{ textShadow: '0 0 30px rgba(14, 165, 233, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)' }}
        >
          Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect p-5 sm:p-6 rounded-xl hover:border-primary-500/50 transition-all duration-300 group"
              style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 0 15px rgba(14, 165, 233, 0.1)' }}
            >
              <div className="flex flex-col gap-3 mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold mb-1 text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary-400 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-400">
                    {cert.year}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Award size={14} className="text-primary-400 flex-shrink-0" />
                <span>{cert.inProgress ? 'In Progress' : 'Certified'}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
