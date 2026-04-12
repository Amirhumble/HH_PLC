import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { COMPANY_INFO } from '../../utils/constants';

const ContactSection = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
    )
    .then((result) => {
        setStatus({ type: 'success', message: t('contact.success') });
        form.current.reset();
    }, (error) => {
        setStatus({ type: 'error', message: t('contact.error') });
    });
  };

  return (
    <section className="section-padding bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <h4 className="font-bold text-accent">Address</h4>
                  <p className="text-secondary">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div>
                  <h4 className="font-bold text-accent">Phone</h4>
                  <p className="text-secondary">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <h4 className="font-bold text-accent">Email</h4>
                  <p className="text-secondary">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
               <span className="text-secondary opacity-50 font-semibold italic">Google Maps Embed Placeholder</span>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-xl shadow-sm space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">{t('contact.name')}</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">{t('contact.email')}</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">{t('contact.subject')}</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">{t('contact.message')}</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-primary"
              ></textarea>
            </div>
            
            {status.message && (
              <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn-primary w-full"
            >
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
