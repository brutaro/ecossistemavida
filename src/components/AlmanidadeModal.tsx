/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Music, Award, BookOpen, Sparkles, Landmark } from 'lucide-react';

interface AlmanidadeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AlmanidadeModal({ isOpen, onClose }: AlmanidadeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-forest-dark/90 backdrop-blur-md font-sans">
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="bg-forest-deep text-court-white border-2 border-champagne-gold/30 rounded-2xl shadow-2xl w-[92vw] md:w-[80vw] max-w-5xl h-[88vh] md:h-[80vh] flex flex-col overflow-hidden relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 md:px-8 border-b border-champagne-gold/20 bg-forest-dark/60 backdrop-blur-sm shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-champagne-gold/20 border border-champagne-gold/40 flex items-center justify-center text-champagne-gold shrink-0">
                <Music className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-champagne-gold block">
                  Projeto Cultural Aprovado • Lei Rouanet
                </span>
                <h2 className="font-display text-xl md:text-2xl font-bold text-court-white">
                  ALMANIDADE – Concerto para Poeta e Orquestra
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-court-white/60 hover:text-court-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content Body - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar">
            {/* Hero / Overview Banner */}
            <div className="p-6 md:p-8 rounded-xl bg-gradient-to-r from-forest-dark via-forest-deep to-forest-dark border border-champagne-gold/25 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-48 h-48 bg-champagne-gold/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-champagne-gold/15 text-champagne-gold border border-champagne-gold/30 rounded-full text-[10px] uppercase tracking-widest font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                40 Anos de Música, Poesia e Humanidade
              </span>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-court-white mb-3">
                Nil Lus & Octeto de Cordas da Orquestra Opus
              </h3>

              <p className="text-sm md:text-base text-court-white/85 leading-relaxed max-w-3xl font-sans">
                O espetáculo <strong className="text-champagne-gold font-semibold">Almanidade</strong> celebra a trajetória de Nil Lus — artista com mais de 1.200 composições autorais, 12 álbuns e duas aberturas do Montreux Jazz Festival sob curadoria associada a Quincy Jones — em um concerto único no Grande Teatro do Palácio das Artes.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center space-y-1">
                <span className="block text-2xl md:text-3xl font-display font-bold text-champagne-gold">1.706</span>
                <span className="text-[11px] uppercase tracking-wider text-court-white/70 font-semibold block">Lugares no Palácio das Artes</span>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center space-y-1">
                <span className="block text-2xl md:text-3xl font-display font-bold text-champagne-gold">170k+</span>
                <span className="text-[11px] uppercase tracking-wider text-court-white/70 font-semibold block">Pessoas Alcançadas</span>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center space-y-1">
                <span className="block text-2xl md:text-3xl font-display font-bold text-champagne-gold">90 Min</span>
                <span className="text-[11px] uppercase tracking-wider text-court-white/70 font-semibold block">Espetáculo Gravado em Alta Definição</span>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xl text-center space-y-1">
                <span className="block text-2xl md:text-3xl font-display font-bold text-champagne-gold">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-court-white/70 font-semibold block">Dedução no Imposto de Renda</span>
              </div>
            </div>

            {/* Key Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* O Concerto & Artistas */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-4">
                <div className="flex items-center gap-2.5 text-champagne-gold">
                  <Award className="w-5 h-5 shrink-0" />
                  <h4 className="font-display font-bold text-lg text-court-white">O Concerto & Elenco</h4>
                </div>
                <p className="text-xs text-court-white/80 leading-relaxed">
                  Uma jornada entre poesia, música e memória lusófona. O concerto une a banda completa, o Octeto de Cordas da Orquestra Opus e grandes convidados da música brasileira (Elpídio Bastos do Olodum, Marilton Borges, Toninho Geraes e Fabinho do Terreiro).
                </p>
              </div>

              {/* Legado Social & Educacional */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-4">
                <div className="flex items-center gap-2.5 text-champagne-gold">
                  <BookOpen className="w-5 h-5 shrink-0" />
                  <h4 className="font-display font-bold text-lg text-court-white">Legado Social & Formação</h4>
                </div>
                <p className="text-xs text-court-white/80 leading-relaxed">
                  Muito além do palco: inclui 4 Palestras-Show com Nil Lus e a participação de 200 estudantes da rede pública com formação de plateia, incentivo à leitura, à poesia e valorização da diversidade cultural da Lusofonia.
                </p>
              </div>
            </div>

            {/* Lei Rouanet Box */}
            <div className="p-6 bg-forest-dark border border-champagne-gold/30 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-champagne-gold" />
                  <h4 className="font-display font-bold text-base text-court-white">
                    Lei Federal de Incentivo à Cultura (Artigo 18)
                  </h4>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-court-white/70">
                  <span>PRONAC: <strong className="text-court-white">263831</strong></span>
                  <span>Portaria: <strong className="text-court-white">0351/26</strong></span>
                  <span>Captação Aprovada: <strong className="text-champagne-gold font-semibold">R$ 402.546,08</strong></span>
                </div>
              </div>

              <div className="px-4 py-2 bg-champagne-gold/15 border border-champagne-gold/30 rounded-lg text-xs font-semibold text-champagne-gold uppercase tracking-wider shrink-0">
                100% de Dedução Fiscal
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-6 border-t border-champagne-gold/20 bg-forest-dark/80 shrink-0 flex flex-col sm:flex-row justify-between items-center gap-4">
            <a
              href="/NIL_Prospecto_V2.pdf"
              download="NIL_Prospecto_V2.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-champagne-gold hover:bg-champagne-gold/90 text-forest-deep rounded font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download do Prospecto Completo (PDF)</span>
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-court-white rounded font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
