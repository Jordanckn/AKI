import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Leaf, Lock } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const values = [
  {
    title: "Accessibilité",
    icon: BookOpen,
    description: "Nous nous engageons à rendre l'investissement en cryptomonnaies accessible à tous, en proposant des solutions adaptées à chaque profil d'investisseur et en simplifiant les concepts complexes. Découvrez nos <a href='/solutions'>solutions d'investissement</a> sur mesure.",
    color: "blue"
  },
  {
    title: "Éducation",
    icon: Heart,
    description: "Notre mission est d'éduquer et d'accompagner nos clients dans leur parcours d'investissement, en fournissant des ressources pédagogiques de qualité et un support personnalisé. Explorez notre <a href='/knowledge'>centre de formation</a> et nos <a href='/articles'>articles éducatifs</a>.",
    color: "purple"
  },
  {
    title: "Environnement",
    icon: Leaf,
    description: "Nous sommes conscients de l'impact environnemental du secteur crypto et privilégions les solutions et partenaires engagés dans une démarche écoresponsable. Consultez notre <a href='/about'>vision</a> pour en savoir plus sur notre engagement.",
    color: "green"
  },
  {
    title: "Confidentialité",
    icon: Lock,
    description: "La protection des données et la confidentialité de nos clients sont au cœur de nos préoccupations. Nous appliquons les plus hauts standards de sécurité et de protection des informations. Découvrez notre <a href='/support'>support client</a> dédié.",
    color: "orange"
  }
];

export default function Values() {
  const renderDescription = (description: string) => {
    return <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />;
  };

  return (
    <>
      <SEOHead
        title="Nos Valeurs | Alyah Knowledge"
        description="Découvrez les principes qui guident Alyah Knowledge : transparence, innovation et excellence au service des investisseurs."
        canonicalUrl="https://alyah-knowledge.com/values"
      />
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les valeurs fondamentales qui guident nos actions et façonnent notre vision
            de l'investissement en cryptomonnaies. <Link to="/team" className="text-blue-600 hover:text-blue-800">Rencontrez notre équipe</Link> d'experts passionnés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl mr-4 bg-${value.color}-100 
                    transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`h-8 w-8 text-${value.color}-600`} />
                  </div>
                  <h2 className={`text-2xl font-bold text-gray-900 
                    transition-colors duration-300 group-hover:text-${value.color}-600`}>
                    {value.title}
                  </h2>
                </div>
                {renderDescription(value.description)}
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Notre Engagement
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Chez Alyah Knowledge, nous croyons que l'investissement en cryptomonnaies doit être
              accessible, éducatif et responsable. Nos valeurs guident chacune de nos actions et
              nous permettent de construire une relation de confiance durable avec nos clients.
              <Link to="/appointment" className="text-blue-600 hover:text-blue-800 ml-2">
                Prenez rendez-vous
              </Link> avec nos experts pour en savoir plus.
            </p>
          </div>
        </div>

        <div className="text-center mb-20">
          <Link
            to="/solutions"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white 
              bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 
              hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 
              shadow-lg hover:shadow-xl"
          >
            Découvrir nos solutions d'investissement
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}