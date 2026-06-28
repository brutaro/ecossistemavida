/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldAlert, Quote, Check } from 'lucide-react';
import { IMPACTO } from '../data';

// Helper component for animating count-ups
function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString('pt-BR')}</span>;
}

export default function Impacto() {
  return (
    <section
      id="impacto"
      className="py-24 bg-forest-deep text-court-white relative overflow-hidden"
    >
      {/* Decorative courts background markings to match "tennis club" aesthetic */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="#F7F5F0" strokeWidth="2" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="#F7F5F0" strokeWidth="2" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#F7F5F0" strokeWidth="2" strokeDasharray="10 5" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#F7F5F0" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Headline and quote inspired by country clubs and Dynamis heritage */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-champagne-gold block">
              Resultados de Verdade
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-court-white">
              Transformação tangível em nossa comunidade.
            </h2>
            <div className="w-16 h-[2px] bg-champagne-gold/40" />
            
            {/* Elegant glassmorphic quote card */}
            <div className="p-6 rounded bg-white/5 border border-white/10 relative">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-champagne-gold/30 rotate-180" />
              <p className="font-sans text-xs md:text-sm text-court-white/80 italic leading-relaxed mb-4">
                "O apoio da Dynamis e do Ecossistema Vida foi o diferencial para conseguirmos trazer a formação esportiva do tênis para as crianças da rede pública de Nova Lima. A mudança de foco e disciplina em sala de aula é nítida."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-champagne-gold flex items-center justify-center text-forest-deep text-xs font-bold">
                  DL
                </div>
                <div>
                  <h4 className="text-xs font-bold text-champagne-gold">Dirceu L.</h4>
                  <p className="text-[10px] text-court-white/55">Diretor Pedagógico Regional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Numbers Grid with scroll-trigger style animated counters */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {IMPACTO.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded bg-forest-dark/40 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    {/* Massive Counter Number */}
                    <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-champagne-gold mb-3 flex items-center">
                      <span>{item.prefix}</span>
                      <AnimatedCounter value={item.value} />
                      <span>{item.suffix}</span>
                    </div>

                    <div className="w-10 h-[1.5px] bg-clay-earth/40 mb-4" />

                    {/* Metric Label */}
                    <p className="font-sans text-xs uppercase tracking-wider text-court-white/80 font-semibold leading-snug">
                      {item.label}
                    </p>
                  </div>

                  <p className="font-sans text-[11px] text-court-white/50 mt-4 leading-relaxed">
                    Dados auditados e integrados sob a mentoria do conselho consultivo da DYNAMIS.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
