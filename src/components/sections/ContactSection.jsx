import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { COMPANY_INFO } from '../../utils/constants';

const ContactSection = () => {
  const { t, i18n } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const buildEmailErrorMessage = (error) => {
    const details = [error?.status, error?.text, error?.message]
      .filter(Boolean)
      .join(' - ');

    if (i18n.language === 'en') {
      return details
        ? `Email sending failed: ${details}`
        : 'Email sending failed. Please check EmailJS settings (service, template, public key, and allowed origin).';
    }

    return details
      ? `ኢሜይል መላክ አልተሳካም: ${details}`
      : 'ኢሜይል መላክ አልተሳካም። የEmailJS ቅንብሮችን (service, template, public key, allowed origin) ያረጋግጡ።';
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const isConfigMissing = [serviceId, templateId, publicKey].some(
      (value) => !value || value.startsWith('your_')
    );

    if (isConfigMissing) {
      setStatus({
        type: 'error',
        message:
          i18n.language === 'en'
            ? 'Email service is not configured. Add EmailJS keys in your .env file.'
            : 'የኢሜይል አገልግሎቱ አልተዋቀረም። የEmailJS ቁልፎችን በ .env ፋይል ያስገቡ።'
      });
      return;
    }

    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    )
      .then((result) => {
        setStatus({ type: 'success', message: i18n.language === 'en' ? 'Message sent successfully!' : 'መልዕክትዎ በትክክል ተልኳል!' });
        form.current.reset();
      }, (error) => {
        console.error('EmailJS send error:', error);
        setStatus({ type: 'error', message: buildEmailErrorMessage(error) });
      });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary font-bold uppercase tracking-widest text-xs mb-2">Connect With Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary">
            {i18n.language === 'en' ? 'Get In Touch' : 'ያግኙን'}
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Quick Contact Info */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                <div className="w-1 h-6 bg-primary rounded-full"></div>
                {i18n.language === 'en' ? 'Contact Information' : 'የእውቂያ መረጃ'}
              </h3>
              <div className="space-y-4 md:space-y-6">
                {COMPANY_INFO.phones.map((phone, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-primary/5 transition-colors group gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <span className="font-semibold text-secondary text-sm md:text-base">{phone}</span>
                    </div>
                    <a 
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="w-full sm:w-auto text-center bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                    >
                      {i18n.language === 'en' ? 'Call Now' : 'አሁኑኑ ይደውሉ'}
                    </a>
                  </div>
                ))}
                
                <div className="flex items-center gap-4 p-4 border border-gray-50 rounded-2xl">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-gray-500 uppercase font-bold tracking-wider">{i18n.language === 'en' ? 'Email Address' : 'ኢሜል'}</p>
                    <p className="font-semibold text-secondary text-sm md:text-base break-all">{COMPANY_INFO.emails[0]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 order-1 lg:order-2">
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-6 md:mb-8">
              {i18n.language === 'en' ? 'Send us a Message' : 'መልዕክት ይላኩልን'}
            </h3>
            <form aria-label="contact-form" ref={form} onSubmit={sendEmail} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-bold mb-2 text-gray-500 uppercase tracking-wider">
                    {i18n.language === 'en' ? 'Your Name' : 'ስም'}
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold mb-2 text-gray-500 uppercase tracking-wider">
                    {i18n.language === 'en' ? 'Email Address' : 'ኢሜል'}
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs md:text-sm font-bold mb-2 text-gray-500 uppercase tracking-wider">
                  {i18n.language === 'en' ? 'Subject' : 'ጉዳዩ'}
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-bold mb-2 text-gray-500 uppercase tracking-wider">
                  {i18n.language === 'en' ? 'Message' : 'መልዕክት'}
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-sm md:text-base"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-xl text-xs md:text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-primary/20 transform active:scale-[0.98] text-base md:text-lg"
              >
                {i18n.language === 'en' ? 'Send Message' : 'መልዕክት ላክ'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
