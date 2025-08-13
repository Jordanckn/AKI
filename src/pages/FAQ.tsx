import React from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../components/FAQ';
import SEOHead from '../components/SEOHead';
import FAQSchema from '../components/FAQSchema';

const faqItems = [
  {
    question: "Qu'est-ce qu'Alyah Knowledge ?",
    answer: `Alyah Knowledge est une plateforme experte en investissement crypto qui combine formation, signaux de trading et accompagnement personnalisé. Notre mission est de rendre l'investissement en cryptomonnaies accessible, sécurisé et performant pour tous. Découvrez notre histoire et notre vision sur notre <a href="/about" class="text-blue-600 hover:text-blue-800">page À propos</a>.`
  },
  {
    question: "Comment commencer à investir avec Alyah Knowledge ?",
    answer: `Pour débuter, nous recommandons de consulter nos <a href="/solutions#monthly" class="text-blue-600 hover:text-blue-800">offres d'abonnement</a>, en commençant par notre formule 1 mois qui inclut une formation de base et des signaux de trading sur les principales cryptomonnaies. Vous pouvez également <a href="/appointment" class="text-blue-600 hover:text-blue-800">prendre rendez-vous</a> pour une consultation personnalisée avec nos experts.`
  },
  {
    question: "Comment fonctionne votre formation trading ?",
    answer: `Notre <a href="/knowledge/crypto" class="text-blue-600 hover:text-blue-800">formation trading</a> combine des ressources en ligne, des webinaires interactifs et un accompagnement personnalisé. Vous progressez à votre rythme avec des modules structurés, des exercices pratiques, et un accès à notre communauté d'apprentissage. Consultez notre <a href="/knowledge" class="text-blue-600 hover:text-blue-800">centre de ressources</a> pour plus d'informations.`
  },
  {
    question: "Quels sont vos différents services ?",
    answer: `Nous proposons une gamme complète de services incluant des <a href="/solutions" class="text-blue-600 hover:text-blue-800">signaux de trading optimisés</a>, des formations en trading crypto, des analyses de marché détaillées, et un accompagnement personnalisé. Découvrez nos <a href="/solutions#custom" class="text-blue-600 hover:text-blue-800">solutions sur mesure</a> adaptées à tous les niveaux.`
  },
  {
    question: "Comment suivre l'évolution du marché crypto ?",
    answer: `Vous pouvez suivre l'évolution du marché en temps réel sur notre <a href="/market" class="text-blue-600 hover:text-blue-800">page Marché</a>. Nous proposons également des analyses régulières dans notre section <a href="/articles" class="text-blue-600 hover:text-blue-800">Articles</a> pour vous tenir informé des dernières tendances.`
  },
  {
    question: "Qui sont les experts derrière Alyah Knowledge ?",
    answer: `Notre <a href="/team" class="text-blue-600 hover:text-blue-800">équipe d'experts</a> est composée de professionnels passionnés du trading crypto, dirigée par Jordan Chekroun, CEO et fondateur. Chaque membre apporte son expertise unique pour vous offrir le meilleur accompagnement possible.`
  },
  {
    question: "Comment contacter le support ?",
    answer: `Notre équipe support est disponible via notre <a href="/support" class="text-blue-600 hover:text-blue-800">page d'assistance</a>. Les abonnés premium bénéficient d'un support prioritaire 24/7 et d'un accès direct à nos experts. N'hésitez pas à nous contacter pour toute question.`
  },
  {
    question: "Quelles cryptomonnaies sont couvertes ?",
    answer: `Nous couvrons les principales cryptomonnaies comme Bitcoin et Ethereum, ainsi qu'une sélection d'altcoins prometteurs. Consultez notre <a href="/market" class="text-blue-600 hover:text-blue-800">page Marché</a> pour voir les cryptomonnaies que nous suivons actuellement.`
  }
];

export default function FAQPage() {
  return (
    <>
      <SEOHead />
      <FAQSchema items={faqItems} />
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquentes sur l'Investissement Crypto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement des réponses à vos questions sur l'investissement crypto et nos services. 
            Pour une assistance personnalisée, <Link to="/appointment" className="text-blue-600 hover:text-blue-800">prenez rendez-vous</Link> avec 
            nos experts.
          </p>
        </div>

        <FAQ items={faqItems} />

        <div className="mt-16 mb-20 text-center">
          <p className="text-gray-600 mb-8">
            Vous n'avez pas trouvé la réponse à votre question ?
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/support"
              className="px-6 py-3 bg-white text-gray-700 rounded-xl border-2 border-gray-200 
                hover:border-blue-500 transition-all duration-200"
            >
              Contactez le support
            </Link>
            <Link
              to="/appointment"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}