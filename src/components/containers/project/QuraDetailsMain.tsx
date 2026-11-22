import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import quraCenaOne from "public/images/projects/projeto-qura/QURA-CENA-01.png";
import quraCenaTwo from "public/images/projects/projeto-qura/QURA-CENA-02.png";
import quraCenaThree from "public/images/projects/projeto-qura/QURA-CENA-03.png";
import quraCenaFour from "public/images/projects/projeto-qura/QURA-CENA-04.png";
import quraCenaFive from "public/images/projects/projeto-qura/QURA-CENA-05.png";
import quraCapa from "public/images/projects/projeto-qura/PROJETO-QURA-CAPA.png";
import quraImgOne from "public/images/projects/projeto-qura/PROJETO-QURA-ID-IMAGE-01.png";
import quraImgTwo from "public/images/projects/projeto-qura/PROJETO-QURA-ID-IMAGE-02.png";
import quraImgThree from "public/images/projects/projeto-qura/PROJETO-QURA-ID-IMAGE-03.png";
import quraImgThreeOne from "public/images/projects/projeto-qura/PROJETO-QURA-ID-IMAGE-03-1.png";
import quraImgFour from "public/images/projects/projeto-qura/PROJETO-QURA-ID-IMAGE-04.png";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";

const QuraDetailsMain = () => {
  return (
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Identidade Digital & Saúde Integrada</h3>
              <p>
                A plataforma Software ID Carteira Qura foi projetada para
                modernizar e proteger a identificação de pacientes em
                tratamentos contínuos e terapias regulamentadas. Desenvolvida
                sob rígidos padrões de segurança digital e conformidade com a
                LGPD, o ecossistema centraliza prescrições médicas, histórico
                clínico, documentos regulatórios e carteirinha digital acessível
                via smartphone com validação criptográfica em tempo real.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Funcionalidades da Carteira Qura</h3>
              <p>
                Solução digital completa para validação de identidade,
                conformidade regulatória e prontuário seguro para pacientes,
                médicos e associações de saúde.
              </p>
              <ul>
                <li>Carteirinha digital com QR Code dinâmico e validação antifraude</li>
                <li>Armazenamento seguro de laudos, receitas e autorizações oficiais</li>
                <li>Infraestrutura em nuvem criptografada em total conformidade com a LGPD</li>
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
                      <Image src={quraCenaOne} alt="Qura ID - Cenário 01" priority />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={quraCenaTwo} alt="Qura ID - Cenário 02" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={quraCenaThree} alt="Qura ID - Cenário 03" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={quraCenaFour} alt="Qura ID - Cenário 04" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={quraCenaFive} alt="Qura ID - Cenário 05" />
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
                <p>HealthTech & Identidade Digital</p>
              </div>
              <div className="thumb">
                <Image src={iconone} alt="Segmento" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Plataforma</h5>
                <p>
                  <span className="d-inline-flex align-items-center gap-1">
                    Qura Carteira Digital <i className="fa-solid fa-id-card" style={{ fontSize: "12px" }}></i>
                  </span>
                </p>
              </div>
              <div className="thumb">
                <Image src={icontwo} alt="Plataforma Qura" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Tecnologias</h5>
                <p>Next.js, QR Code & Cloud LGPD</p>
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
                O desenvolvimento da Carteira Qura nasceu da urgência de
                fornecer a pacientes e profissionais de saúde uma identificação
                digital confiável, ágil e protegida contra falsificações. O
                aplicativo permite que o usuário carregue seus documentos
                médicos oficiais no celular com autenticação biométrica,
                facilitando a comprovação de tratamentos especiais, compra
                segura de medicamentos controlados e trânsito regulatório sem
                burocracias.
              </p>
              <p>
                Com arquitetura em nuvem de alta disponibilidade, o sistema
                integra módulos para verificação instantânea por autoridades e
                farmacêuticas via leitura de QR Code encriptado. Além de
                resguardar o sigilo absoluto dos dados médicos conforme a
                legislação vigente, a plataforma oferece uma interface
                intuitiva e acolhedora, desenhada para proporcionar autonomia e
                tranquilidade a pacientes em todas as etapas do cuidado.
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
                  A tecnologia em saúde deve aproximar pessoas, garantir
                  segurança jurídica e transformar a rotina do paciente com
                  respeito e agilidade.
                </blockquote>
              </div>
              <div className="author">
                <h4>- EQUIPE QURA</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">Resultados Alcançados</h3>
              <p>
                A disponibilização da Carteira Qura proporcionou uma evolução
                significativa na gestão documental de pacientes e associações
                parceiras. O tempo de validação de prescrições e laudos foi
                reduzido de dias para poucos segundos, eliminando o extravio de
                papéis e garantindo tranquilidade jurídica tanto para os
                médicos prescritores quanto para os pacientes que dependem do
                acesso contínuo aos seus tratamentos.
              </p>
              <p>
                Com milhares de carteiras digitais emitidas e validadas em todo
                o país, a plataforma atingiu índice superior a 99% de
                disponibilidade operacional e zero incidentes de segurança. A
                solução estabeleceu um novo referencial em saúde digital no
                Brasil, consolidando um ambiente interoperável, altamente seguro
                e que coloca o paciente no controle soberano de suas
                informações clínicas mais sensíveis.
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
              <Image src={quraImgOne} alt="Qura ID Imagem 01" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={quraImgTwo} alt="Qura ID Imagem 02" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={quraImgThree} alt="Qura ID Imagem 03" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={quraImgThreeOne} alt="Qura ID Imagem 03-1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={quraImgFour} alt="Qura ID Imagem 04" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={quraCapa} alt="Qura ID Capa" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={quraImgOne} alt="Qura ID Imagem 01" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={quraImgTwo} alt="Qura ID Imagem 02" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={quraImgThree} alt="Qura ID Imagem 03" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={quraImgThreeOne} alt="Qura ID Imagem 03-1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={quraImgFour} alt="Qura ID Imagem 04" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={quraCapa} alt="Qura ID Capa" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default QuraDetailsMain;
