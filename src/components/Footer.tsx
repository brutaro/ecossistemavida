/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Leaf, Instagram, Mail, Phone, ExternalLink } from 'lucide-react';
import logoTree from '../assets/logo-tree-transparent-pillow.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-forest-dark text-court-white pt-20 pb-10 border-t border-champagne-gold/20 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Slogan & Logo */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoTree} alt="Ecossistema Vida Logo" className="w-10 h-10 object-contain" />
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-court-white">
                  ECOSSISTEMA VIDA
                </span>
              </div>
            </div>
            
            <p className="text-xs text-court-white/70 leading-relaxed max-w-sm">
              Um ecossistema que une pessoas, organizações e projetos para gerar transformação social por meio do esporte, da cultura, da educação, da saúde, dos negócios e da convivência.
            </p>

            <span className="text-[11px] font-display italic text-champagne-gold block tracking-wide">
              Conectar • Desenvolver • Transformar
            </span>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-[10px] uppercase tracking-widest text-champagne-gold font-bold">
              Seções Principais
            </h5>
            <ul className="text-xs space-y-2.5 text-court-white/70">
              <li><a href="#inicio" className="hover:text-champagne-gold transition-colors">Início</a></li>
              <li><a href="#ecossistema" className="hover:text-champagne-gold transition-colors">O Ecossistema</a></li>
              <li><a href="#apoiar" className="hover:text-champagne-gold transition-colors">Como Apoiar</a></li>
              <li><a href="#calendario" className="hover:text-champagne-gold transition-colors">Calendário 2026</a></li>
              <li><a href="#projetos" className="hover:text-champagne-gold transition-colors">Nossos Projetos</a></li>
              <li><a href="#impacto" className="hover:text-champagne-gold transition-colors">Demonstração de Impacto</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Channels */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-[10px] uppercase tracking-widest text-champagne-gold font-bold">
              Contatos & Canais
            </h5>
            <ul className="text-xs space-y-3.5 text-court-white/80">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-champagne-gold shrink-0" />
                <a href="https://wa.me/5531999999999" target="_blank" rel="noreferrer" className="hover:text-champagne-gold transition-colors">
                  +55 (31) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-champagne-gold shrink-0" />
                <a href="mailto:contato@ecossistemavida.org.br" className="hover:text-champagne-gold transition-colors">
                  contato@ecossistemavida.org.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-champagne-gold shrink-0" />
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-champagne-gold transition-colors flex items-center gap-1">
                  <span>@ecossistemavida</span>
                  <ExternalLink className="w-3 h-3 text-court-white/30" />
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <span className="text-[10px] uppercase tracking-wider text-court-white/50 block mb-1.5">
                Secretaria Executiva
              </span>
              <p className="text-[11px] text-court-white/60 leading-relaxed font-sans">
                Av. de Ligação, 1200 - Alphaville Lagoa dos Ingleses, Nova Lima - MG, 34018-000
              </p>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-white/10 mb-8" />

        {/* Legal & Attribution Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-court-white/50">
          <div>
            <span>© {currentYear} Associação Ecossistema Vida. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>CNPJ: 55.123.456/0001-89</span>
            <span className="border-l border-white/15 pl-6">Estatuto Social Registrado</span>
            <span className="border-l border-white/15 pl-6">Mentoria Estratégica: DYNAMIS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
