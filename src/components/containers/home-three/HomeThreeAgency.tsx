import React from "react";
import Image from "next/image";
import Link from "next/link";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import clutch from "public/images/agency/clutch.png";
import thumbthree from "public/images/agency/thumb-three.png";

const HomeThreeAgency = () => {
  return (
    <section className="section agency agency-two">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
              <Image src={thumbthree} alt="Image" className="fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              <span className="sub-title">
                QUEM SOMOS
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Engenharia de software e IA corporativa
              </h2>
              <div className="paragraph">
                <p>
                  Transformamos gargalos operacionais em vantagens competitivas
                  sustentáveis por meio de sistemas web sob medida, inteligência
                  artificial avançada e arquiteturas de nuvem de alta
                  disponibilidade, unindo design de conversão a código escalável
                  para acelerar seus resultados.
                </p>
              </div>
              <div className="cta section__content-cta">
                <div className="single">
                  <h5 className="fw-7">99.9%</h5>
                  <p className="fw-5">uptime garantido</p>
                </div>
                <div className="single">
                  <h5 className="fw-7">10x+</h5>
                  <p className="fw-5">eficiência operacional</p>
                </div>
                <div className="single">
                  <h5 className="fw-7">100%</h5>
                  <p className="fw-5">código sob medida</p>
                </div>
              </div>
              <div className="section__content-cta cta-group">
                <Link href="/" className="clutch">
                  <Image src={clutch} alt="Image" />
                </Link>
                <Link
                  href="contact-us"
                  className="btn btn--primary text-capitalize"
                >
                  Agendar Conversa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={dotlarge} alt="Image" className="dot-large" />
    </section>
  );
};

export default HomeThreeAgency;
