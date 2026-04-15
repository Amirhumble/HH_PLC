import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faArrowRight,
  faBuilding,
  faHammer,
  faCity,
  faTasks,
  faCouch
} from '@fortawesome/free-solid-svg-icons';
import { SERVICES } from '../utils/constants';
import { Link } from 'react-router-dom';

const iconMap = {
  building: faBuilding,
  hammer: faHammer,
  city: faCity,
  tasks: faTasks,
  couch: faCouch,
};

const Services = () => {
  const { i18n } = useTranslation();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-secondary py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {i18n.language === 'en' ? 'Our Expertise' : 'የእኛ እውቀት'}
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-xl leading-relaxed">
              {i18n.language === 'en' 
                ? 'We provide comprehensive architectural and engineering solutions, combining innovation with technical precision to deliver sustainable projects.' 
                : 'ዘላቂ ፕሮጀክቶችን ለማቅረብ ፈጠራን ከቴክኒካዊ ትክክለኛነት ጋር በማጣመር አጠቃላይ የአርክቴክቸር እና የምህንድስና መፍትሄዎችን እንሰጣለን።'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Services Grid */}
      <div className="container mx-auto px-4 -mt-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary text-4xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FontAwesomeIcon icon={iconMap[service.icon] || faBuilding} />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  {i18n.language === 'en' ? service.title_en : service.title_am}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {i18n.language === 'en' ? service.description_en : service.description_am}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>{i18n.language === 'en' ? 'Professional Standards' : 'ሙያዊ ደረጃዎች'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-primary">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>{i18n.language === 'en' ? 'Expert Execution' : 'ባለሙያ አፈፃፀም'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary">
              {i18n.language === 'en' ? 'Why Partner With Us?' : 'ለምን ከእኛ ጋር ይሰራሉ?'}
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title_en: 'Innovation First', 
                title_am: 'ፈጠራ ቅድሚያ',
                desc_en: 'We use the latest technology and creative approaches to solve complex design challenges.',
                desc_am: 'ውስብስብ የንድፍ ተግዳሮቶችን ለመፍታት አዳዲስ ቴክኖሎጂዎችን እና የፈጠራ አቀራረቦችን እንጠቀማለን።'
              },
              { 
                title_en: 'Quality Assured', 
                title_am: 'ጥራት የተረጋገጠ',
                desc_en: 'Our rigorous quality control processes ensure every detail meets international engineering standards.',
                desc_am: 'የእኛ ጥብቅ የጥራት ቁጥጥር ሂደቶች እያንዳንዱ ዝርዝር ዓለም አቀፍ የምህንድስና ደረጃዎችን ማሟላቱን ያረጋግጣሉ።'
              },
              { 
                title_en: 'Sustainable Focus', 
                title_am: 'ትኩረት ለዘላቂነት',
                desc_en: 'We prioritize eco-friendly designs that minimize environmental impact and maximize efficiency.',
                desc_am: 'ለአካባቢ ተስማሚ የሆኑ እና የአካባቢ ተፅዕኖን የሚቀንሱ ዲዛይኖችን ቅድሚያ እንሰጣለን።'
              }
            ].map((feature, i) => (
              <div key={i} className="text-center space-y-4">
                <h3 className="text-xl font-bold text-secondary">
                  {i18n.language === 'en' ? feature.title_en : feature.title_am}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {i18n.language === 'en' ? feature.desc_en : feature.desc_am}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="bg-primary p-12 md:p-20 rounded-[3rem] text-white text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              {i18n.language === 'en' ? 'Have a Vision in Mind?' : 'ልዩ ራዕይ አልዎት?'}
            </h2>
            <p className="text-white/90 text-xl max-w-2xl mx-auto mb-12">
              {i18n.language === 'en' 
                ? 'Let our team of award-winning architects and engineers help you build it.' 
                : 'ተሸላሚ በሆኑ አርክቴክቶች እና መሐንዲሶች ቡድናችን በመታገዝ ግንባታዎን ያሳኩ።'}
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-primary px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              {i18n.language === 'en' ? 'Start a Conversation' : 'ውይይት ይጀምሩ'}
            </Link>
          </div>
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/5 rounded-full -ml-20 -mb-20 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
