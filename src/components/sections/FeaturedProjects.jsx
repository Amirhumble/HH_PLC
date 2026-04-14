import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../utils/constants';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const { i18n } = useTranslation();
  const featuredProjects = PROJECTS.filter(p => p.featured);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = featuredProjects.length - 1;
      if (nextIndex >= featuredProjects.length) nextIndex = 0;
      return nextIndex;
    });
  }, [featuredProjects.length]);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        paginate(1);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, paginate]);

  const project = featuredProjects[currentIndex];

  return (
    <section className="section-padding bg-gray-900 overflow-hidden" id="featured-projects">
      <div className="container mx-auto px-4 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="text-white">
            <h2 className="text-2xl md:text-4xl font-bold">
              {i18n.language === 'en' ? 'Featured Projects' : 'የተመረጡ ስራዎች'}
            </h2>
            <div className="w-16 h-1 bg-primary mt-3"></div>
          </div>
          <Link 
            to="/projects" 
            className="text-primary font-bold hover:text-white transition-colors flex items-center gap-2 group text-sm md:text-base"
          >
            {i18n.language === 'en' ? 'Explore All Projects' : 'ሁሉንም ፕሮጀክቶች ያስሱ'}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <div 
        className="relative h-[350px] md:h-[450px] w-full max-w-6xl mx-auto px-4"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.4 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 px-4"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group/slide">
              <img 
                src={project.image} 
                alt={project.title_en}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/slide:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent flex flex-col justify-center p-6 md:p-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-xl"
                >
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
                    {i18n.language === 'en' ? project.category : project.category_am}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {i18n.language === 'en' ? project.title_en : project.title_am}
                  </h3>
                  <p className="text-white text-sm md:text-base mb-6 line-clamp-2 leading-relaxed opacity-95">
                    {i18n.language === 'en' ? project.description_en : project.description_am}
                  </p>
                  <div className="flex items-center gap-4">
                    <Link 
                      to="/projects" 
                      className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-lg transform hover:-translate-y-0.5"
                    >
                      {i18n.language === 'en' ? 'View Details' : 'ዝርዝር ይመልከቱ'}
                    </Link>
                    <div className="hidden sm:flex items-center gap-2 text-white/70 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-6 z-10 hidden md:flex items-center">
          <button 
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-primary hover:border-primary transition-all flex items-center justify-center group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-6 z-10 hidden md:flex items-center">
          <button 
            onClick={() => paginate(1)}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-primary hover:border-primary transition-all flex items-center justify-center group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-primary' : 'w-1.5 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
