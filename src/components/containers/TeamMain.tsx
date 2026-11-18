import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/teams/one.png";
import two from "public/images/teams/two.png";
import three from "public/images/teams/three.png";
import four from "public/images/teams/four.png";
import five from "public/images/teams/five.png";
import six from "public/images/teams/six.png";
import seven from "public/images/teams/seven.png";

const TeamMain = () => {
  return (
    <section className="section team-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
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
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More..</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMain;
