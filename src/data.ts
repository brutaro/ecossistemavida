/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Eixo, CalendarioItem, Project, ImpactNumber, Partner } from './types';

export const HERO_DATA = {
  title: 'Conectar. Desenvolver. Transformar.',
  subtitle: 'Um ecossistema que une pessoas, organizações e projetos para gerar transformação social por meio do esporte, da cultura, da educação, da saúde, dos negócios e da convivência.',
};

export const ECOSSISTEMA_INTRO = {
  title: 'Muito mais que uma organização.',
  text: 'O Ecossistema Vida atua como um hub de transformação integrada, promovendo sinergia entre diferentes eixos para desenvolver o potencial humano em sua plenitude. Conectamos quem quer apoiar com quem lidera projetos de impacto real na comunidade, promovendo excelência de ponta a ponta.',
};

export const EIXOS: Eixo[] = [
  {
    id: 'esporte',
    emoji: '🏆',
    title: 'Esporte',
    description: 'Incentivo à prática esportiva, formação de atletas de base e torneios de alto rendimento que geram disciplina e saúde.',
  },
  {
    id: 'cultura',
    emoji: '🎭',
    title: 'Cultura',
    description: 'Ações artísticas, musicais e literárias que enriquecem o repertório cultural local e criam fortes laços comunitários.',
  },
  {
    id: 'educacao',
    emoji: '📚',
    title: 'Educação',
    description: 'Desenvolvimento humano integral, raciocínio lógico, suporte escolar e oficinas com foco no protagonismo juvenil.',
  },
  {
    id: 'saude',
    emoji: '❤️',
    title: 'Saúde',
    description: 'Promoção da qualidade de vida ativa, acompanhamento preventivo, conscientização e bem-estar físico e mental.',
  },
  {
    id: 'convivencia',
    emoji: '🤝',
    title: 'Convivência',
    description: 'Criação de espaços seguros e eventos de integração que reforçam os laços familiares e sociais entre gerações.',
  },
  {
    id: 'negocios',
    emoji: '💼',
    title: 'Negócios',
    description: 'Fomento à economia criativa local, parcerias corporativas e networking que fortalecem o ecossistema financeiro do impacto.',
  },
  {
    id: 'felicidade',
    emoji: '🌱',
    title: 'Felicidade',
    description: 'Ciência do bem-estar aplicada, ensinando resiliência, psicologia positiva e práticas para viver com propósito.',
  },
];

export const CALENDARIO: CalendarioItem[] = [
  {
    id: 'cal-1',
    month: 'JULHO',
    title: 'Copa Ecossistema Vida',
    type: 'sports',
    location: 'Sede Principal - Nova Lima',
  },
  {
    id: 'cal-2',
    month: 'AGOSTO',
    title: 'Almanidade',
    type: 'culture',
    location: 'Teatro Municipal',
    externalLink: 'https://bileto.sympla.com.br/event/121526?share_id=1-copiarlink',
  },
  {
    id: 'cal-3',
    month: 'SETEMBRO',
    title: 'Copa ACMinas',
    type: 'sports',
    location: 'Clube de Tênis Integrado',
  },
  {
    id: 'cal-4',
    month: 'NOVEMBRO',
    title: 'Copa FIEMG',
    type: 'sports',
    location: 'Arena Metropolitana',
  },
  {
    id: 'cal-5',
    month: 'DEZEMBRO',
    title: 'Nova Lima Tennis Open',
    type: 'sports',
    location: 'Sede Principal - Nova Lima',
  },
];

