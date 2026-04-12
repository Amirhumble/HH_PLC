import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../utils/constants';

const ProjectsSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-video"
            >
              {/* Image placeholder */}
              <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <span className="text-accent font-bold opacity-30">{i18n.language === 'en' ? project.title_en : project.title_am}</span>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-primary text-sm font-semibold mb-2">{project.category}</span>
                <h3 className="text-white text-xl font-bold">
                  {i18n.language === 'en' ? project.title_en : project.title_am}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
