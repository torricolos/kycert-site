import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'kyt-monitoramento-transacional-pix',
  title: 'KYT e monitoramento transacional no Pix: cenários, alertas e comunicação ao COAF',
  metaTitle: 'KYT: monitoramento transacional Pix na prática',
  description:
    'KYT e monitoramento transacional no Pix: cenários típicos, regras de alerta, análise, comunicação ao COAF e como o perfil de risco do KYC calibra tudo.',
  category: 'PLD/FT',
  eyebrow: 'PLD/FT / monitoramento',
  excerpt:
    'O que é KYT, quais cenários de Pix merecem alerta (fracionamento, velocidade, conta de passagem, divergência do perfil) e como o KYC calibra o monitoramento.',
  datePublished: '2026-11-16',
  dateModified: '2026-11-16',
  lead:
    'O <a href="/glossario/kyt">KYT</a> (Know Your Transaction) é a camada que olha o que o cliente faz depois do cadastro. No Pix, com liquidação em segundos e disponível o dia todo, ela é onde o risco de lavagem de dinheiro aparece em volume. Um aviso de transparência: a kycert não é um motor de monitoramento transacional. Entregamos o perfil de risco do KYC e a reverificação periódica, que são a base que faz um motor de KYT funcionar bem. Este texto explica o ciclo completo, os cenários mais comuns e como calibrar.',
  figure: {
    src: '/images/blog/ciclo-kyt-monitoramento.svg',
    alt: 'Ciclo de monitoramento transacional: regras geram alertas, o analista investiga, a decisão é registrada ou comunicada ao COAF e o resultado volta para calibrar as regras.',
    caption: 'O monitoramento é um ciclo: regra, alerta, análise, decisão e calibração.',
    width: 1200,
    height: 500,
  },
  body: `
<h2>Contexto regulatório: onde o KYT se encaixa na PLD/FT</h2>
<p>A prevenção à lavagem de dinheiro e ao financiamento do terrorismo (<a href="/glossario/pld-ft">PLD/FT</a>) tem duas pontas. A primeira conhece o cliente antes e durante a relação: é o <a href="/glossario/kyc">KYC</a>. A segunda observa o comportamento financeiro: é o monitoramento transacional, o KYT. Uma sem a outra deixa buracos. Sem KYT, um cliente com cadastro impecável movimenta recursos incompatíveis com o que declarou. Sem KYC, o motor de regras não sabe o que é normal para cada cliente e alerta tudo ou nada.</p>
<p>O Pix amplifica o problema. A Resolução BCB 1/2020 criou o arranjo, e a instantaneidade reduz o tempo entre a entrada e a saída do dinheiro. Em minutos, um valor pode passar por várias contas. A janela para detectar o padrão é curta, e o desenho das regras importa mais do que em meios de pagamento mais lentos.</p>

<h2>O que a Circular BCB 3.978/2020 exige em monitoramento</h2>
<p>A Circular 3.978/2020 obriga as instituições autorizadas pelo Banco Central a manter procedimentos de monitoramento, seleção e análise de operações e situações com indícios de lavagem de dinheiro ou financiamento do terrorismo. Em termos práticos, a norma pede quatro coisas:</p>
<ol>
<li><strong>Monitorar</strong> as operações com critérios compatíveis com o perfil de risco do cliente e com a avaliação interna de risco da instituição.</li>
<li><strong>Selecionar</strong> as operações suspeitas por regras documentadas.</li>
<li><strong>Analisar</strong> cada seleção dentro de prazo, com registro do raciocínio.</li>
<li><strong>Comunicar</strong> ao COAF as operações com indício de crime, sem avisar o cliente.</li>
</ol>
<p>A Carta Circular BCB 4.001/2020 lista exemplos de operações e situações que podem configurar indício e serve de ponto de partida para as regras. Confira os prazos e artigos no texto vigente: eles definem o relógio da sua operação, e este guia os trata apenas como referência geral.</p>
<div class="callout"><strong>O que a kycert faz e o que não faz</strong><p>A kycert não monitora transações em tempo real. Ela entrega o enquadramento de risco do cliente, o dossiê com a decisão registrada e a <a href="/produto/monitoramento">reverificação periódica</a> com re-screening de Sanções e PEP. É esse perfil que o seu motor de KYT, próprio ou de terceiros, consome para calibrar limites e alertas.</p></div>

<h2>Cenários típicos de Pix que geram alerta</h2>
<p>Regra de monitoramento é a tradução de um comportamento suspeito em condição mensurável. Os cenários abaixo cobrem a maior parte do que se vê no Pix.</p>
<h3>Fracionamento</h3>
<p>Dividir um valor grande em várias transferências menores para ficar abaixo de limites de atenção. Sinais: várias operações de valores parecidos e próximos de um limite interno, para o mesmo destinatário ou grupo de destinatários, em janela curta. Exemplo ilustrativo: oito Pix de R$ 4.900 em um mesmo dia para três contas diferentes, quando o cliente costuma fazer uma ou duas transferências por semana.</p>
<h3>Velocidade (entrada e saída rápidas)</h3>
<p>Recursos que entram e saem quase na mesma hora e no mesmo valor, sem que a conta fique com saldo. Regra típica: saída superior a determinada fração da entrada em até poucos minutos ou horas, repetida N vezes no mês.</p>
<h3>Conta de passagem</h3>
<p>A conta serve só como trânsito. Muitos Pix de origens diversas entram e saem para poucos destinos. Costuma aparecer em contas recém-abertas, com perfil de baixa renda declarada e movimentação de alto volume, e também em contas de PJ sem atividade operacional compatível.</p>
<h3>Divergência do perfil</h3>
<p>A movimentação foge do que o cliente declarou no cadastro: renda, faturamento, atividade, finalidade. Um MEI com faturamento declarado de R$ 80 mil por ano que recebe R$ 400 mil em três meses é o caso clássico. Esse é o cenário em que o KYC é diretamente o insumo do KYT: sem renda ou faturamento declarados e validados, não há base de comparação.</p>
<h3>Outros sinais que costumam entrar</h3>
<ul>
<li>Inatividade longa seguida de pico súbito de movimentação.</li>
<li>Mudança brusca de comportamento logo após alteração cadastral (telefone, e-mail, dispositivo).</li>
<li>Operações envolvendo pessoas ou empresas com apontamento de sanção, <a href="/glossario/pep">PEP</a> ou mídia adversa.</li>
</ul>

<h2>Como o perfil do KYC calibra o monitoramento</h2>
<p>Um limite único para todos os clientes gera muito ruído. Um aposentado que faz três Pix por mês e uma loja de e-commerce com centenas de recebimentos por dia não podem disparar o mesmo alerta. A calibração por perfil resolve isso, e o perfil vem do onboarding.</p>
<table class="art-table">
<thead><tr><th>Dado do KYC</th><th>Como o KYT usa</th></tr></thead>
<tbody>
<tr><td>Nível de risco do cliente (baixo, médio, alto)</td><td>Define sensibilidade das regras e a frequência de revisão</td></tr>
<tr><td>Renda ou faturamento declarado e validado</td><td>Base da regra de divergência do perfil</td></tr>
<tr><td>Atividade econômica (CNAE) e finalidade da conta</td><td>Define o que é movimentação esperada</td></tr>
<tr><td>Condição de PEP, sanção ou mídia adversa</td><td>Eleva o risco e reduz o limite de alerta</td></tr>
<tr><td>Beneficiário final e cadeia societária (PJ)</td><td>Permite cruzar contrapartes e identificar grupos</td></tr>
<tr><td>Data de abertura e histórico de reverificação</td><td>Contas novas e dados desatualizados pedem regra mais sensível</td></tr>
</tbody>
</table>
<p>O ponto operacional: o perfil precisa estar atualizado. Um cliente enquadrado como baixo risco há três anos, sem reverificação, está sendo monitorado com um perfil velho. A <a href="/produto/kyc">verificação de pessoa física</a> e o <a href="/produto/kyb">KYB com cadeia societária até o beneficiário final</a> da kycert registram o enquadramento no dossiê e disparam a reverificação no prazo definido, e é o enquadramento atualizado que deve alimentar o seu motor. Para entender como definir níveis e pesos, veja o <a href="/blog/abordagem-baseada-em-risco-abr-exemplo-pratico">exemplo prático de abordagem baseada em risco</a>.</p>

<h2>Do alerta à análise: como organizar a fila</h2>
<p>Alertas sem processo viram passivo. O fluxo mínimo:</p>
<ol>
<li><strong>Geração do alerta</strong> com a regra, os dados da operação e a versão da regra que disparou.</li>
<li><strong>Triagem</strong> para separar falso positivo evidente (por exemplo, pagamento recorrente de aluguel) do caso que merece análise.</li>
<li><strong>Análise</strong> com o contexto completo: dossiê do cliente, histórico, contrapartes, documentos da operação e, quando necessário, pedido de informação ao cliente.</li>
<li><strong>Conclusão</strong> entre arquivar com justificativa, escalar para o responsável de PLD/FT ou propor comunicação.</li>
<li><strong>Registro</strong> de analista, data, evidências e fundamento.</li>
</ol>
<h3>Priorização e prazo</h3>
<p>Nem todo alerta pesa igual. Priorize por nível de risco do cliente, valor, recorrência e presença de PEP ou sanção. Defina por escrito o prazo máximo de análise, porque a norma trata o tempo entre a seleção e a decisão como parte do dever. Controle a idade da fila: alerta velho é o primeiro ponto que o fiscal aponta.</p>
<h3>Exemplo prático de análise</h3>
<p>Alerta: conta aberta há 40 dias recebeu 62 Pix de 31 remetentes diferentes em 5 dias e transferiu 97% do total para duas contas. O analista abre o dossiê: cliente pessoa física, renda declarada de R$ 3 mil, risco médio, sem PEP. Pede ao cliente a origem dos recursos; a resposta é vaga e sem documento. Conclusão: padrão de conta de passagem, incompatível com o perfil. Escala para o responsável, que decide comunicar. Tudo isso fica registrado, com o resultado bruto do alerta, a pergunta ao cliente, a resposta e a decisão.</p>

<h2>Comunicação ao COAF</h2>
<p>Quando a análise conclui que há indício de lavagem de dinheiro ou de financiamento do terrorismo, a instituição comunica ao COAF pelo sistema próprio (Siscoaf). A Lei 9.613/1998 e a Resolução COAF 40/2021 sustentam o dever de comunicar, e a Circular BCB 3.978/2020 detalha o procedimento para as instituições reguladas pelo Banco Central.</p>
<ul>
<li><strong>Prazos:</strong> a análise tem prazo contado da seleção da operação, e a comunicação deve ocorrer em curto prazo após a decisão de comunicar. Confirme os prazos exatos no texto vigente e coloque-os na sua política.</li>
<li><strong>Sigilo:</strong> o cliente não pode ser informado da comunicação.</li>
<li><strong>Fundamentação:</strong> o texto da comunicação descreve quem, o quê, quando, como e por que a operação é suspeita, com base nas evidências do dossiê.</li>
<li><strong>Decisão de não comunicar:</strong> também precisa ser registrada, com o motivo. É frequentemente o que mais pesa na fiscalização.</li>
</ul>

<h2>Calibração: como reduzir falso positivo sem perder o verdadeiro</h2>
<p>Um motor mal calibrado ou inunda a equipe de alertas ou fica cego. A calibração é contínua e se apoia em dados da própria operação.</p>
<ul>
<li><strong>Meça a taxa de conversão:</strong> de cada 100 alertas, quantos viram análise, quantos viram comunicação. Regra com taxa próxima de zero por meses precisa de revisão.</li>
<li><strong>Segmente por perfil:</strong> limites diferentes para risco baixo, médio e alto, e para PF e PJ, usando o enquadramento do KYC.</li>
<li><strong>Teste antes de ativar:</strong> rode a regra sobre dados históricos (backtesting) e estime o volume de alertas.</li>
<li><strong>Versione as regras:</strong> guarde quem alterou, quando e por quê.</li>
<li><strong>Use feedback da análise:</strong> padrões de falso positivo viram exceções documentadas.</li>
<li><strong>Revise periodicamente:</strong> a avaliação interna de risco muda, e as regras precisam acompanhar.</li>
</ul>

<h2>Checklist prático: KYT no Pix</h2>
<ul class="checklist">
<li>Existe documento de regras de monitoramento com cenário, parâmetro, justificativa e responsável.</li>
<li>Os cenários cobrem fracionamento, velocidade, conta de passagem e divergência do perfil.</li>
<li>Os limites variam conforme o nível de risco do cliente definido no KYC.</li>
<li>O perfil usado pelo motor é atualizado a cada reverificação, e o ciclo é monitorado.</li>
<li>Alertas têm prazo máximo de análise definido e fila com idade controlada.</li>
<li>Cada alerta analisado guarda analista, data, evidências e conclusão.</li>
<li>A decisão de comunicar e a de não comunicar são registradas com fundamento.</li>
<li>O fluxo de comunicação ao COAF tem responsável, prazo e controle de sigilo.</li>
<li>Há revisão periódica de eficácia das regras, com métricas de conversão.</li>
</ul>

<h2>Como evidenciar na fiscalização</h2>
<p>A pergunta típica do fiscal é: como a instituição sabe que o monitoramento funciona? As evidências são o documento de regras com versões, uma amostra de alertas com análise completa, métricas de conversão e de idade da fila, as comunicações ao COAF com fundamento, os casos arquivados com justificativa e a prova de que o perfil de risco foi reverificado no prazo. O <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">guia para comprovar PLD/FT na fiscalização do Bacen</a> mostra como organizar essa trilha, e o <a href="/dossie-exemplo">dossiê de exemplo</a> ilustra a parte do KYC.</p>

<h2>Erros comuns</h2>
<ul>
<li><strong>Limite único para todos.</strong> Gera ruído e esconde o caso real.</li>
<li><strong>Perfil desatualizado.</strong> O motor compara a movimentação com uma renda de anos atrás.</li>
<li><strong>Arquivar sem registrar.</strong> A análise correta, sem rastro, não se prova.</li>
<li><strong>Fila acumulada.</strong> Alertas velhos revelam falta de capacidade.</li>
<li><strong>Tratar KYT e KYC como times separados.</strong> O monitoramento depende do cadastro, e o cadastro precisa do retorno do monitoramento.</li>
</ul>
`,
  faq: [
    {
      q: 'O que é KYT?',
      a: 'KYT (Know Your Transaction) é o monitoramento das transações do cliente para detectar comportamentos incompatíveis com seu perfil ou com padrões de lavagem de dinheiro. Complementa o KYC, que conhece o cliente no cadastro, e alimenta a análise e a eventual comunicação ao COAF.',
    },
    {
      q: 'A kycert faz monitoramento transacional do Pix?',
      a: 'Não. A kycert não é um motor de KYT em tempo real. Ela entrega o perfil de risco do KYC, o dossiê com a decisão registrada e a reverificação periódica com re-screening de Sanções e PEP, que alimentam e calibram o motor de monitoramento que a instituição utiliza.',
    },
    {
      q: 'Quais são os cenários mais comuns de alerta no Pix?',
      a: 'Fracionamento de valores, entrada e saída rápidas, contas de passagem e divergência entre a movimentação e o perfil declarado (renda, faturamento, atividade). Também são comuns picos súbitos após inatividade e operações com pessoas ou empresas com sanção, PEP ou mídia adversa.',
    },
    {
      q: 'Preciso comunicar ao COAF toda operação alertada?',
      a: 'Não. O alerta é só o início. A comunicação ocorre quando a análise conclui que há indício de lavagem de dinheiro ou financiamento do terrorismo. Alertas arquivados precisam de justificativa registrada, e os prazos de análise e comunicação devem ser conferidos no texto vigente da Circular BCB 3.978/2020.',
    },
  ],
  related: ['circular-3978-checklist-pld-ft', 'abordagem-baseada-em-risco-abr-exemplo-pratico', 'comprovar-pld-ft-fiscalizacao-bacen', 'abertura-conta-fintech-kyb-escala'],
  solutions: [
    { href: '/produto/monitoramento', label: 'Reverificação e monitoramento' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
    { href: '/solucoes/bancos', label: 'Bancos e fintechs' },
  ],
};

export default post;
