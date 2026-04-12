import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { TEAM_MEMBERS } from '../../utils/constants';

const TeamsSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="section-padding bg-white" id="teams">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl">{t('teams.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/4] mb-6">
                {/* Photo placeholder */}
                <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                   <span className="text-accent font-bold opacity-20 text-6xl">?</span>
                </div>
                
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <a href={member.linkedin} className="bg-white text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                   </a>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">
                  {i18n.language === 'en' ? member.role_en : member.role_am}
                </p>
                <p className="text-secondary text-sm leading-relaxed px-4">
                   {i18n.language === 'en' ? member.bio_en : member.bio_am}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
