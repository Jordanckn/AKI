import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-fade-in-up" role="dialog" aria-labelledby="cookie-title">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-md">
        <div className="flex items-start justify-between mb-4">
          <h3 id="cookie-title" className="text-lg font-semibold text-gray-900">🍪 Cookies & Confidentialité</h3>
          <button
            onClick={handleDecline}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Refuser les cookies"
          >
            <X className="h-5 w-5 text-gray-500" aria-hidden="true" />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm mb-6">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
          En continuant votre navigation, vous acceptez l'utilisation des cookies 
          conformément à notre politique de confidentialité.
        </p>
        
        <div className="flex items-center justify-end space-x-4">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 
              transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded"
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r 
              from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 
              transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}