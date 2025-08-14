// Dados simulados usados pela UI
// Tornando globais via window para compatibilidade ampla
window.newsData = {
  mercadoLivre: {
    title: "Mercado Livre agenda solenidade para início das atividades em Marília",
    image: "https://marilianoticia.com.br/wp-content/uploads/2025/08/mercado-livre-ok-768x576.jpg",
    fullText:
      `<p><strong>MARÍLIA -</strong> O Mercado Livre, gigante do comércio eletrônico na América Latina, agendou para a manhã desta quarta-feira (14), às 10h, a solenidade que marca o início oficial das atividades de seu novo centro de distribuição em Marília. O evento contará com a presença de autoridades e executivos da empresa.</p><p>O novo centro logístico, localizado estrategicamente às margens da rodovia, promete otimizar as entregas na região, gerando empregos e movimentando a economia local. A expectativa é que a operação comece de forma gradual, aumentando a capacidade conforme a demanda regional.</p><p>A chegada da empresa foi celebrada por lideranças locais como um marco para o desenvolvimento de Marília, posicionando a cidade como um importante polo logístico no interior de São Paulo.</p>`
  },
  fabioConte: {
    title: "Morre o jornalista e apresentador Fábio Conte, aos 42 anos",
    image: "https://marilianoticia.com.br/wp-content/uploads/2025/08/489435781_2291614727876947_4869630662561411372_n.jpg",
    fullText:
      `<p><strong>MARÍLIA -</strong> A comunicação de Marília está de luto. Morreu na noite desta terça-feira (13), aos 42 anos, o jornalista e apresentador Fábio Conte. Ele estava internado e lutava contra um câncer.</p><p>Com uma carreira marcada pela versatilidade e carisma, Fábio atuou em diversas emissoras de rádio e televisão da cidade, tornando-se um rosto conhecido e querido pelo público. Sua partida gerou uma onda de comoção nas redes sociais, com homenagens de colegas de profissão, amigos e espectadores.</p><p>O velório acontece no Velório Municipal e o sepultamento está previsto para o final da tarde desta quarta-feira (14), no Cemitério da Saudade.</p>`
  },
  transito: {
    title: "Zona Oeste de Marília recebe ação para reduzir lentidão no trânsito",
    image: "https://marilianoticia.com.br/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-12-at-10.48.01-768x576.jpeg",
    fullText:
      `<p><strong>MARÍLIA -</strong> A Emdurb (Empresa de Mobilidade Urbana de Marília) iniciou uma série de alterações no trânsito da zona Oeste da cidade, com o objetivo de diminuir os congestionamentos em horários de pico. As mudanças incluem a implantação de novos semáforos inteligentes e a conversão de algumas ruas para mão única.</p><p>O foco principal da ação é a Avenida Tiradentes e seus cruzamentos, que concentram grande parte do fluxo de veículos da região. Segundo a Emdurb, os novos semáforos são sincronizados e se ajustam ao volume de tráfego em tempo real, prometendo maior fluidez.</p><p>Agentes de trânsito estão no local para orientar os motoristas durante o período de adaptação. A expectativa é que os primeiros resultados positivos sejam sentidos já nas próximas semanas.</p>`
  },
  sacolinhas: {
    title: "Mudança em lei não garante sacolinhas gratuitas em Marília",
    image: "https://marilianoticia.com.br/wp-content/uploads/2025/07/sacola-04-768x511.jpg",
    fullText:
      `<p><strong>MARÍLIA -</strong> Uma nova lei estadual que regulamenta a distribuição de sacolas plásticas em São Paulo gerou dúvidas nos consumidores de Marília. No entanto, a mudança não garante a gratuidade das sacolinhas na cidade, pois a legislação municipal, que permite a cobrança, continua em vigor.</p><p>A lei estadual foca em questões ambientais, exigindo que as sacolas sejam feitas de material mais resistente e com maior percentual de conteúdo reciclado. A decisão sobre a cobrança ou não do item permanece a critério de cada município.</p><p>Em Marília, a lei que permite aos supermercados cobrarem pelas sacolas foi aprovada em 2019. Portanto, a prática continuará sendo permitida, e os estabelecimentos podem seguir cobrando pelo produto.</p>`
  }
};

window.storyData = {
  marilia: {
    pages: [
      {
        id: 'mercadoLivre',
        image: 'https://marilianoticia.com.br/wp-content/uploads/2025/08/mercado-livre-ok-768x576.jpg',
        title: 'Mercado Livre Chega a Marília',
        summary: 'Gigante do e-commerce inicia oficialmente suas operações na cidade.'
      },
      {
        id: 'fabioConte',
        image: 'https://marilianoticia.com.br/wp-content/uploads/2025/08/489435781_2291614727876947_4869630662561411372_n.jpg',
        title: 'Luto no Jornalismo',
        summary: 'Morre o querido apresentador Fábio Conte, aos 42 anos.'
      },
      {
        id: 'transito',
        image: 'https://marilianoticia.com.br/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-12-at-10.48.01-768x576.jpeg',
        title: 'Trânsito na Zona Oeste',
        summary: 'Emdurb implementa mudanças para melhorar o fluxo de veículos na região.'
      }
    ]
  }
};
