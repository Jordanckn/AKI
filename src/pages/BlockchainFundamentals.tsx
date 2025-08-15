import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain, Shield, Network, Lock, Cpu, Clock } from 'lucide-react';
import ModuleQuiz from '../components/ModuleQuiz';
import { checkModuleAccess } from '../lib/moduleAccess';
import SEOHead from '../components/SEOHead';
import CourseSchema from '../components/CourseSchema';
import { useTranslation } from 'react-i18next';

export default function BlockchainFundamentals() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const verifyAccess = async () => {
      try {
        setLoading(true);
        const access = await checkModuleAccess('module-1');
        setHasAccess(access);
      } catch (error) {
        console.error('Error verifying module access:', error);
        setHasAccess(false);
      } finally {
        setLoading(false);
      }
    };

    verifyAccess();
  }, []);

  const handleQuizComplete = (score: number) => {
    if (score === 3) {
      navigate('/knowledge/crypto/module-2');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {t('blockchainFundamentalsPage.access.title')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('blockchainFundamentalsPage.access.description')}
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl 
              hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            {t('blockchainFundamentalsPage.access.button')}
          </button>
        </div>
      </div>
    );
  }

  const content = (
    <>
      <SEOHead
        title={t('blockchainFundamentalsPage.seo.title')}
        description={t('blockchainFundamentalsPage.seo.description')}
        canonicalUrl="https://alyah-knowledge.com/formation/comprendre-la-crypto/fondamentaux-blockchain"
      />

      <CourseSchema
        name={t('blockchainFundamentalsPage.seo.title')}
        description={t('blockchainFundamentalsPage.seo.description')}
        isAccessibleForFree={true}
        cssSelector=".bg-white.rounded-2xl.shadow-sm"
      />
      
      {/* Navigation */}
      <Link
        to="/knowledge/crypto"
        className="inline-flex items-center text-gray-600 hover:text-blue-600
          transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        {t('blockchainFundamentalsPage.navigation.back')}
      </Link>

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl
          bg-gradient-to-br from-blue-600 to-purple-600 text-white mb-6">
          <Brain className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('blockchainFundamentalsPage.header.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
          {t('blockchainFundamentalsPage.header.subtitle')}
        </p>
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full
          bg-gray-100 text-gray-600 text-sm">
          <Clock className="w-4 h-4 mr-2" />
          {t('blockchainFundamentalsPage.header.readingTime')}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl mb-12">
              <p className="text-gray-700 leading-relaxed">
                {t('blockchainFundamentalsPage.content.intro')}
              </p>
            </div>

            {/* Définition */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Lock className="h-6 w-6 text-blue-600" />
              {t('blockchainFundamentalsPage.content.definition.title')}
            </h2>
            <p className="text-gray-700 mb-8">
              {t('blockchainFundamentalsPage.content.definition.paragraph')}
            </p>

            {/* Image de la blockchain */}
            <div className="relative h-80 mb-12 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80"
                alt={t('blockchainFundamentalsPage.content.definition.imageAlt')}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm">
                {t('blockchainFundamentalsPage.content.definition.imageCaption')}
              </div>
            </div>

            {/* Pourquoi la blockchain */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Network className="h-6 w-6 text-orange-600" />
              {t('blockchainFundamentalsPage.content.creation.title')}
            </h2>

            <p className="text-gray-700 mb-6">
              {t('blockchainFundamentalsPage.content.creation.paragraph1')}
            </p>

            <p className="text-gray-700 mb-6">
              {t('blockchainFundamentalsPage.content.creation.example')}
            </p>

            <p className="text-gray-700 mb-6">
              {t('blockchainFundamentalsPage.content.creation.paragraph2')}
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>{t('blockchainFundamentalsPage.content.creation.step1')}</li>
              <li>{t('blockchainFundamentalsPage.content.creation.step2')}</li>
              <li>{t('blockchainFundamentalsPage.content.creation.step3')}</li>
            </ul>

            <p className="text-gray-700 mb-6">
              {t('blockchainFundamentalsPage.content.creation.bankRole')}
            </p>

            <p className="text-gray-700 mb-6">
              {t('blockchainFundamentalsPage.content.creation.issuesIntro')}
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>{t('blockchainFundamentalsPage.content.creation.issue1')}</li>
              <li>{t('blockchainFundamentalsPage.content.creation.issue2')}</li>
              <li>{t('blockchainFundamentalsPage.content.creation.issue3')}</li>
              <li>{t('blockchainFundamentalsPage.content.creation.issue4')}</li>
            </ul>

            <p className="text-gray-700 mb-6">
              {t('blockchainFundamentalsPage.content.creation.solution')}
            </p>

            <p className="text-gray-700 mb-8">
              {t('blockchainFundamentalsPage.content.creation.solution2')}
            </p>

            {/* Fonctionnement */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Cpu className="h-6 w-6 text-purple-600" />
              {t('blockchainFundamentalsPage.content.operation.title')}
            </h2>

            <p className="text-gray-700 mb-6">
              {t('blockchainFundamentalsPage.content.operation.paragraph1')}
            </p>

            <p className="text-gray-700 mb-6">
              {t('blockchainFundamentalsPage.content.operation.paragraph2')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('blockchainFundamentalsPage.content.operation.recording.title')}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span>{t('blockchainFundamentalsPage.content.operation.recording.item1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span>{t('blockchainFundamentalsPage.content.operation.recording.item2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span>{t('blockchainFundamentalsPage.content.operation.recording.item3')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('blockchainFundamentalsPage.content.operation.consensus.title')}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <span>{t('blockchainFundamentalsPage.content.operation.consensus.item1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <span>{t('blockchainFundamentalsPage.content.operation.consensus.item2')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Différence Blockchain vs Bitcoin */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Network className="h-6 w-6 text-blue-600" />
              {t('blockchainFundamentalsPage.content.difference.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {t('blockchainFundamentalsPage.content.difference.blockchain.title')}
                </h3>
                <p className="text-gray-700">
                  {t('blockchainFundamentalsPage.content.difference.blockchain.description')}
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {t('blockchainFundamentalsPage.content.difference.bitcoin.title')}
                </h3>
                <p className="text-gray-700">
                  {t('blockchainFundamentalsPage.content.difference.bitcoin.description')}
                </p>
              </div>
            </div>

            {/* Avantages */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6 text-green-600" />
              {t('blockchainFundamentalsPage.content.advantages.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
                <Shield className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t('blockchainFundamentalsPage.content.advantages.security.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('blockchainFundamentalsPage.content.advantages.security.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <Network className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t('blockchainFundamentalsPage.content.advantages.decentralization.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('blockchainFundamentalsPage.content.advantages.decentralization.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('blockchainFundamentalsPage.content.conclusion.title')}
              </h2>
              <p className="text-gray-700 mb-4">
                {t('blockchainFundamentalsPage.content.conclusion.paragraph1')}
              </p>
              <p className="text-gray-700">
                {t('blockchainFundamentalsPage.content.conclusion.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-12 grid grid-cols-2 gap-4">
        <Link
          to="/knowledge/crypto"
          className="flex items-center justify-center px-4 py-3 rounded-xl bg-gray-100
            text-gray-700 font-medium transition-all duration-200 hover:bg-gray-200
            text-sm sm:text-base sm:px-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2 flex-shrink-0" />
          <span className="whitespace-nowrap">{t('blockchainFundamentalsPage.navigation.back')}</span>
        </Link>
        <button
          onClick={() => setShowQuiz(true)}
          className="flex items-center justify-center px-4 py-3 rounded-xl
            bg-gradient-to-r from-blue-600 to-purple-600 text-white
            font-medium transition-all duration-200 hover:from-blue-700
            hover:to-purple-700 transform hover:-translate-y-1
            text-sm sm:text-base sm:px-6 w-full"
        >
          <span className="whitespace-nowrap">{t('blockchainFundamentalsPage.navigation.next')}</span>
          <ArrowLeft className="h-5 w-5 ml-2 rotate-180 flex-shrink-0" />
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {showQuiz ? (
          <ModuleQuiz
            onComplete={handleQuizComplete}
            onRetry={() => setShowQuiz(false)}
            onBack={() => setShowQuiz(false)}
            nextModuleId="module-2"
            currentModuleId="module-1"
          />
        ) : (
          content
        )}
      </div>
    </div>
  );
}