import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const { t } = useTranslation();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/text.txt')
      .then(res => res.text())
      .then(data => setContent(data))
      .catch(err => console.error('Error loading text.txt', err));
  }, []);

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">{t('about.title')}</h2>
            <div className="prose lg:prose-xl text-secondary whitespace-pre-line">
              {content || 'Loading company profile...'}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-6 bg-primary/10 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-primary">{t('about.mission')}</h3>
              <p className="text-sm">Innovative solutions shaping sustainable environments.</p>
            </div>
            <div className="p-6 bg-accent/10 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-accent">{t('about.vision')}</h3>
              <p className="text-sm">Leading architectural consultancy in East Africa.</p>
            </div>
            <div className="p-6 bg-secondary/10 rounded-lg col-span-2">
              <h3 className="text-xl font-bold mb-2 text-secondary">{t('about.values')}</h3>
              <p className="text-sm">Innovation, Integrity, Sustainability, Excellence, Collaboration.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
