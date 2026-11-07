# Plano de Implementação — Adaptação de Todos os Temas da Home para ME Hub

- **Data:** 2026-11-06
- **Contexto:** Expansão da identidade e conteúdo da ME Hubdigital para todas as variações da Home (Temas 2, 3, 4 e 5, modos Dark e Light).
- **Regra Central:** Manter equivalência estrita de caracteres (~5% de margem) para preservar a estabilidade de grids, animações GSAP e quebras de linha em cada seção.

---

## Restrições Globais (Global Constraints)
1. **Preservação de Estrutura:** Não alterar tags HTML, classes CSS/Tailwind, efeitos GSAP, Swipers ou lógica de componentes.
2. **Contagem de Caracteres Rigorosa:** Todo texto em português substitui o texto original em inglês respeitando o tamanho exato de linha/bloco.
3. **Consistência de Marca:** ME Hub / ME Hubdigital — foco em Agentes de IA, Plataformas Web, Automação, Gateways e Infraestrutura Cloud.
4. **Acabamento Tipográfico:** Sentence case em títulos com "IA" e siglas mantidas em maiúsculas (ex: "Agentes de IA").
5. **Verificação de Build:** `npm run build` deve compilar sem nenhum erro de tipo ou sintaxe.

---

## Tarefa 1: Tema 2 — Digital Agency (Dark & Light)
- **Componentes:**
  - `src/components/layout/banner/HomeTwoBanner.tsx` e `HomeTwoLightBanner.tsx`
  - `src/components/containers/home-two/HomeTwoAward.tsx`
  - `src/components/containers/home-two/HomeTwoOffer.tsx` e `HomeTwoOfferLight.tsx`
  - `src/components/containers/home-two/HomeTwoPortfolio.tsx`
  - `src/components/containers/home-two/HomeTwoTestimonial.tsx`
  - `src/components/containers/home-two/HomeTwoBlog.tsx` e `HomeTwoBlogLight.tsx`
  - `src/components/containers/home-two/HomeTwoCta.tsx`
- **Ações:**
  - Substituir copy de hero com métricas (`99.9% uptime`, `10x+ eficiência`), headline e CTA.
  - Substituir `HomeTwoAward` com pilares de excelência corporativa da ME Hub.
  - Adequar `HomeTwoOffer` e `HomeTwoOfferLight` para exibir os serviços oficiais da ME Hub nos slides do Swiper.
  - Adequar `HomeTwoPortfolio` com marquee `projetos & cases`, filtros e títulos de cases reais.
  - Adequar `HomeTwoTestimonial` com depoimentos executivos de clientes ME Hub.
  - Adequar `HomeTwoBlog` e `HomeTwoBlogLight` com artigos técnicos.
  - Adequar `HomeTwoCta` com headline de conversão e placeholder em português.

---

## Tarefa 2: Tema 3 — IT Solution (Dark & Light)
- **Componentes:**
  - `src/components/layout/banner/HomeThreeBanner.tsx`
  - `src/components/containers/home-three/HomeThreeServices.tsx` e `HomeThreeServicesLight.tsx`
  - `src/components/containers/home-three/HomeThreeAgency.tsx`
  - `src/components/containers/home-three/HomeThreePortfolio.tsx`
  - `src/components/containers/home-three/WorkSteps.tsx` e `WorkStepsLight.tsx`
  - `src/components/containers/home-three/HomeTestimonialThree.tsx`
  - `src/components/containers/home-three/HomeThreeBlog.tsx` e `HomeThreeBlogLight.tsx`
  - `src/components/containers/home-three/CtaThree.tsx`
- **Ações:**
  - Adaptar slides e barra de progresso do hero de TI (`CONSULTORIA EM TECNOLOGIA`, `ENGENHARIA DE SOFTWARE`, `ARQUITETURA DE SOLUÇÕES`).
  - Adaptar acordeão de serviços (`HomeThreeServices` e `Light`) para os 4 grandes pilares técnicos da ME Hub com tópicos correspondentes.
  - Adaptar `HomeThreeAgency` com dados institucionais da ME Hub.
  - Adaptar `HomeThreePortfolio` com cases de TI e engenharia.
  - Adaptar `WorkSteps` e `WorkStepsLight` com o fluxo de 4 etapas (`Diagnóstico & Estratégia`, `Prototipagem & UI/UX`, `Engenharia & Automação`, `Deploy & Escala Contínua`).
  - Adaptar `HomeTestimonialThree` com depoimentos e marquee.
  - Adaptar `HomeThreeBlog` e `HomeThreeBlogLight` com cards e imagens interativas.
  - Adaptar `CtaThree` com telefone de contato do Brasil e chamada de projeto.

---

## Tarefa 3: Tema 4 — Personal Portfolio (Dark & Light)
- **Componentes:**
  - `src/components/layout/banner/HomeFourBanner.tsx` e `HomeFourBannerLight.tsx`
  - `src/components/containers/home-four/Info.tsx`
  - `src/components/containers/home-four/ProjectSlider.tsx`
  - `src/components/containers/home-four/HomeFourProject.tsx`
- **Ações:**
  - Adaptar hero banner para narrativa de engenheiro-chefe / estúdio de inovação digital da ME Hub (`somos engenharia digital & inovação`).
  - Adaptar `Info.tsx` com manifesto técnico e autoridade da ME Hub mantendo a contagem de caracteres dos 2 parágrafos.
  - Adaptar `ProjectSlider.tsx` com letreiro `Projetos`.
  - Adaptar `HomeFourProject.tsx` com os 8 cases de alta escala da ME Hub, com descrições equilibradas e botão `carregar mais`.

---

## Tarefa 4: Tema 5 (Interactive Portfolio), Rodapés & Menus
- **Componentes:**
  - `src/components/layout/banner/HomeFiveBanner.tsx`
  - `src/components/layout/footer/FooterTwo.tsx`
  - `src/components/layout/footer/FooterThree.tsx`
  - `src/components/layout/footer/FooterFour.tsx`
  - `src/components/layout/header/Offcanvas.tsx`, `HeaderTwo.tsx`, `HeaderFive.tsx` (rótulos de navegação se aplicável)
- **Ações:**
  - Adaptar os 10 cards do slider interativo `HomeFiveBanner.tsx` com os cases da ME Hub.
  - Substituir dados fictícios (EUA/Alemanha, telefone 406, email xpovio) nos footers 2, 3 e 4 por dados oficiais da ME Hub (São Paulo, Brasil, contato@mehubdigital.com.br, links de navegação em português).
  - Atualizar os rótulos do menu Home no Offcanvas/Headers para nomes claros (ex: Agência Criativa, Agência Digital, Soluções de TI, Portfólio Especialista, Portfólio Interativo).

---

## Tarefa 5: Verificação de Build & Revisão Final
- **Ações:**
  - Executar `npm run build` para certificar que todas as páginas compilam com sucesso sem quebras.
  - Revisão de integridade textual e equivalência métrica.
