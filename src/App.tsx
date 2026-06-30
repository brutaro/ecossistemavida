/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecossistema from './components/Ecossistema';
import ComoApoiar from './components/ComoApoiar';
import Calendario from './components/Calendario';
import Projetos from './components/Projetos';
import Impacto from './components/Impacto';
import Parceiros from './components/Parceiros';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProjectPage from './components/ProjectPage';

interface ViewState {
  view: 'home' | 'project';
  projectId?: string;
}

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [viewState, setViewState] = useState<ViewState>({ view: 'home' });
  const [homeScrollY, setHomeScrollY] = useState(0);

  const navigateToProject = (projectId: string) => {
    setHomeScrollY(window.scrollY);
    setViewState({ view: 'project', projectId });
  };

  const navigateToHome = () => {
    setViewState({ view: 'home' });
  };

  useEffect(() => {
    if (viewState.view !== 'home') return;
    
    // Restore scroll position when returning home
    if (homeScrollY > 0) {
      setTimeout(() => {
        window.scrollTo({ top: homeScrollY, behavior: 'instant' });
      }, 0);
    }

    const sections = ['inicio', 'ecossistema', 'apoiar', 'calendario', 'projetos', 'impacto', 'contato'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for accuracy
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewState.view]);

  return (
    <div className="bg-court-white text-forest-dark selection:bg-champagne-gold/30 selection:text-forest-deep min-h-screen relative overflow-x-hidden">
      {/* Floating Elements */}
      <WhatsAppButton />

      {/* Navigation */}
      <Navbar activeSection={activeSection} alwaysSolid={viewState.view !== 'home'} />

      {viewState.view === 'home' ? (
        <main>
          {/* 1. HERO - Emociona */}
          <Hero />

          {/* 2. O ECOSSISTEMA - Explica */}
          <Ecossistema />

          {/* 3. COMO APOIAR - Convida */}
          <ComoApoiar />

          {/* 4. CALENDÁRIO 2026 - Mostra o calendário */}
          <Calendario />

          {/* 5. NOSSOS PROJETOS - Apresenta os projetos */}
          <Projetos onNavigate={(view, projectId) => {
            if (view === 'project' && projectId) {
              navigateToProject(projectId);
            }
          }} />

          {/* 6. IMPACTO - Demonstra impacto */}
          <Impacto />

          {/* 7. PARCEIROS */}
          <Parceiros />
        </main>
      ) : viewState.view === 'project' && viewState.projectId ? (
        <main>
          <ProjectPage projectId={viewState.projectId} onBack={navigateToHome} />
        </main>
      ) : null}

      {/* 8. RODAPÉ - Facilita o contato */}
      <Footer />
    </div>
  );
}

