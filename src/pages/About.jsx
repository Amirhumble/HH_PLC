import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faEye,
  faCheckCircle,
  faLightbulb,
  faHandshake,
  faLeaf,
  faShieldAlt,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import aboutHero from '../assets/images/heroSectionImages/31.jpg';
import sideImg from '../assets/images/heroSectionImages/33.jpg';

const About = () => {
  const { t } = useTranslation();

  // Map icons and colors to the dynamic list from JSON
  const valueStyles = [
    { icon: faLightbulb, color: 'text-amber-500', bg: 'bg-amber-50' },
    { icon: faShieldAlt, color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: faLeaf, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { icon: faHandshake, color: 'text-purple-500', bg: 'bg-purple-50' }
  ];

  // Safely retrieve the array of objects from translation files
  const translatedValues = t('about.values_list', { returnObjects: true }) || [];

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutHero} alt="About HH Consulting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center space-x-2 text-primary-light mb-4 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]"
          >
            <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
            <span>/</span>
            <span className="text-white">{t('nav.about')}</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-tight"
          >
            {t('about.hero_title')}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '80px' }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
                {t('about.heading')}
              </h2>
              <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed">
                {t('about.description')}
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-5 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl md:text-2xl">
                    <FontAwesomeIcon icon={faRocket} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2">{t('about.mission')}</h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">{t('about.mission_text')}</p>
                  </div>
                </div>
                <div className="flex gap-5 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-xl md:text-2xl">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 md:mb-2">{t('about.vision')}</h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">{t('about.vision_text')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src={sideImg} alt="Architecture Design" className="w-full h-[350px] sm:h-[450px] md:h-[600px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-6 md:p-8 rounded-3xl shadow-xl hidden sm:block max-w-xs border border-slate-100">
                <p className="text-slate-900 font-bold mb-2 uppercase text-[10px] tracking-widest text-primary">{t('about.philosophy_title')}</p>
                <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed">{t('about.philosophy_text')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">{t('about.values')}</h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">{t('about.values_intro')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {translatedValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 ${valueStyles[i]?.bg} ${valueStyles[i]?.color} rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                  <FontAwesomeIcon icon={valueStyles[i]?.icon} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 md:mb-4">{value.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full List / Commitment */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{t('about.commitment_title')}</h2>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  {translatedValues.map((value, i) => (
                    <div key={i} className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary text-lg md:text-xl" />
                      <span className="text-base md:text-lg font-medium">
                        {value.title}: {value.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-slate-300 italic leading-relaxed">
                  "{t('about.commitment_quote')}"
                </p>
                <div className="w-16 h-1 bg-primary"></div>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {t('about.commitment_text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">{t('about.cta_title')}</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('about.cta_text')}
          </p>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white text-primary px-8 py-4 md:px-10 md:py-5 rounded-xl md:rounded-full font-bold text-base md:text-lg hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-2xl"
          >
            <span>{t('about.cta_button')}</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;