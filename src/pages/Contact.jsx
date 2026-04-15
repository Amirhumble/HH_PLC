import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { COMPANY_INFO } from '../utils/constants';

const ContactPageContent = () => {
  const { i18n } = useTranslation();
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
      .then(() => {
        setStatus({ type: 'success', message: i18n.language === 'en' ? 'Message sent successfully!' : 'መልዕክትዎ በትክክል ተልኳል!' });
        form.current.reset();
      }, (error) => {
        console.error('EmailJS send error:', error);
        setStatus({ type: 'error', message: buildEmailErrorMessage(error) });
      });
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {i18n.language === 'en' ? 'Contact Us' : 'ያግኙን'}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {i18n.language === 'en' 
              ? 'Have a project in mind or need professional advice? Our team is here to help you build the future.' 
              : 'በአእምሮዎ ውስጥ ያለ ፕሮጀክት አለ ወይስ ሙያዊ ምክር ይፈልጋሉ? ቡድናችን የወደፊቱን ለመገንባት ሊረዳዎት ዝግጁ ነው።'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-primary transition-all">
            <div className="bg-primary/10 p-5 rounded-full text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <FontAwesomeIcon icon={faPhone} size="xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">{i18n.language === 'en' ? 'Call Us' : 'ይደውሉልን'}</h3>
            <div className="space-y-2">
              {COMPANY_INFO.phones.map((phone, i) => (
                <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-gray-600 hover:text-primary transition-colors font-medium">
                  {phone}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-primary transition-all">
            <div className="bg-primary/10 p-5 rounded-full text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">{i18n.language === 'en' ? 'Email Us' : 'ኢሜል ያድርጉልን'}</h3>
            <div className="space-y-2">
              {COMPANY_INFO.emails.map((email, i) => (
                <a key={i} href={`mailto:${email}`} className="block text-gray-600 hover:text-primary transition-colors font-medium">
                  {email}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-primary transition-all">
            <div className="bg-primary/10 p-5 rounded-full text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">{i18n.language === 'en' ? 'Visit Us' : 'ይጎብኙን'}</h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              {COMPANY_INFO.address}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* Detailed Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <h2 className="text-3xl font-bold text-secondary mb-8">
              {i18n.language === 'en' ? 'Send a Detailed Message' : 'ዝርዝር መልዕክት ይላኩ'}
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="user_name" placeholder={i18n.language === 'en' ? 'Full Name' : 'ሙሉ ስም'} required className="w-full px-5 py-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary transition-all shadow-sm" />
                <input type="email" name="user_email" placeholder={i18n.language === 'en' ? 'Email Address' : 'ኢሜል አድራሻ'} required className="w-full px-5 py-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary transition-all shadow-sm" />
              </div>
              <input type="text" name="subject" placeholder={i18n.language === 'en' ? 'Subject' : 'ጉዳዩ'} required className="w-full px-5 py-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary transition-all shadow-sm" />
              <textarea name="message" rows="6" placeholder={i18n.language === 'en' ? 'Your Message' : 'መልዕክትዎ'} required className="w-full px-5 py-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-primary transition-all shadow-sm resize-none"></textarea>
              
              {status.message && (
                <div className={`p-4 rounded-xl text-sm ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.message}
                </div>
              )}
              
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-primary/30 transform active:scale-95 uppercase tracking-wider">
                {i18n.language === 'en' ? 'Send Message' : 'መልዕክት ላክ'}
              </button>
            </form>
          </div>

          {/* Map & Office Info */}
          <div className="flex flex-col gap-8">
            <div className="flex-grow min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31524.154656470473!2d38.75628948211671!3d9.016298384026614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ff190dad51%3A0xfa72481b4626442f!2sHH%20Consulting%20Architects%20%26%20Engineers%20PLC!5e0!3m2!1sen!2set!4v1776145411611!5m2!1sen!2set" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-secondary p-8 rounded-3xl text-white">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg text-primary">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{i18n.language === 'en' ? 'Working Hours' : 'የስራ ሰዓታት'}</h4>
                  <p className="text-gray-400">
                    {i18n.language === 'en' ? 'Mon - Fri: 8:30 AM - 5:30 PM' : 'ሰኞ - አርብ፡ ከጠዋቱ 2:30 - 11:30'}
                  </p>
                  <p className="text-gray-400">
                    {i18n.language === 'en' ? 'Saturday: 8:30 AM - 12:30 PM' : 'ቅዳሜ፡ ከጠዋቱ 2:30 - 6:30'}
                  </p>
                  <p className="text-gray-400 mt-2">
                    {i18n.language === 'en' ? 'Closed on Sundays & Public Holidays' : 'እሁድ እና በበዓላት ዝግ ነው።'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <ContactPageContent />
    </div>
  );
};

export default Contact;
