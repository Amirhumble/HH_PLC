import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../utils/constants';

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];
  
  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  const getCategoryDisplay = (category) => {
    if (category === 'All') return i18n.language === 'en' ? 'All' : 'ሁሉም';
    const project = PROJECTS.find(p => p.category === category);
    return i18n.language === 'en' ? category : project.category_am;
  };

  return (
    <section className="py-16 md:py-24 bg-white min-h-screen" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-primary font-bold uppercase tracking-widest text-xs mb-2">Our Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary">{t('projects.title')}</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                  : 'bg-white text-secondary border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {getCategoryDisplay(category)}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm aspect-[4/3] cursor-pointer hover:shadow-xl transition-all duration-500"
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title_en}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600?text=Project+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/40 transition-colors duration-500"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 block">
                      {i18n.language === 'en' ? project.category : project.category_am}
                    </span>
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                      {i18n.language === 'en' ? project.title_en : project.title_am}
                    </h3>
                    <div className="text-gray-200 text-xs md:text-sm mb-4 line-clamp-2">
                      {project.description_en}
                    </div>
                    <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg text-xs font-bold transition-all shadow-lg shadow-primary/20">
                      {i18n.language === 'en' ? 'View Details' : 'ዝርዝር ይመልከቱ'}
                    </button>
                  </div>
                </div>

                {/* Always visible category badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-secondary px-3 py-1 rounded-full text-[10px] font-bold shadow-sm group-hover:opacity-0 transition-opacity">
                  {i18n.language === 'en' ? project.category : project.category_am}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-[110] bg-white/20 hover:bg-primary text-white hover:text-white rounded-full p-2.5 transition-all backdrop-blur-md border border-white/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  <div className="h-64 sm:h-80 md:h-[400px] lg:h-full relative bg-gray-100 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-100">
                    <div className="flex-grow relative overflow-hidden">
                      <img
                        src={selectedProject.images ? selectedProject.images[0] : selectedProject.image}
                        alt={selectedProject.title_en}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <div className="p-4 grid grid-cols-4 gap-2 bg-white border-t border-gray-50">
                        {selectedProject.images.map((img, i) => (
                          <div 
                            key={i} 
                            className="aspect-square rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary transition-all shadow-sm"
                            onClick={(e) => {
                              const mainImg = e.currentTarget.closest('.grid-cols-1').querySelector('img');
                              if (mainImg) mainImg.src = img;
                            }}
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-6 sm:p-8 md:p-12 flex flex-col">
                    <div className="flex-grow">
                      <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 block">
                        {i18n.language === 'en' ? selectedProject.category : selectedProject.category_am}
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-secondary mb-6 leading-tight">
                        {i18n.language === 'en' ? selectedProject.title_en : selectedProject.title_am}
                      </h2>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8">
                        {selectedProject.location && (
                          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{i18n.language === 'en' ? 'Location' : 'ቦታ'}</p>
                            <p className="text-secondary font-bold text-sm md:text-base">{selectedProject.location}</p>
                          </div>
                        )}
                        {selectedProject.client && (
                          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{i18n.language === 'en' ? 'Client' : 'ደንበኛ'}</p>
                            <p className="text-secondary font-bold text-sm md:text-base">{selectedProject.client}</p>
                          </div>
                        )}
                      </div>

                      <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
                        <h4 className="font-bold text-secondary text-base mb-3 flex items-center gap-2">
                          <div className="w-1 h-4 bg-primary rounded-full"></div>
                          {i18n.language === 'en' ? 'Project Overview' : 'የፕሮጀክት መግለጫ'}
                        </h4>
                        <p className="mb-4">
                          {i18n.language === 'en' ? selectedProject.description_en : selectedProject.description_am}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="w-full sm:w-auto bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-primary transition-all shadow-lg"
                      >
                        {i18n.language === 'en' ? 'Close' : 'ዝጋ'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
