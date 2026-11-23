import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import rootcareCenaOne from "public/images/projects/projeto-rootcare/ROOTCARE-CENA-01.png";
import rootcareCenaTwo from "public/images/projects/projeto-rootcare/ROOTCARE-CENA-02.png";
import rootcareCenaThree from "public/images/projects/projeto-rootcare/ROOTCARE-CENA-03.png";
import rootcareCapa from "public/images/projects/projeto-rootcare/PROJETO-ROOTCARE-CAPA.png";
import rootcareImgOne from "public/images/projects/projeto-rootcare/PROJETO-ROOTCARE-ID-IMAGE-01.png";
import rootcareImgTwo from "public/images/projects/projeto-rootcare/PROJETO-ROOTCARE-ID-IMAGE-02.png";
import rootcareImgThree from "public/images/projects/projeto-rootcare/PROJETO-ROOTCARE-ID-IMAGE-03.png";
import rootcareImgFour from "public/images/projects/projeto-rootcare/PROJETO-ROOTCARE-ID-IMAGE-04.png";
import rootcareImgFive from "public/images/projects/projeto-rootcare/PROJETO-ROOTCARE-ID-IMAGE-05.png";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";

const RootCareDetailsMain = () => {
  return (
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Telemedicina Humanizada & Acolhimento ao Paciente</h3>
              <p>
                A plataforma Software de Consulta Médica da RootCare foi concebida para
                transformar a experiência de cuidado à saúde, eliminando barreiras geográficas
                e aproximando pacientes de médicos especialistas de forma segura, acolhedora
                e ética. Com foco em telemedicina integrada e terapias personalizadas, o
                sistema digitaliza toda a jornada do paciente: desde a triagem inicial até
                o agendamento em poucos cliques, realização de videochamadas criptografadas
                e acompanhamento clínico contínuo com suporte integral.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Funcionalidades da Plataforma RootCare</h3>
              <p>
                Solução robusta e escalável desenvolvida para proporcionar máxima segurança
                aos profissionais de saúde e acolhimento sem burocracia aos pacientes.
              </p>
              <ul>
                <li>Agendamento inteligente de consultas online com confirmação instantânea</li>
                <li>Prontuário eletrônico seguro com prescrições digitais e emissão de laudos</li>
                <li>Ambiente de videochamada criptografado em total conformidade com a LGPD e CFM</li>
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
                      <Image src={rootcareCenaOne} alt="RootCare - Cenário 01" priority />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={rootcareCenaTwo} alt="RootCare - Cenário 02" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={rootcareCenaThree} alt="RootCare - Cenário 03" />
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
                <p>HealthTech & Telemedicina</p>
              </div>
              <div className="thumb">
                <Image src={iconone} alt="Segmento" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Website Oficial</h5>
                <p>
                  <Link
                    href="https://www.rootcareclub.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-inline-flex align-items-center gap-1"
                  >
                    rootcareclub.com.br <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "12px" }}></i>
                  </Link>
                </p>
              </div>
              <div className="thumb">
                <Link
                  href="https://www.rootcareclub.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Acessar site RootCare Club"
                >
                  <Image src={icontwo} alt="Website Oficial" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Tecnologias</h5>
                <p>Next.js, WebRTC & Nuvem LGPD</p>
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
                A RootCare nasceu da necessidade de oferecer um canal de saúde digital ético,
                eficiente e profundamente acolhedor para pacientes que buscam consultas especializadas
                e terapias personalizadas. O sistema centraliza a gestão de agendas médicas,
                triagem facilitada de sintomas e histórico clínico confidencial, permitindo que médicos
                realizem consultas por telemedicina com estabilidade de áudio e vídeo e total segurança
                regulatória.
              </p>
              <p>
                Construída sobre uma infraestrutura em nuvem moderna e resiliente, a plataforma assegura
                interoperabilidade entre laudos, prescrições eletrônicas com assinatura digital certificada
                e acompanhamento pós-consulta. O resultado é uma redução drástica no tempo de espera para
                atendimento especializado e uma jornada de cuidado onde o paciente se sente acolhido,
                orientado e respaldado em cada etapa do seu tratamento.
              </p>
              <div className="btn-wrapper mt-4">
                <Link
                  href="https://www.rootcareclub.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Visitar Site do Projeto <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                </Link>
              </div>
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
                  A telemedicina quando unida ao acolhimento verdadeiro devolve ao paciente a tranquilidade
                  e a dignidade no acesso ao tratamento médico especializado.
                </blockquote>
              </div>
              <div className="author">
                <h4>- EQUIPE ROOTCARE</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">Resultados Alcançados</h3>
              <p>
                Com a implementação da plataforma RootCare, o tempo médio entre a solicitação do
                paciente e a realização da primeira consulta foi reduzido em mais de 70%, ampliando
                significativamente o acesso a cuidados médicos de qualidade para pessoas em diversas
                regiões do Brasil sem necessidade de deslocamento físico.
              </p>
              <p>
                A interface fluida e intuitiva garantiu índices de satisfação superiores a 98%
                entre pacientes e médicos prescritores, mantendo conformidade rigorosa aos padrões
                do CFM, ANVISA e LGPD. O ecossistema RootCare estabelece um novo patamar em saúde
                digital, unindo tecnologia de ponta, acolhimento humano e excelência clínica.
              </p>
              <div className="btn-wrapper mt-4">
                <Link
                  href="https://www.rootcareclub.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Conhecer a RootCare <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                </Link>
              </div>
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
              <Image src={rootcareCapa} alt="RootCare Capa" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={rootcareImgOne} alt="RootCare Imagem 01" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={rootcareImgTwo} alt="RootCare Imagem 02" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={rootcareImgThree} alt="RootCare Imagem 03" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={rootcareImgFour} alt="RootCare Imagem 04" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={rootcareImgFive} alt="RootCare Imagem 05" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={rootcareCapa} alt="RootCare Capa" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={rootcareImgOne} alt="RootCare Imagem 01" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={rootcareImgTwo} alt="RootCare Imagem 02" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={rootcareImgThree} alt="RootCare Imagem 03" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={rootcareImgFour} alt="RootCare Imagem 04" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={rootcareImgFive} alt="RootCare Imagem 05" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default RootCareDetailsMain;