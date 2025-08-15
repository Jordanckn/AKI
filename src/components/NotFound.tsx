import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, BookOpen } from 'lucide-react';
import SEOHead from './SEOHead';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <SEOHead
        title={t('notFoundPage.seo.title')}
        description={t('notFoundPage.seo.description')}
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
              {t('notFoundPage.header.title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('notFoundPage.header.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Home className="mr-2 h-5 w-5" />
              {t('notFoundPage.buttons.home')}
            </Link>
            <Link
              to="/dictionnaire-crypto"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <Search className="mr-2 h-5 w-5" />
              {t('notFoundPage.buttons.dictionary')}
            </Link>
            <Link
              to="/articles"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              {t('notFoundPage.buttons.articles')}
            </Link>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              {t('notFoundPage.content.popularResources')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <Link
                to="/comprendre-les-cryptomonnaies"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {t('notFoundPage.content.link1')}
              </Link>
              <Link
                to="/marche-cryptomonnaies-temps-reel"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {t('notFoundPage.content.link2')}
              </Link>
              <Link
                to="/dictionnaire-crypto/bitcoin"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {t('notFoundPage.content.link3')}
              </Link>
              <Link
                to="/signaux-trading"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {t('notFoundPage.content.link4')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}