export const PROJECTS: Project[] = [
  // Eventos Esportivos
  {
    id: 'p-esp-1',
    name: 'Copa Ecossistema Vida',
    category: 'esportes',
    description: 'O maior torneio de integração regional, unindo entusiastas e profissionais do esporte.',
  },
  {
    id: 'p-esp-2',
    name: 'Copa ACMinas',
    category: 'esportes',
    description: 'Torneio empresarial focado em impulsionar o esporte e o networking saudável.',
  },
  {
    id: 'p-esp-3',
    name: 'Copa FIEMG',
    category: 'esportes',
    description: 'Tradicional competição de tênis reunindo a comunidade industrial e empresarial.',
  },
  {
    id: 'p-esp-4',
    name: 'Nova Lima Tennis Open',
    category: 'esportes',
    description: 'Torneio que coroa o calendário anual de tênis, com disputas acirradas e grande público.',
  },
  // Eventos Culturais
  {
    id: 'p-cul-1',
    name: 'Almanidade',
    category: 'culturais',
    description: 'Encontro cultural unindo debates, literatura, música instrumental e palestras transformadoras.',
  },
  {
    id: 'p-cul-2',
    name: 'Clube da Música',
    category: 'culturais',
    description: 'Oficinas continuadas de instrumentos acústicos e formação de corais para a comunidade.',
  },
  {
    id: 'p-cul-3',
    name: 'Cine Convivência',
    category: 'culturais',
    description: 'Sessões de cinema ao ar livre seguidas de debates enriquecedores sobre cidadania.',
  },
  // Projetos Permanentes
  {
    id: 'p-per-1',
    name: 'Tênis Escola',
    category: 'permanentes',
    description: 'Iniciação esportiva gratuita em tênis para crianças de escolas públicas, ensinando disciplina e valores.',
  },
  {
    id: 'p-per-2',
    name: 'Escola do Movimento',
    category: 'permanentes',
    description: 'Desenvolvimento motor e psicomotor na primeira infância através de brincadeiras e ginástica lúdica.',
  },
  {
    id: 'p-per-3',
    name: 'Escola da Mente',
    category: 'permanentes',
    description: 'Oficinas de xadrez, raciocínio computacional, oratória e técnicas de meditação focada para jovens.',
  },
  {
    id: 'p-per-4',
    name: 'Equipes',
    category: 'permanentes',
    description: 'Suporte, treinamento físico de ponta e patrocínio para atletas juvenis locais em torneios nacionais.',
  },
  // Em Aprovação (Buscando Patrocinadores)
  {
    id: 'p-apr-1',
    name: 'Reciclagem Sustentável',
    category: 'aprovacao',
    description: 'Projeto socioambiental focado no descarte de resíduos esportivos e economia circular.',
    isSeekingSponsor: true,
  },
  {
    id: 'p-apr-2',
    name: 'Circuito de Vôlei de Praia',
    category: 'aprovacao',
    description: 'Criação de quadras públicas temporárias e clínicas do esporte para jovens carentes.',
    isSeekingSponsor: true,
  },
  {
    id: 'p-apr-3',
    name: 'Formação de Professores',
    category: 'aprovacao',
    description: 'Capacitação pedagógica de educadores sociais em metodologias esportivas inclusivas.',
    isSeekingSponsor: true,
  },
  {
    id: 'p-apr-4',
    name: 'Equipe Alto Rendimento',
    category: 'aprovacao',
    description: 'Projeto para dar estrutura integral de equipe técnica (técnico, preparador e fisio) a talentos de tênis.',
    isSeekingSponsor: true,
  },
];

export const IMPACTO: ImpactNumber[] = [
  { id: 'i-1', value: 18, label: 'Projetos permanentes & eventos', prefix: '+' },
  { id: 'i-2', value: 12500, label: 'Pessoas impactadas diretamente', prefix: '+', suffix: '' },
  { id: 'i-3', value: 65, label: 'Parceiros & apoiadores ativos', prefix: '+' },
  { id: 'i-4', value: 140, label: 'Eventos realizados com sucesso', prefix: '+' },
];

export const PARTNERS: Partner[] = [
  { id: 'pa-1', name: 'DYNAMIS', logoType: 'crest', role: 'Master' },
  { id: 'pa-2', name: 'ACMinas', logoType: 'shield', role: 'Master' },
  { id: 'pa-3', name: 'FIEMG', logoType: 'shield', role: 'Master' },
  { id: 'pa-4', name: 'Prefeitura Nova Lima', logoType: 'modern', role: 'Apoiador' },
  { id: 'pa-5', name: 'Instituto Tênis', logoType: 'crest', role: 'Apoiador' },
  { id: 'pa-6', name: 'Lei de Incentivo ao Esporte', logoType: 'modern', role: 'Parceiro' },
  { id: 'pa-7', name: 'Minas Tênis Clube (Parceiro de Treinos)', logoType: 'crest', role: 'Parceiro' },
  { id: 'pa-8', name: 'Sesc Senac', logoType: 'modern', role: 'Parceiro' },
];
