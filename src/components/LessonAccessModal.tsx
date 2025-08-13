import React, { useEffect, useRef } from 'react';
import { X, BookOpen, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LessonAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessonTitle?: string;
  isFreeLesson?: boolean;
  onAuthClick?: () => void;
}

export default function LessonAccessModal({ 
  isOpen, 
  onClose, 
  lessonTitle = "cette leçon",
  isFreeLesson = false,
  onAuthClick
}: LessonAccessModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    // Handle escape key to close
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    // Prevent background scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  const handleCreateAccount = () => {
    if (onAuthClick) {
      onAuthClick(); // Ouvre la modale d'authentification standard
      onClose(); // Ferme cette modale
    } else {
      navigate('/');
      onClose();
    }
  };
  
  const handleSubscribe = () => {
    navigate('/solutions/formation-cryptomonnaie/tarification');
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up" role="dialog" aria-modal="true" aria-labelledby="lesson-modal-title">
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 
            hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            {isFreeLesson ? (
              <BookOpen className="h-8 w-8 text-blue-600" aria-hidden="true" />
            ) : (
              <Lock className="h-8 w-8 text-blue-600" aria-hidden="true" />
            )}
          </div>
          
          <h3 id="lesson-modal-title" className="text-2xl font-bold text-gray-900 mb-2">
            {isFreeLesson ? 'Accès à la leçon gratuite' : 'Contenu Premium'}
          </h3>
          
          <p className="text-gray-600">
            {isFreeLesson ? (
              <>Inscrivez-vous gratuitement pour accéder à <strong>{lessonTitle}</strong> et commencez votre parcours d'apprentissage.</>
            ) : (
              <>Cette leçon est réservée aux membres avec un abonnement actif. Découvrez nos offres pour accéder à l'intégralité de la formation.</>
            )}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={isFreeLesson ? handleCreateAccount : handleSubscribe}
            className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 
              text-white font-medium hover:from-blue-700 hover:to-purple-700 
              transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isFreeLesson ? 'Créer un compte gratuit' : 'Découvrir les abonnements'}
          </button>
          
          {isFreeLesson && (
            <button
              onClick={handleSubscribe}
              className="px-4 py-3 rounded-xl border border-gray-300 text-gray-700 
                hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Voir les abonnements
            </button>
          )}
          
          {!isFreeLesson && (
            <button
              onClick={onClose}
              className="px-4 py-3 rounded-xl border border-gray-300 text-gray-700 
                hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Plus tard
            </button>
          )}
        </div>
      </div>
    </div>
  );
}