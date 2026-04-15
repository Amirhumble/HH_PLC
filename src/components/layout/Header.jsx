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
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 py-2 md:py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.img 
            src={logo} 
            alt="HH PLC Logo" 
            className="h-8 w-auto md:h-10 mix-blend-multiply opacity-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <div className="flex flex-col -space-y-1">
            <span className="font-bold text-accent group-hover:text-primary transition-colors duration-300 text-sm md:text-lg leading-tight">
              {t('brand.shortName')}
            </span>
            <span className="text-[10px] text-gray-500 hidden sm:block md:hidden lg:block">
              {t('brand.tagline')}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-full group overflow-hidden"
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
          <div className="flex items-center space-x-4 ml-4 border-l border-gray-200/50 pl-4">
            <SearchBar />
            <LanguageToggle />
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-2 lg:hidden">
          <LanguageToggle />
          <button
            aria-label="mobile-menu-toggle"
            className="text-accent text-xl p-2 hover:bg-gray-100/50 rounded-lg transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                    isActive(link.path) 
                      ? 'bg-primary/10 text-primary font-bold' 
                      : 'text-accent hover:bg-gray-50 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  {isActive(link.path) && <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100">
                <SearchBar />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
