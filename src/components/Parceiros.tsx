/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { PARTNERS } from '../data';
import { Award, Shield, Landmark, Flame } from 'lucide-react';

export default function Parceiros() {
  const getPartnerIcon = (type: string) => {
    switch (type) {
      case 'crest': return Award;
      case 'shield': return Shield;
      case 'modern': return Flame;
      default: return Landmark;
    }
  };

  return (
    <section
      id="parceiros"
      className="py-20 bg-court-white text-forest-dark border-b border-champagne-gold/15"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Block */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-champagne-gold mb-2 block">
            Rede de Apoio
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight">
            Organizações Parceiras
          </h2>
          <p className="font-sans text-xs text-forest-dark/65 mt-2">
            Instituições e corporações líderes que fornecem mentoria, chancela e fomento.
          </p>
        </div>

        {/* Partners Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {PARTNERS.map((partner, index) => {
            const IconComponent = getPartnerIcon(partner.logoType);
            
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(197, 155, 78, 0.6)' }}
                className="p-5 rounded bg-white border border-champagne-gold/15 flex flex-col items-center justify-center text-center group transition-colors duration-300 relative h-32"
              >
                {/* Micro badge role */}
                <span className="absolute top-2 right-2 text-[8px] font-sans font-bold uppercase tracking-widest text-clay-earth/60 group-hover:text-clay-earth">
                  {partner.role}
                </span>

                {/* Elegant Vector Crest Logo Placeholder */}
                <div className="w-12 h-12 rounded-full border border-champagne-gold/15 bg-court-white flex items-center justify-center text-champagne-gold mb-3 group-hover:bg-forest-deep group-hover:text-white group-hover:border-forest-deep transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Partner Brand Name */}
                <h4 className="font-display text-sm font-bold text-forest-deep tracking-tight group-hover:text-champagne-gold transition-colors duration-300">
                  {partner.name}
                </h4>
              </motion.div>
            );
          })}
        </div>

        {/* Cohesive call-out under grid */}
        <div className="mt-12 text-center">
          <p className="text-xs text-forest-dark/60 italic font-sans">
            Quer associar sua marca a este ecossistema de excelência?{' '}
            <a
              href="https://wa.me/5531999999999?text=Olá! Gostaria de falar sobre cotas de patrocínio corporativo e ativação de marca junto ao Ecossistema Vida."
              target="_blank"
              rel="noreferrer"
              className="text-champagne-gold font-bold hover:underline"
            >
              Fale com nossa assessoria de marcas
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
