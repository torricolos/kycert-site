'use client';

import {
  drawAvatarCircle,
  drawAvatarSquare,
  drawCoverDark,
  drawCoverEditorial,
  drawCoverSplit,
  drawCoverStory,
  drawPostQuote,
  type DrawFn,
} from './drawing';

export type PlatformItem = {
  kind: 'avatar' | 'cover' | 'post';
  label: string;
  size: [number, number];
  rec: string;
  draw: DrawFn;
  downloads: Array<[number | [number, number], string]>;
};

export type Platform = {
  name: string;
  color: string;
  icon: string;
  items: PlatformItem[];
};

export const PLATFORMS: Platform[] = [
  {
    name: 'LinkedIn',
    color: '#0A66C2',
    icon: 'in',
    items: [
      { kind: 'avatar', label: 'Logo empresa', size: [400, 400], rec: '400×400 ou 800×800. Crop circular automático.', draw: drawAvatarCircle, downloads: [[400, 'linkedin-logo-400.png'], [800, 'linkedin-logo-800.png']] },
      { kind: 'cover',  label: 'Capa página empresa', size: [1128, 191], rec: '1128×191. Conteúdo central — laterais cortam no mobile.', draw: drawCoverSplit, downloads: [[[1128, 191], 'linkedin-cover-empresa.png']] },
      { kind: 'cover',  label: 'Capa perfil pessoal', size: [1584, 396], rec: '1584×396 (4:1). Forte para fundadores.', draw: drawCoverEditorial, downloads: [[[1584, 396], 'linkedin-cover-perfil.png']] },
      { kind: 'cover',  label: 'Post imagem', size: [1200, 627], rec: '1200×627 (1.91:1). Para link cards e posts.', draw: drawCoverDark, downloads: [[[1200, 627], 'linkedin-post.png']] },
    ],
  },
  {
    name: 'Instagram',
    color: '#E4405F',
    icon: 'ig',
    items: [
      { kind: 'avatar', label: 'Foto de perfil', size: [320, 320], rec: '320×320 mínimo. Circular.', draw: drawAvatarCircle, downloads: [[320, 'instagram-perfil-320.png'], [800, 'instagram-perfil-800.png']] },
      { kind: 'post',   label: 'Post feed (1:1)', size: [1080, 1080], rec: '1080×1080. Versão padrão quadrada.', draw: drawPostQuote, downloads: [[[1080, 1080], 'instagram-post-quote.png']] },
      { kind: 'cover',  label: 'Story / Reels', size: [1080, 1920], rec: '1080×1920 (9:16). Safe-area 250px no topo e 350px no rodapé.', draw: drawCoverStory, downloads: [[[1080, 1920], 'instagram-story.png']] },
      { kind: 'cover',  label: 'Highlight cover', size: [1080, 1920], rec: 'Mesma proporção da story. Só a área central aparece.', draw: drawAvatarSquare, downloads: [[[1080, 1920], 'instagram-highlight.png']] },
    ],
  },
  {
    name: 'X / Twitter',
    color: '#000000',
    icon: 'x',
    items: [
      { kind: 'avatar', label: 'Foto de perfil', size: [400, 400], rec: '400×400. Circular.', draw: drawAvatarCircle, downloads: [[400, 'x-perfil-400.png'], [800, 'x-perfil-800.png']] },
      { kind: 'cover',  label: 'Header / capa', size: [1500, 500], rec: '1500×500 (3:1). Mantém conteúdo central.', draw: drawCoverEditorial, downloads: [[[1500, 500], 'x-header.png'], [[3000, 1000], 'x-header-2x.png']] },
      { kind: 'cover',  label: 'Tweet imagem', size: [1200, 675], rec: '1200×675 (16:9).', draw: drawCoverDark, downloads: [[[1200, 675], 'x-tweet.png']] },
    ],
  },
  {
    name: 'Facebook',
    color: '#1877F2',
    icon: 'fb',
    items: [
      { kind: 'avatar', label: 'Foto de perfil', size: [320, 320], rec: '320×320 mínimo. Circular.', draw: drawAvatarCircle, downloads: [[400, 'facebook-perfil-400.png'], [800, 'facebook-perfil-800.png']] },
      { kind: 'cover',  label: 'Capa página', size: [1640, 624], rec: '1640×624 desktop · 640×360 mobile. Mesma imagem, centro seguro.', draw: drawCoverSplit, downloads: [[[1640, 624], 'facebook-cover.png']] },
      { kind: 'cover',  label: 'Post imagem', size: [1200, 630], rec: '1200×630 (1.91:1).', draw: drawCoverDark, downloads: [[[1200, 630], 'facebook-post.png']] },
    ],
  },
  {
    name: 'YouTube',
    color: '#FF0000',
    icon: 'yt',
    items: [
      { kind: 'avatar', label: 'Ícone do canal', size: [800, 800], rec: '800×800. Circular.', draw: drawAvatarCircle, downloads: [[800, 'youtube-icon-800.png']] },
      { kind: 'cover',  label: 'Arte do canal', size: [2560, 1440], rec: '2560×1440. Safe area central 1546×423 (para TV/mobile).', draw: drawCoverEditorial, downloads: [[[2560, 1440], 'youtube-channel-art.png']] },
      { kind: 'cover',  label: 'Thumbnail', size: [1280, 720], rec: '1280×720 (16:9).', draw: drawCoverDark, downloads: [[[1280, 720], 'youtube-thumbnail.png']] },
    ],
  },
  {
    name: 'WhatsApp Business',
    color: '#25D366',
    icon: 'wa',
    items: [
      { kind: 'avatar', label: 'Foto do negócio', size: [500, 500], rec: '500×500. Circular.', draw: drawAvatarCircle, downloads: [[500, 'whatsapp-business-500.png']] },
    ],
  },
  {
    name: 'TikTok',
    color: '#FF0050',
    icon: 'tt',
    items: [
      { kind: 'avatar', label: 'Foto de perfil', size: [200, 200], rec: '200×200 mínimo. Circular.', draw: drawAvatarCircle, downloads: [[400, 'tiktok-perfil-400.png']] },
      { kind: 'cover',  label: 'Capa de vídeo', size: [1080, 1920], rec: '1080×1920 (9:16). Visível no feed antes do play.', draw: drawCoverStory, downloads: [[[1080, 1920], 'tiktok-cover.png']] },
    ],
  },
];
