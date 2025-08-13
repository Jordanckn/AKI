import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

interface SEOHeadProps {
  path?: string;
  title?: string;
  description?: string;
  canonicalUrl?: string;
  imageUrl?: string;
  type?: 'website' | 'article';
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  noIndex?: boolean;
}

export default function SEOHead({
  path,
  title,
  description,
  canonicalUrl,
  imageUrl = 'https://alyah-knowledge.com/og-image.jpg',
  type = 'website',
  articlePublishedTime,
  articleModifiedTime,
  noIndex
}: SEOHeadProps) {
  const location = useLocation();
  const currentPath = path || location.pathname;
  const pageConfig = siteConfig.pages[currentPath];

  const rawTitle = title || pageConfig?.title || 'Alyah Knowledge';
  const metaTitle = rawTitle.slice(0, 60);
  const metaDescription = (description || pageConfig?.description ||
    'Apprenez la blockchain, les cryptos et le trading grâce à des ressources claires et fiables.').slice(0, 160);
  const fullCanonicalUrl = canonicalUrl || pageConfig?.canonical || `https://alyah-knowledge.com${currentPath}`;
  const isNoIndex = noIndex ?? pageConfig?.noindex ?? false;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Alyah Knowledge" />
      <meta property="og:locale" content="fr_FR" />
      
      {/* Enhanced Open Graph for better social sharing */}
      <meta property="og:image:alt" content={`Image de couverture pour: ${rawTitle}`} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:updated_time" content={articleModifiedTime || new Date().toISOString()} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@AlyahKnowledge" />
      <meta name="twitter:creator" content="@AlyahKnowledge" />
      <meta name="twitter:image:alt" content={`Image de couverture pour: ${rawTitle}`} />
      
      {/* WhatsApp and Telegram optimization */}
      <meta property="og:image:secure_url" content={imageUrl} />
      
      {/* Article Specific Meta Tags */}
      {/* This is already correct, no change needed here. */}
      {type === 'article' && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {type === 'article' && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {type === 'article' && (
        <>
          <meta property="article:author" content="Alyah Knowledge" />
          <meta property="article:publisher" content="https://alyah-knowledge.com" />
          <meta property="article:section" content="Finance et Cryptomonnaies" />
          <meta property="article:tag" content="crypto, bitcoin, ethereum, blockchain, trading, investissement" />
          <meta property="article:opinion" content="false" />
        </>
      )}

      {/* Additional Meta Tags */}
      <meta
        name="robots"
        content={isNoIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />
      <meta name="googlebot" content={isNoIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="theme-color" content="#4F46E5" />
      <meta name="apple-mobile-web-app-title" content="Alyah Knowledge" />
      <meta name="application-name" content="Alyah Knowledge" />
      
      {/* Enhanced SEO meta tags for articles */}
      {type === 'article' && (
        <>
          <meta name="news_keywords" content="crypto, bitcoin, ethereum, blockchain, trading, investissement, DeFi" />
          <meta name="syndication-source" content={fullCanonicalUrl} />
          <meta name="original-source" content={fullCanonicalUrl} />
          <meta name="rating" content="general" />
          <meta name="distribution" content="global" />
          <meta name="coverage" content="worldwide" />
          <meta name="target" content="all" />
          <meta name="medium" content="blog" />
        </>
      )}
      
      {/* Hreflang pour le français */}
      <link rel="alternate" hrefLang="fr" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonicalUrl} />
      
      {/* Preconnect to external domains for faster loading */}
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="dns-prefetch" href="https://images.unsplash.com" />
    </Helmet>
  );
}