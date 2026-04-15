import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const currentQuery = new URLSearchParams(location.search).get('q') || '';
    if (location.pathname === '/search') {
      setQuery(currentQuery);
    }
  }, [location.pathname, location.search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      if (location.pathname !== '/search') {
        navigate('/search');
      }
      return;
    }

    navigate(`/search?q=${encodeURIComponent(normalizedQuery)}`);

    if (location.pathname !== '/search') {
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t('nav.search')}
        aria-label={t('search.placeholder')}
        className="px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-primary w-full md:w-64"
      />
      <button
        type="submit"
        className="absolute right-3 text-gray-500 hover:text-primary"
        aria-label={t('nav.search')}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBar;
