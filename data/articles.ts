// data/articles.ts

export type Article = {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  content: string
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "inss-negou-auxilio-doenca",
    title: "O INSS negou seu auxílio-doença: a luta apenas começou",
    excerpt:
      "Receber um 'não' quando se está incapaz de trabalhar é devastador. Entenda por que a negativa administrativa não encerra seus direitos.",
    date: "12 OUT 2025",
    category: "Auxílio-Doença",
    readTime: "7 min de leitura",
    content: `
      <p>Receber a negativa do INSS em um momento de fragilidade física ou emocional é uma experiência profundamente angustiante. Para muitas pessoas, essa resposta vem acompanhada de medo, insegurança financeira e sensação de abandono.</p>

      <p>O que poucos sabem é que <strong>a negativa administrativa não representa o fim do caminho</strong>. Em muitos casos, ela apenas revela falhas na análise feita pelo Instituto ou na documentação apresentada.</p>

      <h3>Por que o INSS costuma negar?</h3>

      <p>O perito do INSS avalia centenas de casos por semana, com tempo extremamente limitado. Ele não conhece sua rotina, sua dor ou o impacto real da doença na sua vida profissional — ele analisa documentos.</p>

      <p>Laudos médicos genéricos, sem descrição funcional da incapacidade, costumam ser o principal motivo das negativas. Não basta comprovar a doença: é essencial demonstrar <strong>como ela impede o exercício do seu trabalho</strong>.</p>

      <h3>Quando buscar orientação?</h3>

      <p>Se o auxílio-doença foi negado, é fundamental avaliar a viabilidade de recurso administrativo ou ação judicial. Cada caso exige análise individualizada, respeitando a história profissional e clínica do segurado.</p>

      <p>Persistir é um direito — e, muitas vezes, o caminho para garantir dignidade em um momento tão delicado.</p>
    `,
  },

  {
    id: 2,
    slug: "aposentadoria-especial-detalhes",
    title: "Aposentadoria especial: o detalhe que muda tudo",
    excerpt:
      "Trabalhar exposto a agentes nocivos gera direitos específicos. Entenda por que a aposentadoria especial exige atenção técnica.",
    date: "28 SET 2025",
    category: "Aposentadoria",
    readTime: "8 min de leitura",
    content: `
      <p>A aposentadoria especial foi criada para proteger trabalhadores expostos a agentes nocivos à saúde ao longo da vida profissional. Ainda assim, muitos segurados deixam de usufruir desse direito por falta de informação adequada.</p>

      <p>Profissionais da saúde, vigilantes, trabalhadores da indústria e diversos outros grupos podem ter direito a regras diferenciadas — inclusive com redução no tempo de contribuição.</p>

      <h3>Onde estão os erros mais comuns?</h3>

      <p>Um dos equívocos mais frequentes é não reconhecer períodos especiais devidamente comprovados, como residência médica, trabalho em ambiente insalubre ou exposição contínua a agentes biológicos.</p>

      <p>Outro ponto sensível está na documentação técnica, como PPPs incompletos ou formulários emitidos de forma inadequada.</p>

      <h3>Planejamento faz diferença</h3>

      <p>Uma análise previdenciária criteriosa pode significar antecipar a aposentadoria ou aumentar consideravelmente o valor do benefício. Em muitos casos, o detalhe ignorado hoje representa anos de prejuízo no futuro.</p>
    `,
  },

  {
    id: 3,
    slug: "bpc-loas-negado-renda",
    title: "BPC/LOAS negado por renda: existe solução?",
    excerpt:
      "O critério de renda do INSS não é absoluto. A Justiça considera a realidade social além dos números.",
    date: "15 SET 2025",
    category: "BPC / LOAS",
    readTime: "6 min de leitura",
    content: `
      <p>O Benefício de Prestação Continuada (BPC/LOAS) garante um salário mínimo a idosos e pessoas com deficiência em situação de vulnerabilidade social. Ainda assim, muitas solicitações são negadas automaticamente pelo critério de renda.</p>

      <p>O INSS aplica uma análise matemática rígida, desconsiderando gastos essenciais com medicamentos, tratamentos contínuos, fraldas, cuidadores e outras despesas indispensáveis.</p>

      <h3>A visão da Justiça</h3>

      <p>O Judiciário já reconhece que o critério de renda não pode ser analisado de forma isolada. O que se avalia é a <strong>miserabilidade social real</strong>, e não apenas o valor formal declarado.</p>

      <p>Em muitos casos, é possível comprovar que a renda existente não é suficiente para garantir condições mínimas de dignidade.</p>
    `,
  },

  {
    id: 4,
    slug: "planejamento-previdenciario-importancia",
    title: "Planejamento previdenciário: por que pensar nisso antes?",
    excerpt:
      "Deixar para a última hora pode custar anos de benefício perdido. Planejar é proteger o futuro.",
    date: "02 SET 2025",
    category: "Planejamento",
    readTime: "7 min de leitura",
    content: `
      <p>Muitas pessoas só procuram orientação previdenciária quando já estão prestes a se aposentar. Nesse momento, decisões equivocadas do passado já não podem ser corrigidas.</p>

      <p>O planejamento previdenciário permite avaliar cenários, corrigir falhas contributivas e tomar decisões estratégicas ao longo da vida profissional.</p>

      <h3>Quem deve planejar?</h3>

      <p>Trabalhadores autônomos, profissionais liberais, servidores públicos e segurados do INSS em geral podem se beneficiar de uma análise antecipada.</p>

      <p>Planejar é uma forma de garantir previsibilidade, segurança e tranquilidade no futuro.</p>
    `,
  },

  {
    id: 5,
    slug: "auxilio-acidente-direito-esquecido",
    title: "Auxílio-acidente: um direito pouco conhecido",
    excerpt:
      "Mesmo após retornar ao trabalho, o segurado pode ter direito a indenização mensal.",
    date: "22 AGO 2025",
    category: "Benefícios",
    readTime: "5 min de leitura",
    content: `
      <p>O auxílio-acidente é um benefício indenizatório devido quando o segurado sofre uma sequela permanente que reduz sua capacidade de trabalho, ainda que continue exercendo a profissão.</p>

      <p>Muitos trabalhadores desconhecem esse direito e acabam deixando de receber valores que poderiam complementar sua renda.</p>

      <h3>Quando ele é devido?</h3>

      <p>O benefício é concedido após a consolidação das lesões, desde que haja redução permanente da capacidade laboral. Não se trata de incapacidade total, mas de limitação funcional.</p>

      <p>Informação correta faz toda a diferença para não perder esse direito.</p>
    `,
  },

  {
    id: 6,
    slug: "revisao-vida-toda-cuidados",
    title: "Revisão da vida toda: quando vale a pena?",
    excerpt:
      "Nem todos se beneficiam da revisão. Avaliar com cautela evita prejuízos.",
    date: "10 AGO 2025",
    category: "Revisões",
    readTime: "8 min de leitura",
    content: `
      <p>A chamada revisão da vida toda permite incluir contribuições anteriores a julho de 1994 no cálculo da aposentadoria. Em alguns casos, isso pode elevar significativamente o valor do benefício.</p>

      <p>No entanto, essa revisão não é vantajosa para todos os segurados.</p>

      <h3>Cautela é essencial</h3>

      <p>Cada caso deve ser analisado individualmente, com cálculos técnicos detalhados. Pedir a revisão sem estudo prévio pode gerar frustração — e até redução do benefício.</p>

      <p>Por isso, orientação qualificada é indispensável antes de qualquer decisão.</p>
    `,
  },
]

// Helper defensivo (já validado por você)
export function getArticleBySlug(slug: string): Article | null {
  const normalizedSlug = slug?.trim().toLowerCase()
  return (
    articles.find(
      (article) => article.slug.trim().toLowerCase() === normalizedSlug
    ) ?? null
  )
}
