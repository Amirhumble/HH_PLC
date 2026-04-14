import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Fuse from 'fuse.js';
import { SERVICES, PROJECTS, TEAM_MEMBERS } from '../utils/constants';

const SearchResults = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isEnglish = (i18n.resolvedLanguage || i18n.language) === 'en';
  const query = (new URLSearchParams(location.search).get('q') || '').trim();

  const searchData = useMemo(() => {
    const services = SERVICES.map(s => ({
      ...s,
      type: 'service',
      typeLabel: t('search.types.service'),
      title: isEnglish ? s.title_en : s.title_am,
      description: isEnglish ? s.description_en : s.description_am,
      searchableTitleEn: s.title_en,
      searchableTitleAm: s.title_am,
      searchableDescriptionEn: s.description_en,
      searchableDescriptionAm: s.description_am,
      link: '/services'
    }));

    const projects = PROJECTS.map(p => ({
      ...p,
      type: 'project',
      typeLabel: t('search.types.project'),
      title: isEnglish ? p.title_en : p.title_am,
      description: isEnglish ? (p.description_en || p.description_am) : (p.description_am || p.description_en),
      searchableTitleEn: p.title_en,
      searchableTitleAm: p.title_am,
      searchableDescriptionEn: p.description_en || '',
      searchableDescriptionAm: p.description_am || '',
      searchableCategoryEn: p.category || '',
      searchableCategoryAm: p.category_am || '',
      link: '/projects'
    }));

    const teams = TEAM_MEMBERS.map(m => ({
      ...m,
      type: 'team',
      typeLabel: t('search.types.team'),
      title: m.name,
      description: isEnglish ? m.role_en : m.role_am,
      searchableRoleEn: m.role_en,
      searchableRoleAm: m.role_am,
      searchableBioEn: m.bio_en || '',
      searchableBioAm: m.bio_am || '',
      link: '/teams'
    }));

    return [...services, ...projects, ...teams];
  }, [isEnglish, t]);

  const fuse = useMemo(() => new Fuse(searchData, {
    includeScore: true,
    ignoreLocation: true,
    threshold: 0.35,
    minMatchCharLength: 2,
    keys: [
      { name: 'title', weight: 0.35 },
      { name: 'description', weight: 0.2 },
      { name: 'searchableTitleEn', weight: 0.15 },
      { name: 'searchableTitleAm', weight: 0.15 },
      { name: 'searchableDescriptionEn', weight: 0.05 },
      { name: 'searchableDescriptionAm', weight: 0.05 },
      { name: 'searchableCategoryEn', weight: 0.025 },
      { name: 'searchableCategoryAm', weight: 0.025 },
      { name: 'searchableRoleEn', weight: 0.1 },
      { name: 'searchableRoleAm', weight: 0.1 },
      { name: 'searchableBioEn', weight: 0.05 },
      { name: 'searchableBioAm', weight: 0.05 }
    ],
  }), [searchData]);

  const results = useMemo(() => {
    if (!query) return [];

    return fuse
      .search(query)
      .slice(0, 30);
  }, [fuse, query]);

  return (
    <section className="section-padding bg-white min-h-[60vh]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-3">
          {t('search.title')}: <span className="text-primary italic">"{query}"</span>
        </h2>
        {query ? (
          <p className="text-sm text-secondary/80 mb-8">
            {t('search.results_count', { count: results.length })}
          </p>
        ) : (
          <p className="text-sm text-secondary/80 mb-8">{t('search.empty_query')}</p>
        )}

        {query && results.length > 0 ? (
          <div className="space-y-6">
            {results.map(({ item }) => (
              <div key={`${item.type}-${item.id}`} className="border-b border-gray-100 pb-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.typeLabel}</span>
                <Link
                  to={item.link}
                  className="inline-block text-xl font-bold mt-1 hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
                <p className="text-secondary mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12">
            <p className="text-xl text-secondary">
              {t('search.no_results')} <span className="font-bold">"{query}"</span>
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-secondary">
              {t('search.start_typing')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
