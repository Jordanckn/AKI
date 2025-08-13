import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Wallet, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function CreateAccount() {
  return (
    <>
      <SEOHead
        title="Créer un Compte Alyah Knowledge | Formation et Trading"
        description="Inscrivez-vous gratuitement pour accéder à nos formations crypto, outils de trading et analyses de marché exclusives."
        canonicalUrl="https://alyah-knowledge.com/create-account"
        noIndex
      />
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
        <Link
          to="/signaux-trading"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 
            transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour aux signaux trading
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Créer votre compte crypto en toute sécurité
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-blue-600" />
                  Information importante
                </h2>
                <p className="text-gray-700">
                  Alyah Knowledge est une plateforme dédiée à l'accompagnement et à la formation 
                  des investisseurs en cryptomonnaies. Nous ne proposons pas de cryptomonnaies 
                  et n'avons aucun partenariat avec des plateformes d'échange. Notre rôle est 
                  uniquement de vous guider dans votre parcours d'investissement.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="h-6 w-6 text-green-600" />
                Les étapes pour débuter
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-blue-600" />
                    1. Choisir une plateforme d'échange sécurisée
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Vérifiez la réputation et l'historique de la plateforme</li>
                    <li>• Assurez-vous qu'elle est réglementée dans votre pays</li>
                    <li>• Comparez les frais de transaction</li>
                    <li>• Évaluez la facilité d'utilisation de l'interface</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-purple-600" />
                    2. Créer et sécuriser votre compte
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Utilisez une adresse email dédiée</li>
                    <li>• Créez un mot de passe fort et unique</li>
                    <li>• Activez l'authentification à deux facteurs (2FA)</li>
                    <li>• Conservez vos identifiants en lieu sûr</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    3. Vérifier votre identité (KYC)
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Préparez vos documents d'identité</li>
                    <li>• Suivez la procédure de vérification</li>
                    <li>• Attendez la validation de votre compte</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Besoin d'aide ?</h2>
                <p className="text-gray-700 mb-6">
                  Notre équipe est là pour vous accompagner à chaque étape de votre parcours. 
                  N'hésitez pas à nous contacter pour toute question ou conseil personnalisé.
                </p>
                <Link
                  to="/support"
                  className="inline-flex items-center px-6 py-3 rounded-xl text-white 
                    bg-gradient-to-r from-blue-600 to-purple-600 font-medium
                    transition-all duration-200 hover:from-blue-700 hover:to-purple-700 
                    transform hover:-translate-y-1"
                >
                  Contacter notre support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}