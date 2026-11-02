import type { Term } from './glossary';
import kyc from '@/content/glossario/kyc';
import kyb from '@/content/glossario/kyb';
import kyt from '@/content/glossario/kyt';
import pep from '@/content/glossario/pep';
import ubo from '@/content/glossario/ubo';
import abr from '@/content/glossario/abr';
import pldft from '@/content/glossario/pld-ft';
import cddedd from '@/content/glossario/cdd-edd';

/** Ordem de exibição no índice /glossario */
export const TERMS: Term[] = [kyc, kyb, kyt, pep, ubo, abr, pldft, cddedd];

export function getTerm(slug: string): Term | undefined {
  return TERMS.find((t) => t.slug === slug);
}
