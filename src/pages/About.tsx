import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, TrendingUp, Lightbulb } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function About() {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">À propos d'Alyah Knowledge</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous révolutionnons l'investissement en cryptomonnaies en rendant accessible à tous
            une expertise pointue et des outils d'analyse sophistiqués. Découvrez nos{' '}
            <Link to="/solutions" className="text-blue-600 hover:text-blue-800">solutions d'investissement</Link>{' '}
            et notre <Link to="/knowledge" className="text-blue-600 hover:text-blue-800">centre de formation</Link>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 
            transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-xl mr-4 
                transition-transform duration-300 group-hover:scale-110">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 
                transition-colors duration-300 group-hover:text-blue-600">Notre Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Démocratiser l'accès aux investissements en cryptomonnaies en fournissant des{' '}
              <Link to="/market" className="text-blue-600 hover:text-blue-800">outils professionnels</Link>{' '}
              et une <Link to="/knowledge/crypto" className="text-blue-600 hover:text-blue-800">éducation de qualité</Link>,
              permettant à chacun de prendre des décisions éclairées et de réussir dans l'univers crypto.
            </p>
          </div>

          <Link to="/team" className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 
            transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 rounded-xl mr-4 
                transition-transform duration-300 group-hover:scale-110">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 
                transition-colors duration-300 group-hover:text-purple-600">Notre Équipe</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Une équipe d'experts passionnés combinant des années d'expérience en trading,
              technologie blockchain et analyse financière pour vous offrir le meilleur
              accompagnement possible.
            </p>
          </Link>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            <Link to="/values" className="hover:text-blue-600 transition-colors">Nos Valeurs</Link>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 
              transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="p-3 bg-green-100 rounded-xl mr-4 
                  transition-transform duration-300 group-hover:scale-110">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 
                    transition-colors duration-300 group-hover:text-green-600">Excellence</h3>
                  <p className="text-gray-600">
                    Nous visons l'excellence dans chaque aspect de notre service, de{' '}
                    <Link to="/market" className="text-blue-600 hover:text-blue-800">l'analyse technique</Link>{' '}
                    à <Link to="/support" className="text-blue-600 hover:text-blue-800">l'accompagnement client</Link>.
                  </p>
                </div>
              </div>
            </div>
            <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 
              transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start">
                <div className="p-3 bg-yellow-100 rounded-xl mr-4 
                  transition-transform duration-300 group-hover:scale-110">
                  <Lightbulb className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 
                    transition-colors duration-300 group-hover:text-yellow-600">Innovation</h3>
                  <p className="text-gray-600">
                    Nous développons constamment de nouveaux outils et méthodes pour rester
                    à la pointe de l'investissement crypto. Découvrez nos{' '}
                    <Link to="/solutions#custom" className="text-blue-600 hover:text-blue-800">algorithmes personnalisés</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-20">
          <Link
            to="/appointment"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white 
              bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 
              hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 
              shadow-lg hover:shadow-xl"
          >
            Prendre rendez-vous avec nos experts
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}