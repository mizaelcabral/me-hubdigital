import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/teams/one.png";
import two from "public/images/teams/two.png";
import three from "public/images/teams/three.png";
import four from "public/images/teams/four.png";
import five from "public/images/teams/five.png";
import six from "public/images/teams/six.png";
import seven from "public/images/teams/seven.png";

const TeamMembers = () => {
  return (
    <section className="section team-slider-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      NOSSA EQUIPE
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">
                      Quem faz a ME Hubdigital acontecer
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-teams"
                      className="btn btn--primary text-capitalize"
                    >
                      Ver toda a equipe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-r position-relative">
        <div className="team-s__slider-w">
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
              nextEl: ".next-team-s",
              prevEl: ".prev-team-s",
            }}
            className="team-s__slider"
            breakpoints={{
              768: {
                slidesPerView: 3,
                centeredSlides: true,
              },
              576: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={one} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Automatizando processos e criando o futuro com agentes de IA
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Lucas Prado</Link>
                      </h4>
                      <p>Automação & Agentes de IA</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Lucas Prado</Link>
                      </h5>
                      <p>Automação & Agentes de IA</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Especialista no desenvolvimento de agentes inteligentes
                        de IA, integrações de fluxos autônomos e automação de
                        processos na ME Hubdigital.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Agentes Autônomos de IA</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="95%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Automações & Workflows</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Potencializando a produtividade com inteligência
                        artificial aplicada em novos fluxos.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={two} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Capturando a essência e a identidade através das lentes
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Beatriz Lima</Link>
                      </h4>
                      <p>Fotógrafa da ME</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Beatriz Lima</Link>
                      </h5>
                      <p>Fotógrafa da ME</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Especialista em fotografia profissional, produção de
                        conteúdo visual refinado e captura de momentos autênticos
                        para toda a ME Hubdigital.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Fotografia & Iluminação</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="95%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Edição & Tratamento Visual</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Transformando cada olhar em imagens memoráveis que
                        valorizam a identidade da empresa.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={three} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Conectando oportunidades e gerando parcerias de sucesso
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Carlos Silveira</Link>
                      </h4>
                      <p>Prospecção & Vendas</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Carlos Silveira</Link>
                      </h5>
                      <p>Prospecção & Vendas</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Atuando com prospecção estratégica de novos clientes,
                        expansão de vendas B2B e geração de parcerias de alto
                        impacto para a ME Hubdigital.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Prospecção Estratégica</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="95%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Negociação & Vendas B2B</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Transformando oportunidades em parcerias sólidas e
                        crescimento sustentável de vendas.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={four} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Desenvolvendo soluções eficientes através do código
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Rui Mendes</Link>
                      </h4>
                      <p>Programador Júnior</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Rui Mendes</Link>
                      </h5>
                      <p>Programador Júnior</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Atuando como programador júnior no desenvolvimento de
                        software web, automações eficientes e suporte à
                        implementação de soluções digitais.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Desenvolvimento Web</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="85%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Lógica & Automação</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="80%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Foco constante no aprendizado de novas tecnologias e em
                        escrever código de qualidade.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={five} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Inovação e tecnologia transformando o seu negócio
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Mizael Cabral</Link>
                      </h4>
                      <p>CEO</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Mizael Cabral</Link>
                      </h5>
                      <p>CEO</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Liderando a evolução digital através de inovação ágil,
                        inteligência artificial e soluções robustas em software
                        web de máxima performance.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Wireframe</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="75%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Visual Design</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Compromisso com excelência técnica e inovação contínua
                        para o sucesso do seu negócio.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={six} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Conectando marcas e pessoas através de conteúdo
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Rafaela Mendes</Link>
                      </h4>
                      <p>Social Media</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Rafaela Mendes</Link>
                      </h5>
                      <p>Social Media</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Gestão estratégica de redes sociais, criação de conteúdo
                        criativo, conexão com a comunidade e o fortalecimento da
                        marca na ME Hubdigital.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Social Media & Conteúdo</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Branding & Engajamento</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="85%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Criando narrativas autênticas e estratégias de impacto
                        para engajar nossa comunidade.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="team-s__slider-single">
                <div className="team-wrap">
                  <div className="thumb">
                    <Link href="team-single">
                      <Image src={seven} alt="Image" />
                    </Link>
                    <div
                      className="thumb__content"
                      style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                    >
                      <div className="info">
                        <p>
                          “Garantindo solidez financeira e eficiência contábil
                        </p>
                      </div>
                      <h4>
                        <Link href="team-single">Barbara Santiago</Link>
                      </h4>
                      <p>Financeiro & Contabilidade</p>
                      <div className="social-alt">
                        <Link
                          href="https://www.facebook.com/"
                          target="_blank"
                          aria-label="share us on facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link
                          href="https://www.twitter.com/"
                          target="_blank"
                          aria-label="share us on twitter"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                        <Link
                          href="https://www.pinterest.com/"
                          target="_blank"
                          aria-label="share us on pinterest"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="intro">
                      <h5>
                        <Link href="team-single">Barbara Santiago</Link>
                      </h5>
                      <p>Financeiro & Contabilidade</p>
                    </div>
                    <hr />
                    <div className="inner">
                      <p>
                        Gestão estratégica financeira e contábil, garantindo
                        conformidade, sustentabilidade e eficiência no
                        crescimento efetivo da ME Hubdigital.
                      </p>
                      <div className="skill-wrap">
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Gestão Financeira</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="95%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-single">
                          <div className="skill-bar-title">
                            <p>Controladoria & Contábil</p>
                          </div>
                          <div className="skill-bar-wrapper" data-percent="90%">
                            <div className="skill-bar">
                              <div className="skill-bar-percent">
                                <span className="percent-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Compromisso com rigor contábil, controle fiscal e
                        solidez financeira em cada decisão.
                      </p>
                    </div>
                    <div className="social">
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        aria-label="share us on facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://www.twitter.com/"
                        target="_blank"
                        aria-label="share us on twitter"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.pinterest.com/"
                        target="_blank"
                        aria-label="share us on pinterest"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        aria-label="share us on instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="slide-group">
          <button aria-label="previous item" className="slide-btn prev-team-s">
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button aria-label="next item" className="slide-btn next-team-s">
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
