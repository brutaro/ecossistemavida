/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Eixo {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

export interface CalendarioItem {
  id: string;
  month: string;
  title: string;
  type: 'sports' | 'culture';
  location: string;
  externalLink?: string;
}

export type ProjectCategory = 'esportes' | 'culturais' | 'permanentes' | 'aprovacao';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description?: string;
  isSeekingSponsor?: boolean;
}

export interface ImpactNumber {
  id: string;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface Partner {
  id: string;
  name: string;
  logoType: 'crest' | 'shield' | 'modern' | 'monogram';
  role: 'Master' | 'Apoiador' | 'Parceiro';
}
