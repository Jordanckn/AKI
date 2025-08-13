import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  Zap,
  Webhook,
  BarChart2,
  CheckCircle,
  Clock,
  Shield,
  Star,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const steps = [
  {
    title: "Génération du Signal",
    description: "Notre algorithme analyse le marché et génère un signal en temps réel.",
    icon: BarChart2,
    color: "blue"
  },
  {
    title: "Transmission Instantanée",
    description: "Le signal est immédiatement envoyé à votre espace utilisateur.",
    icon: Zap,
    color: "purple"
  },
  {
    title: "Notification Email",
    description: "Vous recevez un email contenant tous les détails du signal.",
    icon: Bell,
    color: "pink"
  },
  {
    title: "Exécution automatique",
    description: (
      <span>
        Votre ordre est automatiquement exécuté selon vos paramètres
        <span 
          className="relative ml-0.5 cursor-help text-gray-500"
          title="L'exécution automatique nécessite d'avoir relié un signal webhook à l'échangeur visé. Sans cette configuration, le signal reçu devra être exécuté manuellement en accédant à l'échangeur pour passer le trade."
        >
          *
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            L'exécution automatique nécessite d'avoir relié un signal webhook à l'échangeur visé. Sans cette configuration, le signal reçu devra être exécuté manuellement en accédant à l'échangeur pour passer le trade.
          </span>
        </span>
      </span>
    ),
    icon: CheckCircle,
    color: "green"
  }
];

const testimonials = [
  {
    name: "Thomas D.",
    role: "Trader particulier",
    content: "Les signaux d'Alyah Knowledge ont complètement transformé mon approche du trading. Je réalise maintenant des gains constants et maîtrisés.",
    rating: 5
  },
  {
    name: "Sophie M.",
    role: "Investisseur crypto",
    content: "La précision des signaux et la rapidité d'exécution sont impressionnantes. Un véritable game-changer pour mon portfolio.",
    rating: 5
  },
  {
    name: "Alexandre P.",
    role: "Trader professionnel",
    content: "L'intégration via Webhook est parfaite. Je peux enfin automatiser ma stratégie de trading en toute confiance.",
    rating: 5
  }
];

const stats = [
  { label: "Total signaux", value: "54" },
  { label: "Taux de réussite", value: "78%" },
  { label: "Gain moyen", value: "2.8%" },
  { label: "Performance totale", value: "+15.2%" }
];

const transactions = [
  {
    type: "buy",
    pair: "BTC/USDT",
    price: "68,500",
    change: "+3.2%",
    date: "15 Mars 2025, 09:15",
    takeProfit: "70,500",
    stopLoss: "67,200"
  },
  {
    type: "sell",
    pair: "ETH/USDT",
    price: "3,450",
    change: "-0.8%",
    date: "14 Mars 2025, 14:30",
    takeProfit: "3,380",
    stopLoss: "3,520"
  },
  {
    type: "buy",
    pair: "SOL/USDT",
    price: "140",
    change: "+5.4%",
    date: "13 Mars 2025, 11:20",
    takeProfit: "148",
    stopLoss: "136"
  }
];

