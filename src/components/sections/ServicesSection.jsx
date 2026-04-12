import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHammer, faCity, faTasks, faCouch } from '@fortawesome/free-solid-svg-icons';
import { SERVICES } from '../../utils/constants';

const iconMap = {
  building: faBuilding,
  hammer: faHammer,
  city: faCity,
  tasks: faTasks,
  couch: faCouch,
};

const ServicesSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl">{t('services.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary text-4xl mb-6">
                <FontAwesomeIcon icon={iconMap[service.icon]} />
              </div>
              <h3 className="text-xl mb-4">
                {i18n.language === 'en' ? service.title_en : service.title_am}
              </h3>
              <p className="text-secondary leading-relaxed">
                {i18n.language === 'en' ? service.description_en : service.description_am}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
