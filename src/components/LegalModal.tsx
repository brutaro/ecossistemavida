/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  documentType: 'privacy' | 'terms' | null;
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
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-forest-dark/90 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          className="bg-court-white text-forest-deep rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-forest-deep/10 bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-forest-deep/5 flex items-center justify-center text-forest-deep">
                {documentType === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <h2 className="font-display text-2xl font-bold text-forest-deep">
                {documentType === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-forest-deep/50 hover:text-forest-deep transition-colors rounded-full hover:bg-forest-deep/5"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10">
            <div className="prose prose-sm md:prose-base prose-green max-w-none">
              {documentType === 'privacy' && (
                <>
                  <p><strong>Última atualização:</strong> Agosto de 2026</p>
                  
                  <h3>1. Visão Geral</h3>
                  <p>A Associação Ecossistema Vida preza pela sua privacidade e pela proteção dos seus dados pessoais. Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).</p>

                  <h3>2. Quais dados coletamos e por quê</h3>
                  <p>No funcionamento desta plataforma, podemos coletar as seguintes categorias de dados:</p>
                  <ul>
                    <li><strong>Dados de Navegação e Cookies:</strong> Endereço IP, tipo de navegador, páginas acessadas e tempo de permanência. Utilizamos estes dados mediante seu consentimento (através do banner de cookies) para entender o tráfego do site e melhorar sua experiência.</li>
                    <li><strong>Dados de Contato:</strong> Caso você entre em contato conosco por e-mail ou WhatsApp, teremos acesso ao seu número de telefone, endereço de e-mail e quaisquer informações fornecidas voluntariamente na mensagem. Utilizamos esses dados estritamente para responder à sua solicitação (legítimo interesse ou cumprimento de diligências pré-contratuais).</li>
                  </ul>

                  <h3>3. Compartilhamento de Dados</h3>
                  <p>A Associação Ecossistema Vida não vende, aluga ou compartilha seus dados pessoais com terceiros para fins comerciais. Podemos compartilhar informações apenas com provedores de tecnologia essenciais para o funcionamento do site (ex: serviços de hospedagem) que também estão submetidos a obrigações de confidencialidade.</p>

                  <h3>4. Tempo de Retenção</h3>
                  <p>Os dados serão armazenados apenas pelo tempo necessário para cumprir com as finalidades para as quais foram coletados, ou para cumprimento de obrigações legais e regulatórias.</p>

                  <h3>5. Seus Direitos (Art. 18 da LGPD)</h3>
                  <p>Como titular dos dados, você tem o direito de:</p>
                  <ul>
                    <li>Confirmar a existência de tratamento.</li>
                    <li>Acessar seus dados.</li>
                    <li>Corrigir dados incompletos ou desatualizados.</li>
                    <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                    <li>Revogar o seu consentimento a qualquer momento.</li>
                  </ul>

                  <h3>6. Contato com o Encarregado de Dados (DPO)</h3>
                  <p>Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco através do e-mail oficial: <a href="mailto:contato.ecossistemavida@gmail.com" className="text-champagne-gold font-bold">contato.ecossistemavida@gmail.com</a>.</p>
                </>
              )}

              {documentType === 'terms' && (
                <>
                  <p><strong>Última atualização:</strong> Agosto de 2026</p>

                  <h3>1. Aceitação dos Termos</h3>
                  <p>Ao acessar e navegar no site do Ecossistema Vida, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Caso não concorde com qualquer parte destes termos, recomendamos que não utilize a plataforma.</p>

                  <h3>2. Uso da Plataforma</h3>
                  <p>Este site tem como objetivo apresentar a Associação Ecossistema Vida, seus projetos e viabilizar o contato de parceiros e apoiadores. O usuário concorda em utilizar o site apenas para fins lícitos e de maneira que não infrinja os direitos de terceiros, nem restrinja ou iniba o uso do site por qualquer outra pessoa.</p>

                  <h3>3. Propriedade Intelectual</h3>
                  <p>Todo o conteúdo deste site, incluindo, mas não se limitando a: textos, gráficos, logotipos (ex: logo "ECOSSISTEMA VIDA"), ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade exclusiva da Associação Ecossistema Vida ou de seus fornecedores de conteúdo, estando protegido pelas leis brasileiras e internacionais de direitos autorais.</p>
                  <p>O texto "ECOSSISTEMA VIDA" associado à logo não deve ser removido ou alterado em reproduções autorizadas.</p>

                  <h3>4. Limitação de Responsabilidade</h3>
                  <p>A Associação Ecossistema Vida envida esforços para manter as informações do site corretas e atualizadas. No entanto, não garantimos a precisão absoluta, completude ou atualidade de todos os dados. Em conformidade com o Marco Civil da Internet (Lei 12.965/2014), não nos responsabilizamos por indisponibilidades temporárias do sistema decorrentes de problemas técnicos de terceiros.</p>

                  <h3>5. Links Externos</h3>
                  <p>Nosso site pode conter links para outros sites de interesse (ex: Instagram, WhatsApp). Uma vez que você use esses links para sair do nosso site, observe que não temos controle sobre esse outro site. Portanto, não somos responsáveis pela proteção e privacidade de qualquer informação que você fornecer enquanto visita tais sites, os quais não são regidos pela nossa Política de Privacidade.</p>

                  <h3>6. Canais de Atendimento</h3>
                  <p>Para dúvidas referentes aos nossos Termos de Uso ou para registrar qualquer solicitação, entre em contato através do e-mail: <a href="mailto:contato.ecossistemavida@gmail.com" className="text-champagne-gold font-bold">contato.ecossistemavida@gmail.com</a>.</p>
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
