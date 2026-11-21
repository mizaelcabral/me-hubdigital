import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import abblaCenaOne from "public/images/projects/projeto-abbla/ABBLA-CENA-01.png";
import abblaCenaTwo from "public/images/projects/projeto-abbla/ABBLA-CENA-02.png";
import abblaCapa from "public/images/projects/projeto-abbla/PROJETO-ABBLA-CAPA.png";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";

const ProjectDetailsMain = () => {
  return (
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Arquitetura Omnichannel & IA</h3>
              <p>
                Centralização total de atendimento para WhatsApp Oficial,
                Instagram Direct, Facebook Messenger, Telegram e TikTok em uma
                única plataforma inteligente. O AbblaHUB foi arquitetado para
                transformar múltiplos canais de comunicação dispersos em uma
                operação coordenada de alto rendimento, conectando filas
                inteligentes, múltiplos atendentes simultâneos e inteligência
                artificial para atendimento humanizado e qualificação contínua.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Recursos da Plataforma</h3>
              <p>
                Painel unificado com ferramentas avançadas para gestão de
                conversas, automação de processos comerciais e relatórios
                analíticos em tempo real para tomada de decisão.
              </p>
              <ul>
                <li>Inbox compartilhado multicanal com triagem automatizada</li>
                <li>Funis de vendas no modelo Kanban integrados ao chat</li>
                <li>Conexão oficial Meta Cloud API com suporte a IA avançada</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="poster__slider-wrapper">
              <div className="poster__slider-w">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  speed={800}
                  loop={true}
                  centeredSlides={false}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: ".next-project-d",
                    prevEl: ".prev-project-d",
                  }}
                  className="poster__slider"
                >
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={abblaCenaOne} alt="AbblaHUB Cenário 01" priority />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={abblaCenaTwo} alt="AbblaHUB Cenário 02" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={abblaCenaOne} alt="AbblaHUB Cenário 01" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={abblaCenaTwo} alt="AbblaHUB Cenário 02" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="slide-group">
                <button
                  aria-label="previous item"
                  className="slide-btn prev-project-d"
                >
                  <i className="fa-light fa-angle-left"></i>
                </button>
                <button
                  aria-label="next item"
                  className="slide-btn next-project-d"
                >
                  <i className="fa-light fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Segmento</h5>
                <p>SaaS & CRM Omnichannel</p>
              </div>
              <div className="thumb">
                <Image src={iconone} alt="Segmento" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Cliente</h5>
                <p>AbblaHUB Tecnologia</p>
              </div>
              <div className="thumb">
                <Image src={icontwo} alt="Cliente" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Tecnologias</h5>
                <p>Meta API, OpenAI & Cloud</p>
              </div>
              <div className="thumb">
                <Image src={iconthree} alt="Tecnologias" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">Visão Geral do Projeto</h3>
              <p>
                O desenvolvimento do ecossistema AbblaHUB teve como objetivo
                principal solucionar o gargalo de comunicação que empresas
                enfrentam ao atender centenas de clientes diariamente. Ao unificar
                mensageria oficial, filas dinâmicas de atendentes e robôs de
                automação no-code, criamos uma experiência fluida onde nenhum lead
                fica sem resposta, otimizando o tempo de resposta operacional de
                minutos para segundos logo no primeiro contato.
              </p>
              <p>
                A integração nativa com a API oficial da Meta (WhatsApp Cloud
                API) proporciona estabilidade técnica incomparável e segurança
                avançada contra bloqueios de linha. Complementado por agentes
                autônomos baseados em OpenAI e Gemini, o sistema executa triagem
                preliminar de alta precisão, consulta dados de pedidos, agenda
                reuniões e realiza transferências com contexto completo para os
                especialistas humanos quando necessário.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="quote-pj">
              <div className="cont">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <blockquote className="secondary-text">
                  A centralização inteligente de canais com automação no-code e
                  inteligência artificial transforma atendimentos comuns em
                  vendas previsíveis e escaláveis.
                </blockquote>
              </div>
              <div className="author">
                <h4>- EQUIPE ABBLAHUB</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">Resultados Alcançados</h3>
              <p>
                A implementação da plataforma proporcionou um salto expressivo
                na produtividade das equipes de vendas e suporte. Empresas que
                adotaram o AbblaHUB registraram redução média de até 65% no tempo
                de espera do cliente e aumento de mais de 40% na taxa de conversão
                de oportunidades, impulsionados pela organização visual do funil
                Kanban e agilidade de respostas programadas com inteligência
                artificial conversacional.
              </p>
              <p>
                Com dashboards consolidados de métricas em tempo real, os gestores
                conquistaram visibilidade total sobre taxas de resolução, horários
                de pico e desempenho individual por atendente. O AbblaHUB
                consolidou-se como uma ferramenta de missão crítica, escalando o
                suporte para dezenas de milhares de mensagens por dia sem qualquer
                degradação de performance, elevando o padrão de satisfação e
                fidelização dos clientes atendidos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="project-d__slider-w section__content-cta">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={800}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1400: {
              slidesPerView: 5,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="project-d__slider"
        >
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={abblaCenaOne} alt="AbblaHUB Tela 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={abblaCenaTwo} alt="AbblaHUB Tela 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={abblaCapa} alt="AbblaHUB Capa" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={abblaCenaOne} alt="AbblaHUB Tela 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={abblaCenaTwo} alt="AbblaHUB Tela 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={abblaCapa} alt="AbblaHUB Capa" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={abblaCenaOne} alt="AbblaHUB Tela 1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={abblaCenaTwo} alt="AbblaHUB Tela 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={abblaCapa} alt="AbblaHUB Capa" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectDetailsMain;
