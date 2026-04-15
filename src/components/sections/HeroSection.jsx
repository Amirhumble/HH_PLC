import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import hero images
import img1 from '../../assets/images/heroSectionImages/14.jpg';
import img2 from '../../assets/images/heroSectionImages/19.jpg';
import img3 from '../../assets/images/heroSectionImages/26.jpg';
import img4 from '../../assets/images/heroSectionImages/27.jpg';
import img5 from '../../assets/images/heroSectionImages/28.jpg';
import img6 from '../../assets/images/heroSectionImages/31.jpg';
import img7 from '../../assets/images/heroSectionImages/33.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-screen flex items-center justify-center text-white overflow-hidden bg-gray-900">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 md:from-black/60 md:via-black/40 md:to-black/60"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg leading-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-primary drop-shadow-md font-bold uppercase tracking-wide"
          >
            {t('hero.tagline')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto italic mb-8 md:mb-10 drop-shadow-md px-4"
          >
            {t('hero.partner')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link
              to="/projects"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3.5 md:px-10 md:py-4 rounded-full text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl inline-block border-2 border-white/20 backdrop-blur-sm"
            >
              {t('hero.cta')}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
