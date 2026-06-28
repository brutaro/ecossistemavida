/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Award, Globe, Heart, Shield } from 'lucide-react';
import { HERO_DATA } from '../data';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark"
    >
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=1920&auto=format&fit=crop"
          alt="Ecossistema Vida Lifestyle"
          className="w-full h-full object-cover scale-105 filter brightness-35 contrast-110 saturate-90"
          referrerPolicy="no-referrer"
        />
        {/* Soft forest deep/dark gradients for visual cohesion and text protection */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-deep/80 to-forest-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/65 via-transparent to-forest-dark/65" />
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-24 pb-28 flex flex-col items-center justify-center">
        {/* Small floating organic element / emblem */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-2 bg-champagne-gold/15 backdrop-blur-md px-4 py-2 rounded-full border border-champagne-gold/30"
        >
          <Award className="w-4 h-4 text-champagne-gold" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-champagne-gold">
            Estilo de Vida & Impacto Social
          </span>
        </motion.div>

        {/* Core Slogan heading in classical serif */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-court-white tracking-tight leading-none mb-6 drop-shadow-xl"
        >
          {HERO_DATA.title}
        </motion.h1>

        {/* Detailed descriptive paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-sans text-base md:text-lg lg:text-xl text-court-white/85 max-w-3xl leading-relaxed mb-10 drop-shadow-md"
        >
          {HERO_DATA.subtitle}
        </motion.p>

        {/* Harmonious premium glassmorphic CTA buttons layout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
        >
          <a
            href="#apoiar"
            className="w-full sm:w-auto px-8 py-4 bg-champagne-gold hover:bg-champagne-gold/90 text-forest-dark text-xs uppercase tracking-[0.15em] font-bold rounded shadow-lg hover:shadow-champagne-gold/20 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
          >
            Apoie o Ecossistema
          </a>
          
          <a
            href="#projetos"
            className="w-full sm:w-auto px-8 py-4 bg-forest-deep/45 backdrop-blur-md border border-champagne-gold/30 hover:border-champagne-gold hover:bg-forest-deep/60 text-court-white text-xs uppercase tracking-[0.15em] font-bold rounded transition-all duration-300 transform hover:-translate-y-0.5 text-center"
          >
            Conheça nossos projetos
          </a>
        </motion.div>

        {/* Subtle decorative metrics under glassmorphism to spark curiosity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.0, duration: 1 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto p-4 rounded-lg glass-panel text-court-white/95"
        >
          <div className="text-center">
            <span className="block text-champagne-gold text-sm font-semibold tracking-wide uppercase font-sans">Esporte</span>
            <span className="text-[10px] text-court-white/60">Alto Rendimento</span>
          </div>
          <div className="text-center border-x border-champagne-gold/20">
            <span className="block text-champagne-gold text-sm font-semibold tracking-wide uppercase font-sans">Cultura</span>
            <span className="text-[10px] text-court-white/60">e Convivência</span>
          </div>
          <div className="text-center">
            <span className="block text-champagne-gold text-sm font-semibold tracking-wide uppercase font-sans">Saúde</span>
            <span className="text-[10px] text-court-white/60">e Felicidade</span>
          </div>
        </motion.div>
      </div>

      {/* Animated bounce arrow for natural flow - direct child of section */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer text-court-white/40 hover:text-champagne-gold transition-colors z-20"
        onClick={() => {
          const nextSec = document.getElementById('ecossistema');
          nextSec?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.2em] font-semibold font-sans mb-1.5">Descubra mais</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
