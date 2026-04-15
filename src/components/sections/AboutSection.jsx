import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAward, 
  faCheckCircle, 
  faUsers, 
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import aboutImg from '../../assets/images/heroSectionImages/26.jpg';

const AboutSection = () => {
  const { t } = useTranslation();

  const stats = [
    { label: 'Years Experience', value: '15+', icon: faAward },
    { label: 'Expert Team', value: '40+', icon: faUsers },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Side with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImg} 
                alt="HH Consulting Team" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-10 sm:-right-10 bg-primary text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl z-20">
              <div className="text-3xl sm:text-4xl font-bold mb-1">15+</div>
              <div className="text-[10px] sm:text-sm font-medium opacity-90 uppercase tracking-widest leading-tight">Years of<br/>Excellence</div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-48 h-48 sm:w-64 sm:h-64 bg-slate-100 rounded-full -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-xs sm:text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              About Our Firm
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 text-slate-900 leading-tight">
              {t('about.title')}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 sm:mb-8">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 sm:mb-10">
              {['Innovation in Design', 'Sustainable Engineering', 'Client-Centric Approach', 'Expert Solutions'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary text-lg" />
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group flex w-full sm:inline-flex items-center justify-center sm:justify-start space-x-3 bg-slate-900 hover:bg-primary text-white px-8 py-4 rounded-xl sm:rounded-full font-bold transition-all duration-300 shadow-lg"
            >
              <span>Discover Our Story</span>
              <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
