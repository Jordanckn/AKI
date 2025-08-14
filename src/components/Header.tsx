import React, { useState, useEffect } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';
import AuthButton from './AuthButton';
import { supabase } from '../lib/supabaseClient';
import SubscriptionStatus from './SubscriptionStatus';

interface HeaderProps {
  onAuthClick: () => void;
}

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Nos solutions',
    href: '#',
    submenu: [
      {
        name: 'Formation seule',
        description: 'Accès complet à la formation crypto',
        price: '249,99€/mois',
        href: '/solutions/formation-cryptomonnaie/tarification',
        popular: false
      },
      {
        name: 'Formation + Signaux',
        description: 'Formation complète et signaux de trading',
        price: '349,99€/mois',
        popular: true,
        href: '/solutions/formation-cryptomonnaie/tarification'
      }
    ]
  },
  {
    name: 'Signaux Trading',
    href: '/signaux-trading'
  },
  {
    name: 'Formation',
    href: '/comprendre-les-cryptomonnaies',
    submenu: [
      {
        name: 'Comprendre la crypto',
        description: 'Guide complet sur la blockchain et les cryptomonnaies',
        href: '/formation/comprendre-la-crypto'
      },
      {
        name: 'Marché en temps réel',
        description: 'Suivez les cours des cryptomonnaies en direct',
        href: '/marche-cryptomonnaies-temps-reel'
      },
      {
        name: 'Articles',
        description: 'Nos derniers articles et analyses',
        href: '/articles'
      },
      {
        name: 'Dictionnaire crypto',
        description: 'Définitions des termes crypto essentiels',
        href: '/dictionnaire-crypto'
      }
    ]
  },
  { name: 'À propos', href: '/about' },
  { name: 'Prendre rendez-vous', href: '/appointment' },
];

const searchableItems = [
  { title: 'Formation seule - 249,99€/mois', path: '/solutions/formation-cryptomonnaie/tarification', keywords: ['abonnement', 'mensuel', '249', 'formation'] },
  { title: 'Formation + Signaux - 349,99€/mois', path: '/solutions/formation-cryptomonnaie/tarification', keywords: ['abonnement', 'signaux', '349', 'populaire'] },
  { title: 'Signaux Trading', path: '/signaux-trading', keywords: ['signaux', 'trading', 'automatique', 'webhook'] },
  { title: 'Marché en temps réel', path: '/marche-cryptomonnaies-temps-reel', keywords: ['marche', 'prix', 'cours', 'crypto', 'bitcoin', 'ethereum'] },
  { title: 'Comprendre la crypto', path: '/formation/comprendre-la-crypto', keywords: ['comprendre', 'crypto', 'blockchain', 'education'] },
  { title: 'Formation Crypto', path: '/comprendre-les-cryptomonnaies', keywords: ['knowledge', 'apprentissage', 'formation', 'education'] },
  { title: 'Dictionnaire Crypto', path: '/dictionnaire-crypto', keywords: ['dictionnaire', 'lexique', 'glossaire', 'termes', 'définitions'] },
  { title: 'À propos', path: '/about', keywords: ['about', 'propos', 'entreprise', 'histoire'] },
  { title: 'Notre équipe', path: '/team', keywords: ['equipe', 'team', 'jordan', 'chekroun'] },
  { title: 'Assistance', path: '/support', keywords: ['support', 'aide', 'contact', 'assistance'] },
  { title: 'Prendre rendez-vous', path: '/appointment', keywords: ['rendez-vous', 'appointment', 'consultation'] },
  { title: 'Tableau de bord', path: '/dashboard', keywords: ['dashboard', 'tableau', 'bord', 'compte', 'profil'] },
];

