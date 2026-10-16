import type { MetadataRoute } from 'next';

// Robôs de busca/consulta de IA liberados de forma explícita (GEO/AEO).
// Para bloquear só treinamento de modelos: troque a regra de GPTBot, CCBot, Google-Extended e Applebot-Extended por disallow.
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: 'https://kycert.com.br/sitemap.xml',
    host: 'https://kycert.com.br',
  };
}
