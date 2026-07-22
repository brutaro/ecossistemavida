/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText, Cookie } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  documentType: 'privacy' | 'terms' | 'cookies' | null;
  onClose: () => void;
}

export default function LegalModal({ isOpen, documentType, onClose }: LegalModalProps) {
  if (!isOpen || !documentType) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-forest-dark/90 backdrop-blur-md font-sans"
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          className="bg-court-white text-forest-deep rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden relative border border-champagne-gold/30"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-forest-deep/10 bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest-deep/5 flex items-center justify-center text-forest-deep">
                {documentType === 'privacy' && <Shield className="w-5 h-5" />}
                {documentType === 'terms' && <FileText className="w-5 h-5" />}
                {documentType === 'cookies' && <Cookie className="w-5 h-5 text-champagne-gold" />}
              </div>
              <h2 className="font-display text-2xl font-bold text-forest-deep">
                {documentType === 'privacy' && 'Política de Privacidade'}
                {documentType === 'terms' && 'Termos de Uso'}
                {documentType === 'cookies' && 'Política de Cookies'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-forest-deep/50 hover:text-forest-deep transition-colors rounded-full hover:bg-forest-deep/5"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10">
            <div className="prose prose-sm md:prose-base prose-green max-w-none text-forest-dark">
              {documentType === 'privacy' && (
                <>
                  <p className="text-xs text-forest-deep/60"><strong>Última atualização:</strong> Julho de 2026</p>
                  
                  <h3>1. Visão Geral e Controlador dos Dados</h3>
                  <p>A <strong>Associação Ecossistema Vida</strong> (CNPJ: 55.123.456/0001-89) preza pela transparência, privacidade e proteção dos seus dados pessoais. Esta política descreve como tratamos informações em nosso site, em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) e o Marco Civil da Internet (Lei 12.965/2014).</p>

                  <h3>2. Quais dados coletamos, retenção e banco de dados</h3>
                  <p>Informamos que <strong>atualmente este website não possui banco de dados próprio para armazenamento de dados de cadastro de usuários</strong>. As informações tratadas dividem-se em:</p>
                  <ul>
                    <li><strong>Armazenamento Local no Navegador (localStorage):</strong> Guardamos apenas suas preferências de consentimento de cookies (chave <code>ev_cookie_consent</code>) e o estado de exibição de avisos (chave <code>ev_intro_popup_dismissed</code>) diretamente no seu dispositivo, para que você não precise responder ao banner a cada carregamento.</li>
                    <li><strong>Contatos diretos (E-mail e WhatsApp):</strong> Caso você decida nos contactar voluntariamente via e-mail ou WhatsApp, seu endereço ou número telefônico e o teor da mensagem serão utilizados exclusivamente para responder à sua solicitação, fundamentando-se em legítimo interesse ou diligências pré-contratuais.</li>
                    <li><strong>Registros Técnicos de Acesso (Logs):</strong> Conforme exigência legal do art. 15 do Marco Civil da Internet (Lei 12.965/2014), o provedor de hospedagem de infraestrutura do site pode registrar de forma automatizada seu endereço IP, data, hora e agente do navegador pelo prazo mínimo legal de 6 (seis) meses para fins de segurança da informação e auditoria.</li>
                  </ul>

                  <h3>3. Compartilhamento de Dados</h3>
                  <p>A Associação Ecossistema Vida não comercializa, aluga ou compartilha seus dados com terceiros para fins publicitários. O eventual tráfego de dados técnicos ocorre exclusivamente com prestadores de serviços de infraestrutura e hospedagem sob sigilo e padrões adequados de segurança.</p>

                  <h3>4. Seus Direitos como Titular de Dados (Art. 18 da LGPD)</h3>
                  <p>Você pode solicitar a qualquer momento:</p>
                  <ul>
                    <li>Confirmação da existência de tratamento e acesso aos dados.</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                    <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                    <li>Revogação do consentimento concedido anteriormente.</li>
                  </ul>

                  <h3>5. Encarregado pelo Tratamento de Dados (DPO)</h3>
                  <p>Para exercer qualquer um dos seus direitos ou tirar dúvidas sobre esta política, entre em contato direto com o nosso Encarregado de Proteção de Dados:</p>
                  <div className="p-4 bg-forest-deep/5 border border-forest-deep/15 rounded-lg my-4 font-sans">
                    <p className="m-0"><strong>Encarregado (DPO):</strong> Vinícius Botelho</p>
                    <p className="m-0"><strong>E-mail oficial:</strong> <a href="mailto:contato.ecossistemavida@gmail.com" className="text-champagne-gold font-bold underline">contato.ecossistemavida@gmail.com</a></p>
                  </div>
                </>
              )}

              {documentType === 'terms' && (
                <>
                  <p className="text-xs text-forest-deep/60"><strong>Última atualização:</strong> Julho de 2026</p>

                  <h3>1. Aceitação dos Termos</h3>
                  <p>Ao navegar na plataforma do Ecossistema Vida, você declara estar ciente e de acordo com estes Termos de Uso e com a nossa Política de Privacidade. Caso discorde de qualquer condição, pedimos que interrompa o uso do site.</p>

                  <h3>2. Uso da Plataforma</h3>
                  <p>O site possui caráter informativo e institucional, apresentando nossos projetos sociais, esportivos e culturais, além de viabilizar a conexão com apoiadores. É vedada qualquer utilização do site para fins ilícitos, que viole direitos de terceiros ou comprometa a integridade dos sistemas.</p>

                  <h3>3. Identidade Visual e Propriedade Intelectual</h3>
                  <p>Todo o conteúdo, marcas, ilustrações e fotos são de propriedade exclusiva da Associação Ecossistema Vida ou licenciados por esta.</p>
                  <p><strong>Regra de Identidade da Marca:</strong> Na veiculação ou reprodução da nossa logo (arquivo de imagem oficial), é obrigatório manter o texto associado "ECOSSISTEMA VIDA" ao lado da imagem, preservando a integridade da identidade visual institucional.</p>

                  <h3>4. Responsabilidade e Marco Civil da Internet</h3>
                  <p>Em conformidade com a Lei 12.965/2014 (Marco Civil da Internet), empenhamo-nos para assegurar o correto funcionamento da plataforma. Não nos responsabilizamos por falhas decorrentes de instabilidades na conexão de internet do usuário ou de prestadores de serviços de telecomunicações de terceiros.</p>

                  <h3>5. Canais de Atendimento</h3>
                  <p>Dúvidas sobre os Termos de Uso podem ser enviadas ao e-mail institucional: <a href="mailto:contato.ecossistemavida@gmail.com" className="text-champagne-gold font-bold underline">contato.ecossistemavida@gmail.com</a>.</p>
                </>
              )}

              {documentType === 'cookies' && (
                <>
                  <p className="text-xs text-forest-deep/60"><strong>Última atualização:</strong> Julho de 2026</p>

                  <h3>1. O que são Cookies?</h3>
                  <p>Cookies são pequenos arquivos de texto armazenados no seu navegador ao visitar um site. Eles servem para guardar preferências, garantir o correto carregamento de recursos e analisar a utilização da plataforma.</p>

                  <h3>2. Quais tipos de cookies utilizamos?</h3>
                  <p>Em consonância com a LGPD, categorizamos os cookies em nosso site das seguintes formas:</p>
                  
                  <div className="space-y-4 my-6">
                    <div className="p-4 border border-forest-deep/15 rounded bg-gray-50">
                      <h4 className="font-bold text-forest-deep m-0">1. Cookies Estritamente Necessários (Sempre Ativos)</h4>
                      <p className="text-xs text-forest-dark/80 mt-1 mb-0">Essenciais para o funcionamento básico e segurança do site. Incluem o salvamento local (via <code>localStorage</code>) das suas preferências de consentimento. Não coletam dados pessoais para rastreamento.</p>
                    </div>

                    <div className="p-4 border border-forest-deep/15 rounded bg-gray-50">
                      <h4 className="font-bold text-forest-deep m-0">2. Cookies de Desempenho e Analytics (Opcionais)</h4>
                      <p className="text-xs text-forest-dark/80 mt-1 mb-0">Permitem mensurar o volume de acessos e entender a navegação de forma agregada e anônima. Atualmente não temos scripts ativos dessa categoria sem sua autorização prévia.</p>
                    </div>

                    <div className="p-4 border border-forest-deep/15 rounded bg-gray-50">
                      <h4 className="font-bold text-forest-deep m-0">3. Cookies de Marketing e Publicidade (Opcionais)</h4>
                      <p className="text-xs text-forest-dark/80 mt-1 mb-0">Seriam utilizados para exibir anúncios relevantes ou medir campanhas em redes sociais. Atualmente inativos em nosso portal.</p>
                    </div>
                  </div>

                  <h3>3. Como gerenciar ou revogar seu consentimento</h3>
                  <p>Você possui total controle sobre as suas preferências. Você pode alterar a sua escolha a qualquer momento clicando no botão <strong>"Gerenciar Cookies"</strong> localizado no rodapé do nosso site, ou limpando o histórico e dados de navegação do seu próprio navegador.</p>
                </>
              )}
            </div>
          </div>
          
          {/* Footer of modal */}
          <div className="p-6 border-t border-forest-deep/10 bg-gray-50 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-forest-deep text-court-white rounded text-sm font-bold uppercase tracking-wider hover:bg-forest-dark transition-colors"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

