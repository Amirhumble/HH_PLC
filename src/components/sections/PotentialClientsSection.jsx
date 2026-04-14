import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const logoModules = import.meta.glob('../../assets/images/potentalClientsLogo/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default'
});

const formatClientName = (path) => {
  const fileName = path.split('\\').pop()?.split('/').pop()?.replace(/\.[^.]+$/, '') || '';

  return fileName
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/([a-zA-Z])(\d)/g, '$1 $2')
    .replace(/(\d)([a-zA-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .trim();
};

const clientLogos = Object.entries(logoModules)
  .map(([path, src]) => ({
    name: formatClientName(path),
    src
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const marqueeLogos = [...clientLogos, ...clientLogos];

const PotentialClientsSection = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9f4_0%,#ffffff_52%,#f8f9fa_100%)] py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary shadow-sm backdrop-blur-sm">
            {isEnglish ? 'Trusted By' : 'የሚታመን አጋሮች'}
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-5xl">
            {isEnglish ? 'Potential Clients & Partners' : 'ደንበኞቻችን እና አጋሮቻችን'}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-secondary/75 md:text-base">
            {isEnglish
              ? 'A moving wall of organizations that reflect the scale, trust, and reach behind HH PLC’s work.'
              : 'የHH PLC የስራ ልምድ፣ እምነት እና ስፋትን የሚያሳዩ ድርጅቶች እና አጋሮች።'}
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-[0_24px_80px_rgba(45,42,38,0.08)] md:p-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/92 to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/92 to-transparent md:w-28" />

          <div className="potential-clients-marquee">
            <div className="potential-clients-track">
              {marqueeLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="group flex min-w-[210px] items-center justify-center rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-7 py-6 shadow-[0_18px_40px_rgba(45,42,38,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(45,42,38,0.12)]"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-16 w-auto max-w-[160px] object-contain opacity-100 contrast-125 brightness-105 saturate-110 transition duration-500 group-hover:scale-[1.03] md:h-20 md:max-w-[180px]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotentialClientsSection;
