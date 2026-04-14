import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { COMPANY_INFO } from '../../utils/constants';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="inline-block text-2xl font-bold tracking-tight text-white">
            {t('brand.shortName')}
          </Link>
          <p className="text-gray-300 leading-relaxed text-sm">
            {t('footer.description')}
          </p>
          <div className="flex space-x-4">
            {[
              { icon: faFacebook, link: COMPANY_INFO.social.facebook },
              { icon: faLinkedin, link: COMPANY_INFO.social.linkedin }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 relative pb-2 text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
            {t('footer.quickLinks')}
          </h3>
          <ul className="space-y-4">
            {[
              { name: t('nav.home'), path: '/' },
              { name: t('nav.about'), path: '/about' },
              { name: t('nav.services'), path: '/services' },
              { name: t('nav.projects'), path: '/projects' },
              { name: t('nav.teams'), path: '/teams' },
              { name: t('nav.contact'), path: '/contact' },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-[10px] mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-bold mb-6 relative pb-2 text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
            {t('footer.contactUs')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mt-1" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t('footer.emails')}</h4>
                {COMPANY_INFO.emails.map((email, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faEnvelope} className="text-primary text-xs" />
                    <a href={`mailto:${email}`} className="text-gray-300 hover:text-primary text-sm transition-colors">
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="text-primary mr-2" />
                  {t('footer.phoneNumbers')}
                </h4>
              <div className="grid grid-cols-1 gap-2">
                {COMPANY_INFO.phones.map((phone, i) => (
                  <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-primary text-sm transition-colors block">
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. {t('footer.rightsReserved')}</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">{t('footer.privacyPolicy')}</a>
          <a href="#" className="hover:text-primary transition-colors">{t('footer.termsOfService')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
