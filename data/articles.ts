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
    {
    id: 7,
    slug: "beneficio-incapacidade-negado",
    title: "O INSS negou seu benefício por incapacidade? Calma. A luta só começou.",
    excerpt:
      "A negativa do INSS é comum — e muitas vezes não significa falta de direito. Entenda os erros mais frequentes no pedido e como evitar perder valores, tempo e proteção para sua família.",
    date: "02 FEV 2026",
    category: "Benefício por Incapacidade",
    readTime: "9 min de leitura",
    content: `
      <p>Você pediu um benefício por incapacidade (antigo auxílio-doença) e o INSS negou?</p>

      <p>Isso acontece com muita gente e, na maioria das vezes, <strong>não significa que você não tenha direito</strong>. Abaixo, explico os erros mais comuns, o que eles causam e como evitar perder direitos importantes.</p>

      <h3>Pediu o benefício errado</h3>

      <p>Existem diferentes benefícios para cada grupo de trabalhadores e em diferentes situações. Só dentro da questão de incapacidade, existem duas espécies de benefícios por incapacidade (temporária e permanente). Além disso, há <strong>códigos corretos</strong> no pedido, os quais definirão se o caso da incapacidade se origina do trabalho ou não.</p>

      <p>Essa análise requer um estudo minucioso, pois a legislação trata a questão muitas vezes de um modo complexo e, noutras vezes, sem previsão da realidade, devido aos avanços sociais.</p>

      <p>A investigação profunda de qual benefício e qual código aplicável ao caso implica sérias consequências no valor da renda mensal, podendo repercutir em outros direitos e benefícios no futuro. Por exemplo: no caso de um auxílio-acidente (empregado, trabalhador avulso ou empregado doméstico) e até na vida dos dependentes — como no caso de uma esposa que buscou pensão por morte do falecido e descobriu que, em vida, ele estava recebendo <strong>benefício assistencial</strong>, concedido de forma indevida pelo INSS, o qual não concede direito à pensão.</p>

      <p>E ainda, dependendo do benefício por incapacidade concedido em vida, o valor da pensão por morte pode ser de <strong>50% do salário de benefício + 10% por pessoa</strong> ou de <strong>100%</strong>. Ou seja: por mais que a pessoa consiga algum benefício, se for o benefício errado, ela perde direitos e deixa de proteger a própria família.</p>

      <h3>Confundiu doença com incapacidade</h3>

      <p>Apesar do nome antigo, “auxílio-doença”, <strong>não é a doença que gera o direito</strong>. Atente-se para o nome atual: <strong>Benefício por Incapacidade</strong>. Há muitas pessoas que convivem com doenças e nem por isso são incapazes de trabalhar, devido a tratamentos médicos que estão em constante evolução.</p>

      <p>No entanto, não é preciso estar acamado para se considerar alguém com incapacidade. É o caso, por exemplo, daquele que continua trabalhando com problemas de saúde intensos, suportando a dor para garantir o pão, mas colocando em risco a própria vida e, até sem perceber, a de outras pessoas.</p>

      <p>A análise da incapacidade é tão profunda e complexa que pode ocorrer dificuldade na avaliação pelos próprios laudos emitidos pelo médico associados à realidade da pessoa — ou, simplesmente, por falta de orientação adequada.</p>

      <p>Por exemplo: um médico disse que uma pessoa com problema no trato urinário não tem incapacidade para o trabalho. Isso foi um equívoco do médico (não em sua especialidade), mas do ponto de vista da Previdência, pois ele não fez análise real da vida da paciente em seu trabalho e da repercussão dessa condição de saúde em seu cotidiano.</p>

      <p>Na hipótese de ela ser vigia, teria que se retirar diversas vezes do posto para trocar a fralda encharcada, sem contar com o incômodo persistente da sensação de bexiga cheia.</p>

      <p>Outra dificuldade está nas informações do <strong>PPP</strong> emitido pela empresa, quando não descreve condições de trabalho importantes para associar com o problema que o trabalhador tem (que pode ser físico ou psíquico). Esses são exemplos que dificultam a comprovação na via administrativa do INSS: o perito analisa o indivíduo, mas não tem noção do dia a dia daquele trabalhador.</p>

      <h3>A via administrativa</h3>

      <p>Muitas pessoas reclamam do INSS em razão do erro no indeferimento após um longo tempo de espera. A via administrativa é um caminho mais rápido e, por isso, é importante que a pessoa esteja munida de documentos válidos que deixem evidente tratar-se de incapacidade, seja temporária ou permanente.</p>

      <p>Apesar disso, é importante lembrar que a Autarquia é composta por pessoas — e pessoas podem cometer erros com sérias repercussões na vida do trabalhador segurado.</p>

      <p>A Lei dos Benefícios e outras normas regulamentares da própria autarquia (INSS) trazem requisitos analisados de modo padronizado. Porém, a via administrativa, em qualquer contexto, é dentro da própria Instituição, e seus erros podem ser levados ao Poder Judiciário.</p>

      <p>Em outras palavras: o INSS analisa de forma fria (requisitos legais + documentos), mas é nas ações judiciais que provamos as falhas na análise ou simplesmente o direito, através da realidade de cada trabalhador — o que muitas vezes não é visto no processo administrativo. Há casos em que o INSS chega a negar o direito sem sequer solicitar documento que faltou (Carta de Exigência).</p>

      <p>Ainda assim, é essencial requerer primeiro na via administrativa, realizando toda declaração correta da vida trabalhista, ajustando o histórico de trabalho, corrigindo pendências e alertas — sob pena de impedir a análise judicial ou mesmo perder direitos.</p>

      <h3>Quando buscar orientação?</h3>

      <p>O ideal é buscar orientação <strong>antes mesmo de qualquer pedido</strong>. O requerimento feito da maneira errada pode fazer você perder direitos essenciais, como o direito ao retroativo (valores relativos aos meses em que você aguardou a resposta do INSS) e até o reconhecimento de outros vínculos de trabalho (perda de tempo de contribuição e carência), o que pode afetar inclusive o valor da renda mensal.</p>

      <p>Há entendimentos na Justiça de que a falta de informação logo no primeiro pedido pode acarretar a extinção da análise de vínculo não indicado, como tempo especial, rural, professor e outros ainda não registrados.<sup>1</sup> São decisões que exigem um “segurado ninja”, como comentou certa vez o professor Malcon Robert, servidor da Justiça Federal, professor, autor de livros e especialista em Direito Previdenciário.</p>

      <p>Por fim, cada caso exige análise individualizada, respeitando a história profissional e clínica do segurado. Daí a importância de buscar um especialista em Direito Previdenciário para analisar o seu caso em específico, pois um erro no pedido pode lhe fazer perder direitos e proteção aos seus dependentes.</p>

      <hr />

      <p><strong>Referências</strong><br />
      <sup>1</sup> Enunciado 135 das Turmas Recursais do Rio de Janeiro — Publicado em 12.11.2025</p>

      <p><strong>Letícia Marinho</strong><br />
      Advogada Previdenciária com especialização pela ESA - PB<br />
      Revisora linguística e jurídica</p>
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
