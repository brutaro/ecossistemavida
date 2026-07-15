/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, Settings, Check, X } from 'lucide-react';

interface CookieBannerProps {
  onOpenPolicy: (type: 'privacy' | 'cookies') => void;
}

export default function CookieBanner({ onOpenPolicy }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('ev_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const all = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('ev_cookie_consent', JSON.stringify(all));
    setPreferences(all);
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    const min = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('ev_cookie_consent', JSON.stringify(min));
    setPreferences(min);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('ev_cookie_consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 w-full z-50 p-4 sm:p-6 md:px-12 flex justify-center pointer-events-none"
      >
        <div className="bg-forest-deep/95 backdrop-blur-md border border-champagne-gold/30 p-6 rounded-xl shadow-2xl max-w-4xl w-full pointer-events-auto flex flex-col md:flex-row gap-6 items-center">
          
          <div className="flex-1 text-court-white">
            <div className="flex items-center gap-2 mb-2">
              <Cookie className="w-5 h-5 text-champagne-gold" />
              <h3 className="font-display font-bold text-lg">Sua Privacidade</h3>
            </div>
            <p className="text-sm text-court-white/80 leading-relaxed font-sans mb-2">
              Utilizamos cookies para melhorar sua experiência, analisar o tráfego do site e personalizar conteúdo. 
              Ao continuar navegando, você concorda com a nossa{' '}
              <button onClick={() => onOpenPolicy('privacy')} className="text-champagne-gold underline hover:text-champagne-gold/80">
                Política de Privacidade
              </button>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setShowPreferences(true)}
              className="px-4 py-2.5 rounded border border-champagne-gold/50 text-champagne-gold hover:bg-champagne-gold/10 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Configurar
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="px-4 py-2.5 rounded bg-white/10 text-court-white hover:bg-white/20 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Recusar
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2.5 rounded bg-champagne-gold text-forest-deep hover:bg-champagne-gold/90 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              Aceitar Todos
            </button>
          </div>
        </div>
      </motion.div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-forest-dark/80 backdrop-blur-sm pointer-events-auto">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-forest-deep border-2 border-champagne-gold/30 rounded-xl p-6 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setShowPreferences(false)}
              className="absolute top-4 right-4 text-court-white/60 hover:text-court-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-display font-bold text-xl text-champagne-gold mb-4">Preferências de Cookies</h3>
            <p className="text-sm text-court-white/80 mb-6 font-sans">
              Gerencie suas preferências. Os cookies necessários não podem ser desativados pois são essenciais para o funcionamento do site.
            </p>

            <div className="space-y-4 mb-8 font-sans">
              <div className="flex items-start justify-between p-4 bg-white/5 rounded border border-white/10">
                <div>
                  <h4 className="text-court-white font-bold text-sm">Estritamente Necessários</h4>
                  <p className="text-xs text-court-white/60 mt-1">Garantem a navegação e recursos básicos do site.</p>
                </div>
                <div className="px-2 py-1 bg-champagne-gold/20 text-champagne-gold text-[10px] font-bold uppercase rounded">
                  Sempre Ativo
                </div>
              </div>

              <label className="flex items-start justify-between p-4 bg-white/5 rounded border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                <div className="pr-4">
                  <h4 className="text-court-white font-bold text-sm">Desempenho e Analytics</h4>
                  <p className="text-xs text-court-white/60 mt-1">Ajudam-nos a entender como os visitantes interagem com o site.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-champagne-gold"
                />
              </label>

              <label className="flex items-start justify-between p-4 bg-white/5 rounded border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                <div className="pr-4">
                  <h4 className="text-court-white font-bold text-sm">Marketing</h4>
                  <p className="text-xs text-court-white/60 mt-1">Utilizados para rastrear visitantes em sites para publicidade relevante.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-champagne-gold"
                />
              </label>
            </div>

            <button
              onClick={handleSavePreferences}
              className="w-full py-3 bg-champagne-gold text-forest-deep font-bold text-xs uppercase tracking-wider rounded transition-colors"
            >
              Salvar Preferências
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
