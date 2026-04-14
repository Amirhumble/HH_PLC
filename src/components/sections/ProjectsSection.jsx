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
    <section className="section-padding bg-white min-h-screen" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-primary text-white border-primary shadow-lg'
                  : 'bg-white text-secondary border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {getCategoryDisplay(category)}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="group relative overflow-hidden rounded-xl bg-gray-100 shadow-md aspect-[4/3] cursor-pointer"
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title_en}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600?text=Project+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/40 transition-colors duration-500"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 block">
                      {i18n.language === 'en' ? project.category : project.category_am}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {i18n.language === 'en' ? project.title_en : project.title_am}
                    </h3>
                    <div className="text-gray-100 text-sm space-y-1 mb-4">
                      {project.location && (
                        <p><span className="text-primary font-semibold">{i18n.language === 'en' ? 'Location: ' : 'ቦታ፡ '}</span>{project.location}</p>
                      )}
                    </div>
                    <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                      {i18n.language === 'en' ? 'View Details' : 'ዝርዝር ይመልከቱ'}
                    </button>
                  </div>
                </div>

                {/* Always visible category badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-secondary px-3 py-1 rounded-full text-xs font-bold shadow-sm group-hover:opacity-0 transition-opacity">
                  {i18n.language === 'en' ? project.category : project.category_am}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-full relative bg-gray-100 flex flex-col">
                    <div className="flex-grow relative overflow-hidden">
                      <img
                        src={selectedProject.images ? selectedProject.images[0] : selectedProject.image}
                        alt={selectedProject.title_en}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <div className="p-4 grid grid-cols-4 gap-2 bg-gray-50 border-t border-gray-100">
                        {selectedProject.images.map((img, i) => (
                          <div 
                            key={i} 
                            className="aspect-square rounded-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
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
                  <div className="p-8">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
                      {i18n.language === 'en' ? selectedProject.category : selectedProject.category_am}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                      {i18n.language === 'en' ? selectedProject.title_en : selectedProject.title_am}
                    </h2>
                    
                    <div className="space-y-4 mb-6">
                      {selectedProject.location && (
                        <div className="flex items-start gap-3">
                          <span className="text-primary font-bold min-w-[100px]">{i18n.language === 'en' ? 'Location:' : 'ቦታ፡'}</span>
                          <span className="text-gray-600">{selectedProject.location}</span>
                        </div>
                      )}
                      {selectedProject.client && (
                        <div className="flex items-start gap-3">
                          <span className="text-primary font-bold min-w-[100px]">{i18n.language === 'en' ? 'Client:' : 'ደንበኛ፡'}</span>
                          <span className="text-gray-600">{selectedProject.client}</span>
                        </div>
                      )}
                      {selectedProject.value && (
                        <div className="flex items-start gap-3">
                          <span className="text-primary font-bold min-w-[100px]">{i18n.language === 'en' ? 'Value:' : 'ዋጋ፡'}</span>
                          <span className="text-gray-600">{selectedProject.value}</span>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="font-bold text-secondary mb-2">{i18n.language === 'en' ? 'Description' : 'መግለጫ'}</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProject.description_en}
                      </p>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="bg-secondary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
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
