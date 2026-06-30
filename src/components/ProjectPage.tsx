import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Trophy, DollarSign, Target, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';

import imgAcminas from '../assets/PHOTO-2026-06-30-14-25-31.jpg';
import imgEcossistema from '../assets/PHOTO-2026-06-30-14-25-32 2.jpg';
import imgNovaLima from '../assets/PHOTO-2026-06-30-14-25-32 3.jpg';
import imgFiemg from '../assets/PHOTO-2026-06-30-14-25-32.jpg';

interface ProjectPageProps {
  projectId: string;
  onBack: () => void;
}

const PROJECT_DETAILS: Record<string, any> = {
  'p-esp-1': { // Copa Ecossistema Vida
    image: imgEcossistema,
    info: [
      { icon: Calendar, label: 'Data', value: '2 a 5 de Julho' },
      { icon: MapPin, label: 'Local', value: 'Clube Serra da Moeda' },
      { icon: Users, label: 'Público Estimado', value: '200 pessoas por dia' },
      { icon: Target, label: 'Perfil do Público', value: 'Alto poder aquisitivo, formadores de opinião, participantes de projetos sociais.' },
    ],
    features: ['Tênis de Qualidade', 'Networking e Relacionamentos', 'Natureza e Bem-Estar', 'Solidariedade e Transformação']
  },
  'p-esp-2': { // Copa ACMinas
    image: imgAcminas,
    info: [
      { icon: Calendar, label: 'Data', value: '19 a 27 de Setembro' },
      { icon: MapPin, label: 'Local', value: 'Minas Tênis Náutico Clube' },
      { icon: Users, label: 'Público Estimado', value: '200 pessoas por dia' },
      { icon: Target, label: 'Perfil do Público', value: 'Alto poder aquisitivo, formadores de opinião, participantes de projetos sociais.' },
    ],
    features: ['Tradição', 'Conexão', 'Propósito', 'Futuro']
  },
  'p-esp-3': { // Copa FIEMG
    image: imgFiemg,
    info: [
      { icon: Calendar, label: 'Data', value: 'Novembro / 2026' },
      { icon: MapPin, label: 'Local', value: 'Arena 7 Point Contagem' },
      { icon: Users, label: 'Público Estimado', value: '200 pessoas por dia' },
      { icon: Target, label: 'Perfil do Público', value: 'Industriários, empresários, formadores de opinião, participantes de projetos sociais.' },
    ],
    features: ['O ponto de encontro da indústria mineira', 'Esporte, Conexão & Propósito']
  },
  'p-esp-4': { // Nova Lima Tennis Open
    image: imgNovaLima,
    info: [
      { icon: Calendar, label: 'Data', value: '12 a 20 de Dezembro' },
      { icon: MapPin, label: 'Local', value: 'Minas Tênis Náutico Clube' },
      { icon: Users, label: 'Público Estimado', value: '10 mil pessoas (ao longo de 9 dias)' },
      { icon: Target, label: 'Perfil do Público', value: 'Tenistas em geral, associados do Minas Tênis Clube e aficionados do esporte.' },
      { icon: DollarSign, label: 'Premiação', value: 'U$ 63.000,00' },
      { icon: Trophy, label: 'Categoria', value: 'Challenger ATP 50' },
    ],
    features: ['Motivo Especial: Volta de um dos mais tradicionais torneios', 'Diferencial: Distribui pontos para o ranking mundial da ATP']
  }
};

export default function ProjectPage({ projectId, onBack }: ProjectPageProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = PROJECTS.find(p => p.id === projectId);
  const details = PROJECT_DETAILS[projectId];

  if (!project || !details) {
    return (
      <div className="bg-court-white text-forest-dark min-h-screen pt-32 pb-16 text-center">
        <h2>Projeto não encontrado.</h2>
        <button onClick={onBack} className="mt-4 text-champagne-gold">Voltar</button>
      </div>
    );
  }

  return (
    <div className="bg-court-white text-forest-dark min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-forest-deep hover:text-champagne-gold transition-colors duration-300 mb-8 font-sans font-semibold tracking-wide uppercase text-sm"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Projetos
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Informações Textuais */}
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-champagne-gold mb-3 block">
              Detalhes do Evento
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {project.name}
            </h2>
            <div className="w-16 h-[2px] bg-clay-earth/40 mb-6" />
            <p className="font-sans text-base text-forest-dark/75 leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="space-y-6 bg-white p-8 rounded-xl border border-champagne-gold/20 shadow-sm">
              <h3 className="font-display text-2xl font-bold text-forest-deep mb-4">Informações Importantes</h3>
              <ul className="space-y-4">
                {details.info.map((item: any, idx: number) => {
                  const Icon = item.icon;
                  return (
                    <li key={idx} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-forest-deep/5 flex items-center justify-center flex-shrink-0 text-forest-deep">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-forest-deep/60">{item.label}</span>
                        <span className="font-sans text-forest-dark font-medium">{item.value}</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            {details.features && details.features.length > 0 && (
              <div className="mt-8">
                <h4 className="font-sans font-bold text-sm uppercase tracking-widest text-champagne-gold mb-4">Destaques</h4>
                <div className="flex flex-wrap gap-2">
                  {details.features.map((feat: string, idx: number) => (
                    <span key={idx} className="px-3 py-1.5 bg-forest-deep text-white text-xs font-semibold rounded-full shadow-sm">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Imagem */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div 
              className="rounded-xl overflow-hidden border border-champagne-gold/20 shadow-xl group relative cursor-pointer"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img 
                src={details.image} 
                alt={`Cartaz ${project.name}`}
                className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-sans font-bold tracking-widest uppercase text-sm border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
                  Ampliar Imagem
                </span>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a
                href={`https://wa.me/5531999999999?text=Olá! Gostaria de participar ou apoiar o projeto "${project.name}".`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-champagne-gold text-forest-deep px-8 py-4 rounded font-bold uppercase tracking-widest text-sm hover:bg-forest-deep hover:text-white transition-colors duration-300 shadow-md"
              >
                Tenho Interesse! (Falar no WhatsApp)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-forest-dark/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 left-6 text-white hover:text-champagne-gold transition-colors p-2 bg-white/10 hover:bg-white/20 rounded-full"
              aria-label="Fechar"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={details.image}
              alt={`Cartaz Expandido ${project.name}`}
              className="w-[95vw] md:w-[85vw] lg:w-[90vw] max-w-[1400px] max-h-[95vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
