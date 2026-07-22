/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Trophy, Music, Plus, Minus, ArrowRight } from 'lucide-react';
import { CALENDARIO } from '../data';
import { CalendarioItem } from '../types';

export default function Calendario() {
  const [expanded, setExpanded] = useState(false);
  const [activeEvent, setActiveEvent] = useState<string | null>(CALENDARIO[0].id);

  const extraEvents: (CalendarioItem & { details: string })[] = [
    {
      id: 'cal-extra-1',
      month: 'FEVEREIRO 2027',
      title: 'Festival de Música Barroca',
      type: 'culture',
      location: 'Matriz Histórica de Nova Lima',
      details: 'Concertos acústicos clássicos celebrando o patrimônio histórico e cultural regional.',
    },
    {
      id: 'cal-extra-2',
      month: 'MARÇO 2027',
      title: 'Circuito Kids de Tênis de Areia',
      type: 'sports',
      location: 'Quadras de Areia Central',
      details: 'Clínica aberta e torneio lúdico para incentivar esportes de praia entre jovens de 6 a 12 anos.',
    },
  ];

  return (
    <section
      id="calendario"
      className="py-24 bg-court-white text-forest-dark border-b border-champagne-gold/15"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-champagne-gold mb-3 block">
            Cronograma de Eventos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Calendário 2026
          </h2>
          <div className="w-16 h-[2px] bg-clay-earth/40 mx-auto" />
        </div>

        {/* Timeline Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Side: Elegant Timeline Node List */}
          <div className="lg:col-span-7 space-y-6 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[1px] before:bg-champagne-gold/25">
            {CALENDARIO.map((item, index) => {
              const isActive = activeEvent === item.id;
              const isSports = item.type === 'sports';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveEvent(item.id)}
                  className={`relative pl-14 pr-6 py-5 rounded border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-forest-deep text-court-white border-champagne-gold shadow-lg shadow-forest-deep/10'
                      : 'bg-white border-champagne-gold/15 hover:border-champagne-gold/40'
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-champagne-gold border-champagne-gold scale-110'
                        : 'bg-court-white border-champagne-gold/40'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? 'bg-forest-deep' : 'bg-transparent'
                      }`}
                    />
                  </div>

                  {/* Header / Month */}
                  <div className="flex justify-between items-center mb-2">
                    <span
                      className={`text-[9px] font-sans font-bold uppercase tracking-widest ${
                        isActive ? 'text-champagne-gold' : 'text-clay-earth'
                      }`}
                    >
                      {item.month}
                    </span>
                    <span className="flex items-center gap-1">
                      {isSports ? (
                        <Trophy className={`w-3.5 h-3.5 ${isActive ? 'text-champagne-gold' : 'text-forest-deep/50'}`} />
                      ) : (
                        <Music className={`w-3.5 h-3.5 ${isActive ? 'text-champagne-gold' : 'text-forest-deep/50'}`} />
                      )}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg md:text-xl font-bold leading-tight">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}

            {/* Extra Expandable Items */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-6 overflow-hidden"
                >
                  {extraEvents.map((item, index) => {
                    const isActive = activeEvent === item.id;
                    const isSports = item.type === 'sports';

                    return (
                      <div
                        key={item.id}
                        onClick={() => setActiveEvent(item.id)}
                        className={`relative pl-14 pr-6 py-5 rounded border transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'bg-forest-deep text-court-white border-champagne-gold shadow-lg'
                            : 'bg-white border-champagne-gold/15 hover:border-champagne-gold/40'
                        }`}
                      >
                        {/* Timeline dot */}
                        <div
                          className={`absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-all ${
                            isActive
                              ? 'bg-champagne-gold border-champagne-gold scale-110'
                              : 'bg-court-white border-champagne-gold/40'
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              isActive ? 'bg-forest-deep' : 'bg-transparent'
                            }`}
                          />
                        </div>

                        <div className="flex justify-between items-center mb-2">
                          <span
                            className={`text-[9px] font-sans font-bold uppercase tracking-widest ${
                              isActive ? 'text-champagne-gold' : 'text-clay-earth'
                            }`}
                          >
                            {item.month}
                          </span>
                          <span className="flex items-center gap-1">
                            {isSports ? (
                              <Trophy className={`w-3.5 h-3.5 ${isActive ? 'text-champagne-gold' : 'text-forest-deep/50'}`} />
                            ) : (
                              <Music className={`w-3.5 h-3.5 ${isActive ? 'text-champagne-gold' : 'text-forest-deep/50'}`} />
                            )}
                          </span>
                        </div>

                        <h3 className="font-display text-lg md:text-xl font-bold leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Expand / Collapse Button */}
            <div className="pt-2">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-forest-deep/20 hover:border-forest-deep text-forest-deep font-sans text-xs uppercase tracking-wider font-bold transition-all"
              >
                {expanded ? (
                  <>
                    <span>Recolher calendário</span>
                    <Minus className="w-3.5 h-3.5" />
                  </>
                ) : (
                  <>
                    <span>Ver calendário completo</span>
                    <Plus className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Side: Elegant Detail Panel (Glassmorphism-styled card) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded border border-champagne-gold/25 p-8 bg-forest-dark text-court-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-champagne-gold/5 rounded-full filter blur-xl" />

              {/* Find active event details */}
              {(() => {
                const combined = [...CALENDARIO, ...extraEvents];
                const active = combined.find((e) => e.id === activeEvent) || combined[0];
                const isSports = active.type === 'sports';

                return (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-champagne-gold/10 border border-champagne-gold/20 flex items-center justify-center text-champagne-gold">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-sans uppercase font-bold tracking-widest text-champagne-gold block">
                          Destaque de Temporada
                        </span>
                        <span className="text-xs text-court-white/60">{active.month}</span>
                      </div>
                    </div>

                    <h4 className="font-display text-2xl font-bold leading-snug text-court-white">
                      {active.title}
                    </h4>

                    <div className="w-full h-[1px] bg-white/10" />

                    <div className="space-y-4">
                      <div className="flex items-center gap-2.5 text-xs text-court-white/80">
                        <MapPin className="w-4 h-4 text-champagne-gold shrink-0" />
                        <span>{active.location}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-court-white/80">
                        <Trophy className="w-4 h-4 text-champagne-gold shrink-0" />
                        <span>
                          {isSports
                            ? 'Categoria: Amador, Pro, Corporativo e Juvenil'
                            : 'Formato: Espetáculo, Palestras e Conexões'}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-court-white/70 leading-relaxed pt-2 font-sans">
                      {active.id.includes('extra')
                        ? (active as any).details
                        : `O evento tradicional "${active.title}" faz parte do calendário oficial de 2026. Tem como propósito principal integrar atletas, apoiadores e patrocinadores para vivenciar a alta performance e gerar doações ao Ecossistema.`}
                    </p>

                    <div className="pt-4 space-y-2">
                      <a
                        href={active.externalLink || `https://wa.me/5531999999999?text=Olá! Tenho interesse em obter detalhes / fazer inscrição para o evento "${active.title}" (${active.month}).`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3 bg-champagne-gold hover:bg-champagne-gold/90 text-forest-deep rounded font-sans text-xs uppercase tracking-widest font-bold transition-all text-center flex items-center justify-center gap-2"
                      >
                        <span>Quero Participar / Inscrever</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <p className="text-[10px] text-court-white/50 text-center font-sans">
                        {active.externalLink
                          ? 'Ao clicar, você será direcionado para a página oficial de ingressos/inscrição.'
                          : 'Ao solicitar atendimento via WhatsApp, seus dados serão tratados estritamente para o evento.'}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
