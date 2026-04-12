import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { COMPANY_INFO } from '../../utils/constants';

import logo from '../../assets/images/logo.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-accent text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="HH PLC Logo" className="h-10 w-auto invert" />
            <span className="font-bold text-xl">{COMPANY_INFO.name}</span>
          </div>
          <p className="text-gray-300 mb-4">{COMPANY_INFO.tagline}</p>
          <div className="flex space-x-4">
            <a href={COMPANY_INFO.social.facebook} className="hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href={COMPANY_INFO.social.linkedin} className="hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href={COMPANY_INFO.social.instagram} className="hover:text-primary transition-colors">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">{t('nav.about')}</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">{t('nav.services')}</Link></li>
            <li><Link to="/projects" className="text-gray-300 hover:text-primary transition-colors">{t('nav.projects')}</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Contact Info</h3>
          <ul className="space-y-2 text-gray-300">
            <li>{COMPANY_INFO.address}</li>
            <li>{COMPANY_INFO.phone}</li>
            <li>{COMPANY_INFO.email}</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
