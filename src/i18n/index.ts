import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Navigation et header
      nav: {
        home: 'Accueil',
        solutions: 'Nos solutions',
        tradingSignals: 'Signaux Trading',
        training: 'Formation',
        about: 'À propos',
        appointment: 'Prendre rendez-vous',
        search: 'Rechercher...',
        noResults: 'Aucun résultat trouvé',
        openMenu: 'Ouvrir le menu',
        closeMenu: 'Fermer le menu',
        dashboard: 'Tableau de bord',
        // Sous-menus
        trainingOnly: 'Formation seule',
        trainingOnlyDesc: 'Accès complet à la formation crypto',
        trainingOnlyPrice: '249,99€/mois',
        trainingSignals: 'Formation + Signaux',
        trainingSignalsDesc: 'Formation complète et signaux de trading',
        trainingSignalsPrice: '349,99€/mois',
        popular: 'Populaire',
        recommended: 'Recommandé',
        understandCrypto: 'Comprendre la crypto',
        understandCryptoDesc: 'Guide complet sur la blockchain et les cryptomonnaies',
        realTimeMarket: 'Marché en temps réel',
        realTimeMarketDesc: 'Suivez les cours des cryptomonnaies en direct',
        articles: 'Articles',
        articlesDesc: 'Nos derniers articles et analyses',
        cryptoDictionary: 'Dictionnaire crypto',
        cryptoDictionaryDesc: 'Définitions des termes crypto essentiels'
      },
      // Authentification
      auth: {
        signIn: 'Se connecter',
        signUp: 'S\'inscrire',
        login: 'Connexion',
        register: 'Inscription',
        loginTitle: 'Connexion',
        registerTitle: 'Inscription',
        loginSubtitle: 'Connectez-vous à votre compte',
        registerSubtitle: 'Créez votre compte',
        email: 'Adresse e-mail',
        password: 'Mot de passe',
        confirmPassword: 'Confirmer le mot de passe',
        firstName: 'Prénom',
        lastName: 'Nom',
        phone: 'Téléphone',
        acceptTerms: 'J\'accepte les',
        termsOfService: 'conditions d\'utilisation',
        and: 'et la',
        privacyPolicy: 'politique de confidentialité',
        alreadyHaveAccount: 'Vous avez déjà un compte ?',
        dontHaveAccount: 'Vous n\'avez pas de compte ?',
        forgotPassword: 'Mot de passe oublié ?',
        resetPassword: 'Réinitialiser le mot de passe',
        backToLogin: 'Retour à la connexion',
        sendResetLink: 'Envoyer le lien de réinitialisation',
        loginWith: 'Se connecter avec',
        registerWith: 'S\'inscrire avec',
        google: 'Google',
        or: 'ou',
        validationRequired: 'Ce champ est requis',
        validationEmail: 'Veuillez entrer une adresse e-mail valide',
        validationPassword: 'Le mot de passe doit contenir au moins 8 caractères',
        validationPasswordMatch: 'Les mots de passe ne correspondent pas',
        validationTerms: 'Vous devez accepter les conditions',
        loginSuccess: 'Connexion réussie !',
        loginError: 'Erreur de connexion',
        registerSuccess: 'Inscription réussie !',
        registerError: 'Erreur lors de l\'inscription',
        logout: 'Se déconnecter'
      },
      // Checkout et paiement
      checkout: {
        finalizeSubscription: 'Finaliser votre abonnement',
        monthlyBilling: 'Facturation mensuelle',
        recurringPayment: 'Paiement récurrent',
        subscriptionDetails: 'Détails de l\'abonnement',
        paymentMethod: 'Méthode de paiement',
        cardNumber: 'Numéro de carte',
        expiryDate: 'Date d\'expiration',
        cvc: 'CVC',
        cardholderName: 'Nom du porteur',
        billingAddress: 'Adresse de facturation',
        completePayment: 'Finaliser le paiement',
        processing: 'Traitement en cours...',
        paymentSuccess: 'Paiement réussi',
        paymentError: 'Erreur de paiement',
        cancel: 'Annuler',
        securePayment: 'Paiement sécurisé',
        total: 'Total'
      },
      // Modales d'abonnement
      subscription: {
        chooseOffer: 'Choisissez votre offre',
        trainingOnly: 'Formation seule',
        trainingOnlyDesc: 'Accès complet à notre formation crypto',
        trainingOnlyPrice: '249,99€',
        perMonth: '/mois',
        trainingSignals: 'Formation + Signaux',
        trainingSignalsDesc: 'Formation + signaux de trading en temps réel',
        trainingSignalsPrice: '349,99€',
        mostPopular: 'Le plus populaire',
        selectPlan: 'Choisir ce plan',
        loginRequired: 'Connexion requise',
        loginRequiredDesc: 'Vous devez être connecté pour vous abonner',
        loginButton: 'Se connecter',
        registerButton: 'Créer un compte',
        alreadySubscribed: 'Déjà abonné',
        alreadySubscribedDesc: 'Vous avez déjà un abonnement actif',
        goToDashboard: 'Aller au tableau de bord',
        features: 'Fonctionnalités incluses',
        feature1: 'Formation complète',
        feature2: 'Support premium',
        feature3: 'Mises à jour régulières',
        feature4: 'Signaux de trading',
        feature5: 'Analyses expertes',
        feature6: 'Communauté VIP',
        payWithCard: 'Payer par carte',
        payWithPaypal: 'Payer avec PayPal',
        processing: 'Traitement...',
        close: 'Fermer',
        whatIncluded: 'Qu\'est-ce qui est inclus ?',
        fullAccess: 'Accès complet à la formation',
        premiumSupport: 'Support premium',
        regularUpdates: 'Mises à jour régulières',
        tradingSignalsAccess: 'Accès aux signaux de trading',
        expertAnalysis: 'Analyses d\'experts',
        vipCommunity: 'Communauté VIP',
        monthlyPayment: 'Paiement mensuel',
        noCommitment: 'Sans engagement',
        cancelAnytime: 'Résiliable à tout moment'
      },
      // Page Solutions
      solutions: {
        heroTitle: 'Nos Solutions d\'Investissement Crypto',
        heroSubtitle: 'Choisissez l\'offre qui correspond le mieux à vos objectifs d\'investissement',
        plans: 'Nos Formules',
        plansSubtitle: 'Des solutions adaptées à tous les profils d\'investisseurs',
        trainingOnlyTitle: 'Formation Crypto',
        trainingOnlyPrice: '249,99€',
        trainingOnlyDescription: 'Formation complète pour comprendre et maîtriser les cryptomonnaies',
        trainingSignalsTitle: 'Formation + Signaux',
        trainingSignalsPrice: '349,99€',
        trainingSignalsDescription: 'Formation complète + signaux de trading en temps réel',
        getStarted: 'Commencer maintenant',
        faq: 'Questions Fréquentes',
        faqSubtitle: 'Tout ce que vous devez savoir sur nos services',
        question1: 'Comment fonctionne la formation crypto ?',
        answer1: 'Notre formation est structurée en modules progressifs, allant des bases de la blockchain aux stratégies d\'investissement avancées.',
        question2: 'Que sont les signaux de trading ?',
        answer2: 'Les signaux sont des recommandations d\'achat/vente basées sur notre analyse technique et fondamentale des marchés crypto.',
        question3: 'Puis-je annuler mon abonnement ?',
        answer3: 'Oui, vous pouvez résilier votre abonnement à tout moment depuis votre tableau de bord.',
        question4: 'Y a-t-il un support client ?',
        answer4: 'Oui, nous offrons un support premium à tous nos abonnés via chat, email et téléphone.',
        question5: 'Les signaux sont-ils garantis ?',
        answer5: 'Les signaux sont basés sur notre expertise, mais les marchés crypto sont volatils. Nous ne pouvons garantir les résultats.',
        allFeatures: 'Toutes les fonctionnalités',
        feature1: 'Formation complète en cryptomonnaies',
        feature2: 'Modules d\'apprentissage interactifs',
        feature3: 'Analyses de marché hebdomadaires',
        feature4: 'Support par chat et email',
        feature5: 'Certificat de réussite',
        feature6: 'Communauté privée',
        feature7: 'Signaux de trading en temps réel',
        feature8: 'Alertes sur mobile et desktop',
        feature9: 'Analyses techniques détaillées',
        feature10: 'Support téléphonique prioritaire'
      },
      // Page Paramètres
      settingsPage: {
        title: 'Paramètres du compte',
        personalInfo: 'Informations personnelles',
        personalInfoDesc: 'Gérez vos informations personnelles et préférences',
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Adresse e-mail',
        phone: 'Téléphone',
        language: 'Langue',
        french: 'Français',
        english: 'Anglais',
        subscriptionInfo: 'Informations d\'abonnement',
        subscriptionInfoDesc: 'Gérez votre abonnement et facturation',
        currentPlan: 'Plan actuel',
        nextBilling: 'Prochaine facturation',
        amount: 'Montant',
        status: 'Statut',
        active: 'Actif',
        inactive: 'Inactif',
        manageBilling: 'Gérer la facturation',
        cancelSubscription: 'Annuler l\'abonnement',
        security: 'Sécurité',
        securityDesc: 'Paramètres de sécurité de votre compte',
        changePassword: 'Changer le mot de passe',
        currentPassword: 'Mot de passe actuel',
        newPassword: 'Nouveau mot de passe',
        confirmNewPassword: 'Confirmer le nouveau mot de passe',
        updatePassword: 'Mettre à jour le mot de passe',
        twoFactorAuth: 'Authentification à deux facteurs',
        enableTwoFactor: 'Activer l\'authentification à deux facteurs',
        notifications: 'Notifications',
        notificationsDesc: 'Gérez vos préférences de notification',
        emailNotifications: 'Notifications par e-mail',
        tradingSignals: 'Signaux de trading',
        marketUpdates: 'Mises à jour du marché',
        educationalContent: 'Contenu éducatif',
        accountUpdates: 'Mises à jour du compte',
        pushNotifications: 'Notifications push',
        enablePush: 'Activer les notifications push',
        privacy: 'Confidentialité',
        privacyDesc: 'Contrôlez la confidentialité de votre compte',
        profileVisibility: 'Visibilité du profil',
        dataSharing: 'Partage de données',
        allowDataSharing: 'Autoriser le partage anonyme des données d\'usage',
        deleteAccount: 'Supprimer le compte',
        dangerZone: 'Zone de danger',
        dangerZoneDesc: 'Actions irréversibles concernant votre compte',
        deleteAccountWarning: 'Cette action est irréversible. Toutes vos données seront définitivement supprimées.',
        deleteAccountButton: 'Supprimer définitivement mon compte',
        save: 'Enregistrer',
        cancel: 'Annuler',
        saved: 'Enregistré',
        saving: 'Enregistrement...',
        error: 'Erreur',
        success: 'Succès',
        updateSuccess: 'Paramètres mis à jour avec succès',
        updateError: 'Erreur lors de la mise à jour',
        passwordUpdateSuccess: 'Mot de passe mis à jour avec succès',
        passwordUpdateError: 'Erreur lors de la mise à jour du mot de passe',
        validationRequired: 'Ce champ est requis',
        validationEmail: 'Adresse e-mail invalide',
        validationPassword: 'Le mot de passe doit contenir au moins 8 caractères',
        validationPasswordMatch: 'Les mots de passe ne correspondent pas',
        confirmDeleteTitle: 'Confirmer la suppression',
        confirmDeleteMessage: 'Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.',
        confirmDelete: 'Oui, supprimer mon compte',
        close: 'Fermer'
      },
      // Hero section
      hero: {
        title: 'Expert en Trading Crypto &',
        titleHighlight: 'Formation Investissement',
        subtitle: 'Optimisez vos investissements en cryptomonnaies avec nos analyses expertes et notre accompagnement personnalisé',
        discoverSolutions: 'Découvrir Nos Solutions',
        tradingTraining: 'Formation Trading'
      },
      // Footer
      footer: {
        assistance: 'Assistance',
        values: 'Nos valeurs',
        faq: 'FAQ',
        privacy: 'Confidentialité',
        privacyPolicy: 'Politique de Confidentialité',
        terms: 'Conditions d\'utilisation',
        termsOfService: 'Conditions d\'Utilisation',
        companyPolicy: 'Politique d\'Entreprise',
        articles: 'Articles',
        dictionary: 'Dictionnaire',
        copyright: 'Copyright © {year} Alyah Knowledge Investissement. Tous droits réservés.'
      },
      supportPage: {
        seo: {
          title: 'Assistance',
          description: "Contactez l'équipe d'Alyah Knowledge pour toute question ou assistance. Nous sommes là pour vous aider."
        },
        header: {
          title: 'Assistance',
          subtitle: "Notre équipe est là pour vous aider. Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais."
        },
        form: {
          labels: {
            name: 'Nom complet',
            email: 'Email',
            subject: 'Sujet',
            message: 'Message'
          },
          placeholders: {
            name: 'Votre nom',
            email: 'votre@email.com',
            subject: 'Le sujet de votre message',
            message: 'Décrivez votre demande en détail...'
          },
          emailSubjectPrefix: "Nouvelle demande d'assistance Alyah"
        },
        buttons: {
          submit: 'Envoyer le message',
          sending: 'Envoi en cours...'
        },
        messages: {
          success: 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
          error: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard."
        }
      },
      notFoundPage: {
        seo: {
          title: 'Page non trouvée - Alyah Knowledge',
          description: "La page que vous recherchez n'existe pas. Explorez nos ressources crypto et formations."
        },
        header: {
          title: 'Page non trouvée',
          subtitle: "La page que vous recherchez n'existe pas ou a été déplacée."
        },
        buttons: {
          home: 'Accueil',
          dictionary: 'Dictionnaire',
          articles: 'Articles'
        },
        content: {
          popularResources: 'Ressources populaires',
          link1: '→ Formation crypto complète',
          link2: '→ Marché en temps réel',
          link3: "→ Qu'est-ce que Bitcoin ?",
          link4: '→ Signaux de trading'
        }
      },
      errorBoundary: {
        header: {
          title: 'Erreur de chargement',
          subtitle: "Une erreur s'est produite lors du chargement de l'application."
        },
        buttons: {
          reload: 'Recharger la page'
        },
        content: {
          devDetails: "Détails de l'erreur (dev uniquement)"
        }
      },
      errors: {
        network: 'Erreur réseau. Veuillez vérifier votre connexion.',
        unknown: 'Une erreur inconnue est survenue.',
        unauthorized: 'Vous devez être connecté pour accéder à cette page.',
        forbidden: "Vous n'avez pas la permission d'accéder à cette ressource.",
        notFound: 'La ressource demandée est introuvable.',
        serverError: 'Erreur interne du serveur. Veuillez réessayer plus tard.',
        timeout: 'La demande a expiré. Veuillez réessayer.',
        invalidInput: 'Entrée invalide.',
        emailInUse: 'Cette adresse e-mail est déjà utilisée.',
        weakPassword: 'Mot de passe trop faible.',
        tooManyRequests: 'Trop de tentatives. Veuillez réessayer plus tard.',
        maintenance: 'Le service est actuellement en maintenance.',
        paymentFailed: 'Le paiement a échoué.',
        formIncomplete: 'Veuillez remplir tous les champs requis.',
        subscriptionRequired: 'Un abonnement actif est requis.'
      },
      quizQuestions: {
    question1: {
      question: "Quelle est la principale caractéristique de la blockchain qui la différencie des bases de données traditionnelles ?",
      options: {
        a: "Elle est centralisée et contrôlée par une entité unique",
        b: "Elle est décentralisée et immuable",
        c: "Elle nécessite un serveur pour stocker les transactions",
        d: "Elle ne peut enregistrer que des transactions financières"
      },
      correctAnswer: "b",
      explanation: "La blockchain est un registre distribué où les transactions sont immuables et validées par un réseau décentralisé."
    },
    question2: {
      question: "Quel est le rôle du mécanisme de consensus dans la blockchain ?",
      options: {
        a: "Assurer que toutes les transactions soient validées de manière sécurisée",
        b: "Augmenter la vitesse des transactions sans vérification",
        c: "Permettre uniquement aux banques de valider les transactions",
        d: "Effacer les transactions en cas d'erreur"
      },
      correctAnswer: "a",
      explanation: "Le consensus permet de garantir la sécurité et la validité des transactions sans autorité centrale."
    },
    question3: {
      question: "Quelle affirmation est correcte concernant la relation entre la blockchain et le Bitcoin ?",
      options: {
        a: "Le Bitcoin est une technologie qui a permis de créer la blockchain",
        b: "La blockchain est un protocole utilisé exclusivement par le Bitcoin",
        c: "Le Bitcoin est une application utilisant la technologie blockchain",
        d: "La blockchain ne peut être utilisée que pour des paiements numériques"
      },
      correctAnswer: "c",
      explanation: "La blockchain est la technologie sous-jacente qui permet à Bitcoin et de nombreuses autres applications d'exister."
    },
    question4: {
      question: "Quel est l'avantage principal de la décentralisation dans la blockchain ?",
      options: {
        a: "Réduction des coûts de transaction uniquement",
        b: "Élimination du besoin d'internet",
        c: "Suppression des points de défaillance uniques",
        d: "Accélération automatique des transactions"
      },
      correctAnswer: "c",
      explanation: "La décentralisation élimine les points de défaillance uniques en distribuant le contrôle sur plusieurs nœuds."
    },
    question5: {
      question: "Qu'est-ce qu'un nœud dans un réseau blockchain ?",
      options: {
        a: "Un serveur central qui contrôle toutes les transactions",
        b: "Un ordinateur qui maintient une copie de la blockchain",
        c: "Un algorithme de chiffrement",
        d: "Une transaction individuelle"
      },
      correctAnswer: "b",
      explanation: "Un nœud est un ordinateur participant au réseau qui maintient une copie de la blockchain et valide les transactions."
    },
    question6: {
      question: "Comment la décentralisation affecte-t-elle la confiance dans le système ?",
      options: {
        a: "Elle nécessite plus de confiance envers les autorités",
        b: "Elle élimine complètement le besoin de confiance",
        c: "Elle remplace la confiance en des tiers par la confiance en des algorithmes",
        d: "Elle n'a aucun impact sur la confiance"
      },
      correctAnswer: "c",
      explanation: "La décentralisation remplace la confiance en des institutions centrales par la confiance en des protocoles cryptographiques et des algorithmes de consensus."
    },
    question7: {
      question: "Quel rôle joue la fonction de hachage dans la blockchain ?",
      options: {
        a: "Créer des mots de passe pour les utilisateurs",
        b: "Générer une empreinte unique pour chaque bloc",
        c: "Chiffrer les transactions pour les rendre illisibles",
        d: "Créer de nouveaux bitcoins"
      },
      correctAnswer: "b",
      explanation: "Les fonctions de hachage créent une empreinte numérique unique pour chaque bloc, garantissant l'intégrité de la chaîne."
    },
    question8: {
      question: "Qu'est-ce que la cryptographie asymétrique dans le contexte blockchain ?",
      options: {
        a: "Un système utilisant une seule clé pour chiffrer et déchiffrer",
        b: "Un système utilisant une paire de clés : publique et privée",
        c: "Un système qui ne nécessite aucune clé",
        d: "Un système réservé aux mineurs"
      },
      correctAnswer: "b",
      explanation: "La cryptographie asymétrique utilise une paire de clés : la clé publique pour recevoir des fonds et la clé privée pour les dépenser."
    },
    question9: {
      question: "Pourquoi est-il crucial de garder sa clé privée secrète ?",
      options: {
        a: "Pour accélérer les transactions",
        b: "Pour réduire les frais de transaction",
        c: "Pour maintenir le contrôle exclusif sur ses cryptomonnaies",
        d: "Pour améliorer la vitesse du réseau"
      },
      correctAnswer: "c",
      explanation: "La clé privée donne un contrôle total sur les fonds associés. Quiconque la possède peut dépenser les cryptomonnaies."
    },
    question10: {
      question: "Quelle est la principale différence entre une blockchain publique et privée ?",
      options: {
        a: "La blockchain publique est plus rapide",
        b: "La blockchain publique est accessible à tous, la privée est restreinte",
        c: "La blockchain privée utilise plus d'énergie",
        d: "Il n'y a aucune différence technique"
      },
      correctAnswer: "b",
      explanation: "Les blockchains publiques sont ouvertes à tous, tandis que les privées restreignent l'accès à certains participants autorisés."
    },
    question11: {
      question: "Qu'est-ce qu'une blockchain hybride ?",
      options: {
        a: "Une blockchain qui utilise deux cryptomonnaies",
        b: "Une combinaison d'éléments publics et privés",
        c: "Une blockchain qui fonctionne uniquement hors ligne",
        d: "Une blockchain sans mécanisme de consensus"
      },
      correctAnswer: "b",
      explanation: "Une blockchain hybride combine des caractéristiques des blockchains publiques et privées selon les besoins."
    },
    question12: {
      question: "Quel type de blockchain convient le mieux aux entreprises pour des applications internes ?",
      options: {
        a: "Blockchain publique",
        b: "Blockchain privée ou consortium",
        c: "Blockchain hybride uniquement",
        d: "Aucune blockchain n'est adaptée"
      },
      correctAnswer: "b",
      explanation: "Les blockchains privées ou de consortium offrent plus de contrôle et de confidentialité pour les applications d'entreprise."
    },
    question13: {
      question: "Qui est considéré comme le créateur de Bitcoin ?",
      options: {
        a: "Vitalik Buterin",
        b: "Satoshi Nakamoto",
        c: "Charlie Lee",
        d: "Gavin Andresen"
      },
      correctAnswer: "b",
      explanation: "Satoshi Nakamoto est le pseudonyme utilisé par le créateur ou groupe de créateurs de Bitcoin."
    },
    question14: {
      question: "En quelle année le premier bloc Bitcoin (bloc Genesis) a-t-il été miné ?",
      options: {
        a: "2008",
        b: "2009",
        c: "2010",
        d: "2011"
      },
      correctAnswer: "b",
      explanation: "Le bloc Genesis de Bitcoin a été miné le 3 janvier 2009, marquant le début du réseau Bitcoin."
    },
    question15: {
      question: "Quel était l'objectif principal de Bitcoin selon le livre blanc original ?",
      options: {
        a: "Remplacer complètement les banques",
        b: "Créer un système de paiement électronique peer-to-peer",
        c: "Permettre le trading haute fréquence",
        d: "Faciliter les contrats intelligents"
      },
      correctAnswer: "b",
      explanation: "Le livre blanc de Bitcoin décrit un système de paiement électronique peer-to-peer sans intermédiaire de confiance."
    },
    question16: {
      question: "Quelle est la principale innovation d'Ethereum par rapport à Bitcoin ?",
      options: {
        a: "Des transactions plus rapides",
        b: "Les contrats intelligents (smart contracts)",
        c: "Des frais plus bas",
        d: "Une meilleure sécurité"
      },
      correctAnswer: "b",
      explanation: "Ethereum a introduit les smart contracts, permettant d'exécuter du code programmable sur la blockchain."
    },
    question17: {
      question: "Qu'est-ce que l'EVM (Ethereum Virtual Machine) ?",
      options: {
        a: "Un portefeuille Ethereum",
        b: "L'environnement d'exécution des smart contracts",
        c: "Un type de cryptomonnaie",
        d: "Un algorithme de minage"
      },
      correctAnswer: "b",
      explanation: "L'EVM est la machine virtuelle qui exécute les smart contracts sur le réseau Ethereum."
    },
    question18: {
      question: "Qu'est-ce que le 'gas' dans Ethereum ?",
      options: {
        a: "Un type de token",
        b: "L'unité de mesure du coût de calcul",
        c: "Un algorithme de consensus",
        d: "Un portefeuille spécialisé"
      },
      correctAnswer: "b",
      explanation: "Le gas mesure la quantité de travail computationnel nécessaire pour exécuter des opérations sur Ethereum."
    },
    question19: {
      question: "Quelle est la différence entre un coin et un token ?",
      options: {
        a: "Il n'y a aucune différence",
        b: "Un coin a sa propre blockchain, un token utilise une blockchain existante",
        c: "Un token est toujours plus cher qu'un coin",
        d: "Un coin ne peut pas être échangé"
      },
      correctAnswer: "b",
      explanation: "Les coins ont leur propre blockchain (Bitcoin, Ethereum), tandis que les tokens sont construits sur des blockchains existantes."
    },
    question20: {
      question: "Qu'est-ce qu'un token utilitaire ?",
      options: {
        a: "Un token qui donne droit à des dividendes",
        b: "Un token qui représente un actif physique",
        c: "Un token qui donne accès à un produit ou service",
        d: "Un token sans utilité particulière"
      },
      correctAnswer: "c",
      explanation: "Les tokens utilitaires donnent accès à des produits ou services spécifiques au sein d'un écosystème."
    },
    question21: {
      question: "Que représente un token non fongible (NFT) ?",
      options: {
        a: "Un actif numérique unique et non interchangeable",
        b: "Une cryptomonnaie comme Bitcoin",
        c: "Un token divisible en parties égales",
        d: "Un contrat d'assurance"
      },
      correctAnswer: "a",
      explanation: "Les NFT représentent des actifs numériques uniques qui ne peuvent pas être remplacés par un autre identique."
    },
    question22: {
      question: "Quelle est la différence principale entre un wallet chaud et un wallet froid ?",
      options: {
        a: "La température de fonctionnement",
        b: "La connexion à internet",
        c: "Le type de cryptomonnaie supporté",
        d: "La vitesse de transaction"
      },
      correctAnswer: "b",
      explanation: "Les wallets chauds sont connectés à internet, les wallets froids sont hors ligne pour plus de sécurité."
    },
    question23: {
      question: "Qu'est-ce qu'une phrase de récupération (seed phrase) ?",
      options: {
        a: "Le mot de passe du wallet",
        b: "Une série de mots permettant de restaurer un wallet",
        c: "L'adresse publique du wallet",
        d: "Le nom d'utilisateur du wallet"
      },
      correctAnswer: "b",
      explanation: "La seed phrase est une série de mots (généralement 12 ou 24) qui permet de restaurer complètement un wallet."
    },
    question24: {
      question: "Quel type de wallet offre la meilleure sécurité pour le stockage long terme ?",
      options: {
        a: "Wallet en ligne",
        b: "Application mobile",
        c: "Hardware wallet (portefeuille physique)",
        d: "Portefeuille d'exchange"
      },
      correctAnswer: "c",
      explanation: "Les hardware wallets offrent la meilleure sécurité car ils gardent les clés privées hors ligne."
    },
    question25: {
      question: "Qu'est-ce que la moyenne mobile simple (SMA) ?",
      options: {
        a: "Le prix moyen sur une période donnée",
        b: "Le volume moyen des transactions",
        c: "La volatilité moyenne du marché",
        d: "Le nombre moyen de traders"
      },
      correctAnswer: "a",
      explanation: "La SMA calcule la moyenne arithmétique des prix de clôture sur une période déterminée."
    },
    question26: {
      question: "Que mesure l'indicateur RSI (Relative Strength Index) ?",
      options: {
        a: "La force relative d'une cryptomonnaie par rapport à Bitcoin",
        b: "La vitesse et l'ampleur des changements de prix",
        c: "Le volume des transactions",
        d: "La capitalisation boursière"
      },
      correctAnswer: "b",
      explanation: "Le RSI mesure la vitesse et l'ampleur des changements de prix pour identifier les conditions de surachat ou survente."
    },
    question27: {
      question: "Que signifie un RSI supérieur à 70 ?",
      options: {
        a: "L'actif est sous-évalué",
        b: "L'actif est en situation de survente",
        c: "L'actif est potentiellement en situation de surachat",
        d: "L'actif va certainement monter"
      },
      correctAnswer: "c",
      explanation: "Un RSI > 70 suggère généralement une situation de surachat, indiquant une possible correction à la baisse."
    },
    question28: {
      question: "Qu'est-ce qu'un chandelier japonais (candlestick) ?",
      options: {
        a: "Un type de wallet",
        b: "Une représentation graphique des prix (ouverture, fermeture, haut, bas)",
        c: "Un indicateur technique",
        d: "Une stratégie de trading"
      },
      correctAnswer: "b",
      explanation: "Un chandelier japonais affiche l'ouverture, la fermeture, le plus haut et le plus bas d'une période donnée."
    },
    question29: {
      question: "Que représente une bougie verte/blanche dans un graphique ?",
      options: {
        a: "Le prix de clôture est inférieur au prix d'ouverture",
        b: "Le prix de clôture est supérieur au prix d'ouverture",
        c: "Le volume est en hausse",
        d: "Il n'y a eu aucune transaction"
      },
      correctAnswer: "b",
      explanation: "Une bougie verte/blanche indique que le prix de clôture est supérieur au prix d'ouverture (hausse)."
    },
    question30: {
      question: "Qu'est-ce qu'un niveau de support ?",
      options: {
        a: "Un niveau où le prix a tendance à rebondir vers le haut",
        b: "Un niveau où le prix a tendance à chuter",
        c: "Le prix moyen sur 24h",
        d: "Le volume minimum de transaction"
      },
      correctAnswer: "a",
      explanation: "Un support est un niveau de prix où la demande est suffisamment forte pour empêcher une baisse supplémentaire."
    },
    question31: {
      question: "Qu'est-ce qu'un pattern 'Tête et Épaules' ?",
      options: {
        a: "Un pattern de continuation haussier",
        b: "Un pattern de retournement baissier",
        c: "Un indicateur de volume",
        d: "Une stratégie de DCA"
      },
      correctAnswer: "b",
      explanation: "Le pattern tête et épaules est généralement un signal de retournement baissier après une tendance haussière."
    },
    question32: {
      question: "Que signifie un pattern de 'Double Bottom' ?",
      options: {
        a: "Signal de retournement haussier potentiel",
        b: "Signal de continuation baissière",
        c: "Indication de volatilité élevée",
        d: "Pattern de consolidation"
      },
      correctAnswer: "a",
      explanation: "Un double bottom suggère généralement une fin de tendance baissière et un possible retournement haussier."
    },
    question33: {
      question: "Qu'est-ce qu'un triangle ascendant ?",
      options: {
        a: "Un pattern généralement haussier avec résistance horizontale et support ascendant",
        b: "Un pattern toujours baissier",
        c: "Un indicateur de volume",
        d: "Une stratégie de diversification"
      },
      correctAnswer: "a",
      explanation: "Le triangle ascendant combine une résistance horizontale avec des creux de plus en plus hauts, suggérant une pression acheteuse."
    },
    question34: {
      question: "Qu'est-ce que la règle des 2% en gestion du risque ?",
      options: {
        a: "Investir seulement 2% de ses revenus",
        b: "Ne jamais risquer plus de 2% de son capital par trade",
        c: "Prendre des profits à 2% de gain",
        d: "Trader seulement 2% du temps"
      },
      correctAnswer: "b",
      explanation: "La règle des 2% stipule de ne jamais risquer plus de 2% de son capital total sur un seul trade."
    },
    question35: {
      question: "Qu'est-ce qu'un stop-loss ?",
      options: {
        a: "Un ordre pour prendre des profits",
        b: "Un ordre pour limiter les pertes",
        c: "Une stratégie d'achat",
        d: "Un indicateur technique"
      },
      correctAnswer: "b",
      explanation: "Un stop-loss est un ordre de vente automatique qui se déclenche quand le prix atteint un niveau prédéfini pour limiter les pertes."
    },
    question36: {
      question: "Pourquoi la diversification est-elle importante ?",
      options: {
        a: "Pour augmenter les profits",
        b: "Pour réduire le risque global du portefeuille",
        c: "Pour simplifier la gestion",
        d: "Pour éviter les taxes"
      },
      correctAnswer: "b",
      explanation: "La diversification répartit le risque sur plusieurs actifs, réduisant l'impact d'une mauvaise performance d'un seul actif."
    },
    question37: {
      question: "Que signifie DeFi ?",
      options: {
        a: "Decentralized Finance (Finance Décentralisée)",
        b: "Digital Finance",
        c: "Direct Finance",
        d: "Default Finance"
      },
      correctAnswer: "a",
      explanation: "DeFi signifie 'Decentralized Finance', désignant les services financiers construits sur blockchain sans intermédiaires centralisés."
    },
    question38: {
      question: "Qu'est-ce qu'un AMM (Automated Market Maker) ?",
      options: {
        a: "Un trader automatique",
        b: "Un protocole permettant l'échange automatique de tokens via des pools de liquidité",
        c: "Un algorithme de minage",
        d: "Un type de wallet"
      },
      correctAnswer: "b",
      explanation: "Un AMM utilise des algorithmes et des pools de liquidité pour permettre l'échange de tokens sans carnet d'ordres traditionnel."
    },
    question39: {
      question: "Qu'est-ce que l'impermanent loss ?",
      options: {
        a: "La perte définitive de tokens",
        b: "La différence de valeur entre détenir des tokens et les mettre dans un pool de liquidité",
        c: "Les frais de transaction",
        d: "La volatilité du marché"
      },
      correctAnswer: "b",
      explanation: "L'impermanent loss est la perte temporaire subie par les fournisseurs de liquidité due aux variations de prix des actifs dans le pool."
    },
    question40: {
      question: "Qu'est-ce que le yield farming ?",
      options: {
        a: "L'agriculture de cryptomonnaies",
        b: "La stratégie de maximiser les rendements en prêtant ou stakant des cryptos",
        c: "L'achat et vente rapide de tokens",
        d: "La création de nouveaux tokens"
      },
      correctAnswer: "b",
      explanation: "Le yield farming consiste à optimiser les rendements en déployant des cryptomonnaies dans différents protocoles DeFi."
    },
    question41: {
      question: "Qu'est-ce que l'APY dans le contexte DeFi ?",
      options: {
        a: "Annual Percentage Yield (Rendement Annuel en Pourcentage)",
        b: "Average Price Yearly",
        c: "Automated Protocol Yield",
        d: "Asset Protection Yield"
      },
      correctAnswer: "a",
      explanation: "L'APY indique le rendement annuel d'un investissement en tenant compte de la composition des intérêts."
    },
    question42: {
      question: "Quel est le principal risque du yield farming ?",
      options: {
        a: "Les frais de transaction élevés",
        b: "Les risques de smart contracts et d'impermanent loss",
        c: "La lenteur des transactions",
        d: "L'absence de régulation"
      },
      correctAnswer: "b",
      explanation: "Les principaux risques incluent les bugs de smart contracts, l'impermanent loss et les risques de plateforme."
    },
    question43: {
      question: "Qu'est-ce qu'un pool de liquidité ?",
      options: {
        a: "Un portefeuille de cryptomonnaies",
        b: "Une réserve de tokens permettant les échanges décentralisés",
        c: "Un groupe de mineurs",
        d: "Un type de smart contract pour le staking"
      },
      correctAnswer: "b",
      explanation: "Un pool de liquidité est une réserve de tokens verrouillés dans un smart contract pour faciliter les échanges décentralisés."
    },
    question44: {
      question: "Comment les fournisseurs de liquidité sont-ils rémunérés ?",
      options: {
        a: "Par des frais de transaction et parfois des tokens de gouvernance",
        b: "Uniquement par l'appréciation du prix des tokens",
        c: "Par des intérêts fixes",
        d: "Ils ne sont pas rémunérés"
      },
      correctAnswer: "a",
      explanation: "Les LP reçoivent une part des frais de trading et parfois des récompenses additionnelles en tokens du protocole."
    },
    question45: {
      question: "Qu'est-ce qu'un LP token ?",
      options: {
        a: "Un token de gouvernance",
        b: "Un token représentant la part d'un utilisateur dans un pool de liquidité",
        c: "Un token stable",
        d: "Un token de récompense"
      },
      correctAnswer: "b",
      explanation: "Les LP tokens représentent la propriété proportionnelle d'un utilisateur dans un pool de liquidité spécifique."
    },
    question46: {
      question: "Qu'est-ce qu'un stablecoin ?",
      options: {
        a: "Une cryptomonnaie conçue pour maintenir une valeur stable",
        b: "Une cryptomonnaie très volatile",
        c: "Un token de gouvernance",
        d: "Une cryptomonnaie minée par preuve de travail"
      },
      correctAnswer: "a",
      explanation: "Les stablecoins sont des cryptomonnaies conçues pour maintenir une valeur stable, souvent indexées sur des devises fiat."
    },
    question47: {
      question: "Quels sont les différents types de stablecoins ?",
      options: {
        a: "Uniquement adossés à des devises fiat",
        b: "Fiat-collateralized, crypto-collateralized, et algorithmiques",
        c: "Seulement algorithmiques",
        d: "Uniquement adossés à l'or"
      },
      correctAnswer: "b",
      explanation: "Il existe trois types principaux : adossés au fiat, adossés aux cryptos, et les stablecoins algorithmiques."
    },
    question48: {
      question: "Quel est l'avantage principal des stablecoins en DeFi ?",
      options: {
        a: "Ils génèrent plus de profits",
        b: "Ils offrent une stabilité de valeur pour les stratégies DeFi",
        c: "Ils sont exempts de frais",
        d: "Ils sont plus rapides à transférer"
      },
      correctAnswer: "b",
      explanation: "Les stablecoins permettent de participer à la DeFi sans s'exposer à la volatilité des autres cryptomonnaies."
    },
    question49: {
      question: "Quelle est la meilleure pratique pour sécuriser sa seed phrase ?",
      options: {
        a: "La stocker dans un fichier texte sur l'ordinateur",
        b: "La noter sur papier et la conserver en lieu sûr, hors ligne",
        c: "La partager avec un proche de confiance",
        d: "La stocker dans le cloud"
      },
      correctAnswer: "b",
      explanation: "La seed phrase doit être notée sur support physique et conservée hors ligne, jamais sur des appareils connectés."
    },
    question50: {
      question: "Qu'est-ce que l'authentification à deux facteurs (2FA) ?",
      options: {
        a: "Un système utilisant deux mots de passe",
        b: "Une méthode ajoutant une couche de sécurité supplémentaire",
        c: "Un type de cryptage",
        d: "Une fonction de backup automatique"
      },
      correctAnswer: "b",
      explanation: "La 2FA ajoute une couche de sécurité en nécessitant deux méthodes d'authentification différentes."
    },
    question51: {
      question: "Pourquoi éviter de laisser ses cryptos sur un exchange ?",
      options: {
        a: "Les frais sont plus élevés",
        b: "Les transactions sont plus lentes",
        c: "On ne contrôle pas ses clés privées",
        d: "C'est illégal"
      },
      correctAnswer: "c",
      explanation: "Sur un exchange, vous ne possédez pas vos clés privées. En cas de problème avec l'exchange, vous pourriez perdre vos fonds."
    },
    question52: {
      question: "Qu'est-ce qu'un rug pull ?",
      options: {
        a: "Une technique de trading",
        b: "Quand les développeurs abandonnent soudainement un projet avec les fonds",
        c: "Un type de wallet",
        d: "Une stratégie DeFi"
      },
      correctAnswer: "b",
      explanation: "Un rug pull survient quand les créateurs d'un projet crypto disparaissent avec les fonds des investisseurs."
    },
    question53: {
      question: "Comment identifier un potentiel schéma de Ponzi crypto ?",
      options: {
        a: "Promesses de rendements très élevés et garantis",
        b: "Technologie blockchain innovante",
        c: "Équipe de développement expérimentée",
        d: "Partenariats avec de grandes entreprises"
      },
      correctAnswer: "a",
      explanation: "Les schémas de Ponzi promettent souvent des rendements irréalistes et garantis sans risque apparent."
    },
    question54: {
      question: "Qu'est-ce que le phishing dans le contexte crypto ?",
      options: {
        a: "Une technique de minage",
        b: "Des tentatives frauduleuses d'obtenir vos clés privées ou mots de passe",
        c: "Un type de token",
        d: "Une stratégie de trading"
      },
      correctAnswer: "b",
      explanation: "Le phishing consiste à tromper les utilisateurs pour qu'ils révèlent leurs informations sensibles comme les clés privées."
    },
    question55: {
      question: "Qu'est-ce que la stratégie DCA (Dollar Cost Averaging) ?",
      options: {
        a: "Acheter tout en une fois au plus bas",
        b: "Investir une somme fixe régulièrement indépendamment du prix",
        c: "Vendre quand le prix monte",
        d: "Trader activement pour maximiser les profits"
      },
      correctAnswer: "b",
      explanation: "Le DCA consiste à investir un montant fixe à intervalles réguliers, lissant l'impact de la volatilité sur le long terme."
    },
    question56: {
      question: "Qu'est-ce que le rebalancing de portfolio ?",
      options: {
        a: "Vendre tous ses actifs",
        b: "Ajuster les proportions des actifs pour maintenir l'allocation cible",
        c: "Acheter uniquement de nouveaux actifs",
        d: "Ignorer les changements de prix"
      },
      correctAnswer: "b",
      explanation: "Le rebalancing consiste à réajuster les proportions des actifs dans le portfolio pour maintenir l'allocation souhaitée."
    },
    question57: {
      question: "Quelle est une bonne pratique pour la répartition d'un portfolio crypto ?",
      options: {
        a: "Investir tout dans Bitcoin",
        b: "Diversifier entre différentes cryptos et classes d'actifs",
        c: "Se concentrer uniquement sur les altcoins",
        d: "Changer complètement d'allocation chaque semaine"
      },
      correctAnswer: "b",
      explanation: "La diversification réduit le risque en répartissant les investissements sur différents actifs et secteurs."
    },
    question58: {
      question: "Qu'est-ce que le trading sur marge ?",
      options: {
        a: "Trader uniquement avec son propre capital",
        b: "Emprunter des fonds pour augmenter sa position de trading",
        c: "Trader uniquement des stablecoins",
        d: "Une stratégie de long terme"
      },
      correctAnswer: "b",
      explanation: "Le trading sur marge permet d'emprunter des fonds pour augmenter la taille de ses positions, amplifiant les gains et les pertes."
    },
    question59: {
      question: "Qu'est-ce que l'effet de levier 10x ?",
      options: {
        a: "Gagner 10 fois plus d'argent",
        b: "Multiplier sa position par 10 avec du capital emprunté",
        c: "Trader 10 cryptomonnaies différentes",
        d: "Attendre 10 jours avant de vendre"
      },
      correctAnswer: "b",
      explanation: "Un levier 10x signifie que pour 1€ de capital, vous pouvez prendre une position de 10€, multipliant gains et pertes par 10."
    },
    question60: {
      question: "Qu'est-ce que le scalping en trading ?",
      options: {
        a: "Une stratégie de trading à très court terme pour de petits profits fréquents",
        b: "Acheter et garder pendant des années",
        c: "Trader uniquement les week-ends",
        d: "Une technique d'analyse fondamentale"
      },
      correctAnswer: "a",
      explanation: "Le scalping consiste à effectuer de nombreux trades rapides pour capturer de petits mouvements de prix."
    }
  }
    }
  },
  en: {
    translation: {
      // Navigation and header
      nav: {
        home: 'Home',
        solutions: 'Our Solutions',
        tradingSignals: 'Trading Signals',
        training: 'Training',
        about: 'About',
        appointment: 'Book Appointment',
        search: 'Search...',
        noResults: 'No results found',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        dashboard: 'Dashboard',
        // Submenus
        trainingOnly: 'Training Only',
        trainingOnlyDesc: 'Full access to crypto training',
        trainingOnlyPrice: '€249.99/month',
        trainingSignals: 'Training + Signals',
        trainingSignalsDesc: 'Complete training and trading signals',
        trainingSignalsPrice: '€349.99/month',
        popular: 'Popular',
        recommended: 'Recommended',
        understandCrypto: 'Understand Crypto',
        understandCryptoDesc: 'Complete guide on blockchain and cryptocurrencies',
        realTimeMarket: 'Real-time Market',
        realTimeMarketDesc: 'Follow cryptocurrency prices live',
        articles: 'Articles',
        articlesDesc: 'Our latest articles and analyses',
        cryptoDictionary: 'Crypto Dictionary',
        cryptoDictionaryDesc: 'Definitions of essential crypto terms'
      },
      // Authentication
      auth: {
        signIn: 'Sign In',
        signUp: 'Sign Up',
        login: 'Login',
        register: 'Register',
        loginTitle: 'Login',
        registerTitle: 'Registration',
        loginSubtitle: 'Sign in to your account',
        registerSubtitle: 'Create your account',
        email: 'Email address',
        password: 'Password',
        confirmPassword: 'Confirm password',
        firstName: 'First name',
        lastName: 'Last name',
        phone: 'Phone',
        acceptTerms: 'I accept the',
        termsOfService: 'terms of service',
        and: 'and the',
        privacyPolicy: 'privacy policy',
        alreadyHaveAccount: 'Already have an account?',
        dontHaveAccount: 'Don\'t have an account?',
        forgotPassword: 'Forgot password?',
        resetPassword: 'Reset password',
        backToLogin: 'Back to login',
        sendResetLink: 'Send reset link',
        loginWith: 'Sign in with',
        registerWith: 'Sign up with',
        google: 'Google',
        or: 'or',
        validationRequired: 'This field is required',
        validationEmail: 'Please enter a valid email address',
        validationPassword: 'Password must contain at least 8 characters',
        validationPasswordMatch: 'Passwords do not match',
        validationTerms: 'You must accept the terms',
        loginSuccess: 'Login successful!',
        loginError: 'Login error',
        registerSuccess: 'Registration successful!',
        registerError: 'Registration error',
        logout: 'Logout'
      },
      // Checkout and payment
      checkout: {
        finalizeSubscription: 'Finalize your subscription',
        monthlyBilling: 'Monthly billing',
        recurringPayment: 'Recurring payment',
        subscriptionDetails: 'Subscription details',
        paymentMethod: 'Payment method',
        cardNumber: 'Card number',
        expiryDate: 'Expiry date',
        cvc: 'CVC',
        cardholderName: 'Cardholder name',
        billingAddress: 'Billing address',
        completePayment: 'Complete payment',
        processing: 'Processing...',
        paymentSuccess: 'Payment successful',
        paymentError: 'Payment error',
        cancel: 'Cancel',
        securePayment: 'Secure payment',
        total: 'Total'
      },
      // Subscription modals
      subscription: {
        chooseOffer: 'Choose your offer',
        trainingOnly: 'Training Only',
        trainingOnlyDesc: 'Full access to our crypto training',
        trainingOnlyPrice: '€249.99',
        perMonth: '/month',
        trainingSignals: 'Training + Signals',
        trainingSignalsDesc: 'Training + real-time trading signals',
        trainingSignalsPrice: '€349.99',
        mostPopular: 'Most popular',
        selectPlan: 'Select this plan',
        loginRequired: 'Login required',
        loginRequiredDesc: 'You must be logged in to subscribe',
        loginButton: 'Sign in',
        registerButton: 'Create account',
        alreadySubscribed: 'Already subscribed',
        alreadySubscribedDesc: 'You already have an active subscription',
        goToDashboard: 'Go to dashboard',
        features: 'Included features',
        feature1: 'Complete training',
        feature2: 'Premium support',
        feature3: 'Regular updates',
        feature4: 'Trading signals',
        feature5: 'Expert analysis',
        feature6: 'VIP community',
        payWithCard: 'Pay with card',
        payWithPaypal: 'Pay with PayPal',
        processing: 'Processing...',
        close: 'Close',
        whatIncluded: 'What\'s included?',
        fullAccess: 'Full access to training',
        premiumSupport: 'Premium support',
        regularUpdates: 'Regular updates',
        tradingSignalsAccess: 'Access to trading signals',
        expertAnalysis: 'Expert analysis',
        vipCommunity: 'VIP community',
        monthlyPayment: 'Monthly payment',
        noCommitment: 'No commitment',
        cancelAnytime: 'Cancel anytime'
      },
      // Solutions page
      solutions: {
        heroTitle: 'Our Crypto Investment Solutions',
        heroSubtitle: 'Choose the offer that best matches your investment goals',
        plans: 'Our Plans',
        plansSubtitle: 'Solutions adapted to all investor profiles',
        trainingOnlyTitle: 'Crypto Training',
        trainingOnlyPrice: '€249.99',
        trainingOnlyDescription: 'Complete training to understand and master cryptocurrencies',
        trainingSignalsTitle: 'Training + Signals',
        trainingSignalsPrice: '€349.99',
        trainingSignalsDescription: 'Complete training + real-time trading signals',
        getStarted: 'Get started now',
        faq: 'Frequently Asked Questions',
        faqSubtitle: 'Everything you need to know about our services',
        question1: 'How does crypto training work?',
        answer1: 'Our training is structured in progressive modules, from blockchain basics to advanced investment strategies.',
        question2: 'What are trading signals?',
        answer2: 'Signals are buy/sell recommendations based on our technical and fundamental analysis of crypto markets.',
        question3: 'Can I cancel my subscription?',
        answer3: 'Yes, you can cancel your subscription at any time from your dashboard.',
        question4: 'Is there customer support?',
        answer4: 'Yes, we offer premium support to all our subscribers via chat, email and phone.',
        question5: 'Are signals guaranteed?',
        answer5: 'Signals are based on our expertise, but crypto markets are volatile. We cannot guarantee results.',
        allFeatures: 'All features',
        feature1: 'Complete cryptocurrency training',
        feature2: 'Interactive learning modules',
        feature3: 'Weekly market analysis',
        feature4: 'Chat and email support',
        feature5: 'Certificate of completion',
        feature6: 'Private community',
        feature7: 'Real-time trading signals',
        feature8: 'Mobile and desktop alerts',
        feature9: 'Detailed technical analysis',
        feature10: 'Priority phone support'
      },
      // Settings page
      settingsPage: {
        title: 'Account Settings',
        personalInfo: 'Personal Information',
        personalInfoDesc: 'Manage your personal information and preferences',
        firstName: 'First name',
        lastName: 'Last name',
        email: 'Email address',
        phone: 'Phone',
        language: 'Language',
        french: 'French',
        english: 'English',
        subscriptionInfo: 'Subscription Information',
        subscriptionInfoDesc: 'Manage your subscription and billing',
        currentPlan: 'Current plan',
        nextBilling: 'Next billing',
        amount: 'Amount',
        status: 'Status',
        active: 'Active',
        inactive: 'Inactive',
        manageBilling: 'Manage billing',
        cancelSubscription: 'Cancel subscription',
        security: 'Security',
        securityDesc: 'Your account security settings',
        changePassword: 'Change password',
        currentPassword: 'Current password',
        newPassword: 'New password',
        confirmNewPassword: 'Confirm new password',
        updatePassword: 'Update password',
        twoFactorAuth: 'Two-factor authentication',
        enableTwoFactor: 'Enable two-factor authentication',
        notifications: 'Notifications',
        notificationsDesc: 'Manage your notification preferences',
        emailNotifications: 'Email notifications',
        tradingSignals: 'Trading signals',
        marketUpdates: 'Market updates',
        educationalContent: 'Educational content',
        accountUpdates: 'Account updates',
        pushNotifications: 'Push notifications',
        enablePush: 'Enable push notifications',
        privacy: 'Privacy',
        privacyDesc: 'Control your account privacy',
        profileVisibility: 'Profile visibility',
        dataSharing: 'Data sharing',
        allowDataSharing: 'Allow anonymous usage data sharing',
        deleteAccount: 'Delete account',
        dangerZone: 'Danger zone',
        dangerZoneDesc: 'Irreversible actions concerning your account',
        deleteAccountWarning: 'This action is irreversible. All your data will be permanently deleted.',
        deleteAccountButton: 'Permanently delete my account',
        save: 'Save',
        cancel: 'Cancel',
        saved: 'Saved',
        saving: 'Saving...',
        error: 'Error',
        success: 'Success',
        updateSuccess: 'Settings updated successfully',
        updateError: 'Error updating settings',
        passwordUpdateSuccess: 'Password updated successfully',
        passwordUpdateError: 'Error updating password',
        validationRequired: 'This field is required',
        validationEmail: 'Invalid email address',
        validationPassword: 'Password must contain at least 8 characters',
        validationPasswordMatch: 'Passwords do not match',
        confirmDeleteTitle: 'Confirm deletion',
        confirmDeleteMessage: 'Are you sure you want to delete your account? This action is irreversible.',
        confirmDelete: 'Yes, delete my account',
        close: 'Close'
      },
      // Hero section
      hero: {
        title: 'Crypto Trading Expert &',
        titleHighlight: 'Investment Training',
        subtitle: 'Optimize your cryptocurrency investments with our expert analysis and personalized support',
        discoverSolutions: 'Discover Our Solutions',
        tradingTraining: 'Trading Training'
      },
      // Footer
      footer: {
        assistance: 'Support',
        values: 'Our values',
        faq: 'FAQ',
        privacy: 'Privacy',
        privacyPolicy: 'Privacy Policy',
        terms: 'Terms of use',
        termsOfService: 'Terms of Service',
        companyPolicy: 'Company Policy',
        articles: 'Articles',
        dictionary: 'Dictionary',
        copyright: 'Copyright © {year} Alyah Knowledge Investment. All rights reserved.'
      },
      supportPage: {
        seo: {
          title: 'Support',
          description: "Contact the Alyah Knowledge team for any questions or assistance. We're here to help."
        },
        header: {
          title: 'Support',
          subtitle: "Our team is here to help. Fill out the form below and we'll respond as soon as possible."
        },
        form: {
          labels: {
            name: 'Full name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message'
          },
          placeholders: {
            name: 'Your name',
            email: 'your@email.com',
            subject: 'The subject of your message',
            message: 'Describe your request in detail...'
          },
          emailSubjectPrefix: 'New Alyah support request'
        },
        buttons: {
          submit: 'Send message',
          sending: 'Sending...'
        },
        messages: {
          success: 'Your message has been sent successfully. We will respond as soon as possible.',
          error: 'An error occurred while sending the message. Please try again later.'
        }
      },
      notFoundPage: {
        seo: {
          title: 'Page not found - Alyah Knowledge',
          description: 'The page you are looking for does not exist. Explore our crypto resources and training.'
        },
        header: {
          title: 'Page not found',
          subtitle: 'The page you are looking for does not exist or has been moved.'
        },
        buttons: {
          home: 'Home',
          dictionary: 'Dictionary',
          articles: 'Articles'
        },
        content: {
          popularResources: 'Popular resources',
          link1: '→ Complete crypto training',
          link2: '→ Real-time market',
          link3: '→ What is Bitcoin?',
          link4: '→ Trading signals'
        }
      },
      errorBoundary: {
        header: {
          title: 'Loading error',
          subtitle: 'An error occurred while loading the application.'
        },
        buttons: {
          reload: 'Reload page'
        },
        content: {
          devDetails: 'Error details (dev only)'
        }
      },
      errors: {
        network: 'Network error. Please check your connection.',
        unknown: 'An unknown error occurred.',
        unauthorized: 'You must be logged in to access this page.',
        forbidden: 'You do not have permission to access this resource.',
        notFound: 'The requested resource was not found.',
        serverError: 'Internal server error. Please try again later.',
        timeout: 'The request timed out. Please try again.',
        invalidInput: 'Invalid input.',
        emailInUse: 'This email address is already in use.',
        weakPassword: 'Password is too weak.',
        tooManyRequests: 'Too many attempts. Please try again later.',
        maintenance: 'The service is currently under maintenance.',
        paymentFailed: 'Payment failed.',
        formIncomplete: 'Please complete all required fields.',
        subscriptionRequired: 'An active subscription is required.'
      },
      quizQuestions: {
    question1: {
      question: "Quelle est la principale caractéristique de la blockchain qui la différencie des bases de données traditionnelles ?",
      options: {
        a: "Elle est centralisée et contrôlée par une entité unique",
        b: "Elle est décentralisée et immuable",
        c: "Elle nécessite un serveur pour stocker les transactions",
        d: "Elle ne peut enregistrer que des transactions financières"
      },
      correctAnswer: "b",
      explanation: "La blockchain est un registre distribué où les transactions sont immuables et validées par un réseau décentralisé."
    },
    question2: {
      question: "Quel est le rôle du mécanisme de consensus dans la blockchain ?",
      options: {
        a: "Assurer que toutes les transactions soient validées de manière sécurisée",
        b: "Augmenter la vitesse des transactions sans vérification",
        c: "Permettre uniquement aux banques de valider les transactions",
        d: "Effacer les transactions en cas d'erreur"
      },
      correctAnswer: "a",
      explanation: "Le consensus permet de garantir la sécurité et la validité des transactions sans autorité centrale."
    },
    question3: {
      question: "Quelle affirmation est correcte concernant la relation entre la blockchain et le Bitcoin ?",
      options: {
        a: "Le Bitcoin est une technologie qui a permis de créer la blockchain",
        b: "La blockchain est un protocole utilisé exclusivement par le Bitcoin",
        c: "Le Bitcoin est une application utilisant la technologie blockchain",
        d: "La blockchain ne peut être utilisée que pour des paiements numériques"
      },
      correctAnswer: "c",
      explanation: "La blockchain est la technologie sous-jacente qui permet à Bitcoin et de nombreuses autres applications d'exister."
    },
    question4: {
      question: "Quel est l'avantage principal de la décentralisation dans la blockchain ?",
      options: {
        a: "Réduction des coûts de transaction uniquement",
        b: "Élimination du besoin d'internet",
        c: "Suppression des points de défaillance uniques",
        d: "Accélération automatique des transactions"
      },
      correctAnswer: "c",
      explanation: "La décentralisation élimine les points de défaillance uniques en distribuant le contrôle sur plusieurs nœuds."
    },
    question5: {
      question: "Qu'est-ce qu'un nœud dans un réseau blockchain ?",
      options: {
        a: "Un serveur central qui contrôle toutes les transactions",
        b: "Un ordinateur qui maintient une copie de la blockchain",
        c: "Un algorithme de chiffrement",
        d: "Une transaction individuelle"
      },
      correctAnswer: "b",
      explanation: "Un nœud est un ordinateur participant au réseau qui maintient une copie de la blockchain et valide les transactions."
    },
    question6: {
      question: "Comment la décentralisation affecte-t-elle la confiance dans le système ?",
      options: {
        a: "Elle nécessite plus de confiance envers les autorités",
        b: "Elle élimine complètement le besoin de confiance",
        c: "Elle remplace la confiance en des tiers par la confiance en des algorithmes",
        d: "Elle n'a aucun impact sur la confiance"
      },
      correctAnswer: "c",
      explanation: "La décentralisation remplace la confiance en des institutions centrales par la confiance en des protocoles cryptographiques et des algorithmes de consensus."
    },
    question7: {
      question: "Quel rôle joue la fonction de hachage dans la blockchain ?",
      options: {
        a: "Créer des mots de passe pour les utilisateurs",
        b: "Générer une empreinte unique pour chaque bloc",
        c: "Chiffrer les transactions pour les rendre illisibles",
        d: "Créer de nouveaux bitcoins"
      },
      correctAnswer: "b",
      explanation: "Les fonctions de hachage créent une empreinte numérique unique pour chaque bloc, garantissant l'intégrité de la chaîne."
    },
    question8: {
      question: "Qu'est-ce que la cryptographie asymétrique dans le contexte blockchain ?",
      options: {
        a: "Un système utilisant une seule clé pour chiffrer et déchiffrer",
        b: "Un système utilisant une paire de clés : publique et privée",
        c: "Un système qui ne nécessite aucune clé",
        d: "Un système réservé aux mineurs"
      },
      correctAnswer: "b",
      explanation: "La cryptographie asymétrique utilise une paire de clés : la clé publique pour recevoir des fonds et la clé privée pour les dépenser."
    },
    question9: {
      question: "Pourquoi est-il crucial de garder sa clé privée secrète ?",
      options: {
        a: "Pour accélérer les transactions",
        b: "Pour réduire les frais de transaction",
        c: "Pour maintenir le contrôle exclusif sur ses cryptomonnaies",
        d: "Pour améliorer la vitesse du réseau"
      },
      correctAnswer: "c",
      explanation: "La clé privée donne un contrôle total sur les fonds associés. Quiconque la possède peut dépenser les cryptomonnaies."
    },
    question10: {
      question: "Quelle est la principale différence entre une blockchain publique et privée ?",
      options: {
        a: "La blockchain publique est plus rapide",
        b: "La blockchain publique est accessible à tous, la privée est restreinte",
        c: "La blockchain privée utilise plus d'énergie",
        d: "Il n'y a aucune différence technique"
      },
      correctAnswer: "b",
      explanation: "Les blockchains publiques sont ouvertes à tous, tandis que les privées restreignent l'accès à certains participants autorisés."
    },
    question11: {
      question: "Qu'est-ce qu'une blockchain hybride ?",
      options: {
        a: "Une blockchain qui utilise deux cryptomonnaies",
        b: "Une combinaison d'éléments publics et privés",
        c: "Une blockchain qui fonctionne uniquement hors ligne",
        d: "Une blockchain sans mécanisme de consensus"
      },
      correctAnswer: "b",
      explanation: "Une blockchain hybride combine des caractéristiques des blockchains publiques et privées selon les besoins."
    },
    question12: {
      question: "Quel type de blockchain convient le mieux aux entreprises pour des applications internes ?",
      options: {
        a: "Blockchain publique",
        b: "Blockchain privée ou consortium",
        c: "Blockchain hybride uniquement",
        d: "Aucune blockchain n'est adaptée"
      },
      correctAnswer: "b",
      explanation: "Les blockchains privées ou de consortium offrent plus de contrôle et de confidentialité pour les applications d'entreprise."
    },
    question13: {
      question: "Qui est considéré comme le créateur de Bitcoin ?",
      options: {
        a: "Vitalik Buterin",
        b: "Satoshi Nakamoto",
        c: "Charlie Lee",
        d: "Gavin Andresen"
      },
      correctAnswer: "b",
      explanation: "Satoshi Nakamoto est le pseudonyme utilisé par le créateur ou groupe de créateurs de Bitcoin."
    },
    question14: {
      question: "En quelle année le premier bloc Bitcoin (bloc Genesis) a-t-il été miné ?",
      options: {
        a: "2008",
        b: "2009",
        c: "2010",
        d: "2011"
      },
      correctAnswer: "b",
      explanation: "Le bloc Genesis de Bitcoin a été miné le 3 janvier 2009, marquant le début du réseau Bitcoin."
    },
    question15: {
      question: "Quel était l'objectif principal de Bitcoin selon le livre blanc original ?",
      options: {
        a: "Remplacer complètement les banques",
        b: "Créer un système de paiement électronique peer-to-peer",
        c: "Permettre le trading haute fréquence",
        d: "Faciliter les contrats intelligents"
      },
      correctAnswer: "b",
      explanation: "Le livre blanc de Bitcoin décrit un système de paiement électronique peer-to-peer sans intermédiaire de confiance."
    },
    question16: {
      question: "Quelle est la principale innovation d'Ethereum par rapport à Bitcoin ?",
      options: {
        a: "Des transactions plus rapides",
        b: "Les contrats intelligents (smart contracts)",
        c: "Des frais plus bas",
        d: "Une meilleure sécurité"
      },
      correctAnswer: "b",
      explanation: "Ethereum a introduit les smart contracts, permettant d'exécuter du code programmable sur la blockchain."
    },
    question17: {
      question: "Qu'est-ce que l'EVM (Ethereum Virtual Machine) ?",
      options: {
        a: "Un portefeuille Ethereum",
        b: "L'environnement d'exécution des smart contracts",
        c: "Un type de cryptomonnaie",
        d: "Un algorithme de minage"
      },
      correctAnswer: "b",
      explanation: "L'EVM est la machine virtuelle qui exécute les smart contracts sur le réseau Ethereum."
    },
    question18: {
      question: "Qu'est-ce que le 'gas' dans Ethereum ?",
      options: {
        a: "Un type de token",
        b: "L'unité de mesure du coût de calcul",
        c: "Un algorithme de consensus",
        d: "Un portefeuille spécialisé"
      },
      correctAnswer: "b",
      explanation: "Le gas mesure la quantité de travail computationnel nécessaire pour exécuter des opérations sur Ethereum."
    },
    question19: {
      question: "Quelle est la différence entre un coin et un token ?",
      options: {
        a: "Il n'y a aucune différence",
        b: "Un coin a sa propre blockchain, un token utilise une blockchain existante",
        c: "Un token est toujours plus cher qu'un coin",
        d: "Un coin ne peut pas être échangé"
      },
      correctAnswer: "b",
      explanation: "Les coins ont leur propre blockchain (Bitcoin, Ethereum), tandis que les tokens sont construits sur des blockchains existantes."
    },
    question20: {
      question: "Qu'est-ce qu'un token utilitaire ?",
      options: {
        a: "Un token qui donne droit à des dividendes",
        b: "Un token qui représente un actif physique",
        c: "Un token qui donne accès à un produit ou service",
        d: "Un token sans utilité particulière"
      },
      correctAnswer: "c",
      explanation: "Les tokens utilitaires donnent accès à des produits ou services spécifiques au sein d'un écosystème."
    },
    question21: {
      question: "Que représente un token non fongible (NFT) ?",
      options: {
        a: "Un actif numérique unique et non interchangeable",
        b: "Une cryptomonnaie comme Bitcoin",
        c: "Un token divisible en parties égales",
        d: "Un contrat d'assurance"
      },
      correctAnswer: "a",
      explanation: "Les NFT représentent des actifs numériques uniques qui ne peuvent pas être remplacés par un autre identique."
    },
    question22: {
      question: "Quelle est la différence principale entre un wallet chaud et un wallet froid ?",
      options: {
        a: "La température de fonctionnement",
        b: "La connexion à internet",
        c: "Le type de cryptomonnaie supporté",
        d: "La vitesse de transaction"
      },
      correctAnswer: "b",
      explanation: "Les wallets chauds sont connectés à internet, les wallets froids sont hors ligne pour plus de sécurité."
    },
    question23: {
      question: "Qu'est-ce qu'une phrase de récupération (seed phrase) ?",
      options: {
        a: "Le mot de passe du wallet",
        b: "Une série de mots permettant de restaurer un wallet",
        c: "L'adresse publique du wallet",
        d: "Le nom d'utilisateur du wallet"
      },
      correctAnswer: "b",
      explanation: "La seed phrase est une série de mots (généralement 12 ou 24) qui permet de restaurer complètement un wallet."
    },
    question24: {
      question: "Quel type de wallet offre la meilleure sécurité pour le stockage long terme ?",
      options: {
        a: "Wallet en ligne",
        b: "Application mobile",
        c: "Hardware wallet (portefeuille physique)",
        d: "Portefeuille d'exchange"
      },
      correctAnswer: "c",
      explanation: "Les hardware wallets offrent la meilleure sécurité car ils gardent les clés privées hors ligne."
    },
    question25: {
      question: "Qu'est-ce que la moyenne mobile simple (SMA) ?",
      options: {
        a: "Le prix moyen sur une période donnée",
        b: "Le volume moyen des transactions",
        c: "La volatilité moyenne du marché",
        d: "Le nombre moyen de traders"
      },
      correctAnswer: "a",
      explanation: "La SMA calcule la moyenne arithmétique des prix de clôture sur une période déterminée."
    },
    question26: {
      question: "Que mesure l'indicateur RSI (Relative Strength Index) ?",
      options: {
        a: "La force relative d'une cryptomonnaie par rapport à Bitcoin",
        b: "La vitesse et l'ampleur des changements de prix",
        c: "Le volume des transactions",
        d: "La capitalisation boursière"
      },
      correctAnswer: "b",
      explanation: "Le RSI mesure la vitesse et l'ampleur des changements de prix pour identifier les conditions de surachat ou survente."
    },
    question27: {
      question: "Que signifie un RSI supérieur à 70 ?",
      options: {
        a: "L'actif est sous-évalué",
        b: "L'actif est en situation de survente",
        c: "L'actif est potentiellement en situation de surachat",
        d: "L'actif va certainement monter"
      },
      correctAnswer: "c",
      explanation: "Un RSI > 70 suggère généralement une situation de surachat, indiquant une possible correction à la baisse."
    },
    question28: {
      question: "Qu'est-ce qu'un chandelier japonais (candlestick) ?",
      options: {
        a: "Un type de wallet",
        b: "Une représentation graphique des prix (ouverture, fermeture, haut, bas)",
        c: "Un indicateur technique",
        d: "Une stratégie de trading"
      },
      correctAnswer: "b",
      explanation: "Un chandelier japonais affiche l'ouverture, la fermeture, le plus haut et le plus bas d'une période donnée."
    },
    question29: {
      question: "Que représente une bougie verte/blanche dans un graphique ?",
      options: {
        a: "Le prix de clôture est inférieur au prix d'ouverture",
        b: "Le prix de clôture est supérieur au prix d'ouverture",
        c: "Le volume est en hausse",
        d: "Il n'y a eu aucune transaction"
      },
      correctAnswer: "b",
      explanation: "Une bougie verte/blanche indique que le prix de clôture est supérieur au prix d'ouverture (hausse)."
    },
    question30: {
      question: "Qu'est-ce qu'un niveau de support ?",
      options: {
        a: "Un niveau où le prix a tendance à rebondir vers le haut",
        b: "Un niveau où le prix a tendance à chuter",
        c: "Le prix moyen sur 24h",
        d: "Le volume minimum de transaction"
      },
      correctAnswer: "a",
      explanation: "Un support est un niveau de prix où la demande est suffisamment forte pour empêcher une baisse supplémentaire."
    },
    question31: {
      question: "Qu'est-ce qu'un pattern 'Tête et Épaules' ?",
      options: {
        a: "Un pattern de continuation haussier",
        b: "Un pattern de retournement baissier",
        c: "Un indicateur de volume",
        d: "Une stratégie de DCA"
      },
      correctAnswer: "b",
      explanation: "Le pattern tête et épaules est généralement un signal de retournement baissier après une tendance haussière."
    },
    question32: {
      question: "Que signifie un pattern de 'Double Bottom' ?",
      options: {
        a: "Signal de retournement haussier potentiel",
        b: "Signal de continuation baissière",
        c: "Indication de volatilité élevée",
        d: "Pattern de consolidation"
      },
      correctAnswer: "a",
      explanation: "Un double bottom suggère généralement une fin de tendance baissière et un possible retournement haussier."
    },
    question33: {
      question: "Qu'est-ce qu'un triangle ascendant ?",
      options: {
        a: "Un pattern généralement haussier avec résistance horizontale et support ascendant",
        b: "Un pattern toujours baissier",
        c: "Un indicateur de volume",
        d: "Une stratégie de diversification"
      },
      correctAnswer: "a",
      explanation: "Le triangle ascendant combine une résistance horizontale avec des creux de plus en plus hauts, suggérant une pression acheteuse."
    },
    question34: {
      question: "Qu'est-ce que la règle des 2% en gestion du risque ?",
      options: {
        a: "Investir seulement 2% de ses revenus",
        b: "Ne jamais risquer plus de 2% de son capital par trade",
        c: "Prendre des profits à 2% de gain",
        d: "Trader seulement 2% du temps"
      },
      correctAnswer: "b",
      explanation: "La règle des 2% stipule de ne jamais risquer plus de 2% de son capital total sur un seul trade."
    },
    question35: {
      question: "Qu'est-ce qu'un stop-loss ?",
      options: {
        a: "Un ordre pour prendre des profits",
        b: "Un ordre pour limiter les pertes",
        c: "Une stratégie d'achat",
        d: "Un indicateur technique"
      },
      correctAnswer: "b",
      explanation: "Un stop-loss est un ordre de vente automatique qui se déclenche quand le prix atteint un niveau prédéfini pour limiter les pertes."
    },
    question36: {
      question: "Pourquoi la diversification est-elle importante ?",
      options: {
        a: "Pour augmenter les profits",
        b: "Pour réduire le risque global du portefeuille",
        c: "Pour simplifier la gestion",
        d: "Pour éviter les taxes"
      },
      correctAnswer: "b",
      explanation: "La diversification répartit le risque sur plusieurs actifs, réduisant l'impact d'une mauvaise performance d'un seul actif."
    },
    question37: {
      question: "Que signifie DeFi ?",
      options: {
        a: "Decentralized Finance (Finance Décentralisée)",
        b: "Digital Finance",
        c: "Direct Finance",
        d: "Default Finance"
      },
      correctAnswer: "a",
      explanation: "DeFi signifie 'Decentralized Finance', désignant les services financiers construits sur blockchain sans intermédiaires centralisés."
    },
    question38: {
      question: "Qu'est-ce qu'un AMM (Automated Market Maker) ?",
      options: {
        a: "Un trader automatique",
        b: "Un protocole permettant l'échange automatique de tokens via des pools de liquidité",
        c: "Un algorithme de minage",
        d: "Un type de wallet"
      },
      correctAnswer: "b",
      explanation: "Un AMM utilise des algorithmes et des pools de liquidité pour permettre l'échange de tokens sans carnet d'ordres traditionnel."
    },
    question39: {
      question: "Qu'est-ce que l'impermanent loss ?",
      options: {
        a: "La perte définitive de tokens",
        b: "La différence de valeur entre détenir des tokens et les mettre dans un pool de liquidité",
        c: "Les frais de transaction",
        d: "La volatilité du marché"
      },
      correctAnswer: "b",
      explanation: "L'impermanent loss est la perte temporaire subie par les fournisseurs de liquidité due aux variations de prix des actifs dans le pool."
    },
    question40: {
      question: "Qu'est-ce que le yield farming ?",
      options: {
        a: "L'agriculture de cryptomonnaies",
        b: "La stratégie de maximiser les rendements en prêtant ou stakant des cryptos",
        c: "L'achat et vente rapide de tokens",
        d: "La création de nouveaux tokens"
      },
      correctAnswer: "b",
      explanation: "Le yield farming consiste à optimiser les rendements en déployant des cryptomonnaies dans différents protocoles DeFi."
    },
    question41: {
      question: "Qu'est-ce que l'APY dans le contexte DeFi ?",
      options: {
        a: "Annual Percentage Yield (Rendement Annuel en Pourcentage)",
        b: "Average Price Yearly",
        c: "Automated Protocol Yield",
        d: "Asset Protection Yield"
      },
      correctAnswer: "a",
      explanation: "L'APY indique le rendement annuel d'un investissement en tenant compte de la composition des intérêts."
    },
    question42: {
      question: "Quel est le principal risque du yield farming ?",
      options: {
        a: "Les frais de transaction élevés",
        b: "Les risques de smart contracts et d'impermanent loss",
        c: "La lenteur des transactions",
        d: "L'absence de régulation"
      },
      correctAnswer: "b",
      explanation: "Les principaux risques incluent les bugs de smart contracts, l'impermanent loss et les risques de plateforme."
    },
    question43: {
      question: "Qu'est-ce qu'un pool de liquidité ?",
      options: {
        a: "Un portefeuille de cryptomonnaies",
        b: "Une réserve de tokens permettant les échanges décentralisés",
        c: "Un groupe de mineurs",
        d: "Un type de smart contract pour le staking"
      },
      correctAnswer: "b",
      explanation: "Un pool de liquidité est une réserve de tokens verrouillés dans un smart contract pour faciliter les échanges décentralisés."
    },
    question44: {
      question: "Comment les fournisseurs de liquidité sont-ils rémunérés ?",
      options: {
        a: "Par des frais de transaction et parfois des tokens de gouvernance",
        b: "Uniquement par l'appréciation du prix des tokens",
        c: "Par des intérêts fixes",
        d: "Ils ne sont pas rémunérés"
      },
      correctAnswer: "a",
      explanation: "Les LP reçoivent une part des frais de trading et parfois des récompenses additionnelles en tokens du protocole."
    },
    question45: {
      question: "Qu'est-ce qu'un LP token ?",
      options: {
        a: "Un token de gouvernance",
        b: "Un token représentant la part d'un utilisateur dans un pool de liquidité",
        c: "Un token stable",
        d: "Un token de récompense"
      },
      correctAnswer: "b",
      explanation: "Les LP tokens représentent la propriété proportionnelle d'un utilisateur dans un pool de liquidité spécifique."
    },
    question46: {
      question: "Qu'est-ce qu'un stablecoin ?",
      options: {
        a: "Une cryptomonnaie conçue pour maintenir une valeur stable",
        b: "Une cryptomonnaie très volatile",
        c: "Un token de gouvernance",
        d: "Une cryptomonnaie minée par preuve de travail"
      },
      correctAnswer: "a",
      explanation: "Les stablecoins sont des cryptomonnaies conçues pour maintenir une valeur stable, souvent indexées sur des devises fiat."
    },
    question47: {
      question: "Quels sont les différents types de stablecoins ?",
      options: {
        a: "Uniquement adossés à des devises fiat",
        b: "Fiat-collateralized, crypto-collateralized, et algorithmiques",
        c: "Seulement algorithmiques",
        d: "Uniquement adossés à l'or"
      },
      correctAnswer: "b",
      explanation: "Il existe trois types principaux : adossés au fiat, adossés aux cryptos, et les stablecoins algorithmiques."
    },
    question48: {
      question: "Quel est l'avantage principal des stablecoins en DeFi ?",
      options: {
        a: "Ils génèrent plus de profits",
        b: "Ils offrent une stabilité de valeur pour les stratégies DeFi",
        c: "Ils sont exempts de frais",
        d: "Ils sont plus rapides à transférer"
      },
      correctAnswer: "b",
      explanation: "Les stablecoins permettent de participer à la DeFi sans s'exposer à la volatilité des autres cryptomonnaies."
    },
    question49: {
      question: "Quelle est la meilleure pratique pour sécuriser sa seed phrase ?",
      options: {
        a: "La stocker dans un fichier texte sur l'ordinateur",
        b: "La noter sur papier et la conserver en lieu sûr, hors ligne",
        c: "La partager avec un proche de confiance",
        d: "La stocker dans le cloud"
      },
      correctAnswer: "b",
      explanation: "La seed phrase doit être notée sur support physique et conservée hors ligne, jamais sur des appareils connectés."
    },
    question50: {
      question: "Qu'est-ce que l'authentification à deux facteurs (2FA) ?",
      options: {
        a: "Un système utilisant deux mots de passe",
        b: "Une méthode ajoutant une couche de sécurité supplémentaire",
        c: "Un type de cryptage",
        d: "Une fonction de backup automatique"
      },
      correctAnswer: "b",
      explanation: "La 2FA ajoute une couche de sécurité en nécessitant deux méthodes d'authentification différentes."
    },
    question51: {
      question: "Pourquoi éviter de laisser ses cryptos sur un exchange ?",
      options: {
        a: "Les frais sont plus élevés",
        b: "Les transactions sont plus lentes",
        c: "On ne contrôle pas ses clés privées",
        d: "C'est illégal"
      },
      correctAnswer: "c",
      explanation: "Sur un exchange, vous ne possédez pas vos clés privées. En cas de problème avec l'exchange, vous pourriez perdre vos fonds."
    },
    question52: {
      question: "Qu'est-ce qu'un rug pull ?",
      options: {
        a: "Une technique de trading",
        b: "Quand les développeurs abandonnent soudainement un projet avec les fonds",
        c: "Un type de wallet",
        d: "Une stratégie DeFi"
      },
      correctAnswer: "b",
      explanation: "Un rug pull survient quand les créateurs d'un projet crypto disparaissent avec les fonds des investisseurs."
    },
    question53: {
      question: "Comment identifier un potentiel schéma de Ponzi crypto ?",
      options: {
        a: "Promesses de rendements très élevés et garantis",
        b: "Technologie blockchain innovante",
        c: "Équipe de développement expérimentée",
        d: "Partenariats avec de grandes entreprises"
      },
      correctAnswer: "a",
      explanation: "Les schémas de Ponzi promettent souvent des rendements irréalistes et garantis sans risque apparent."
    },
    question54: {
      question: "Qu'est-ce que le phishing dans le contexte crypto ?",
      options: {
        a: "Une technique de minage",
        b: "Des tentatives frauduleuses d'obtenir vos clés privées ou mots de passe",
        c: "Un type de token",
        d: "Une stratégie de trading"
      },
      correctAnswer: "b",
      explanation: "Le phishing consiste à tromper les utilisateurs pour qu'ils révèlent leurs informations sensibles comme les clés privées."
    },
    question55: {
      question: "Qu'est-ce que la stratégie DCA (Dollar Cost Averaging) ?",
      options: {
        a: "Acheter tout en une fois au plus bas",
        b: "Investir une somme fixe régulièrement indépendamment du prix",
        c: "Vendre quand le prix monte",
        d: "Trader activement pour maximiser les profits"
      },
      correctAnswer: "b",
      explanation: "Le DCA consiste à investir un montant fixe à intervalles réguliers, lissant l'impact de la volatilité sur le long terme."
    },
    question56: {
      question: "Qu'est-ce que le rebalancing de portfolio ?",
      options: {
        a: "Vendre tous ses actifs",
        b: "Ajuster les proportions des actifs pour maintenir l'allocation cible",
        c: "Acheter uniquement de nouveaux actifs",
        d: "Ignorer les changements de prix"
      },
      correctAnswer: "b",
      explanation: "Le rebalancing consiste à réajuster les proportions des actifs dans le portfolio pour maintenir l'allocation souhaitée."
    },
    question57: {
      question: "Quelle est une bonne pratique pour la répartition d'un portfolio crypto ?",
      options: {
        a: "Investir tout dans Bitcoin",
        b: "Diversifier entre différentes cryptos et classes d'actifs",
        c: "Se concentrer uniquement sur les altcoins",
        d: "Changer complètement d'allocation chaque semaine"
      },
      correctAnswer: "b",
      explanation: "La diversification réduit le risque en répartissant les investissements sur différents actifs et secteurs."
    },
    question58: {
      question: "Qu'est-ce que le trading sur marge ?",
      options: {
        a: "Trader uniquement avec son propre capital",
        b: "Emprunter des fonds pour augmenter sa position de trading",
        c: "Trader uniquement des stablecoins",
        d: "Une stratégie de long terme"
      },
      correctAnswer: "b",
      explanation: "Le trading sur marge permet d'emprunter des fonds pour augmenter la taille de ses positions, amplifiant les gains et les pertes."
    },
    question59: {
      question: "Qu'est-ce que l'effet de levier 10x ?",
      options: {
        a: "Gagner 10 fois plus d'argent",
        b: "Multiplier sa position par 10 avec du capital emprunté",
        c: "Trader 10 cryptomonnaies différentes",
        d: "Attendre 10 jours avant de vendre"
      },
      correctAnswer: "b",
      explanation: "Un levier 10x signifie que pour 1€ de capital, vous pouvez prendre une position de 10€, multipliant gains et pertes par 10."
    },
    question60: {
      question: "Qu'est-ce que le scalping en trading ?",
      options: {
        a: "Une stratégie de trading à très court terme pour de petits profits fréquents",
        b: "Acheter et garder pendant des années",
        c: "Trader uniquement les week-ends",
        d: "Une technique d'analyse fondamentale"
      },
      correctAnswer: "a",
      explanation: "Le scalping consiste à effectuer de nombreux trades rapides pour capturer de petits mouvements de prix."
    }
  }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
