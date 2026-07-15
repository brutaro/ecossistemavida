import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import photo from '../assets/photo-apresenta.jpg';

export default function IntroPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if it was already shown in this session to prevent annoyance, 
    // but for now we'll just show it once per page load as requested.
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setHasShown(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-forest-dark/90 backdrop-blur-md"
            onClick={() => setIsVisible(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-full max-h-[90vh] max-w-4xl bg-forest-dark rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 border border-champagne-gold/20"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 bg-court-white/10 hover:bg-court-white/20 rounded-full text-court-white transition-colors backdrop-blur-md border border-court-white/10"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>
            
            {/* Image Area - Takes up most of the space */}
            <div className="w-full h-[60%] md:h-full md:w-[55%] relative bg-black/20 flex items-center justify-center p-2 md:p-6">
              <img 
                src={photo} 
                alt="Ecossistema Vida" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent md:bg-gradient-to-l md:from-forest-dark md:via-transparent md:w-24 md:right-0 md:left-auto" />
            </div>
            
            {/* Text Area - acts as a detail */}
            <div className="w-full h-[40%] md:h-full md:w-[45%] p-6 md:p-8 flex flex-col justify-center items-center md:items-start text-center md:text-left bg-forest-dark relative text-court-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-champagne-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <h2 className="font-display text-3xl md:text-4xl text-court-white mb-2 leading-tight">
                Ecossistema Vida <br/>
                <span className="text-champagne-gold italic text-2xl md:text-3xl">apresenta</span>
              </h2>
              
              <div className="w-12 h-1 bg-gradient-to-r from-champagne-gold to-clay-earth rounded-full mb-6 hidden md:block" />
              
              <p className="text-court-white/70 font-sans text-sm md:text-base mb-6 md:mb-8 max-w-sm">
                Uma nova forma de viver, integrar e transformar.
              </p>
              
              <button 
                onClick={() => setIsVisible(false)}
                className="px-6 py-2.5 bg-champagne-gold/20 text-champagne-gold border border-champagne-gold/30 rounded-full font-sans font-medium hover:bg-champagne-gold hover:text-forest-dark transition-all duration-300 text-sm w-full md:w-auto"
              >
                Continuar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
