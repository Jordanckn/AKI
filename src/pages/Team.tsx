import React from 'react';
import { Shield, LineChart, Lock, MessageSquare } from 'lucide-react';
import SEOHead from '../components/SEOHead';

// Images depuis le stockage Supabase ou URLs externes
const jordanImage = "https://zythhpgukkgavtgsudqe.supabase.co/storage/v1/object/public/images-public/jordan-chekroun-alyah-knowledge.jpg";
const yoannImage = "https://zythhpgukkgavtgsudqe.supabase.co/storage/v1/object/public/images-public/yoann-hadjadj-alyah-knowledge.jpg";

const values = [
  { id: 1, text: "Intégrité", gradient: "from-blue-600 via-cyan-600 to-teal-600" },
  { id: 2, text: "Excellence", gradient: "from-purple-600 via-pink-600 to-red-600" },
  { id: 3, text: "Innovation", gradient: "from-orange-600 via-amber-600 to-yellow-600" },
  { id: 4, text: "Transparence", gradient: "from-emerald-600 via-green-600 to-lime-600" },
  { id: 5, text: "Confiance", gradient: "from-indigo-600 via-violet-600 to-purple-600" },
  { id: 6, text: "Performance", gradient: "from-rose-600 via-pink-600 to-fuchsia-600" },
  { id: 7, text: "Expertise", gradient: "from-cyan-600 via-blue-600 to-indigo-600" },
  { id: 8, text: "Bienveillance", gradient: "from-violet-600 via-purple-600 to-fuchsia-600" },
  { id: 9, text: "Engagement", gradient: "from-amber-600 via-orange-600 to-red-600" },
  { id: 10, text: "Collaboration", gradient: "from-teal-600 via-emerald-600 to-green-600" },
  { id: 11, text: "Adaptabilité", gradient: "from-blue-600 via-indigo-600 to-violet-600" },
  { id: 12, text: "Résilience", gradient: "from-pink-600 via-rose-600 to-red-600" },
  { id: 13, text: "Proactivité", gradient: "from-green-600 via-emerald-600 to-teal-600" },
  { id: 14, text: "Authenticité", gradient: "from-purple-600 via-violet-600 to-indigo-600" },
  { id: 15, text: "Responsabilité", gradient: "from-red-600 via-orange-600 to-amber-600" },
  { id: 16, text: "Créativité", gradient: "from-fuchsia-600 via-pink-600 to-rose-600" },
  { id: 17, text: "Détermination", gradient: "from-cyan-600 via-teal-600 to-emerald-600" },
  { id: 18, text: "Passion", gradient: "from-violet-600 via-purple-600 to-pink-600" },
  { id: 19, text: "Ambition", gradient: "from-amber-600 via-yellow-600 to-lime-600" },
  { id: 20, text: "Leadership", gradient: "from-indigo-600 via-blue-600 to-cyan-600" },
  { id: 21, text: "Synergie", gradient: "from-rose-600 via-red-600 to-orange-600" },
  { id: 22, text: "Dynamisme", gradient: "from-emerald-600 via-teal-600 to-cyan-600" },
  { id: 23, text: "Persévérance", gradient: "from-purple-600 via-indigo-600 to-blue-600" },
  { id: 24, text: "Vision", gradient: "from-orange-600 via-amber-600 to-yellow-600" },
  { id: 25, text: "Audace", gradient: "from-fuchsia-600 via-purple-600 to-violet-600" },
  { id: 26, text: "Éthique", gradient: "from-teal-600 via-green-600 to-emerald-600" },
  { id: 27, text: "Agilité", gradient: "from-pink-600 via-fuchsia-600 to-purple-600" },
  { id: 28, text: "Cohésion", gradient: "from-blue-600 via-cyan-600 to-teal-600" },
  { id: 29, text: "Croissance", gradient: "from-violet-600 via-indigo-600 to-blue-600" },
  { id: 30, text: "Excellence Pro", gradient: "from-red-600 via-orange-600 to-amber-600" }
];

