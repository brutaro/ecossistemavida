/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Music, Landmark, Star, ArrowUpRight, CheckCircle } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data';

interface ProjetosProps {
  onNavigate?: (view: string, projectId?: string) => void;
}

export default function Projetos({ onNavigate }: ProjetosProps) {
  const [activeTab, setActiveTab] = useState<ProjectCategory | 'todos'>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Projetos', icon: null },
    { id: 'esportes', label: 'Eventos Esportivos', icon: Trophy },
    { id: 'culturais', label: 'Eventos Culturais', icon: Music },
    { id: 'permanentes', label: 'Projetos Permanentes', icon: CheckCircle },
    { id: 'aprovacao', label: 'Em Aprovação / Captação', icon: Landmark },
  ];

  const filteredProjects = activeTab === 'todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  const getCategoryBadgeColor = (cat: ProjectCategory) => {
    switch (cat) {
      case 'esportes': return 'bg-emerald-900/10 text-emerald-800 border-emerald-950/10';
      case 'culturais': return 'bg-amber-900/10 text-amber-800 border-amber-950/10';
      case 'permanentes': return 'bg-sky-900/10 text-sky-800 border-sky-950/10';
      case 'aprovacao': return 'bg-rose-900/10 text-rose-800 border-rose-950/10';
    }
  };

  const getCategoryLabel = (cat: ProjectCategory) => {
    switch (cat) {
      case 'esportes': return 'Esportes';
      case 'culturais': return 'Cultural';
      case 'permanentes': return 'Permanente';
      case 'aprovacao': return 'Buscando Patrocínio';
    }
  };

  return (
    <section
      id="projetos"
      className="py-24 bg-court-white text-forest-dark relative border-b border-champagne-gold/15"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-champagne-gold mb-3 block">
            Nossas Iniciativas
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Nossos Projetos
          </h2>
          <div className="w-16 h-[2px] bg-clay-earth/40 mx-auto mb-8" />
          <p className="font-sans text-base text-forest-dark/75 leading-relaxed">
            Desenvolvemos propostas que unem esporte, incentivo educacional, sustentabilidade e bem-estar. Navegue pelas nossas frentes de atuação e descubra onde seu apoio pode gerar o maior impacto.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-5 py-2.5 rounded border text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-forest-deep text-court-white border-forest-deep shadow'
                    : 'bg-white border-champagne-gold/20 text-forest-deep/80 hover:border-champagne-gold/50'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with layout animation */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                layout
                key={p.id}
                onClick={() => {
                  if ((p.name.toLowerCase().includes('copa') || p.name.toLowerCase().includes('open')) && onNavigate) {
                    onNavigate('project', p.id);
                  } else {
                    window.open(`https://wa.me/5531999999999?text=Olá! Gostaria de conversar sobre o projeto "${p.name}" (${getCategoryLabel(p.category)}).`, '_blank');
                  }
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(13, 53, 36, 0.08)' }}
                className="bg-white p-6 rounded border border-champagne-gold/20 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
              >
                {/* Ribbon/Selo for Approvação/Captação */}
                {p.isSeekingSponsor && (
                  <div className="absolute -top-1 -right-1 w-28 h-28 pointer-events-none overflow-hidden z-10">
                    <div className="absolute top-4 -right-8 w-32 py-1 bg-gradient-to-r from-clay-earth to-champagne-gold text-white text-[8px] font-sans font-bold uppercase tracking-widest text-center rotate-45 border-b border-white/20 shadow">
                      Aberto p/ Patrocínio
                    </div>
                  </div>
                )}

                <div>
                  {/* Category Chip */}
                  <div className="flex justify-between items-center mb-4">
                    <span className={`px-2.5 py-1 text-[9px] font-sans font-bold uppercase tracking-widest rounded-full border ${getCategoryBadgeColor(p.category)}`}>
                      {getCategoryLabel(p.category)}
                    </span>
                    {p.isSeekingSponsor && (
                      <span className="flex items-center gap-1 text-[9px] font-sans font-bold text-clay-earth uppercase tracking-widest">
                        <Star className="w-3 h-3 fill-current text-champagne-gold animate-pulse" />
                        <span>Incentivado</span>
                      </span>
                    )}
                  </div>

                  {/* Project Name */}
                  <h3 className="font-display text-lg font-bold text-forest-deep mb-3 group-hover:text-champagne-gold transition-colors duration-300">
                    {p.name}
                  </h3>

                  {/* Project Description */}
                  <p className="font-sans text-xs text-forest-dark/75 leading-relaxed">
                    {p.description || 'Uma iniciativa focada em fortalecer os eixos de convivência saudável, capacitação comunitária e integração social do Ecossistema Vida.'}
                  </p>
                </div>

                {/* Bottom CTA / Link */}
                <div className="mt-8 border-t border-forest-deep/5 pt-4 flex justify-between items-center">
                  <span className="text-[10px] font-sans font-bold text-forest-deep/50 uppercase tracking-widest">
                    {p.isSeekingSponsor ? 'Patrocinar Projeto' : 'Ver Detalhes'}
                  </span>
                  
                  <div className="w-8 h-8 rounded-full border border-champagne-gold/20 flex items-center justify-center text-champagne-gold group-hover:bg-forest-deep group-hover:text-white group-hover:border-forest-deep transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
