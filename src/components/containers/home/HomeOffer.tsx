import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import serviceOne from "public/images/offer/service-one.webp";
import serviceTwo from "public/images/offer/service-two.webp";
import serviceThree from "public/images/offer/service-three.webp";
import serviceFour from "public/images/offer/service-four.webp";
import serviceFive from "public/images/offer/service-five.webp";
import serviceSix from "public/images/offer/service-six.webp";
import serviceSeven from "public/images/offer/service-seven.webp";
import star from "public/images/offer/star.png";
import { useLanguage } from "@/context/LanguageContext";

const SERVICE_IMAGES = [
  serviceOne,
  serviceTwo,
  serviceThree,
  serviceFour,
  serviceFive,
  serviceSix,
  serviceSeven,
];

const HomeOffer = () => {
  const { t } = useLanguage();

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
          if (thirdChild) {
            thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
          }
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
                {t.homeOffer.subTitle}
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">{t.homeOffer.title}</h2>
              <div className="paragraph">
                <p>{t.homeOffer.description}</p>
              </div>
              <div className="section__content-cta">
                <Link href="our-services" className="btn btn--secondary">
                  {t.homeOffer.cta}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className="offer__cta">
              {t.homeOffer.services.map((title, idx) => (
                <div className="offer__cta-single fade-top" key={idx}>
                  <span className="sub-title">
                    {String(idx + 1).padStart(2, "0")}
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h2>
                    <Link href="our-services">
                      {title}
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </h2>
                  <div className="offer-thumb-hover d-none d-md-block">
                    <Image src={SERVICE_IMAGES[idx]} alt={title} />
                  </div>
                </div>
              ))}
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
