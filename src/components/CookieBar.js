"use client";

import { useState, useEffect } from "react";

export default function CookieBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fermé la barre de cookies
    const cookieBarClosed = localStorage.getItem("cookieBarClosed");
    if (!cookieBarClosed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("cookieBarClosed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm text-white p-4 shadow-2xl z-50 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start space-x-3">
          <div className="text-2xl">🍪</div>
          <div className="flex-1">
            <p className="text-sm leading-relaxed">
              <span className="font-semibold">Respect de votre vie privée :</span> Notre site n&apos;utilise pas de cookies pour collecter vos données personnelles. Nous respectons votre vie privée et nous engageons à protéger vos informations personnelles conformément aux réglementations en vigueur.
            </p>
          </div>
        </div>
        
        <button
          onClick={handleClose}
          className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors duration-300 text-sm font-medium whitespace-nowrap"
        >
          <span>Fermer</span>
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}