export default function Header({ onAuthClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState<string | null>(null);
  const [submenuTimeout, setSubmenuTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
  const [knowledgeClicked, setKnowledgeClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState<{
    width: number;
    left: number;
    visible: boolean;
  }>({ width: 0, left: 0, visible: false });
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    
    // Check if user is logged in
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
    };
    
    checkAuth();
    
    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      subscription.unsubscribe();
    };
  }, []);

  // Handle indicator positioning
  const updateIndicator = (element: HTMLElement | null) => {
    if (!element || !navContainerRef.current) {
      setActiveIndicator({ width: 0, left: 0, visible: false });
      return;
    }

    const containerRect = navContainerRef.current.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    
    setActiveIndicator({
      width: elementRect.width,
      left: elementRect.left - containerRect.left,
      visible: true
    });
  };

  const hideIndicator = () => {
    setActiveIndicator(prev => ({ ...prev, visible: false }));
  };

  const getSearchResults = (query: string) => {
    if (!query) return [];
    
    const normalizedQuery = query.toLowerCase().trim();
    
    return searchableItems.filter(item => {
      return item.title.toLowerCase().includes(normalizedQuery) ||
             item.keywords.some(keyword => keyword.includes(normalizedQuery));
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = getSearchResults(searchQuery);
    if (results.length === 1) {
      setSearchQuery('');
      setShowResults(false);
      navigate(results[0].path);
    }
  };

  const handleResultClick = (path: string) => {
    setSearchQuery('');
    setShowResults(false);
    navigate(path);
  };

  const handleSearchFocus = () => {
    if (searchQuery) {
      setShowResults(true);
    }
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setShowResults(false);
    }, 200);
  };

  const handleSubmenuClick = (path: string) => {
    const [basePath, hash] = path.split('#');
    navigate(path);
    setShowSubmenu(null);
    setIsOpen(false);

    if (location.pathname === basePath && hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleMouseEnter = (name: string) => {
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
      setSubmenuTimeout(null);
    }
    setShowSubmenu(name);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowSubmenu(null);
    }, 300);
    setSubmenuTimeout(timeout);
  };

  const handleKnowledgeClick = (item: any, e: React.MouseEvent) => {
    // If user is not authenticated or doesn't have access, show modal
    if (isMobile && item.submenu) {
      e.preventDefault();
      if (!knowledgeClicked) {
        setKnowledgeClicked(true);
        setShowSubmenu(showSubmenu === item.name ? null : item.name);
      } else {
        navigate(item.href);
        setIsOpen(false);
        setKnowledgeClicked(false);
        setShowSubmenu(null);
      }
    } else {
      if (item.submenu) {
        setShowSubmenu(showSubmenu === item.name ? null : item.name);
      }
      navigate(item.href);
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center transform hover:scale-105 transition-transform">
              <Logo />
            </Link>
          </div>

          {/* Subscription Status - Only show for authenticated users */}
          <div className="hidden xl:block">
            <SubscriptionStatus compact={true} />
          </div>

          <div className="hidden xl:flex xl:items-center xl:space-x-4 2xl:space-x-6">
            <div 
              ref={navContainerRef}
              className="nav-container flex items-center space-x-4 2xl:space-x-6"
            >
              {/* Unified indicator */}
              <div 
                className={`nav-indicator ${activeIndicator.visible ? 'active' : ''}`}
                style={{
                  width: `${activeIndicator.width}px`,
                  transform: `translateX(${activeIndicator.left}px)`
                }}
              />
              
              {navigation.map((item) => (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => !isMobile && handleMouseEnter(item.name)}
                  onMouseLeave={!isMobile ? handleMouseLeave : undefined}
                >
                  {item.name === 'Formation' ? (
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium 
                        transition-all duration-300 hover:-translate-y-0.5 relative after:absolute 
                        after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 
                        after:scale-x-0 hover:after:scale-x-100 after:transition-transform
                        flex items-center"
                      onClick={(e) => handleKnowledgeClick(item, e)}
                      onMouseEnter={(e) => updateIndicator(e.currentTarget)}
                      onMouseLeave={hideIndicator}
                    >
                      {item.name}
                      {item.submenu && (
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                  ) : item.submenu ? (
                    <button
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium 
                        transition-all duration-300 hover:-translate-y-0.5 relative after:absolute 
                        after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 
                        after:scale-x-0 hover:after:scale-x-100 after:transition-transform
                        flex items-center"
                      aria-expanded={showSubmenu === item.name}
                      aria-haspopup="true"
                      onMouseEnter={(e) => updateIndicator(e.currentTarget)}
                      onMouseLeave={hideIndicator}
                    >
                      {item.name}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium 
                        transition-all duration-300 hover:-translate-y-0.5 relative after:absolute 
                      onMouseEnter={(e) => updateIndicator(e.currentTarget)}
                      onMouseLeave={hideIndicator}
                        after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 
                        after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {item.submenu && showSubmenu === item.name && (
                    <div
                      className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 
                        overflow-hidden z-50 transform opacity-100 scale-100 transition-all duration-200"
                      onMouseEnter={() => !isMobile && handleMouseEnter(item.name)}
                      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
                      role="menu"
                    >
                      <div className="p-2">
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleSubmenuClick(subItem.href)}
                            className="block w-full px-4 py-3 rounded-lg text-left
                              transition-all duration-200 hover:bg-gray-50/80 
                              hover:translate-x-1 focus:outline-none focus:ring-2 
                              focus:ring-blue-500/20 focus:ring-offset-1"
                            role="menuitem"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <span className="font-medium text-gray-900 block group-hover:text-blue-600
                                  transition-colors duration-200">
                                  {subItem.name}
                                  {subItem.popular && (
                                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs 
                                      font-medium bg-blue-100 text-blue-800">
                                      Populaire
                                    </span>
                                  )}
                                  {subItem.recommended && (
                                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs 
                                      font-medium bg-green-100 text-green-800">
                                      Recommandé
                                    </span>
                                  )}
                                </span>
                                <span className="text-sm text-gray-500 block">{subItem.description}</span>
                              </div>
                              {subItem.price && (
                                <span className="text-sm font-medium text-blue-600">{subItem.price}</span>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="relative">
              <form onSubmit={handleSearch} className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowResults(e.target.value.length > 0);
                  }}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  placeholder="Rechercher..."
                  className="w-48 px-4 py-2 pl-10 pr-4 rounded-full bg-gray-100 focus:bg-white 
                    border-2 border-transparent focus:border-blue-500 outline-none transition-all 
                    duration-300 group-hover:bg-gray-50"
                  aria-label="Rechercher sur le site"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 
                  transition-colors group-hover:text-gray-600" aria-hidden="true" />
              </form>

              {showResults && searchQuery && (
                <div className="absolute mt-2 w-64 bg-white rounded-xl shadow-soft border 
                  border-gray-100 overflow-hidden z-50 animate-fade-in-up" role="listbox">
                  {getSearchResults(searchQuery).length > 0 ? (
                    <ul>
                      {getSearchResults(searchQuery).map((result, index) => (
                        <li key={index}>
                          <button
                            onClick={() => handleResultClick(result.path)}
                            className="w-full px-4 py-2 text-left text-sm text-gray-700 
                              hover:bg-blue-50 hover:text-blue-600 transition-colors flex 
                              items-center space-x-2"
                            role="option"
                          >
                            <span>{result.title}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-4 py-3 text-sm text-gray-500">
                      Aucun résultat trouvé
                    </div>
                  )}
                </div>
              )}
            </div>

            <AuthButton onClick={onAuthClick} />
          </div>

          <div className="xl:hidden flex items-center space-x-4">
            <AuthButton onClick={onAuthClick} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 
                hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                transition-colors duration-200"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6 transform rotate-0 transition-transform duration-200" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 transform rotate-0 transition-transform duration-200" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`xl:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-4">
            <form onSubmit={handleSearch} className="relative mb-6">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(e.target.value.length > 0);
                }}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                placeholder="Rechercher..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full bg-gray-100 focus:bg-white 
                  border-2 border-transparent focus:border-blue-500 outline-none transition-all"
                aria-label="Rechercher sur le site"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            </form>

            {showResults && searchQuery && (
              <div className="mb-4 bg-white rounded-xl shadow-soft border border-gray-100 
                overflow-hidden animate-fade-in-up" role="listbox">
                {getSearchResults(searchQuery).length > 0 ? (
                  <ul>
                    {getSearchResults(searchQuery).map((result, index) => (
                      <li key={index}>
                        <button
                          onClick={() => {
                            handleResultClick(result.path);
                            setIsOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 
                            hover:bg-blue-50 hover:text-blue-600 transition-colors flex 
                            items-center space-x-2"
                          role="option"
                        >
                          <span>{result.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    Aucun résultat trouvé
                  </div>
                )}
              </div>
            )}

            {isLoggedIn && (
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base 
                  font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg 
                  animate-fade-in-up"
                onClick={() => setIsOpen(false)}
              >
                Tableau de bord
              </Link>
            )}

            {navigation.map((item) => (
              <React.Fragment key={item.name}>
                {item.name === 'Formation' ? (
                  <button
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base 
                      font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg 
                      animate-fade-in-up w-full text-left"
                    onClick={(e) => handleKnowledgeClick(item, e)}
                    aria-expanded={showSubmenu === item.name}
                    aria-haspopup="true"
                  >
                    {item.name}
                  </button>
                ) : item.submenu ? (
                  <button
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base 
                      font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg 
                      animate-fade-in-up w-full text-left"
                    onClick={() => setShowSubmenu(showSubmenu === item.name ? null : item.name)}
                    aria-expanded={showSubmenu === item.name}
                    aria-haspopup="true"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base 
                      font-medium transition-all duration-200 hover:bg-gray-50 rounded-lg 
                      animate-fade-in-up"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                {item.submenu && showSubmenu === item.name && (
                  <div className="pl-4 space-y-1" role="menu">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() => handleSubmenuClick(subItem.href)}
                        className="w-full text-left text-gray-600 block px-3 py-2 text-sm 
                          font-medium transition-all duration-200 hover:bg-gray-50/80 
                          hover:translate-x-1 rounded-lg focus:outline-none focus:ring-2 
                          focus:ring-blue-500/20 focus:ring-offset-1"
                        role="menuitem"
                      >
                        <div className="flex justify-between items-center">
                          <span>{subItem.name}</span>
                          {subItem.price && (
                            <span className="text-blue-600 font-medium">{subItem.price}</span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{subItem.description}</span>
                        {subItem.popular && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs 
                            font-medium bg-blue-100 text-blue-800">
                            Populaire
                          </span>
                        )}
                        {subItem.recommended && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs 
                            font-medium bg-green-100 text-green-800">
                            Recommandé
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}