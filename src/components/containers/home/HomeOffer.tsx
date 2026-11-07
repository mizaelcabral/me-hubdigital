import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import blogthumb from "public/images/offer/blog-thumb.png";
import two from "public/images/offer/two.png";
import three from "public/images/offer/three.png";
import star from "public/images/offer/star.png";

const HomeOffer = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section offer fade-wrapper light">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5">
            <div className="offer__content section__content">
              <span className="sub-title">
                NOSSOS SERVIÇOS
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Soluções Completas em Engenharia Digital
              </h2>
              <div className="paragraph">
                <p>
                  Integramos tecnologia de ponta, design refinado e fluxos
                  inteligentes para construir ecossistemas de alta conversão.
                  Desenvolvemos desde agentes autônomos e portais SaaS até a
                  gestão de gateways de pagamento e infraestrutura em nuvem,
                  eliminando qualquer atrito na operação.
                </p>
              </div>
              <div className="section__content-cta">
                <Link href="our-services" className="btn btn--secondary">
                  ver todos serviços
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className="offer__cta">
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">
                    Agentes de IA
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">
                    Sites & E-commerce
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={two} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">
                    Aplicações Web
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={three} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">
                    Gateways de Pagamento
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  05
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">
                    Automação & CRM
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={two} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  06
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">
                    UI/UX & Design
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={three} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  07
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="our-services">
                    Hospedagem & Cloud
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default HomeOffer;
