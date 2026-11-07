import React from "react";
import Link from "next/link";

const Info = () => {
  return (
    <section className="section four-info">
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-6">
            <h2 className="light-title text-uppercase fw-7 title-anim">
              QUEM SOMOS !
            </h2>
          </div>
          <div className="col-12 col-lg-6">
            <div className="four-info__content">
              <p className="primary-text">
                Uma agência de engenharia digital especializada em inteligência
                artificial, plataformas web e ecossistemas corporativos.
              </p>
              <p>
                Na ME Hub, combinamos desenvolvimento de software de ponta,
                automação inteligente e design de conversão para transformar
                desafios de negócio em vantagens competitivas sustentáveis para
                empresas em constante crescimento e busca por inovação.
              </p>
              <div className="section__content-cta">
                <Link href="contact-us" className="btn btn--primary">
                  fale conosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
