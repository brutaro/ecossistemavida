/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ECOSSISTEMA_INTRO, EIXOS } from '../data';

export default function Ecossistema() {
  return (
    <section
      id="ecossistema"
      className="py-24 bg-court-white text-forest-dark border-b border-champagne-gold/15"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Core Introductory Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-champagne-gold mb-3 block">
            Nossa Essência
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {ECOSSISTEMA_INTRO.title}
          </h2>
          <div className="w-16 h-[2px] bg-clay-earth/40 mx-auto mb-8" />
          <p className="font-sans text-base md:text-lg text-forest-dark/80 leading-relaxed">
            {ECOSSISTEMA_INTRO.text}
          </p>
        </div>

        {/* 7 Eixos Grid - Beautifully responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {EIXOS.map((e, index) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 12px 25px rgba(179, 110, 77, 0.12)' }}
              className="p-6 rounded bg-white border border-champagne-gold/20 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle top indicator line on hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-champagne-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                {/* Emoji Emblem Container */}
                <div className="w-12 h-12 rounded bg-forest-deep/5 flex items-center justify-center text-2xl mb-5 group-hover:bg-forest-deep group-hover:text-white transition-colors duration-300">
                  <span>{e.emoji}</span>
                </div>

                {/* Eixo Title */}
                <h3 className="font-display text-xl font-bold text-forest-deep mb-3">
                  {e.title}
                </h3>

                {/* Eixo Description */}
                <p className="font-sans text-sm text-forest-dark/75 leading-relaxed">
                  {e.description}
                </p>
              </div>

              {/* Readability label marker */}
              <div className="mt-6 flex items-center gap-1 text-[10px] font-sans font-bold uppercase tracking-wider text-champagne-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Conectar Eixo</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
          
          {/* Static CTA card filling the 8th grid space */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded bg-forest-deep text-court-white border border-champagne-gold/35 flex flex-col justify-between"
          >
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-champagne-gold block mb-2">
                Hub de Sinergia
              </span>
              <h3 className="font-display text-xl font-bold mb-4 leading-tight">
                Como esses eixos se conectam?
              </h3>
              <p className="font-sans text-xs text-court-white/70 leading-relaxed">
                Nossos projetos permanentes cruzam as fronteiras do esporte com a cultura e a saúde, proporcionando formação cidadã autêntica e contínua.
              </p>
            </div>
            
            <a
              href="#apoiar"
              className="mt-6 py-2.5 px-4 bg-champagne-gold hover:bg-champagne-gold/90 text-forest-dark rounded text-center text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Fazer Parte
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
