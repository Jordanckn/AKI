import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Modal from './components/Modal';
import { AuthModalContent } from './components/AuthButton';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import { addAuthModalListener, AuthEventDetail } from './lib/authEvents';
import OrganizationSchema from './components/OrganizationSchema';
import WebsiteSchema from './components/WebsiteSchema';
import Breadcrumb from './components/Breadcrumb';
import SEOHead from './components/SEOHead';

// Lazy load pages
const Market = lazy(() => import('./pages/Market'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const Support = lazy(() => import('./pages/Support'));
const Values = lazy(() => import('./pages/Values'));
const SolutionsPage = lazy(() => import('./pages/Solutions'));
const Appointment = lazy(() => import('./pages/Appointment'));
const Knowledge = lazy(() => import('./pages/Knowledge'));
const Articles = lazy(() => import('./pages/Articles'));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'));
const SignauxTrading = lazy(() => import('./pages/SignauxTrading'));
const CreateAccount = lazy(() => import('./pages/CreateAccount'));
const CheckoutSuccess = lazy(() => import('./pages/CheckoutSuccess'));
const CryptoEducation = lazy(() => import('./pages/CryptoEducation'));
const BlockchainFundamentals = lazy(() => import('./pages/BlockchainFundamentals'));
const DecentralizationPrinciples = lazy(() => import('./pages/DecentralizationPrinciples'));
const CryptographySecurity = lazy(() => import('./pages/CryptographySecurity'));
const BlockchainTypes = lazy(() => import('./pages/BlockchainTypes'));
const BitcoinHistory = lazy(() => import('./pages/BitcoinHistory'));
const EthereumSmartContracts = lazy(() => import('./pages/EthereumSmartContracts'));
const TokenTypes = lazy(() => import('./pages/TokenTypes'));
const WalletsSecurity = lazy(() => import('./pages/WalletsSecurity'));
const TechnicalAnalysis = lazy(() => import('./pages/TechnicalAnalysis'));
const ChartAnalysis = lazy(() => import('./pages/ChartAnalysis'));
const TradingPatterns = lazy(() => import('./pages/TradingPatterns'));
const RiskManagement = lazy(() => import('./pages/RiskManagement'));
const DefiProtocols = lazy(() => import('./pages/DefiProtocols'));
const YieldFarming = lazy(() => import('./pages/YieldFarming'));
const LiquidityPools = lazy(() => import('./pages/LiquidityPools'));
const Stablecoins = lazy(() => import('./pages/Stablecoins'));
const WalletSecurity = lazy(() => import('./pages/WalletSecurity'));
const CryptoScams = lazy(() => import('./pages/CryptoScams'));
const PortfolioManagement = lazy(() => import('./pages/PortfolioManagement'));
const AdvancedTrading = lazy(() => import('./pages/AdvancedTrading'));
const CourseCompletion = lazy(() => import('./pages/CourseCompletion'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Settings = lazy(() => import('./pages/Settings'));
const CompanyPolicy = lazy(() => import('./pages/CompanyPolicy'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Dictionary = lazy(() => import('./pages/Dictionary'));
const DictionaryTerm = lazy(() => import('./pages/DictionaryTerm'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

function Home() {
  return (
    <div className="pt-16">
      <SEOHead path="/" />
      <OrganizationSchema />
      <Hero />
      <WhyChooseUs />
      <Features />
      <Solutions />
    </div>
  );
}

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Function to handle auth modal opening
  const handleAuthClick = (signUp = false) => {
    setIsSignUp(signUp);
    setShowAuthModal(true);
  };

  // Listen for custom auth modal events
  useEffect(() => {
    const removeListener = addAuthModalListener((event: CustomEvent<AuthEventDetail>) => {
      setIsSignUp(event.detail.isSignUp || false);
      setShowAuthModal(true);
    });
    
    return () => removeListener();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <WebsiteSchema />
        <ScrollToTop />
        <div className="min-h-screen bg-white flex flex-col">
          <Header onAuthClick={() => handleAuthClick(false)} />
          <main className="flex-1 pb-16">
            <Breadcrumb />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/marche-cryptomonnaies-temps-reel" element={<Market />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/support" element={<Support />} />
                <Route path="/values" element={<Values />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/solutions/formation-cryptomonnaie/tarification" element={<SolutionsPage />} />
                <Route path="/signaux-trading" element={<SignauxTrading />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/checkout/success" element={<CheckoutSuccess />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/comprendre-les-cryptomonnaies" element={<Knowledge />} />
                <Route path="/formation/comprendre-la-crypto" element={<CryptoEducation />} />
                <Route path="/formation/comprendre-la-crypto/fondamentaux-blockchain" element={<BlockchainFundamentals />} />
                <Route path="/formation/comprendre-la-crypto/principes-decentralisation" element={
                  <ProtectedRoute requireSubscription={true}>
                    <DecentralizationPrinciples />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/cryptographie-securite" element={
                  <ProtectedRoute requireSubscription={true}>
                    <CryptographySecurity />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/types-blockchain" element={
                  <ProtectedRoute requireSubscription={true}>
                    <BlockchainTypes />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/bitcoin-histoire" element={
                  <ProtectedRoute requireSubscription={true}>
                    <BitcoinHistory />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/ethereum-smart-contracts" element={
                  <ProtectedRoute requireSubscription={true}>
                    <EthereumSmartContracts />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/types-tokens" element={
                  <ProtectedRoute requireSubscription={true}>
                    <TokenTypes />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/securite-wallets" element={
                  <ProtectedRoute requireSubscription={true}>
                    <WalletsSecurity />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/indicateurs-techniques" element={
                  <ProtectedRoute requireSubscription={true}>
                    <TechnicalAnalysis />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/analyse-graphiques" element={
                  <ProtectedRoute requireSubscription={true}>
                    <ChartAnalysis />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/patterns-trading" element={
                  <ProtectedRoute requireSubscription={true}>
                    <TradingPatterns />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/gestion-risque" element={
                  <ProtectedRoute requireSubscription={true}>
                    <RiskManagement />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/protocoles-defi" element={
                  <ProtectedRoute requireSubscription={true}>
                    <DefiProtocols />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/yield-farming" element={
                  <ProtectedRoute requireSubscription={true}>
                    <YieldFarming />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/pools-liquidite" element={
                  <ProtectedRoute requireSubscription={true}>
                    <LiquidityPools />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/stablecoins" element={
                  <ProtectedRoute requireSubscription={true}>
                    <Stablecoins />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/securisation-wallets" element={
                  <ProtectedRoute requireSubscription={true}>
                    <WalletSecurity />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/arnaques-crypto" element={
                  <ProtectedRoute requireSubscription={true}>
                    <CryptoScams />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/gestion-portfolio" element={
                  <ProtectedRoute requireSubscription={true}>
                    <PortfolioManagement />
                  </ProtectedRoute>
                } />
                <Route path="/formation/comprendre-la-crypto/strategies-avancees" element={
                  <ProtectedRoute requireSubscription={true}>
                    <AdvancedTrading />
                  </ProtectedRoute>
                } />
                <Route path="/formation/certificat-reussite" element={
                  <ProtectedRoute requireSubscription={true}>
                    <CourseCompletion />
                  </ProtectedRoute>
                } />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:slug" element={<ArticleDetail />} />
                <Route path="/dictionnaire-crypto" element={<Dictionary />} />
                <Route path="/dictionnaire-crypto/:slug" element={<DictionaryTerm />} />
                <Route path="/politique-entreprise" element={<CompanyPolicy />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
                <Route path="/conditions-utilisation" element={<TermsOfService />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/settings" element={
                  <ProtectedRoute>
                    <Settings />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                
                {/* Legacy routes for backward compatibility */}
                <Route path="/knowledge" element={<Knowledge />} />
                <Route path="/knowledge/crypto" element={<CryptoEducation />} />
                <Route path="/knowledge/crypto/module-1" element={<BlockchainFundamentals />} />
                <Route path="/knowledge/crypto/module-2" element={
                  <ProtectedRoute requireSubscription={true}>
                    <DecentralizationPrinciples />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-3" element={
                  <ProtectedRoute requireSubscription={true}>
                    <CryptographySecurity />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-4" element={
                  <ProtectedRoute requireSubscription={true}>
                    <BlockchainTypes />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-5" element={
                  <ProtectedRoute requireSubscription={true}>
                    <BitcoinHistory />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-6" element={
                  <ProtectedRoute requireSubscription={true}>
                    <EthereumSmartContracts />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-7" element={
                  <ProtectedRoute requireSubscription={true}>
                    <TokenTypes />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-8" element={
                  <ProtectedRoute requireSubscription={true}>
                    <WalletsSecurity />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-9" element={
                  <ProtectedRoute requireSubscription={true}>
                    <TechnicalAnalysis />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-10" element={
                  <ProtectedRoute requireSubscription={true}>
                    <ChartAnalysis />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-11" element={
                  <ProtectedRoute requireSubscription={true}>
                    <TradingPatterns />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-12" element={
                  <ProtectedRoute requireSubscription={true}>
                    <RiskManagement />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-13" element={
                  <ProtectedRoute requireSubscription={true}>
                    <DefiProtocols />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-14" element={
                  <ProtectedRoute requireSubscription={true}>
                    <YieldFarming />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-15" element={
                  <ProtectedRoute requireSubscription={true}>
                    <LiquidityPools />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-16" element={
                  <ProtectedRoute requireSubscription={true}>
                    <Stablecoins />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-17" element={
                  <ProtectedRoute requireSubscription={true}>
                    <WalletSecurity />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-18" element={
                  <ProtectedRoute requireSubscription={true}>
                    <CryptoScams />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-19" element={
                  <ProtectedRoute requireSubscription={true}>
                    <PortfolioManagement />
                  </ProtectedRoute>
                } />
                <Route path="/knowledge/crypto/module-20" element={
                  <ProtectedRoute requireSubscription={true}>
                    <AdvancedTrading />
                  </ProtectedRoute>
                } />
                <Route path="/market" element={<Market />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/dictionary/:slug" element={<DictionaryTerm />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <CookieConsent />

          <Modal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
            title={isSignUp ? 'Inscription' : 'Connexion'}
            subtitle={isSignUp ? 'Créez votre compte' : 'Connectez-vous à votre compte'}
          >
            <AuthModalContent
              isSignUp={isSignUp}
              setIsSignUp={setIsSignUp}
              onClose={() => setShowAuthModal(false)}
            />
          </Modal>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;