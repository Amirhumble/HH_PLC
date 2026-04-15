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
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="inline-block text-2xl font-bold tracking-tight text-white">
            {t('brand.shortName')}
          </Link>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
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
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-white/5"
              >
                <FontAwesomeIcon icon={social.icon} className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 relative pb-2 text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
            {t('footer.quickLinks')}
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-4 gap-x-4">
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
                  className="text-gray-400 hover:text-primary transition-colors flex items-center group py-1"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors">
                  {COMPANY_INFO.address}
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] opacity-50">{t('footer.emails')}</h4>
                {COMPANY_INFO.emails.map((email, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <FontAwesomeIcon icon={faEnvelope} className="text-primary text-xs" />
                    <a href={`mailto:${email}`} className="text-gray-400 hover:text-primary text-sm transition-colors break-all">
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] opacity-50 mb-4 flex items-center">
                  {t('footer.phoneNumbers')}
                </h4>
              <div className="grid grid-cols-1 gap-3">
                {COMPANY_INFO.phones.map((phone, i) => (
                  <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center space-x-3 text-gray-400 hover:text-primary text-sm transition-colors p-2 bg-white/5 rounded-lg border border-white/5 hover:border-primary/30">
                    <FontAwesomeIcon icon={faPhone} className="text-primary text-xs" />
                    <span>{phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-6">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. {t('footer.rightsReserved')}</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-primary transition-colors">{t('footer.privacyPolicy')}</a>
          <a href="#" className="hover:text-primary transition-colors">{t('footer.termsOfService')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