const IPhone = ({ position, children }: { position: 'left' | 'right', children: React.ReactNode }) => {
  const rotation = position === 'left' ? 'rotate-12' : '-rotate-12';
  const translateX = position === 'left' ? '-translate-x-32' : 'translate-x-32';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: position === 'left' ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: position === 'right' ? 0.2 : 0 }}
      className={`absolute ${position === 'left' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 
        hidden lg:block pointer-events-none ${translateX}`}
      style={{ perspective: 1000 }}
    >
      <div className={`relative w-96 h-[600px] ${rotation} transform-gpu`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 
          rounded-[60px] shadow-2xl overflow-hidden border-8 border-gray-800">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-3xl" />
          <div className="h-full w-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 
            backdrop-blur-xl">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function SignauxTrading() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <>
      <SEOHead
        title="Signaux Trading Crypto | Alertes Marché en Temps Réel"
        description="Recevez des signaux de trading crypto fiables pour saisir les opportunités du marché et améliorer vos résultats."
        canonicalUrl="https://alyah-knowledge.com/signaux-trading"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative min-h-screen flex flex-col justify-between overflow-hidden 
          bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
          
          {/* Left iPhone */}
          <IPhone position="left">
            <div className="absolute inset-0 flex flex-col pt-10 px-4">
              <div className="bg-gray-800 text-white text-center py-2 rounded-lg mb-3">
                Alyah Signals
              </div>
              <div className="bg-blue-900/60 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30 mb-3">
                <div className="text-blue-300 text-sm">Signal Trading #2845</div>
                <div className="text-white font-bold text-lg">ACHETER BTC/USDT</div>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-300 text-sm">Prix: 68,500 USDT</span>
                  <span className="text-green-400 text-sm">SL: 67,200</span>
                </div>
              </div>
              <div className="bg-green-900/60 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
                <div className="text-green-300 text-sm">Performance</div>
                <div className="text-white font-bold text-lg">+3.2% sur BTC/USDT</div>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-300 text-sm">15:30 aujourd'hui</span>
                  <span className="text-green-400 text-sm">⬆ $2,193</span>
                </div>
              </div>
            </div>
          </IPhone>

          {/* Right iPhone */}
          <IPhone position="right">
            <div className="absolute inset-0 flex flex-col pt-10 px-4">
              <div className="bg-gray-800 text-white text-center py-2 rounded-lg mb-3">
                Binance Exchange
              </div>
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/30 mb-3">
                <div className="text-yellow-300 text-sm">Exécution auto</div>
                <div className="text-white font-bold text-lg">Signal appliqué</div>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-300 text-sm">BTC/USDT</span>
                  <span className="text-green-400 text-sm">Succès</span>
                </div>
              </div>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 border border-gray-500/30">
                <div className="text-blue-300 text-sm">Portfolio</div>
                <div className="text-white font-bold text-lg">$158,432.00</div>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-300 text-sm">30j</span>
                  <span className="text-green-400 text-sm">⬆ 14.2%</span>
                </div>
              </div>
            </div>
          </IPhone>

          <motion.div
            style={{ y, opacity, scale }}
            className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
            >
              <span className="block text-gray-900">Transmission des</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                bg-clip-text text-transparent animate-pulse">
                Signaux Trading Crypto
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Optimisez vos performances avec nos signaux de trading générés par algorithme
              et validés par des experts.
            </motion.p>
          </motion.div>
        </div>

        {/* Process Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comment fonctionnent nos signaux ?
              </h2>
              <p className="text-xl text-gray-600">
                Un processus simple et efficace en 4 étapes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                      transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`p-4 rounded-xl bg-${step.color}-100 inline-block mb-4`}>
                      <Icon className={`h-6 w-6 text-${step.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <div className="text-gray-600">{step.description}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Signals Section */}
        <div className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">
              Réception des signaux sur votre mobile
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              {/* iPhone with notifications */}
              <div className="w-full lg:w-1/3">
                <motion.div 
                  className="relative w-64 h-[500px] mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 
                    rounded-[40px] shadow-2xl overflow-hidden border-8 border-gray-800">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 
                      bg-gray-800 rounded-b-3xl" />
                    
                    <div className="h-full w-full bg-gradient-to-br from-gray-800 to-gray-900 pt-8 px-3">
                      {/* Email notifications */}
                      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">Boîte de réception</span>
                          <span className="text-blue-400 text-sm">Modifier</span>
                        </div>
                      </div>
                      
                      {/* Signal notifications */}
                      <div className="space-y-3">
                        {transactions.map((transaction, index) => (
                          <motion.div
                            key={index}
                            className="bg-white/10 backdrop-blur-md rounded-xl p-4 border 
                              border-white/10 hover:bg-white/20 transition-colors duration-200"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 
                                flex items-center justify-center text-white font-bold">
                                AK
                              </div>
                              <div className="ml-3 flex-1">
                                <div className="flex justify-between items-center">
                                  <span className="text-white font-medium">Alyah Knowledge</span>
                                  <span className="text-gray-400 text-xs">{transaction.date}</span>
                                </div>
                                <div className={`text-${transaction.type === 'buy' ? 'green' : 'red'}-300 
                                  font-medium`}>
                                  Signal Trading: {transaction.type === 'buy' ? 'ACHAT' : 'VENTE'} {transaction.pair}
                                </div>
                                <div className="text-gray-400 text-sm mt-1">
                                  Prix: {transaction.price} USDT - SL: {transaction.stopLoss}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Features description */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Notifications instantanées pour ne manquer aucune opportunité
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 
                        flex items-center justify-center text-blue-600">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Signaux en temps réel</h4>
                        <p className="text-gray-600 mt-1">
                          Recevez les alertes sur votre mobile à l'instant où nos algorithmes 
                          détectent une opportunité profitable
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 
                        flex items-center justify-center text-green-600">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Détails complets</h4>
                        <p className="text-gray-600 mt-1">
                          Chaque signal inclut le prix d'entrée, les niveaux de stop-loss et 
                          de take-profit pour une gestion des risques optimale
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 
                        flex items-center justify-center text-purple-600">
                        <BarChart2 className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">Suivi de performance</h4>
                        <p className="text-gray-600 mt-1">
                          Consultez l'historique de vos transactions et recevez des notifications 
                          sur les profits réalisés
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Tracking Section */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16">
              Suivi de performance et résultats
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Transactions */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Historique des transactions
                </h3>
                
                <div className="space-y-4">
                  {transactions.map((transaction, index) => (
                    <motion.div
                      key={index}
                      className={`bg-white rounded-xl p-5 shadow-soft border 
                        ${transaction.type === 'buy' ? 'border-green-100' : 'border-red-100'}
                        transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full 
                            ${transaction.type === 'buy' ? 'bg-green-100' : 'bg-red-100'} 
                            flex items-center justify-center 
                            ${transaction.type === 'buy' ? 'text-green-600' : 'text-red-600'}`}
                          >
                            {transaction.type === 'buy' ? (
                              <TrendingUp className="h-6 w-6" />
                            ) : (
                              <TrendingDown className="h-6 w-6" />
                            )}
                          </div>
                          <div className="ml-4">
                            <h4 className="font-bold text-gray-900">
                              {transaction.type === 'buy' ? 'ACHAT' : 'VENTE'} {transaction.pair}
                            </h4>
                            <p className="text-sm text-gray-500">{transaction.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${
                            transaction.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {transaction.change}
                          </p>
                          <p className="text-sm text-gray-500">{transaction.price} USDT</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            Take profit : {transaction.takeProfit} USDT
                          </span>
                          <span className="text-gray-600">
                            Stop loss : {transaction.stopLoss} USDT
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Statistics */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Statistiques et performance
                </h3>
                
                <div className="bg-white rounded-xl p-8 shadow-soft border border-gray-100">
                  {/* Simulated chart */}
                  <div className="h-64 mb-6 relative">
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200" />
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200" />
                    
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0,80 L10,75 L20,78 L30,70 L40,65 L50,60 L60,55 L70,58 L80,50 L90,45 L100,40" 
                        fill="none" 
                        stroke="#3b82f6" 
                        strokeWidth="2"
                      />
                      <path 
                        d="M0,80 L10,75 L20,78 L30,70 L40,65 L50,60 L60,55 L70,58 L80,50 L90,45 L100,40 V100 H0 Z" 
                        fill="url(#gradient)"
                      />
                    </svg>
                    
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-500">
                      <span>Jan</span>
                      <span>Fév</span>
                      <span>Mar</span>
                      <span>Avr</span>
                      <span>Mai</span>
                      <span>Jun</span>
                    </div>
                  </div>
                  
                  {/* Statistics grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="text-center p-4 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <p className="text-gray-500 text-sm">{stat.label}</p>
                        <p className={`text-2xl font-bold ${
                          stat.value.includes('+') ? 'text-green-600' : 'text-gray-900'
                        }`}>
                          {stat.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Final CTA Section */}
        <div className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Prêt à optimiser vos investissements crypto ?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Rejoignez notre communauté d'investisseurs et recevez nos signaux de trading dès aujourd'hui
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium 
                  text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-4xl 
                  hover:from-blue-700 hover:to-purple-700 transition-all duration-300 
                  transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium 
                  text-gray-700 bg-white border-2 border-gray-200 rounded-4xl hover:border-blue-500 
                  transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}