import React from 'react';
import { Shield, LineChart, Lock, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Shield,
    title: "Sécurité Maximale des Investissements Crypto",
    description: "Protection avancée de vos actifs avec authentification multi-facteurs et protocoles de sécurité renforcés",
  },
  {
    icon: LineChart,
    title: "Analyse et Suivi des Marchés Crypto en Temps Réel",
    description: "Surveillance continue des marchés et signaux de trading optimisés pour maximiser vos performances",
  },
  {
    icon: Lock,
    title: "Gestion Décentralisée de Portefeuille Crypto",
    description: "Contrôle total de vos actifs avec une approche décentralisée et transparente",
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Solutions d'Investissement Crypto Innovantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white rounded-2xl p-8 text-center
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                  border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-white
                  rounded-2xl transition-opacity opacity-0 group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl
                    bg-violet-100 text-violet-600 mb-6 mx-auto
                    transition-transform group-hover:scale-110 duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-violet-600
                    transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-900
                    transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Getting Started Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <HelpCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Nouveau dans la crypto ?</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              Vous débutez dans l'univers des cryptomonnaies ou vous n'avez pas encore de 
              portefeuille ? Pas de souci : notre équipe est là pour vous guider pas à pas, 
              afin de vous permettre d'investir sereinement, sans stress ni mauvaises surprises.
            </p>

            <Link
              to="/create-account"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white 
                bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl
                transition-all duration-200 hover:from-blue-700 hover:to-purple-700 
                transform hover:-translate-y-1 shadow-lg"
            >
              Découvrir comment créer un compte en toute sécurité
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}