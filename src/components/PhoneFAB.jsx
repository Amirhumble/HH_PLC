import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';

const PhoneFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumbers = [
    { number: "011 8683830", label: "Office 1" },
    { number: "011 6672951", label: "Office 2" }
  ];

  const toggleFAB = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Phone Numbers List */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-2 space-y-3 animate-fade-in-up">
          <h3 className="text-sm font-bold text-gray-800 mb-2">Call Us</h3>
          {phoneNumbers.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone.number.replace(/\s/g, '')}`}
              className="flex items-center justify-between gap-4 px-4 py-2 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 group"
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-700">{phone.label}</span>
                <span className="text-xs text-gray-500">{phone.number}</span>
              </div>
              <FontAwesomeIcon
                icon={faPhone}
                className="text-green-600 text-sm group-hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={toggleFAB}
        className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-green-300 animate-float"
        aria-label="Call us"
      >
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faPhone}
          className="text-xl transition-transform duration-300"
        />
      </button>
    </div>
  );
};

export default PhoneFAB;
