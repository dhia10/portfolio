import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Dhia Romdhane
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-200 hover:text-primary-400 transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="mailto:dhia.romd1@gmail.com"
              className="glass-effect px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-primary-500/10 hover:border-primary-500/50 transition-all text-xs"
            >
              <Mail size={16} />
              <span>dhia.romd1@gmail.com</span>
            </a>
            <a
              href="tel:+21653192623"
              className="glass-effect px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-primary-500/10 hover:border-primary-500/50 transition-all text-xs"
            >
              <Phone size={16} />
              <span>53 192 623</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden glass-effect p-2 rounded-lg"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-effect border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <a
                href="mailto:dhia.romd1@gmail.com"
                className="flex items-center gap-2 px-4 py-2 text-sm"
              >
                <Mail size={16} />
                <span>dhia.romd1@gmail.com</span>
              </a>
              <a
                href="tel:+21653192623"
                className="flex items-center gap-2 px-4 py-2 text-sm"
              >
                <Phone size={16} />
                <span>53 192 623</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
