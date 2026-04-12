import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Placeholder for background image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-accent to-secondary opacity-60"></div>
      <div className="absolute inset-0 z-[-1] bg-[url('/src/assets/images/hero-bg.jpg')] bg-cover bg-center"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          {t('hero.tagline')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/projects"
            className="bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-all inline-block"
          >
            {t('hero.cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
