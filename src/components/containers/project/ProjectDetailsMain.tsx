import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import abblaCenaOne from "public/images/projects/projeto-abbla/ABBLA-CENA-01.png";
import abblaCenaTwo from "public/images/projects/projeto-abbla/ABBLA-CENA-02.png";
import abblaCenaThree from "public/images/projects/projeto-abbla/ABBLA-CENA-03.png";
import abblaImgOne from "public/images/projects/projeto-abbla/PROJETO-ABBLA-IMAGE-01.png";
import abblaImgTwo from "public/images/projects/projeto-abbla/PROJETO-ABBLA-IMAGE-02.png";
import abblaImgThree from "public/images/projects/projeto-abbla/PROJETO-ABBLA-IMAGE-03.png";
import abblaImgFour from "public/images/projects/projeto-abbla/PROJETO-ABBLA-IMAGE-04.png";
import abblaImgFive from "public/images/projects/projeto-abbla/PROJETO-ABBLA-IMAGE-05.png";
import abblaImgSix from "public/images/projects/projeto-abbla/PROJETO-ABBLA-IMAGE-06.png";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";
import { useLanguage } from "@/context/LanguageContext";

const GALLERY_IMAGES = [
  abblaImgOne,
  abblaImgTwo,
  abblaImgThree,
  abblaImgFour,
  abblaImgFive,
  abblaImgSix,
  abblaImgOne,
  abblaImgTwo,
  abblaImgThree,
  abblaImgFour,
  abblaImgFive,
  abblaImgSix,
];

const ProjectDetailsMain = () => {
  const { t } = useLanguage();

  return (
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">{t.abbla.h1}</h3>
              <p>{t.abbla.p1}</p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">{t.abbla.h2}</h3>
              <p>{t.abbla.p2}</p>
              <ul>
                {t.abbla.bullets.map((item, idx) => (
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
                  {[abblaCenaOne, abblaCenaTwo, abblaCenaThree, abblaCenaOne, abblaCenaTwo, abblaCenaThree].map(
                    (img, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="poster__slider-single">
                          <Image
                            src={img}
                            alt={`AbblaHUB 0${(idx % 3) + 1}`}
                            priority={idx === 0}
                          />
                        </div>
                      </SwiperSlide>
                    )
                  )}
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
                <h5>{t.abbla.metaSegment}</h5>
                <p>{t.abbla.metaSegmentVal}</p>
              </div>
              <div className="thumb">
                <Image src={iconone} alt={t.abbla.metaSegment} />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>{t.abbla.metaWebsite}</h5>
                <p>
                  <Link
                    href="https://www.abblahub.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-inline-flex align-items-center gap-1"
                  >
                    abblahub.com{" "}
                    <i
                      className="fa-solid fa-arrow-up-right-from-square"
                      style={{ fontSize: "12px" }}
                    ></i>
                  </Link>
                </p>
              </div>
              <div className="thumb">
                <Link
                  href="https://www.abblahub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="AbblaHUB"
                >
                  <Image src={icontwo} alt={t.abbla.metaWebsite} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>{t.abbla.metaTech}</h5>
                <p>{t.abbla.metaTechVal}</p>
              </div>
              <div className="thumb">
                <Image src={iconthree} alt={t.abbla.metaTech} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">{t.abbla.overviewTitle}</h3>
              <p>{t.abbla.overviewP1}</p>
              <p>{t.abbla.overviewP2}</p>
              <div className="btn-wrapper mt-4">
                <Link
                  href="https://www.abblahub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  {t.abbla.visitBtn}{" "}
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
                  {t.abbla.quote}
                </blockquote>
              </div>
              <div className="author">
                <h4>{t.abbla.quoteAuthor}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">{t.abbla.resultsTitle}</h3>
              <p>{t.abbla.resultsP1}</p>
              <p>{t.abbla.resultsP2}</p>
              <div className="btn-wrapper mt-4">
                <Link
                  href="https://www.abblahub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  {t.abbla.exploreBtn}{" "}
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
          {GALLERY_IMAGES.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="project-d__slider-single">
                <Image src={img} alt={`AbblaHUB 0${(idx % 6) + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectDetailsMain;
