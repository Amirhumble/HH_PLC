import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '../common/SearchBar';
import LanguageToggle from '../common/LanguageToggle';

import logo from '../../assets/images/logo.png';

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.teams'), path: '/teams' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white/70 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.img 
            src={logo} 
            alt="HH PLC Logo" 
            className="h-10 w-auto mix-blend-multiply opacity-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <span className="font-bold text-accent hidden lg:block group-hover:text-primary transition-colors duration-300 text-lg">
            {t('brand.shortName')}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full group overflow-hidden"
            >
              <span className={`relative z-10 transition-colors duration-300 ${
                isActive(link.path) ? 'text-white' : 'text-accent group-hover:text-primary'
              }`}>
                {link.name}
              </span>
              
              {isActive(link.path) && (
                <motion.span
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-full z-0 shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-6 border-l border-gray-200/50 pl-6">
            <SearchBar />
            <LanguageToggle />
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-accent text-2xl p-2 hover:bg-gray-100/50 rounded-lg transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/90 backdrop-blur-lg border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive(link.path) 
                      ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg' 
                      : 'text-accent hover:bg-primary/20 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100 space-y-4">
                <SearchBar />
                <div className="flex justify-start">
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
