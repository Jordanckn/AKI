import React from 'react';
import { Shield, LineChart, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import SubscriptionPlans from '../components/SubscriptionPlans';
import SEOHead from '../components/SEOHead';

const faqItems = [
  {
    question: "Comment sécuriser mes investissements en cryptomonnaie ?",
    answer: "Chez Alyah Knowledge, nous utilisons des protocoles de sécurité avancés et une infrastructure robuste pour protéger vos investissements. Nous recommandons l'authentification à deux facteurs, le stockage sécurisé des clés privées, et nous vous formons aux meilleures pratiques de sécurité."
  },
  {
    question: "Quels sont les avantages des signaux de trading Alyah Knowledge ?",
    answer: "Nos signaux de trading sont générés par des algorithmes sophistiqués et validés par des experts. Ils incluent des points d'entrée et de sortie précis, des niveaux de stop-loss, et sont accompagnés d'analyses détaillées pour maximiser vos chances de succès."
  },
  {
    question: "Comment débuter l'investissement en cryptomonnaies ?",
    answer: "Pour débuter, nous recommandons notre plan Formation seule qui inclut une formation complète, des ressources pédagogiques, et un accompagnement personnalisé pour comprendre les fondamentaux du marché."
  },
  {
    question: "Quelle est la différence entre vos différents plans ?",
    answer: "Notre plan Formation seule vous donne accès à l'ensemble de notre contenu éducatif, tandis que le plan Formation + Signaux ajoute l'accès à nos signaux de trading sur l'ensemble des cryptomonnaies disponibles, sans limitation."
  },
  {
    question: "Proposez-vous un accompagnement personnalisé ?",
    answer: "Oui, tous nos plans incluent un accompagnement adapté à vos besoins. Le plan Formation seule comprend un support par email, tandis que le plan Formation + Signaux offre un support prioritaire."
  }
];

export default function Solutions() {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Solutions d'Investissement</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos solutions sur mesure pour investir intelligemment dans les cryptomonnaies,
            adaptées à vos objectifs et votre expérience.
          </p>
        </div>

        {/* Subscription Plans Component */}
        <SubscriptionPlans />

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100
            transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-3 bg-blue-100 rounded-xl inline-block mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sécurité Maximale</h3>
            <p className="text-gray-600">
              Vos investissements sont sécurisés grâce à notre infrastructure robuste
              et nos protocoles de sécurité avancés.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100
            transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-3 bg-purple-100 rounded-xl inline-block mb-4">
              <LineChart className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Optimisée</h3>
            <p className="text-gray-600">
              Notre algorithme analyse en continu les marchés pour identifier
              les meilleures opportunités d'investissement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100
            transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-3 bg-green-100 rounded-xl inline-block mb-4">
              <Lock className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contrôle Total</h3>
            <p className="text-gray-600">
              Gardez le contrôle total de vos actifs tout en bénéficiant
              de notre expertise et de nos outils.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ items={faqItems} />
      </div>
    </div>
    </>
  );
}