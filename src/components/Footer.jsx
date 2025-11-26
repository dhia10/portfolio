import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Mail, Briefcase } from 'lucide-react';
import { personalInfo, businessActivities } from '../data/portfolio';

const Footer = () => {
  return (
    <footer id="contact" className="relative z-10 px-4 py-16 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Business Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: '#ffffff', textShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}>
            Additional Activities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {businessActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center bg-black/40"
              >
                <h4 className="text-xl font-bold mb-2" style={{ color: '#06b6d4', textShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}>
                  {activity.title}
                </h4>
                <p style={{ color: '#e5e7eb', textShadow: '0 0 5px rgba(0, 0, 0, 0.8)' }}>{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl mb-12 text-center bg-black/40"
        >
          <h3 className="text-3xl font-bold mb-4" style={{ color: '#ffffff', textShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}>
            Let's Work Together
          </h3>
          <p className="mb-6 text-lg" style={{ color: '#e5e7eb', textShadow: '0 0 5px rgba(0, 0, 0, 0.8)' }}>
            Interested in AI/ML solutions, web development, or entrepreneurial ventures?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-effect px-6 py-3 rounded-full flex items-center gap-2 hover:bg-cosmic-blue/20 transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect px-6 py-3 rounded-full flex items-center gap-2 hover:bg-cosmic-purple/20 transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
        
        {/* Footer Bottom */}
        <div className="text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 mb-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>using React, Three.js & Tailwind CSS</span>
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
