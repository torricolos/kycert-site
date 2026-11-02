# Plano de autoridade e backlinks (domínio novo)

Nada do conteúdo novo ranqueia para termos competitivos sem links de sites com autoridade. Este plano é trabalho externo ao código; o site já tem o que cada tática precisa.

## Ativos linkáveis já no ar

| Ativo | URL | Por que atrai link |
|---|---|---|
| Checklist de prontidão para fiscalização (39 itens, 6 blocos) | `/blog/checklist-prontidao-fiscalizacao` | Versão aberta, citável por portais e consultorias. A versão PDF com cadastro segue em `/guias`. |
| Checklist da Circular 3.978 | `/blog/circular-3978-checklist-pld-ft` | Busca recorrente, útil como referência de trabalho. |
| Glossário (8 termos) | `/glossario` | Páginas de definição são as mais citadas por sites de conteúdo e por IAs. |
| Dossiê de exemplo anonimizado | `/dossie-exemplo` | Material demonstrável para imprensa e parceiros. |
| Exemplo prático de ABR | `/blog/abordagem-baseada-em-risco-abr-exemplo-pratico` | Tem tabela e cenários prontos para citação. |

## Táticas, em ordem de custo e retorno

1. **Diretórios (semana 1).** Cadastro com link para a home e descrição padronizada: ABFintechs (associada ou diretório de soluções), Distrito (perfil da startup), Crunchbase, LinkedIn Company (já existe), Google Business Profile se aplicável. Use sempre o mesmo nome, CNPJ e descrição do `/sobre`.
2. **Guest posts (semanas 2 a 8).** Alvos: Compliance Total, Legiscompliance, Fintechs.com.br, Finsiders. Ofereça um artigo inédito (não republique o do blog), com o ponto de vista de quem opera onboarding, e peça link para o artigo de origem ou para o glossário. Temas com melhor encaixe: Circular 3.978 na prática, ABR com exemplo, PEP e homônimos, KYB e beneficiário final.
3. **Consultas públicas do BCB e da CVM (contínuo).** Acompanhe as consultas abertas, publique no LinkedIn da kycert a contribuição enviada e linke o post relacionado do blog. Gera menção de reguladores indiretamente e sinal de autoridade temática.
4. **Parcerias com escritórios de PLD (meses 2 a 3).** Troca de conteúdo: o escritório assina um artigo no blog (com Person schema e LinkedIn, o que também resolve E-E-A-T) e a kycert entra como solução recomendada no material deles.
5. **Imprensa especializada (quando houver pauta).** Pautas possíveis: prazo de PSAV encerrado em 30/10/2026 e o que muda para exchanges; checklist de fiscalização como material de referência.
6. **Webinar ou live com um parceiro regulatório (mês 3).** Gera link da página do evento dos dois lados.

## Modelo de pitch (guest post)

> Assunto: Proposta de artigo inédito sobre [tema] para o [portal]
>
> Olá [nome], acompanho o [portal], em especial o texto sobre [artigo do portal]. Propomos um artigo inédito de ~1.500 palavras: "[título]", com a norma citada, um checklist prático e um exemplo de como evidenciar na fiscalização. Escrito por quem opera onboarding regulado, sem peça comercial. Em troca, pedimos apenas o crédito de autoria com link para a kycert. Posso enviar o esboço esta semana?

## Metas e acompanhamento

- Meta de 90 dias: 10 domínios únicos apontando para o site, sendo 3 com autoridade do setor.
- Acompanhe no Search Console (Links) e no Bing Webmaster. Registre cada link obtido: data, domínio, URL de destino, âncora.
- Âncoras: varie entre marca ("kycert"), URL nua e descritiva ("checklist de fiscalização de PLD/FT"). Evite âncora exata repetida.

## Pendências de configuração (fora do código)

1. Verificar o domínio no Google Search Console e no Bing Webmaster. O site já aceita as variáveis `NEXT_PUBLIC_GSC_VERIFICATION` e `NEXT_PUBLIC_BING_VERIFICATION` no Vercel (meta tag de verificação).
2. Enviar `https://kycert.com.br/sitemap.xml` nos dois e validar a indexação das URLs.
3. Exportar as consultas reais (Search Console, Desempenho, últimos 3 meses) e comparar com os temas do calendário editorial antes de fixar os próximos posts.
4. Solicitar indexação dos posts novos e dos 8 termos do glossário (Inspeção de URL).
5. O formulário de `/guias` hoje só exibe a confirmação na tela e não envia os dados para nenhum sistema. Conecte ao HubSpot (formulário ou API) antes de divulgar o PDF com cadastro, senão os leads se perdem.
