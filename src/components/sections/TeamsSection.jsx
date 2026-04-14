import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../../utils/constants';

const TeamsSection = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = (i18n.resolvedLanguage || i18n.language) === 'en';

  return (
    <section
      className="section-padding bg-gradient-to-b from-white via-surface to-white"
      id="teams"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold tracking-[0.14em] text-primary">
            {t('teams.badge')}
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl">{t('teams.title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-secondary/80">
            {t('teams.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group h-full ${member.cardVariant === 'wide' ? 'xl:col-span-2' : ''}`}
            >
              <div className="h-full overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-[0_14px_35px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
                <div
                  className={`relative overflow-hidden bg-gradient-to-b from-gray-100 via-gray-50 to-white ${
                    member.cardVariant === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/4.7]'
                  }`}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/10 to-transparent"></div>
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className={`h-full w-full object-center transition-transform duration-500 group-hover:scale-105 ${
                      member.imageFit === 'contain' ? 'object-contain p-4 md:p-6' : 'object-cover'
                    }`}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x500?text=Team+Member';
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-wide text-secondary">
                      {isEnglish ? member.role_en : member.role_am}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 p-6">
                  <h3 className="text-xl font-bold leading-tight text-secondary">{member.name}</h3>
                  <p className="text-sm leading-relaxed text-secondary/80 min-h-[72px]">
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
