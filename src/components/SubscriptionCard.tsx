import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import { stripeProducts } from '../lib/stripe-config';

interface SubscriptionCardProps {
  plan: keyof typeof stripeProducts;
  highlighted?: boolean;
  onSelect: (plan: keyof typeof stripeProducts) => void;
}

export default function SubscriptionCard({ plan, highlighted = false, onSelect }: SubscriptionCardProps) {
  const product = stripeProducts[plan];
  const price = plan === 'formationSeule' ? '249,99€' : '349,99€';
  
  const features = plan === 'formationSeule' 
    ? [
        { text: 'Accès complet à la formation crypto : ', highlight: 'Tous les modules', enabled: true },
        { text: 'Ressources pédagogiques : ', highlight: 'Vidéos et PDF', enabled: true },
        { text: 'Accès à la communauté : ', highlight: 'Forum et discussions', enabled: true },
        { text: 'Support : ', highlight: 'Email standard', enabled: true },
        { text: 'Mises à jour : ', highlight: 'Accès aux nouveaux contenus', enabled: true },
        { text: 'Signaux de trading', highlight: 'Non inclus', enabled: false }
      ]
    : [
        { text: 'Tout ce qui est inclus dans : ', highlight: 'Formation seule', enabled: true },
        { text: 'Signaux de trading : ', highlight: 'Toutes les cryptos', enabled: true },
        { text: 'Couverture du marché : ', highlight: 'Sans limitation', enabled: true },
        { text: 'Support : ', highlight: 'Prioritaire', enabled: true },
        { text: 'Analyses de marché : ', highlight: 'Hebdomadaires', enabled: true },
        { text: 'Stratégies avancées : ', highlight: 'Accès complet', enabled: true }
      ];

  return (
    <div
      className={`group relative bg-white rounded-2xl p-8
        transition-all duration-300 hover:shadow-xl hover:-translate-y-2
        flex flex-col h-[700px] border border-gray-100
        ${highlighted ? 'ring-2 ring-indigo-500/20 shadow-lg' : 'shadow-sm'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-white
        rounded-2xl transition-opacity opacity-0 group-hover:opacity-100" />

      {highlighted && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold
            tracking-wide uppercase bg-gradient-to-r from-blue-600 to-purple-600 text-white 
            shadow-lg">
            Recommandé
          </span>
        </div>
      )}

      <div className="relative flex-1">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-violet-600
            transition-colors duration-300">
            {product.name}
          </h2>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className={`text-4xl font-bold ${
              highlighted 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                : 'text-gray-900 group-hover:text-violet-600'
            } transition-colors duration-300`}>
              {price}
            </span>
            <span className="text-gray-600 ml-2">/mois</span>
          </div>
          <p className="text-gray-600 mt-2 group-hover:text-violet-600
            transition-colors duration-300">
            {plan === 'formationSeule' ? 'Pour apprendre à votre rythme' : 'Pour apprendre et agir immédiatement'}
          </p>
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start group-hover:transform 
              group-hover:translate-x-1 transition-transform duration-200
              ${!feature.enabled ? 'text-gray-400' : ''}`}>
              {!feature.enabled ? (
                <X className="h-6 w-6 text-gray-400 flex-shrink-0 mr-3" aria-hidden="true" />
              ) : (
                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mr-3 
                  group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
              )}
              <span>
                <span className="text-gray-600">{feature.text}</span>
                <span className={`font-medium ${!feature.enabled ? 'text-gray-400' : 'text-gray-900'}`}>
                  {feature.highlight}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-auto">
        <button
          onClick={() => onSelect(plan)}
          className={`relative w-full py-3 px-6 rounded-xl font-medium 
            transition-all duration-300 flex items-center justify-center
            shadow-lg overflow-hidden ${
            highlighted
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              : 'bg-white border-2 border-violet-600 text-violet-600'
          }`}
          aria-label={`Souscrire à ${product.name}`}
        >
          {!highlighted && (
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
          <span className={`relative z-10 flex items-center ${
            !highlighted ? 'group-hover:text-white' : ''
          }`}>
            Souscrire maintenant
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </button>
      </div>
    </div>
  );
}