import React, { useEffect, useState } from 'react';
import { BookOpen, Brain, Cpu, LineChart, Shield, Wallet, ArrowRight, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { checkModuleAccess } from '../lib/moduleAccess';
import LessonAccessModal from '../components/LessonAccessModal';
import SEOHead from '../components/SEOHead';

const modules = [
  {
    title: "Les Fondamentaux de la Blockchain",
    icon: Brain,
    description: "Comprendre les bases de la technologie blockchain et son fonctionnement",
    topics: [
      { title: "Qu'est-ce que la blockchain ?", link: "/knowledge/crypto/module-1", id: "module-1", free: true },
      { title: "Les principes de la décentralisation", link: "/knowledge/crypto/module-2", id: "module-2", free: false },
      { title: "La cryptographie et la sécurité", link: "/knowledge/crypto/module-3", id: "module-3", free: false },
      { title: "Les différents types de blockchain", link: "/knowledge/crypto/module-4", id: "module-4", free: false }
    ],
    gradient: "from-blue-600 via-cyan-600 to-teal-600"
  },
  {
    title: "Les Cryptomonnaies",
    icon: Wallet,
    description: "Explorer l'univers des cryptomonnaies et leurs cas d'utilisation",
    topics: [
      { title: "Bitcoin et son histoire", link: "/knowledge/crypto/module-5", id: "module-5", free: false },
      { title: "Ethereum et les smart contracts", link: "/knowledge/crypto/module-6", id: "module-6", free: false },
      { title: "Les différents types de tokens", link: "/knowledge/crypto/module-7", id: "module-7", free: false },
      { title: "Les wallets et la sécurité", link: "/knowledge/crypto/module-8", id: "module-8", free: false }
    ],
    gradient: "from-purple-600 via-pink-600 to-red-600"
  },
  {
    title: "Analyse Technique",
    icon: LineChart,
    description: "Maîtriser les outils d'analyse technique pour le trading",
    topics: [
      { title: "Les indicateurs techniques", link: "/knowledge/crypto/module-9", id: "module-9", free: false },
      { title: "L'analyse des graphiques", link: "/knowledge/crypto/module-10", id: "module-10", free: false },
      { title: "Les patterns de trading", link: "/knowledge/crypto/module-11", id: "module-11", free: false },
      { title: "La gestion du risque", link: "/knowledge/crypto/module-12", id: "module-12", free: false }
    ],
    gradient: "from-orange-600 via-amber-600 to-yellow-600"
  },
  {
    title: "DeFi et Finance Décentralisée",
    icon: Cpu,
    description: "Découvrir les innovations de la finance décentralisée",
    topics: [
      { title: "Les protocoles DeFi", link: "/knowledge/crypto/module-13", id: "module-13", free: false },
      { title: "Le yield farming", link: "/knowledge/crypto/module-14", id: "module-14", free: false },
      { title: "Les pools de liquidité", link: "/knowledge/crypto/module-15", id: "module-15", free: false },
      { title: "Les stablecoins", link: "/knowledge/crypto/module-16", id: "module-16", free: false }
    ],
    gradient: "from-emerald-600 via-green-600 to-lime-600"
  },
  {
    title: "Sécurité et Bonnes Pratiques",
    icon: Shield,
    description: "Protéger ses investissements et éviter les arnaques",
    topics: [
      { title: "La sécurisation des wallets", link: "/knowledge/crypto/module-17", id: "module-17", free: false },
      { title: "Les arnaques courantes", link: "/knowledge/crypto/module-18", id: "module-18", free: false },
      { title: "La gestion de portfolio", link: "/knowledge/crypto/module-19", id: "module-19", free: false },
      { title: "Les stratégies avancées", link: "/knowledge/crypto/module-20", id: "module-20", free: false }
    ],
    gradient: "from-indigo-600 via-violet-600 to-purple-600"
  }
];

export default function CryptoEducation() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [hasSubscription, setHasSubscription] = useState<boolean | null>(null);
  const [moduleAccess, setModuleAccess] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<{title: string, isFree: boolean} | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthAndSubscription = async () => {
      try {
        setLoading(true);
        
        // Check if user is authenticated
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          setIsAuthenticated(false);
          setHasSubscription(false);
          
          // Set access for free modules only
          const accessMap: Record<string, boolean> = {};
          modules.forEach(module => {
            module.topics.forEach(topic => {
              accessMap[topic.id] = topic.free;
            });
          });
          setModuleAccess(accessMap);
          
          setLoading(false);
          return;
        }
        
        setIsAuthenticated(true);
        
        // Check if user has active subscription
        const { data: subscriptions, error } = await supabase
          .from('subscriptions')
          .select('*')
          .eq('user_id', session.user.id)
          .eq('status', 'active')
          .lt('start_date', new Date().toISOString())
          .gt('end_date', new Date().toISOString())
          .limit(1);
          
        if (error) {
          console.error('Error checking subscription:', error);
          setHasSubscription(false);
        } else {
          const hasActiveSubscription = subscriptions && subscriptions.length > 0;
          setHasSubscription(hasActiveSubscription);
          
          // Set access for all modules if subscribed, otherwise only free modules
          const accessMap: Record<string, boolean> = {};
          modules.forEach(module => {
            module.topics.forEach(topic => {
              accessMap[topic.id] = topic.free || hasActiveSubscription;
            });
          });
          setModuleAccess(accessMap);
        }
      } catch (error) {
        console.error('Error checking auth and subscription:', error);
        setIsAuthenticated(false);
        setHasSubscription(false);
      } finally {
        setLoading(false);
      }
    };
    
    checkAuthAndSubscription();
  }, []);

  const handleModuleClick = (e: React.MouseEvent, topic: any) => {
    // If user is not authenticated or doesn't have access, show modal
    if (!isAuthenticated || !moduleAccess[topic.id]) {
      e.preventDefault();
      setSelectedLesson({
        title: topic.title,
        isFree: topic.free
      });
      setShowModal(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Formation Crypto Complète | De Débutant à Expert"
        description="Suivez notre parcours structuré pour comprendre la blockchain, trader les cryptos et développer une stratégie rentable."
        canonicalUrl="https://alyah-knowledge.com/formation/comprendre-la-crypto"
      />
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Formation Cryptomonnaies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre programme complet pour comprendre et maîtriser l'univers des cryptomonnaies, // This is already correct, no change needed here.
            de la blockchain et de la finance décentralisée.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-xl mr-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Parcours d'Apprentissage</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Notre formation est conçue pour vous accompagner pas à pas dans la compréhension
              des cryptomonnaies. Que vous soyez débutant ou investisseur expérimenté, vous
              trouverez des contenus adaptés à votre niveau.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-sm">
                <span className="text-blue-600 font-medium">5 Modules</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-sm">
                <span className="text-purple-600 font-medium">20+ Leçons</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-sm">
                <span className="text-green-600 font-medium">Exercices Pratiques</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-sm">
                <span className="text-orange-600 font-medium">Support Personnalisé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={module.title}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 
                  transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl mr-4 bg-gradient-to-br ${module.gradient} 
                    bg-opacity-10 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`h-8 w-8 bg-gradient-to-br ${module.gradient} bg-clip-text text-transparent`} />
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-br ${module.gradient} 
                    bg-clip-text text-transparent`}>
                    {module.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{module.description}</p>
                <ul className="space-y-3 mb-6">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600">
                      <div className={`w-2 h-2 rounded-full ${topic.free ? 'bg-green-400' : 'bg-gray-300'} mr-3`} />
                      <Link 
                        to={topic.link}
                        className={`hover:text-blue-600 transition-colors duration-200 ${!moduleAccess[topic.id] ? 'flex items-center' : ''}`}
                        onClick={(e) => handleModuleClick(e, topic)}
                      >
                        {topic.title}
                        {!moduleAccess[topic.id] && <Lock className="h-3 w-3 ml-1 text-gray-400" />}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={module.topics[0].link}
                  className="inline-flex items-center text-gray-600 hover:text-blue-600 
                    transition-colors duration-200"
                  onClick={(e) => handleModuleClick(e, module.topics[0])}
                >
                  <span className="mr-2">
                    {moduleAccess[module.topics[0].id] ? 'Commencer ce module' : 'Débloquer ce module'}
                  </span>
                  {moduleAccess[module.topics[0].id] ? (
                    <ArrowRight className="h-4 w-4" />
                  ) : (
                    <Lock className="h-4 w-4" />
                  )}
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        {!hasSubscription && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Prêt à commencer votre formation ?</h2>
              <p className="text-white/80 mb-8">
                Rejoignez notre communauté d'apprenants et développez vos compétences
                dans l'univers passionnant des cryptomonnaies.
              </p>
              <Link
                to="/solutions"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-blue-600 
                  font-medium transition-all duration-300 hover:bg-gray-100 transform 
                  hover:-translate-y-1 shadow-lg"
              >
                Débloquer tous les modules
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Access Modal */}
      <LessonAccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        lessonTitle={selectedLesson?.title}
        isFreeLesson={selectedLesson?.isFree}
        onAuthClick={() => {
          // Ouvrir la modale d'authentification standard avec le mode d'inscription
          const event = new CustomEvent('openAuthModal', { detail: { isSignUp: true } });
          window.dispatchEvent(event);
        }}
      />
    </div>
    </>
  );
}