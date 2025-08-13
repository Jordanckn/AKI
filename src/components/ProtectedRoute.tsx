import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { Lock } from 'lucide-react';
import LessonAccessModal from './LessonAccessModal';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireSubscription?: boolean;
}

export default function ProtectedRoute({ children, requireSubscription = false }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkUser = async () => {
      try {
        setLoading(true);
        
        // Check if user is authenticated
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          setUser(null);
          setShowModal(true);
          setLoading(false);
          return;
        }
        
        setUser(session.user);
        
        // If subscription is required, check if user has an active subscription
        if (requireSubscription) {
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
            setHasSubscription(subscriptions && subscriptions.length > 0);
          }
        } else {
          setHasSubscription(true); // No subscription required
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setUser(null);
        setHasSubscription(false);
      } finally {
        setLoading(false);
      }
    };
    
    checkUser();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) {
        setHasSubscription(false);
      }
    });
    
    return () => subscription.unsubscribe();
  }, [requireSubscription]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Extract module ID from path for determining if it's a free lesson
  const pathParts = location.pathname.split('/');
  const moduleId = pathParts[pathParts.length - 1];
  const isFreeLesson = moduleId === 'module-1' || moduleId === 'fondamentaux-blockchain';
  
  // Get lesson title from path
  let lessonTitle = "cette leçon";
  if (moduleId === 'module-1' || moduleId === 'fondamentaux-blockchain') lessonTitle = "Qu'est-ce que la blockchain ?";
  else if (moduleId === 'module-2' || moduleId === 'principes-decentralisation') lessonTitle = "Les principes de la décentralisation";
  else if (moduleId === 'module-3' || moduleId === 'cryptographie-securite') lessonTitle = "La cryptographie et la sécurité";
  // Add more mappings as needed

  if (!user) {
    // Show modal for unauthenticated users
    return (
      <LessonAccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        lessonTitle={lessonTitle}
        isFreeLesson={isFreeLesson}
        onAuthClick={() => {
          // Ouvrir la modale d'authentification standard avec le mode d'inscription
          const event = new CustomEvent('openAuthModal', { detail: { isSignUp: true } });
          window.dispatchEvent(event);
        }}
      />
    );
  }

  if (requireSubscription && !hasSubscription) {
    // User is authenticated but doesn't have required subscription
    return (
      <div className="min-h-screen pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Contenu Premium
          </h3>
          <p className="text-gray-600 mb-6">
            Cette section nécessite un abonnement actif. Découvrez nos offres pour accéder à l'ensemble de nos contenus premium.
          </p>
          <a
            href="/solutions/formation-cryptomonnaie/tarification"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl 
              hover:from-blue-700 hover:to-purple-700 transition-colors inline-block"
          >
            Découvrir nos abonnements
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}