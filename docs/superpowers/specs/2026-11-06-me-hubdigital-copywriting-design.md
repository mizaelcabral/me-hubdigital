# ME Hubdigital — Especificação Técnica de Copywriting & Front-end

- **Data:** 2026-11-06
- **Status:** Aprovado
- **Autor:** Copywriter Sênior & Especialista Front-end

---

## 1. Visão Geral e Objetivo
Adaptar todo o conteúdo textual do template Next.js atual para a marca oficial **ME Hubdigital** (Agência de engenharia web, inteligência artificial, automação e soluções digitais completas).

### Restrições Rígidas:
1. **Preservação de Estrutura:** Nenhuma classe CSS/Tailwind, tag HTML ou propriedade funcional de componente será alterada.
2. **Equivalência Estrita de Caracteres:** Todos os novos textos em Português (Brasil) respeitam a contagem de caracteres e palavras do texto original em inglês (margem de variação de ~5%), preservando a estabilidade dos grids, balanceamento visual de tipografia e quebras de linha (`line-breaks`).
3. **Os 7 Pilares Oficiais:**
   1. Agentes de IA
   2. Sites & E-commerce
   3. Aplicações Web
   4. Gateways de Pagamento
   5. Automação & CRM
   6. UI/UX & Product Design
   7. Hospedagem & Cloud

---

## 2. Mapeamento Cirúrgico por Componente

### 2.1 Hero / Banner Principal (`src/components/layout/banner/HomeOneBanner.tsx`)
- **Título Original (52 carac.):** `We are creative digital agency`
  - **Nova Copy (54 carac.):** `Engenharia digital de ponta para seu negócio`
- **Subtítulo/Parágrafo (147 carac.):**
  - Original: `We are a full-service website design, development and digital marketing company specializing in SEO, content marketing that grows brands.`
  - Nova Copy (149 carac.): `Desenvolvemos agentes autônomos de IA, plataformas web sob medida e ecossistemas digitais de alta conversão para escalar operações corporativas.`
- **Métricas:**
  - `12+` / `years of experience` ➔ `99.9%` / `uptime garantido`
  - `25k` / `completed projects` ➔ `10x+` / `eficiência operacional`
- **Contatos & Links:**
  - `mail: contato@mehubdigital.com.br`
  - `Call: +55 (11) 99999-9999`

### 2.2 Sobre / Quem Somos (`src/components/containers/home/Agency.tsx`)
- **Sub-title:** `WELCOME` ➔ `QUEM SOMOS`
- **Título (40 carac.):** `We are digital creative agency in London`
  - **Nova Copy (42 carac.):** `Engenharia de software e IA para sua empresa`
- **Parágrafo (279 carac.):**
  - Nova Copy (276 carac.): `Transformamos gargalos operacionais em vantagens competitivas por meio de sistemas web sob medida, inteligência artificial integrada e arquiteturas de alta disponibilidade. Unimos design sofisticado a código escalável para entregar resultados mensuráveis ao seu faturamento.`
- **Barras de Competência:**
  - `Website design (75%)` ➔ `Aplicações Web & SaaS (98%)`
  - `Digital Marketing (90%)` ➔ `Agentes de IA & Automação (95%)`
- **CTA:** `Know More` ➔ `Conhecer Mais`

### 2.3 Diferenciais / Portfólio (`src/components/containers/home/PortfolioText.tsx`)
- **Letreiro Marquee:** `digital portfolio` ➔ `projetos & cases`
- **Cards de Portfólio:**
  - Card 1: `SaaS & Web App`
  - Card 2: `Agente IA Suporte`
  - Card 3: `E-commerce Alta Escala`
  - Card 4: `Checkout Integrado`

### 2.4 Seção de Serviços da Home (`src/components/containers/home/HomeOffer.tsx`)
- **Sub-title:** `WHAT WE OFFER` ➔ `NOSSOS SERVIÇOS`
- **Título (37 carac.):** `Giving Your Business Some Great Ideas`
  - **Nova Copy (39 carac.):** `Soluções Completas em Engenharia Digital`
- **Parágrafo (279 carac.):**
  - Nova Copy (281 carac.): `Integramos tecnologia de ponta, design refinado e fluxos inteligentes para construir ecossistemas de alta conversão. Desenvolvemos desde agentes autônomos e portais SaaS até a gestão de gateways de pagamento e infraestrutura em nuvem, eliminando qualquer atrito na operação.`
- **Botão CTA:** `view all services` ➔ `ver todos serviços`
- **Os 7 Pilares Oficiais no Grid Interativo:**
  1. `01` ➔ `agentes autônomos de IA`
  2. `02` ➔ `sites & e-commerce pro`
  3. `03` ➔ `aplicações web e saas`
  4. `04` ➔ `gateways de pagamento`
  5. `05` ➔ `automação & crm moderno`
  6. `06` ➔ `ui/ux & product design`
  7. `07` ➔ `hospedagem & nuvem cloud`

### 2.5 Catálogo Completo de Serviços (`src/components/containers/ServiceMain.tsx`)
- Slides Swiper contendo exatamente os 7 pilares oficiais com seus 5 tópicos técnicos correspondentes e link `detalhes do serviço`.

### 2.6 Metodologia de Processo (`src/components/containers/service-details/UxProcessTwo.tsx`)
- **Sub-title:** `UX Process` ➔ `METODOLOGIA`
- **Título:** `working UX Process` ➔ `Como Nós Trabalhamos`
- **Etapas:**
  1. `Diagnóstico & Arquitetura`
  2. `Prototipagem & UI/UX`
  3. `Engenharia & Integração`
  4. `Deploy & Escala Contínua`

### 2.7 Depoimentos (`src/components/containers/home/HomeTestimonial.tsx`)
- **Letreiro Marquee:** `client's testimonial` ➔ `o que dizem nossos clientes`
- Depoimentos de Diretor de Operações e COO comprovando ganhos em conversão, uptime e automação com IA.

### 2.8 FAQ (`src/components/containers/FaqMain.tsx`)
- 4 perguntas e respostas estratégicas abordando escalabilidade, prazos de entrega, gateways de pagamento e hospedagem/cloud.

### 2.9 Rodapé / Footer (`src/components/layout/footer/Footer.tsx`)
- Descrição institucional, contatos oficiais no Brasil, navegação e chamada de newsletter técnica.

---

## 3. Critérios de Aceite
- Todos os textos substituídos para Português (Brasil).
- 0 quebras de layout ou overflow decorrentes de comprimento de texto.
- Todos os 7 pilares oficiais representados.
- Build Next.js (`npm run build`) validado sem erros.
