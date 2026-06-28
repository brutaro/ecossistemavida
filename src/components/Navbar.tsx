/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import logoTree from '../assets/logo-tree-transparent-pillow.png';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Ecossistema', href: '#ecossistema' },
    { label: 'Apoiar', href: '#apoiar' },
    { label: 'Calendário', href: '#calendario' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Impacto', href: '#impacto' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-forest-deep/90 backdrop-blur-md border-b border-champagne-gold/15 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo / Emblem */}
        <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
          <img src={logoTree} alt="Ecossistema Vida Logo" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="font-display text-lg md:text-xl font-bold text-court-white tracking-tight group-hover:text-champagne-gold transition-colors duration-300">
              ECOSSISTEMA VIDA
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 font-sans">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs uppercase tracking-widest font-semibold transition-colors relative py-1.5 focus:outline-none ${
                  isActive
                    ? 'text-champagne-gold'
                    : 'text-court-white/70 hover:text-court-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-champagne-gold" />
                )}
              </a>
            );
          })}
          
          <a
            href="#apoiar"
            className="px-5 py-2 bg-champagne-gold hover:bg-champagne-gold/90 text-forest-deep text-xs font-semibold uppercase tracking-wider rounded transition-colors"
          >
            Apoiar Agora
          </a>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-court-white/80 hover:text-court-white transition-colors focus:outline-none"
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[65px] left-0 w-full h-screen bg-forest-deep/98 backdrop-blur-lg border-t border-champagne-gold/15 flex flex-col p-8 space-y-6 animate-fade-in font-sans">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-court-white/80 hover:text-champagne-gold tracking-wide transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#apoiar"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-3.5 bg-champagne-gold hover:bg-champagne-gold/90 text-forest-deep text-center font-bold uppercase tracking-wider rounded transition-colors text-sm"
          >
            Apoiar o Ecossistema
          </a>
        </div>
      )}
    </header>
  );
}
