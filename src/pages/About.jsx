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

  const coreValues = [
    {
      title: 'Innovation',
      desc: 'We embrace cutting-edge technology and creative thinking to solve complex engineering challenges.',
      icon: faLightbulb,
      color: 'text-amber-500',
      bg: 'bg-amber-50'
    },
    {
      title: 'Integrity',
      desc: 'Transparency and ethical practices are the bedrock of every partnership we build.',
      icon: faShieldAlt,
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      title: 'Sustainability',
      desc: 'Our designs prioritize environmental responsibility and long-term resilience.',
      icon: faLeaf,
      color: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
    {
      title: 'Collaboration',
      desc: 'We work as a seamless extension of our clients teams to ensure shared success.',
      icon: faHandshake,
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutHero} alt="About HH Consulting" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center space-x-2 text-primary-light mb-4 text-sm font-medium uppercase tracking-widest"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </motion.nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100px' }}
            className="h-1.5 bg-primary mx-auto rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Engineering a Better Future Through <span className="text-primary">Innovation</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl">
                    <FontAwesomeIcon icon={faRocket} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('about.mission')}</h3>
                    <p className="text-slate-600">{t('about.mission_text')}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('about.vision')}</h3>
                    <p className="text-slate-600">{t('about.vision_text')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={sideImg} alt="Architecture Design" className="w-full h-[600px] object-cover" />
              </div>
              {/* Decorative Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden xl:block max-w-xs border border-slate-100">
                <p className="text-slate-900 font-bold mb-2 uppercase text-xs tracking-widest text-primary">Our Philosophy</p>
                <p className="text-slate-600 text-sm italic">"Architecture should speak of its time and place, but yearn for timelessness."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide our decisions, our designs, and our relationships with every client.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100"
              >
                <div className={`w-16 h-16 ${value.bg} ${value.color} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                  <FontAwesomeIcon icon={value.icon} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full List of Specific Values from Locales */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-8">Our Commitment to Excellence</h2>
                <div className="grid grid-cols-1 gap-6">
                  {t('about.values_list', { returnObjects: true }).map((value, i) => (
                    <div key={i} className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/10">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-primary text-xl" />
                      <span className="text-lg font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-xl text-slate-300 italic leading-relaxed">
                  "We combine visionary design with technical excellence to deliver impactful and resilient projects across Ethiopia and beyond."
                </p>
                <div className="w-20 h-1 bg-primary"></div>
                <p className="text-slate-400">
                  HH Consulting Architects and Engineers PLC remains dedicated to providing innovative, sustainable, and integrated solutions that stand the test of time.
                </p>
              </div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with world-class engineering and architectural expertise.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-2xl"
          >
            <span>Get in Touch</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
