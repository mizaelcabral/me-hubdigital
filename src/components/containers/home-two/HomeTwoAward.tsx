import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const HomeTwoAward = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image src={awardthumb} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                NOSSA EXCELÊNCIA
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Engenharia & <span>Inovação</span>
              </h2>
              <div className="paragraph">
                <p>
                  Transformamos desafios complexos em produtos digitais
                  escaláveis com inteligência artificial, plataformas modernas e
                  arquiteturas resilientes de alto impacto, garantindo inovação
                  contínua e resultados reais ao seu negócio.
                </p>
              </div>
              <div className="award__content-meta">
                <div className="single">
                  <h4>99.9%</h4>
                  <h4>Disponibilidade</h4>
                  <p>SLA corporativo garantido</p>
                </div>
                <div className="single">
                  <h4>10x+</h4>
                  <h4>Performance</h4>
                  <p>Eficiência em automações</p>
                </div>
                <div className="single">
                  <h4>100%</h4>
                  <h4>Sob Medida</h4>
                  <p>Arquitetura proprietária</p>
                </div>
              </div>
              <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  Conhecer Mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default HomeTwoAward;
