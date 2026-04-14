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
    <section className="relative py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img src={aboutImg} alt="HH Consulting Team" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-primary text-white p-8 rounded-3xl shadow-2xl hidden md:block z-20">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm font-medium opacity-90 uppercase tracking-widest">Years of<br/>Excellence</div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-slate-100 rounded-full -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              About Our Firm
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 leading-tight">
              {t('about.title')}
            </h2>
            <p className="text-lg text-slate-800 leading-relaxed mb-8">
              {t('about.description')}
            </p>
            
            <div className="space-y-4 mb-10">
              {['Innovation in Design', 'Sustainable Engineering', 'Client-Centric Approach'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-primary text-xl" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center space-x-3 bg-slate-900 hover:bg-primary text-white px-8 py-4 rounded-full font-bold transition-all duration-300"
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
