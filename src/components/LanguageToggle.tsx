import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 
        hover:border-blue-500 transition-all duration-200 group hover:bg-blue-50"
      aria-label={`Switch to ${currentLanguage === 'fr' ? 'English' : 'French'}`}
    >
      <div className="flex items-center space-x-1">
        <span className={`fi fi-${currentLanguage === 'fr' ? 'fr' : 'gb'} w-5 h-5 rounded-sm`} />
        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
          {currentLanguage === 'fr' ? 'FR' : 'EN'}
        </span>
      </div>
      <svg 
        className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        />
      </svg>
    </button>
  );
}