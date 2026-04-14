import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

// Import gallery images
import gallery1 from '../../assets/images/gallery/presentationWithPotentialClient1.png';
import gallery2 from '../../assets/images/gallery/prsentationWithPotentialClient2.png';
import gallery3 from '../../assets/images/gallery/prsentationWithPotentailClient3.png';
import gallery4 from '../../assets/images/gallery/presentationWithPotentialClient4.png';
import gallery5 from '../../assets/images/gallery/presentationWithPotentialClient5.png';
import gallery6 from '../../assets/images/gallery/siteWork.png';
import gallery7 from '../../assets/images/gallery/STAFFRECOGNITION.png';
import gallery8 from '../../assets/images/gallery/staffTrip.png';

const GallerySection = () => {
  const { i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: gallery6, title: { en: 'Site Work', am: 'የሳይት ስራ' } },
    { src: gallery7, title: { en: 'Staff Recognition', am: 'የሰራተኞች እውቅና' } },
    { src: gallery8, title: { en: 'Staff Trip', am: 'የሰራተኞች ጉዞ' } },
    { src: gallery1, title: { en: 'Presentation with potential client', am: 'ሊሆኑ ከሚችሉ ደንበኞች ጋር የቀረበ ገለፃ' } },
    { src: gallery2, title: { en: 'Presentation with potential client', am: 'ሊሆኑ ከሚችሉ ደንበኞች ጋር የቀረበ ገለፃ' } },
    { src: gallery3, title: { en: 'Presentation with potential client', am: 'ሊሆኑ ከሚችሉ ደንበኞች ጋር የቀረበ ገለፃ' } },
    { src: gallery4, title: { en: 'Presentation with potential client', am: 'ሊሆኑ ከሚችሉ ደንበኞች ጋር የቀረበ ገለፃ' } },
    { src: gallery5, title: { en: 'Presentation with potential client', am: 'ሊሆኑ ከሚችሉ ደንበኞች ጋር የቀረበ ገለፃ' } },
  ];

  const t = (en, am) => (i18n.language === 'en' ? en : am);

  return (
    <section className="section-padding bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('Our Gallery', 'የፎቶ ማህደር')}
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            {t(
              'Glimpses of our team in action, site visits, and corporate events.',
              'የቡድናችን የስራ እንቅስቃሴ፣ የሳይት ጉብኝቶች እና የድርጅታዊ ዝግጅቶች እይታዎች።'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-square shadow-md hover:shadow-xl transition-all duration-500"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={t(image.title.en, image.title.am)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white font-bold text-sm">
                    {t(image.title.en, image.title.am)}
                  </p>
                  <div className="mt-2 text-primary">
                    <FontAwesomeIcon icon={faExpandAlt} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white text-3xl hover:text-primary transition-colors z-[60]"
              onClick={() => setSelectedImage(null)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={t(selectedImage.title.en, selectedImage.title.am)}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-white text-xl md:text-2xl font-bold">
                  {t(selectedImage.title.en, selectedImage.title.am)}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
