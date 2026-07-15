/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, ArrowUpRight, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [userMessage, setUserMessage] = useState('');

  const phone = '5531999999999'; // Placeholder professional WhatsApp number

  const topics = [
    { id: 'apoio', label: 'Quero apoiar o ecossistema', text: 'Olá! Tenho interesse em saber como apoiar os projetos permanentes do Ecossistema Vida.' },
    { id: 'torneio', label: 'Inscrições em torneios / Copas', text: 'Olá! Gostaria de mais informações sobre o calendário de copas e inscrições do Ecossistema Vida.' },
    { id: 'geral', label: 'Outras informações', text: 'Olá! Gostaria de conversar com a equipe do Ecossistema Vida.' },
  ];

  const handleSend = (textToSend: string) => {
    const finalMsg = encodeURIComponent(textToSend + (userMessage ? `\n\nMensagem adicional: ${userMessage}` : ''));
    window.open(`https://wa.me/${phone}?text=${finalMsg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-4 w-80 rounded-xl overflow-hidden shadow-2xl border border-champagne-gold/20 backdrop-blur-xl bg-forest-deep/95 text-court-white"
          >
            {/* Header */}
            <div className="bg-forest-dark p-4 border-b border-champagne-gold/15 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-champagne-gold flex items-center justify-center text-forest-deep">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm tracking-wide text-champagne-gold uppercase">Ecossistema Vida</h4>
                  <p className="text-xs text-court-white/70">Resposta média: imediata</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-court-white/60 hover:text-court-white transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              <p className="text-xs text-court-white/80 leading-relaxed">
                Bem-vindo ao nosso espaço de atendimento. Como podemos te ajudar a fazer parte dessa transformação hoje?
              </p>

              {!selectedTopic ? (
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-wider text-champagne-gold font-semibold">Escolha um assunto:</p>
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setSelectedTopic(t.id);
                        setUserMessage('');
                      }}
                      className="w-full text-left p-3 rounded bg-white/5 hover:bg-white/10 border border-white/10 hover:border-champagne-gold/30 transition-all text-xs flex justify-between items-center group"
                    >
                      <span>{t.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-champagne-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-wider text-champagne-gold font-semibold">Mensagem selecionada</span>
                    <button
                      onClick={() => setSelectedTopic(null)}
                      className="text-[10px] underline text-court-white/50 hover:text-court-white"
                    >
                      Voltar ao menu
                    </button>
                  </div>
                  <div className="p-3 bg-white/5 rounded text-xs text-court-white/90 border border-white/5 italic">
                    "{topics.find(t => t.id === selectedTopic)?.label}"
                  </div>
                  
                  <textarea
                    rows={2}
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Adicione observações aqui se desejar..."
                    className="w-full p-2 bg-white/5 border border-white/10 rounded text-xs text-court-white focus:outline-none focus:border-champagne-gold/50 placeholder-white/40 resize-none"
                  />

                  <p className="text-[9px] text-court-white/50 leading-tight">
                    Ao iniciar a conversa, você concorda que possamos utilizar seu número para responder à sua solicitação, conforme nossa Política de Privacidade.
                  </p>

                  <button
                    onClick={() => {
                      const baseText = topics.find(t => t.id === selectedTopic)?.text || '';
                      handleSend(baseText);
                    }}
                    className="w-full py-2.5 bg-champagne-gold text-forest-deep rounded font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-champagne-gold/90 transition-colors"
                  >
                    <span>Iniciar Conversa</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-white/5 py-2 px-4 border-t border-white/5 flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[9px] uppercase tracking-widest text-court-white/50 font-medium">Equipe de Atendimento Ativa</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full shadow-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center relative group border-2 border-court-white/20 transition-all"
        style={{
          boxShadow: '0 8px 30px rgba(16, 185, 129, 0.4)'
        }}
        aria-label="Atendimento Ecossistema Vida"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-champagne-gold"></span>
        </span>
        
        {isOpen ? (
          <X className="w-6 h-6 animate-spin-once" />
        ) : (
          <MessageSquare className="w-6 h-6 fill-current" />
        )}
        
        {/* Hover label */}
        <span className="absolute right-16 bg-forest-dark text-court-white border border-champagne-gold/20 text-xs py-1.5 px-3 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-wide font-medium">
          Fale Conosco no WhatsApp
        </span>
      </motion.button>
    </div>
  );
}
