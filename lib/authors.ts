import { BASE, ORG_ID } from './site';

/**
 * Autoria do conteúdo. Hoje todo o conteúdo é assinado pela equipe (Organization).
 * Para passar a assinar com pessoa real (peso de E-E-A-T), adicione uma entrada com
 * type: 'Person' (name, jobTitle, linkedin, bio) e use o id em `author` no post.
 */
export type Author = {
  id: string;
  type: 'Organization' | 'Person';
  name: string;
  jobTitle?: string;
  bio: string;
  linkedin?: string;
  url: string;
};

export const AUTHORS: Record<string, Author> = {
  equipe: {
    id: 'equipe',
    type: 'Organization',
    name: 'Equipe de Compliance kycert',
    bio: 'Time da kycert que acompanha as normas do Banco Central, da CVM e da SUSEP e as traduz em processo de onboarding e evidência para instituições reguladas.',
    url: `${BASE}/sobre`,
  },
};

export const DEFAULT_AUTHOR = 'equipe';

export function authorSchema(a: Author) {
  if (a.type === 'Person') {
    return {
      '@type': 'Person',
      name: a.name,
      ...(a.jobTitle ? { jobTitle: a.jobTitle } : {}),
      url: a.url,
      worksFor: { '@id': ORG_ID },
      ...(a.linkedin ? { sameAs: [a.linkedin] } : {}),
    };
  }
  return { '@type': 'Organization', '@id': ORG_ID, name: 'kycert', url: `${BASE}/` };
}
