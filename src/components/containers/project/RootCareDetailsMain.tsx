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
import { useLanguage } from "@/context/LanguageContext";

const SCENES = [rootcareCenaOne, rootcareCenaTwo, rootcareCenaThree];
const GALLERY = [
  rootcareCapa,
  rootcareImgOne,
  rootcareImgTwo,
  rootcareImgThree,
  rootcareImgFour,
  rootcareImgFive,
  rootcareCapa,
  rootcareImgOne,
  rootcareImgTwo,
  rootcareImgThree,
  rootcareImgFour,
  rootcareImgFive,
];

const RootCareDetailsMain = () => {
  const { t } = useLanguage();

  return (
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">{t.rootcare.h1}</h3>
              <p>{t.rootcare.p1}</p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">{t.rootcare.h2}</h3>
              <p>{t.rootcare.p2}</p>
              <ul>
                {t.rootcare.bullets.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
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
                  {SCENES.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="poster__slider-single">
                        <Image
                          src={img}
                          alt={`RootCare 0${idx + 1}`}
                          priority={idx === 0}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
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
                <h5>{t.rootcare.metaSegment}</h5>
                <p>{t.rootcare.metaSegmentVal}</p>
              </div>
              <div className="thumb">
                <Image src={iconone} alt={t.rootcare.metaSegment} />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>{t.rootcare.metaWebsite}</h5>
                <p>
                  <Link
                    href="https://www.rootcareclub.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-inline-flex align-items-center gap-1"
                  >
                    rootcareclub.com.br{" "}
                    <i
                      className="fa-solid fa-arrow-up-right-from-square"
                      style={{ fontSize: "12px" }}
                    ></i>
                  </Link>
                </p>
              </div>
              <div className="thumb">
                <Link
                  href="https://www.rootcareclub.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RootCare Club"
                >
                  <Image src={icontwo} alt={t.rootcare.metaWebsite} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>{t.rootcare.metaTech}</h5>
                <p>{t.rootcare.metaTechVal}</p>
              </div>
              <div className="thumb">
                <Image src={iconthree} alt={t.rootcare.metaTech} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">{t.rootcare.overviewTitle}</h3>
              <p>{t.rootcare.overviewP1}</p>
              <p>{t.rootcare.overviewP2}</p>
              <div className="btn-wrapper mt-4">
                <Link
                  href="https://www.rootcareclub.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  {t.rootcare.visitBtn}{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
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
                  {t.rootcare.quote}
                </blockquote>
              </div>
              <div className="author">
                <h4>{t.rootcare.quoteAuthor}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">{t.rootcare.resultsTitle}</h3>
              <p>{t.rootcare.resultsP1}</p>
              <p>{t.rootcare.resultsP2}</p>
              <div className="btn-wrapper mt-4">
                <Link
                  href="https://www.rootcareclub.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  {t.rootcare.exploreBtn}{" "}
                  <i className="fa-solid fa-arrow-up-right-from-square ms-2"></i>
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
          {GALLERY.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="project-d__slider-single">
                <Image src={img} alt={`RootCare 0${(idx % 6) + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RootCareDetailsMain;
