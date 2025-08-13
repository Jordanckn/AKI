import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const nameMap: Record<string, string> = {
  '': 'Accueil',
  about: 'À propos',
  team: 'Équipe',
  support: 'Support',
  values: 'Valeurs',
  solutions: 'Solutions',
  'marche-cryptomonnaies-temps-reel': 'Marché',
  dictionnaire: 'Dictionnaire',
  'dictionnaire-crypto': 'Dictionnaire',
  articles: 'Articles',
  formation: 'Formation',
  'comprendre-la-crypto': 'Comprendre la crypto'
};

function segmentToName(segment: string) {
  return nameMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Breadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);

  const items = pathSegments.map((segment, index) => {
    const url = '/' + pathSegments.slice(0, index + 1).join('/');
    return {
      name: segmentToName(segment),
      url
    };
  });

  // Prepend home
  const breadcrumbItems = [{ name: 'Accueil', url: '/' }, ...items];

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://alyah-knowledge.com${item.url}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="text-sm mb-4">
        <ol className="flex flex-wrap gap-1">
          {breadcrumbItems.map((item, index) => (
            <li key={item.url} className="flex items-center gap-1">
              {index > 0 && <span>/</span>}
              {index < breadcrumbItems.length - 1 ? (
                <Link to={item.url} className="text-blue-600 hover:underline">
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-gray-500">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
