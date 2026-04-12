import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Fuse from 'fuse.js';
import { SERVICES, PROJECTS, TEAM_MEMBERS } from '../utils/constants';

const SearchResults = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';

  const searchData = useMemo(() => {
    const services = SERVICES.map(s => ({
      ...s,
      type: 'Service',
      title: i18n.language === 'en' ? s.title_en : s.title_am,
      description: i18n.language === 'en' ? s.description_en : s.description_am,
      link: '/services'
    }));

    const projects = PROJECTS.map(p => ({
      ...p,
      type: 'Project',
      title: i18n.language === 'en' ? p.title_en : p.title_am,
      description: p.description_en, // projects only have en description in constants.js
      link: '/projects'
    }));

    const teams = TEAM_MEMBERS.map(m => ({
      ...m,
      type: 'Team Member',
      title: m.name,
      description: i18n.language === 'en' ? m.role_en : m.role_am,
      link: '/teams'
    }));

    return [...services, ...projects, ...teams];
  }, [i18n.language]);

  const fuse = useMemo(() => new Fuse(searchData, {
    keys: ['title', 'description', 'type'],
    threshold: 0.3,
  }), [searchData]);

  const results = useMemo(() => fuse.search(query), [fuse, query]);

  return (
    <section className="section-padding bg-white min-h-[60vh]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-8">
          {t('search.title')}: <span className="text-primary italic">"{query}"</span>
        </h2>

        {results.length > 0 ? (
          <div className="space-y-6">
            {results.map(({ item }) => (
              <div key={`${item.type}-${item.id}`} className="border-b border-gray-100 pb-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.type}</span>
                <h3 className="text-xl font-bold mt-1 hover:text-primary transition-colors cursor-pointer">
                   {item.title}
                </h3>
                <p className="text-secondary mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-secondary">
              {t('search.no_results')} <span className="font-bold">"{query}"</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
