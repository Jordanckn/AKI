import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, BookOpen } from 'lucide-react';
import SEOHead from './SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead 
        title="Page non trouvée - Alyah Knowledge"
        description="La page que vous recherchez n'existe pas. Explorez nos ressources crypto et formations."
        noindex={true}
        path="/404"
      />
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 mb-6">
              <span className="text-4xl font-bold text-blue-600">404</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Page non trouvée
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Home className="mr-2 h-5 w-5" />
              Accueil
            </Link>
            <Link
              to="/dictionnaire-crypto"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Search className="mr-2 h-5 w-5" />
              Dictionnaire
            </Link>
            <Link
              to="/articles"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Articles
            </Link>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Ressources populaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <Link 
                to="/comprendre-les-cryptomonnaies" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                → Formation crypto complète
              </Link>
              <Link 
                to="/marche-cryptomonnaies-temps-reel" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                → Marché en temps réel
              </Link>
              <Link 
                to="/dictionnaire-crypto/bitcoin" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                → Qu'est-ce que Bitcoin ?
              </Link>
              <Link 
                to="/signaux-trading" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                → Signaux de trading
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}