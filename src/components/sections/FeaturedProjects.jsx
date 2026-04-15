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
    <section className="py-16 md:py-24 bg-gray-900 overflow-hidden" id="featured-projects">
      <div className="container mx-auto px-6 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="text-white">
            <span className="inline-block text-primary font-bold uppercase tracking-widest text-xs mb-2">Our Masterpieces</span>
            <h2 className="text-3xl md:text-5xl font-bold">
              {i18n.language === 'en' ? 'Featured Projects' : 'የተመረጡ ስራዎች'}
            </h2>
            <div className="w-16 h-1 bg-primary mt-4"></div>
          </div>
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-primary text-white px-6 py-3 rounded-xl transition-all duration-300 group border border-white/10"
          >
            <span className="font-bold text-sm">
              {i18n.language === 'en' ? 'Explore All Projects' : 'ሁሉንም ፕሮጀክቶች ያስሱ'}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <div 
        className="relative h-[450px] sm:h-[500px] md:h-[600px] w-full max-w-7xl mx-auto px-4"
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
            className="absolute inset-0 px-4 cursor-grab active:cursor-grabbing"
          >
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl group/slide">
              <img 
                src={project.image} 
                alt={project.title_en}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/slide:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-end md:justify-center p-8 md:p-16">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-lg shadow-primary/20">
                    {i18n.language === 'en' ? project.category : project.category_am}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    {i18n.language === 'en' ? project.title_en : project.title_am}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-lg mb-8 line-clamp-3 leading-relaxed opacity-95">
                    {i18n.language === 'en' ? project.description_en : project.description_am}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <Link 
                      to="/projects" 
                      className="w-full sm:w-auto text-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-primary/20 transform hover:-translate-y-0.5"
                    >
                      {i18n.language === 'en' ? 'View Details' : 'ዝርዝር ይመልከቱ'}
                    </Link>
                    <div className="flex items-center gap-3 text-white/80 text-sm md:text-base bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">{project.location}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Hidden on small mobile */}
        <div className="absolute inset-y-0 left-8 z-10 hidden lg:flex items-center">
          <button 
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-primary hover:border-primary transition-all flex items-center justify-center group shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-8 z-10 hidden lg:flex items-center">
          <button 
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-primary hover:border-primary transition-all flex items-center justify-center group shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2.5 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-primary shadow-[0_0_10px_rgba(160,193,114,0.5)]' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
