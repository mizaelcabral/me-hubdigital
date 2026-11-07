import React from "react";
import Image from "next/image";
import Link from "next/link";
import thumb from "public/images/footer/footer-three-thumb.png";
import logo from "public/images/logo.png";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section footer-three pb-0">
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-4">
            <div className="footer-three__single">
              <div className="footer-thumb">
                <Image src={thumb} alt="Image" />
                <div className="footer-thumb__content">
                  <h5>Matriz Brasil, São Paulo</h5>
                </div>
              </div>
              <div className="footer-three__group ps-0">
                <ul>
                  <li>
                    <Link
                      href="https://maps.google.com"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Av. Paulista, 1000 - Bela Vista, SP
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+5511999999999">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (11) 99999-9999
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:contato@mehubdigital.com.br">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      contato@mehubdigital.com.br
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                  >
                    Ver no Mapa
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="group-wrapper">
              <div className="footer-three__group">
                <div className="intro">
                  <h5>Rio de Janeiro</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://maps.google.com"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Av. Rio Branco, 156 - Centro, RJ
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+5511999999999">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (11) 99999-9999
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:contato@mehubdigital.com.br">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      contato@mehubdigital.com.br
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                  >
                    Ver no Mapa
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="footer-three__group section__content-cta">
                <div className="intro">
                  <h5>Belo Horizonte</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://maps.google.com"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Av. do Contorno, 6594 - Savassi, MG
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+5511999999999">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (11) 99999-9999
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:contato@mehubdigital.com.br">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      contato@mehubdigital.com.br
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                  >
                    Ver no Mapa
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="group-wrapper">
              <div className="footer-three__group">
                <div className="intro">
                  <h5>Curitiba</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://maps.google.com"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Rua XV de Novembro, 1200 - Centro, PR
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+5511999999999">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (11) 99999-9999
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:contato@mehubdigital.com.br">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      contato@mehubdigital.com.br
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                  >
                    Ver no Mapa
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="footer-three__group section__content-cta">
                <div className="intro">
                  <h5>Florianópolis</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://maps.google.com"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Rodovia SC-401, 4150 - Florianópolis, SC
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+5511999999999">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (11) 99999-9999
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:contato@mehubdigital.com.br">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      contato@mehubdigital.com.br
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                  >
                    Ver no Mapa
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-three__copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__copyright">
                <div className="row align-items-center gaper">
                  <div className="col-12 col-lg-8">
                    <div className="footer__copyright-text text-center text-lg-start">
                      <p>
                        Copyright &copy;{" "}
                        <span id="copyYear">{currentYear}</span> ME Hubdigital . Todos os Direitos Reservados
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="text-center text-lg-end">
                      <Link href="/" className="logo">
                        <Image src={logo} alt="Image" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