export default function Team() {
  return (
    <>
      <SEOHead
        path="/team"
      />
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        {/* Jordan Chekroun Section */}
        <div className="text-center mb-20">
          <div className="mb-8 relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 rounded-full shadow-xl border-4 border-white overflow-hidden">
              <img
                src={jordanImage}
                alt="Jordan Chekroun"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Jordan Chekroun</h1>
          <p className="text-xl text-blue-600 font-semibold mb-6">CEO & Fondateur d'Alyah Knowledge</p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Juriste de formation, développeur par passion, et expert en trading de cryptomonnaies. Ma vision : rendre l'investissement en cryptomonnaies accessible, sécurisé et performant.
          </p>
        </div>

        {/* Jordan's Parcours Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Mon Parcours</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Profondément convaincu du potentiel exceptionnel de la blockchain, je suis persuadé qu'il est essentiel d'en comprendre clairement les mécanismes afin que chacun puisse mesurer les opportunités et participer activement à cet écosystème en pleine expansion.
            </p>
            <p className="mb-6">
              Animé par une curiosité intense et un goût prononcé pour l'innovation, j'ai élargi mes compétences juridiques en apprenant à coder et à concevoir des algorithmes sophistiqués de trading. Mon objectif était clair : créer une solution fiable, mathématiquement solide, adaptée à la volatilité extrême des marchés crypto, tout en transmettant mon savoir à travers une formation accessible à tous, permettant à chacun d'évoluer sereinement et de profiter au maximum des opportunités de ce secteur.
            </p>
            <p className="mb-6">
              Cette approche découle directement d'expériences personnelles marquantes. À mes débuts, confronté à un retournement brutal et inattendu du marché, j'ai perdu une part significative de mon investissement en seulement quelques heures. À l'inverse, j'ai également connu des succès rapides et des gains importants en anticipant avec précision les mouvements du marché. Ces expériences contrastées m'ont enseigné l'importance capitale d'une gestion rigoureuse des risques et d'une méthodologie clairement structurée.
            </p>
            <p className="mb-6">
              Chez Alyah Knowledge, chaque aspect de notre stratégie est pensé pour anticiper et maîtriser au mieux les risques inhérents au marché crypto. Nous proposons à nos investisseurs un accompagnement transparent, une technologie éprouvée, et une pédagogie continue pour évoluer sereinement dans un environnement complexe et volatil.
            </p>
            <p className="mb-6">
              En tant que CEO, je privilégie un leadership fondé sur la bienveillance, l'intégrité et l'excellence opérationnelle. Je suis convaincu qu'une analyse approfondie combinée à une stratégie méthodique constitue la clé d'un investissement réussi sur le long terme.
            </p>
            <p>
              Mon ambition avec Alyah Knowledge est double : d'une part, démocratiser cette passionnante technologie afin que chacun puisse comprendre les enjeux et s'y engager pleinement, et d'autre part, permettre aux investisseurs, débutants comme expérimentés, de générer des profits en diversifiant leurs portefeuilles avec des actifs numériques prometteurs, et ainsi devenir acteurs à part entière de ce nouvel écosystème financier qui ne cesse de se structurer et de croître.
            </p>
          </div>
        </div>

        {/* Yoann Hadjadj Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="mb-8">
              <img
                src={yoannImage}
                alt="Yoann Hadjadj"
                className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl border-4 border-white"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Yoann Hadjadj</h2>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              Associé, Responsable Management et Gestion des Flux Financiers
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Je m'appelle Yoann Hadjadj, et je suis passionné par l'alliance entre expertise opérationnelle, 
                leadership et innovation. Mon parcours, à la fois diversifié et enrichissant, m'a permis de développer 
                une capacité à m'adapter et à exceller dans des environnements exigeants et en constante évolution.
              </p>
              <p className="mb-6">
                Diplômé d'une licence et animé par une curiosité insatiable, j'ai construit mon expertise à travers 
                des formations variées et complémentaires : management d'équipe, coaching des vendeurs, gestion des 
                risques psychosociaux, maîtrise des procédures des flux financiers, certification HACCP et stratégies 
                avancées en management des ventes. Ces compétences m'ont permis d'adopter une approche holistique et 
                méthodique, adaptée à des secteurs dynamiques et compétitifs.
              </p>
              <p className="mb-6">
                Avec plus de 15 ans d'expérience dans le secteur de la restauration, je dirige aujourd'hui un grand 
                groupe, où je supervise un chiffre d'affaires annuel de plus de 7,5 millions d'euros. À la tête d'une 
                équipe de plus de 80 collaborateurs, j'ai appris à concilier rigueur managériale, optimisation des 
                processus et performance financière. Mon approche du leadership repose sur la bienveillance et la 
                capacité à fédérer les talents, ce qui, je crois, contribue à la réussite opérationnelle et stratégique 
                de l'entreprise.
              </p>
              <p className="mb-6 font-semibold">
                Depuis plus de cinq ans, je m'intéresse de près à l'univers des cryptomonnaies et de la blockchain. 
                Fasciné par le potentiel disruptif de cette technologie, j'ai entrepris une exploration approfondie 
                et méthodique de ce marché en pleine effervescence. Loin de me contenter d'une simple curiosité, je 
                me suis formé avec rigueur, étudiant les mécanismes complexes des cryptomonnaies, analysant les 
                tendances du marché, évaluant les risques et identifiant les opportunités.
              </p>
              <p className="mb-6">
                Au fil des années, j'ai audité de nombreuses entreprises et projets, prenant le temps de comprendre 
                leurs rouages, leurs forces et leurs faiblesses. Cette démarche m'a permis de développer une expertise 
                solide et de m'entourer de deux experts reconnus dans le domaine. Ensemble, nous explorons les 
                opportunités offertes par ce secteur innovant, en y appliquant les principes de rigueur, de stratégie 
                et de gestion qui ont guidé mon parcours.
              </p>
              <p className="mb-6 font-semibold">
                En tant qu'Associé Responsable Management et Gestion des Flux Financiers, je mets à profit ma maîtrise 
                des flux financiers et ma capacité à manager des équipes pluridisciplinaires pour contribuer à la 
                réussite des projets que j'accompagne. Je crois fermement en l'importance de l'intégrité et de 
                l'innovation, et je m'efforce d'anticiper les défis pour transformer les obstacles en opportunités.
              </p>
              <p className="mb-6 font-semibold">
                Mon parcours, qui m'a conduit de la restauration aux cryptomonnaies, reflète ma capacité à m'adapter, 
                à apprendre et à évoluer dans des environnements complexes. J'accorde une grande importance à la 
                rigueur et à la méthodologie, ce qui me permet de naviguer avec aisance dans des secteurs en pleine 
                transformation et d'apporter une valeur ajoutée tangible à chaque projet.
              </p>
              <p className="font-semibold">
                Aujourd'hui, je mets mon expertise au service de projets ambitieux, où je m'efforce de concilier 
                vision stratégique et engagement concret. Que ce soit dans la gestion financière, le management 
                d'équipe ou l'exploration de nouveaux marchés, je m'engage à innover et à réussir, même dans les 
                environnements les plus exigeants.
              </p>
            </div>
          </div>
        </div>

        {/* Julien Ribardière Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="mb-8">
              <div className="w-48 h-48 rounded-full mx-auto bg-gradient-to-br from-purple-100 to-pink-100 
                flex items-center justify-center shadow-xl border-4 border-white">
                <MessageSquare className="w-24 h-24 text-purple-600" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Julien Ribardière</h2>
            <p className="text-xl text-purple-600 font-semibold mb-6">
              Associé, Community Manager & Expert en Veille Médiatique
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12">
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Avec plus de 20 ans d'expérience dans le digital et la communication, j'ai toujours choisi de 
                m'investir dans des projets porteurs de sens, guidés par des valeurs fortes telles que la 
                bienveillance, la transparence et le sérieux. Aujourd'hui, je suis fier de faire partie d'Alyah 
                Knowledge, une entreprise qui incarne ces principes et avec laquelle je partage une vision commune.
              </p>
              <p className="mb-6">
                En tant que Community Manager et Expert en Veille Médiatique, mon rôle est de veiller à ce que 
                chaque communication reflète fidèlement la réalité de notre entreprise. Je crois fermement que la 
                transparence, le partage honnête et la présentation équilibrée de nos atouts comme de nos défis 
                sont essentiels pour bâtir une relation de confiance avec nos clients et investisseurs.
              </p>
              <p className="mb-6">
                Mon expertise en stratégies de contenu et en campagnes publicitaires ciblées (Facebook, X, 
                Instagram, TikTok, etc.) me permet de créer des interactions engageantes et impactantes. Mais ce 
                qui me motive avant tout, c'est la recherche constante de l'excellence. Je n'hésite jamais à 
                solliciter des feedbacks pour améliorer en continu nos processus et nos résultats, toujours dans 
                un esprit d'écoute et de collaboration.
              </p>
              <p className="mb-8">
                Chez Alyah Knowledge, je m'engage à construire une communication claire, sincère et alignée avec 
                nos valeurs. Mon objectif est de créer un dialogue ouvert et authentique avec notre communauté, 
                afin de renforcer la confiance en notre projet.
              </p>
              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700 mb-16">
                "Avoir Julien Ribardière à nos côtés est une véritable chance pour Alyah Knowledge. Son expertise, 
                son éthique professionnelle et son engagement envers l'excellence font de lui un atout indispensable 
                pour notre croissance et notre succès."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Values Display */}
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 mb-16">
          <div className="flex flex-wrap justify-center gap-6">
            {values.map((value) => (
              <span
                key={value.id}
                className={`text-xl font-semibold bg-gradient-to-r ${value.gradient} 
                  bg-clip-text text-transparent transition-all duration-300 hover:scale-110`}
              >
                {value.text}
              </span>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Notre Vision Commune</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 
              transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-xl mr-4 
                  transition-transform duration-300 group-hover:scale-110">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 
                  transition-colors duration-300 group-hover:text-blue-600">
                  Sécurité & Conformité
                </h3>
              </div>
              <p className="text-gray-600">
                Une approche rigoureuse combinant expertise juridique et technologique.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 
              transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-xl mr-4 
                  transition-transform duration-300 group-hover:scale-110">
                  <LineChart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 
                  transition-colors duration-300 group-hover:text-purple-600">
                  Performance & Innovation
                </h3>
              </div>
              <p className="text-gray-600">
                Des stratégies innovantes pour des performances optimales.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 
              transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-xl mr-4 
                  transition-transform duration-300 group-hover:scale-110">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 
                  transition-colors duration-300 group-hover:text-green-600">
                  Transparence & Confiance
                </h3>
              </div>
              <p className="text-gray-600">
                Une communication claire et authentique avec notre communauté.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}