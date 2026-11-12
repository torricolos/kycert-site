import type { Post } from './posts';
import { isPublished } from './posts';

import p01 from '@/content/blog/resolucao-bcb-520-psav';
import p02 from '@/content/blog/comprovar-pld-ft-fiscalizacao-bacen';
import p03 from '@/content/blog/beneficiario-final-ubo-kyb';
import p04 from '@/content/blog/checklist-prontidao-fiscalizacao';
import p05 from '@/content/blog/lei-14286-cambio-cadastro';
import p07 from '@/content/blog/seguradoras-susep-onboarding-pld';
import p08 from '@/content/blog/cooperativas-credito-3978-associados';
import p09 from '@/content/blog/abertura-conta-fintech-kyb-escala';
import p10 from '@/content/blog/consorcios-mercado-capitais-onboarding';
// Calendário editorial: posts com datePublished no futuro não aparecem (índice, sitemap, rota) até a data chegar.
import n01 from '@/content/blog/circular-3978-checklist-pld-ft';
import n02 from '@/content/blog/lista-pep-como-consultar';
import n03 from '@/content/blog/kyt-monitoramento-transacional-pix';
import n04 from '@/content/blog/abordagem-baseada-em-risco-abr-exemplo-pratico';
import n05 from '@/content/blog/resolucao-cvm-50-pld-ft';
import n06 from '@/content/blog/kyb-para-psav-exchanges';

export const ALL_POSTS: Post[] = [p01, p02, p03, p04, p05, p07, p08, p09, p10, n01, n02, n03, n04, n05, n06];

/** Posts já publicados, do mais recente para o mais antigo. */
export function publishedPosts(today?: string): Post[] {
  return ALL_POSTS.filter((p) => isPublished(p, today)).sort((a, b) =>
    a.datePublished === b.datePublished ? a.slug.localeCompare(b.slug) : b.datePublished.localeCompare(a.datePublished),
  );
}

export function getPost(slug: string): Post | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}
