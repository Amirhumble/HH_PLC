import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faHammer, 
  faCity, 
  faTasks, 
  faCouch,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { SERVICES } from '../../utils/constants';

const iconMap = {
  building: faBuilding,
  hammer: faHammer,
  city: faCity,
  tasks: faTasks,
  couch: faCouch,
};

const ServicesSection = ({ showcase = false }) => {
  const { i18n } = useTranslation();
  
  // Show only first 6 services on home page showcase
  const displayServices = showcase ? SERVICES.slice(0, 6) : SERVICES;

  return (
    <section className={`section-padding ${showcase ? 'bg-gray-50' : 'bg-white'}`} id="services">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className={`${showcase ? 'text-left' : 'text-center mx-auto'}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
              {i18n.language === 'en' ? 'Our Expertise' : 'የእኛ እውቀት'}
            </h2>
            <div className={`w-20 h-1.5 bg-primary mt-2 ${showcase ? '' : 'mx-auto'}`}></div>
          </div>
          {showcase && (
            <Link 
              to="/services" 
              className="group flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors"
            >
              <span>{i18n.language === 'en' ? 'View All Services' : 'ሁሉንም አገልግሎቶች ይመልከቱ'}</span>
              <FontAwesomeIcon icon={faArrowRight} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-3xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={iconMap[service.icon] || faBuilding} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">
                {i18n.language === 'en' ? service.title_en : service.title_am}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-6 line-clamp-3">
                {i18n.language === 'en' ? service.description_en : service.description_am}
              </p>
              {showcase && (
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-primary font-bold gap-2 group/link"
                >
                  <span>{i18n.language === 'en' ? 'Learn More' : 'ተጨማሪ ያንብቡ'}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
