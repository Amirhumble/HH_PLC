import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../../utils/constants';
import { getOptimizedImage } from '../../utils/imageUtils';

const TeamsSection = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = (i18n.resolvedLanguage || i18n.language) === 'en';

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-white via-surface to-white"
      id="teams"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            {t('teams.badge')}
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-secondary leading-tight">{t('teams.title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-lg leading-relaxed text-secondary/70">
            {t('teams.description')}
          </p>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group h-full`}
            >
              <div className="h-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div
                  className={`relative overflow-hidden bg-gray-50 ${
                    member.cardVariant === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/5]'
                  }`}
                >
                  <img
                    src={getOptimizedImage(member.photo, member.cardVariant === 'wide' ? 600 : 400)}
                    alt={member.name}
                    loading="lazy"
                    className={`h-full w-full transition-transform duration-700 group-hover:scale-110 ${
                      member.imageFit === 'contain' ? 'object-contain p-6 md:p-10' : 'object-cover'
                    }`}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x500?text=Team+Member';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="inline-flex rounded-xl bg-primary/90 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                      {isEnglish ? member.role_en : member.role_am}
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold leading-tight text-secondary mb-3">{member.name}</h3>
                  <div className="w-8 h-1 bg-primary mb-4 rounded-full"></div>
                  <p className="text-sm md:text-base leading-relaxed text-secondary/70 line-clamp-4">
                    {isEnglish ? member.bio_en : member.bio_am}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
