/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Copy, Heart, HelpCircle, Landmark, Sparkles, QrCode } from 'lucide-react';

export default function ComoApoiar() {
  const [activeTab, setActiveTab] = useState<'direto' | 'incentivo'>('direto');
  const [pixAmount, setPixAmount] = useState<number>(100);
  const [customPix, setCustomPix] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [showPixModal, setShowPixModal] = useState(false);

  // Corporate tax simulator state
  const [revenue, setRevenue] = useState<number>(500000);

  const pixOptions = [
    { value: 30, desc: 'Contribui com 1 bola de tênis profissional e kit lanche para o Tênis Escola' },
    { value: 100, desc: 'Garante 1 raquete escolar de alta durabilidade para novos alunos' },
    { value: 250, desc: 'Financia 1 mês integral de aulas esportivas e materiais para uma criança' },
    { value: 500, desc: 'Custeia o transporte e inscrição de um atleta juvenil em torneio nacional' },
  ];

  const handleCopyPix = () => {
    navigator.clipboard.writeText('00020101021126580014br.gov.bcb.pix0136ecossistemavidaproducao@pix.org.br5204000053039865405100.005802BR5917Ecossistema_Vida6009Nova_Lima62070503***6304ABCD');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const getImpactDescription = (val: number) => {
    if (val < 50) return 'Contribui para materiais esportivos básicos (bolas, lanches).';
    if (val < 150) return 'Garante materiais de alta qualidade (raquetes, uniforme oficial).';
    if (val < 400) return 'Custeia 1 mês de aula e lanche para um estudante de escola pública.';
    return 'Custeia treinamento especializado e viagens para torneios estaduais.';
  };

  return (
    <section
      id="apoiar"
      className="py-24 bg-forest-deep text-court-white relative overflow-hidden"
    >
      {/* Decorative organic background meshes */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-champagne-gold filter blur-[120px]" />
        <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full bg-clay-earth filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-champagne-gold mb-3 block">
            Faça Parte do Ecossistema
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Toda transformação começa quando alguém decide participar.
          </h2>
          <div className="w-16 h-[2px] bg-champagne-gold/30 mx-auto" />
        </div>

        {/* Tab Selector - Elegant glassmorphic pills */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded bg-forest-dark/60 border border-champagne-gold/20 flex gap-2">
            <button
              onClick={() => setActiveTab('direto')}
              className={`px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'direto'
                  ? 'bg-champagne-gold text-forest-deep shadow'
                  : 'text-court-white/70 hover:text-court-white hover:bg-white/5'
              }`}
            >
              Apoio Direto
            </button>
            <button
              onClick={() => setActiveTab('incentivo')}
              className={`px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold transition-all ${
                activeTab === 'incentivo'
                  ? 'bg-champagne-gold text-forest-deep shadow'
                  : 'text-court-white/70 hover:text-court-white hover:bg-white/5'
              }`}
            >
              Incentivo Fiscal
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'direto' ? (
              <motion.div
                key="direto"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left: Info card */}
                <div className="md:col-span-5 p-8 rounded bg-forest-dark/40 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded bg-champagne-gold/10 flex items-center justify-center text-champagne-gold mb-6 border border-champagne-gold/20">
                      <Heart className="w-5 h-5 fill-current" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-champagne-gold mb-4">
                      Fortaleça Projetos Permanentes
                    </h3>
                    <p className="font-sans text-sm text-court-white/80 leading-relaxed mb-6">
                      Seu apoio direto é direcionado integralmente à manutenção de projetos estruturantes, como o <strong>Tênis Escola</strong> e as oficinas culturais do <strong>Almanidade</strong>. 
                    </p>
                    <p className="font-sans text-xs text-court-white/60">
                      Prezamos pela transparência: cada centavo é auditado e prestado contas semestralmente.
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <span className="text-[10px] uppercase tracking-wider text-champagne-gold font-semibold block mb-2">Chave Pix Oficial CNPJ:</span>
                    <div className="text-xs font-mono bg-white/5 p-2.5 rounded border border-white/5 flex items-center justify-between">
                      <span className="text-court-white/90">55.123.456/0001-89</span>
                      <button onClick={handleCopyPix} className="text-champagne-gold hover:text-white transition-colors" aria-label="Copiar chave">
                        {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Dynamic Donation Calculator */}
                <div className="md:col-span-7 p-8 rounded border border-champagne-gold/25 bg-white/[0.03] backdrop-blur-sm flex flex-col justify-between">
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-bold mb-6">
                      Simulador de Doação & Impacto
                    </h4>
                    
                    {/* Pre-set amounts */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {pixOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => {
                            setPixAmount(opt.value);
                            setCustomPix('');
                          }}
                          className={`p-3.5 rounded border text-left transition-all ${
                            pixAmount === opt.value && !customPix
                              ? 'bg-champagne-gold/15 border-champagne-gold text-champagne-gold'
                              : 'bg-white/5 border-white/10 text-court-white/80 hover:border-white/20'
                          }`}
                        >
                          <span className="block text-lg font-bold font-sans">R$ {opt.value}</span>
                          <span className="text-[10px] text-court-white/65 line-clamp-1">{opt.desc}</span>
                        </button>
                      ))}
                    </div>

                    {/* Custom input */}
                    <div className="mb-6">
                      <label className="block text-[10px] uppercase tracking-wider text-court-white/50 mb-2">Ou digite outro valor (R$):</label>
                      <input
                        type="number"
                        placeholder="Ex: 150"
                        value={customPix}
                        onChange={(e) => {
                          setCustomPix(e.target.value);
                          setPixAmount(Number(e.target.value) || 0);
                        }}
                        className="w-full p-3 bg-white/5 border border-white/10 rounded text-sm text-court-white placeholder-white/30 focus:outline-none focus:border-champagne-gold focus:ring-1 focus:ring-champagne-gold"
                      />
                    </div>

                    {/* Simulated impact text */}
                    <div className="p-4 bg-clay-earth/10 border border-clay-earth/20 rounded-md text-xs text-court-white/90">
                      <span className="font-bold text-champagne-gold uppercase tracking-wider block mb-1">Impacto Esperado:</span>
                      {getImpactDescription(pixAmount || Number(customPix) || 0)}
                    </div>
                  </div>

                  <button
                    onClick={() => setShowPixModal(true)}
                    className="mt-8 w-full py-4 bg-champagne-gold hover:bg-champagne-gold/90 text-forest-deep rounded font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Quero contribuir com R$ {pixAmount || customPix || '0'}</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="incentivo"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
              >
                {/* Left: Info card */}
                <div className="md:col-span-5 p-8 rounded bg-forest-dark/40 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded bg-champagne-gold/10 flex items-center justify-center text-champagne-gold mb-6 border border-champagne-gold/20">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-champagne-gold mb-4">
                      Incentive com Imposto de Renda
                    </h3>
                    <p className="font-sans text-sm text-court-white/80 leading-relaxed mb-4">
                      Empresas sob regime de <strong>Lucro Real</strong> podem direcionar até <strong>2% de seu IR devido</strong> para nossos projetos esportivos e até <strong>4% para projetos culturais</strong> (através de Lei Rouanet).
                    </p>
                    <p className="font-sans text-sm text-court-white/80 leading-relaxed mb-6">
                      Pessoas Físicas que declaram no formulário completo também podem deduzir até <strong>7%</strong>. Zero custo extra para o doador.
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <h5 className="text-xs font-semibold text-champagne-gold mb-2">Projetos Aptos para Captação:</h5>
                    <ul className="text-xs space-y-2 text-court-white/70 list-disc pl-4 font-sans">
                      <li>Tênis Escola (Incentivo Federal ao Esporte)</li>
                      <li>Almanidade Integrada (Lei Rouanet)</li>
                      <li>Formação Sociocultural (LIG/MG)</li>
                    </ul>
                  </div>
                </div>

                {/* Right: Tax Redirection Estimator */}
                <div className="md:col-span-7 p-8 rounded border border-champagne-gold/25 bg-white/[0.03] backdrop-blur-sm flex flex-col justify-between">
                  <div>
                    <h4 className="font-sans text-xs uppercase tracking-widest text-champagne-gold font-bold mb-6">
                      Calculadora de Redirecionamento Corporativo
                    </h4>

                    {/* Simulator slider */}
                    <div className="mb-6">
                      <div className="flex justify-between text-xs text-court-white/85 mb-2">
                        <span>Imposto de Renda Anual Estimado:</span>
                        <span className="font-bold text-champagne-gold">
                          R$ {revenue.toLocaleString('pt-BR')}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="50000"
                        max="2000000"
                        step="50000"
                        value={revenue}
                        onChange={(e) => setRevenue(Number(e.target.value))}
                        className="w-full accent-champagne-gold cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-court-white/40 mt-1">
                        <span>R$ 50 mil</span>
                        <span>R$ 2 milhões</span>
                      </div>
                    </div>

                    {/* Redirection results */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-white/5 border border-white/10 rounded">
                        <span className="block text-[10px] uppercase tracking-wider text-court-white/60 mb-1">
                          Incentivo ao Esporte (2%)
                        </span>
                        <span className="text-xl font-bold text-champagne-gold">
                          R$ {(revenue * 0.02).toLocaleString('pt-BR')}
                        </span>
                      </div>
                      <div className="p-4 bg-white/5 border border-white/10 rounded">
                        <span className="block text-[10px] uppercase tracking-wider text-court-white/60 mb-1">
                          Lei Rouanet (4%)
                        </span>
                        <span className="text-xl font-bold text-champagne-gold">
                          R$ {(revenue * 0.04).toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-court-white/70 leading-relaxed bg-forest-dark/30 p-3.5 rounded border border-white/5">
                      <strong>Conclusão:</strong> Sem gastar um centavo a mais, sua marca pode direcionar até <strong>R$ {(revenue * 0.06).toLocaleString('pt-BR')}</strong> para impactar milhares de crianças e transformar a imagem de sua empresa.
                    </p>
                  </div>

                  <a
                    href="https://wa.me/5531999999999?text=Olá! Gostaria de uma apresentação executiva sobre como apoiar o Ecossistema Vida através de incentivos fiscais corporativos."
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 w-full py-4 bg-transparent border border-champagne-gold hover:bg-champagne-gold hover:text-forest-deep text-champagne-gold rounded font-bold text-xs uppercase tracking-widest transition-all text-center"
                  >
                    Falar com Consultor Fiscal
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* PIX Donation Interactive Modal */}
      <AnimatePresence>
        {showPixModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-dark/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-forest-deep border-2 border-champagne-gold/30 rounded-xl p-8 max-w-sm w-full text-center relative shadow-2xl"
            >
              <button
                onClick={() => setShowPixModal(false)}
                className="absolute top-4 right-4 text-court-white/60 hover:text-court-white text-sm"
              >
                ✕
              </button>

              <div className="w-12 h-12 rounded-full bg-champagne-gold/10 text-champagne-gold flex items-center justify-center mx-auto mb-4 border border-champagne-gold/20">
                <QrCode className="w-6 h-6" />
              </div>

              <h4 className="font-display text-xl font-bold text-court-white mb-2">Contribuição via PIX</h4>
              <p className="text-xs text-court-white/75 mb-6">
                Escaneie o código abaixo com o aplicativo de seu banco para concluir sua doação de <strong>R$ {pixAmount || customPix}</strong>.
              </p>

              {/* Mock QR Code representation in high contrast */}
              <div className="p-4 bg-white rounded-lg inline-block mb-6 shadow-md">
                <svg className="w-40 h-40 mx-auto" viewBox="0 0 100 100">
                  {/* Outer border markers */}
                  <rect x="5" y="5" width="25" height="25" fill="#0D3524" strokeWidth="2" />
                  <rect x="10" y="10" width="15" height="15" fill="#ffffff" />
                  <rect x="13" y="13" width="9" height="9" fill="#0D3524" />

                  <rect x="70" y="5" width="25" height="25" fill="#0D3524" strokeWidth="2" />
                  <rect x="75" y="10" width="15" height="15" fill="#ffffff" />
                  <rect x="78" y="13" width="9" height="9" fill="#0D3524" />

                  <rect x="5" y="70" width="25" height="25" fill="#0D3524" strokeWidth="2" />
                  <rect x="10" y="75" width="15" height="15" fill="#ffffff" />
                  <rect x="13" y="78" width="9" height="9" fill="#0D3524" />

                  {/* Random pixels to represent QR patterns */}
                  <rect x="40" y="15" width="5" height="10" fill="#0D3524" />
                  <rect x="50" y="5" width="10" height="5" fill="#0D3524" />
                  <rect x="45" y="25" width="10" height="5" fill="#0D3524" />
                  <rect x="35" y="35" width="15" height="15" fill="#0D3524" />
                  
                  <rect x="5" y="45" width="15" height="5" fill="#0D3524" />
                  <rect x="20" y="55" width="10" height="10" fill="#0D3524" />
                  <rect x="40" y="50" width="5" height="20" fill="#0D3524" />
                  
                  <rect x="55" y="40" width="15" height="15" fill="#0D3524" />
                  <rect x="75" y="45" width="20" height="5" fill="#0D3524" />
                  <rect x="80" y="55" width="10" height="15" fill="#0D3524" />
                  
                  <rect x="55" y="75" width="10" height="20" fill="#0D3524" />
                  <rect x="70" y="80" width="25" height="5" fill="#0D3524" />
                  <rect x="75" y="90" width="15" height="5" fill="#0D3524" />
                  
                  {/* Center branding leaf indicator in green */}
                  <rect x="44" y="44" width="12" height="12" rx="2" fill="#C59B4E" />
                  <path d="M50 46c-1.5 0-3 1.5-3 3s1.5 3 3 3 3-1.5 3-3-1.5-3-3-3z" fill="#0D3524" />
                </svg>
              </div>

              {/* Copy pix button */}
              <button
                onClick={handleCopyPix}
                className="w-full py-3 bg-champagne-gold hover:bg-champagne-gold/90 text-forest-deep rounded font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 mb-4"
              >
                {isCopied ? (
                  <>
                    <span>Copiado com sucesso!</span>
                    <Check className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Copiar Chave Copia e Cola</span>
                    <Copy className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                onClick={() => setShowPixModal(false)}
                className="text-xs text-court-white/55 hover:text-court-white underline"
              >
                Voltar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
