import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import quraCenaOne from "public/images/projects/projeto-qura/QURA-CENA-01.png";
import quraCenaTwo from "public/images/projects/projeto-qura/QURA-CENA-02.png";
import quraCenaThree from "public/images/projects/projeto-qura/QURA-CENA-03.png";
import quraCenaFour from "public/images/projects/projeto-qura/QURA-CENA-04.png";
import quraCenaFive from "public/images/projects/projeto-qura/QURA-CENA-05.png";
import quraCapa from "public/images/projects/projeto-qura/PROJETO-QURA-CAPA.png";
import quraImgOne from "public/images/projects/projeto-qura/PROJETO-QURA-ID-IMAGE-01.png";
import quraImgTwo from "public/images/projects/projeto-qura/PROJETO-QURA-ID-IMAGE-02.png";
import quraImgThree from "public/images/projects/projeto-qura/PROJETO-QURA-ID-IMAGE-03.png";
import quraImgThreeOne from "public/images/projects/projeto-qura/PROJETO-QURA-ID-IMAGE-03-1.png";
import quraImgFour from "public/images/projects/projeto-qura/PROJETO-QURA-ID-IMAGE-04.png";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";
import { useLanguage } from "@/context/LanguageContext";

const SCENES = [quraCenaOne, quraCenaTwo, quraCenaThree, quraCenaFour, quraCenaFive];
const GALLERY = [
  quraImgOne,
  quraImgTwo,
  quraImgThree,
  quraImgThreeOne,
  quraImgFour,
  quraCapa,
  quraImgOne,
  quraImgTwo,
  quraImgThree,
  quraImgThreeOne,
  quraImgFour,
  quraCapa,
];

const QuraDetailsMain = () => {
  const { t } = useLanguage();

  return (
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">{t.qura.h1}</h3>
              <p>{t.qura.p1}</p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">{t.qura.h2}</h3>
              <p>{t.qura.p2}</p>
              <ul>
                {t.qura.bullets.map((item, idx) => (
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
                          alt={`Qura ID 0${idx + 1}`}
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
                <h5>{t.qura.metaSegment}</h5>
                <p>{t.qura.metaSegmentVal}</p>
              </div>
              <div className="thumb">
                <Image src={iconone} alt={t.qura.metaSegment} />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>{t.qura.metaPlatform}</h5>
                <p>
                  <span className="d-inline-flex align-items-center gap-1">
                    {t.qura.metaPlatformVal}{" "}
                    <i className="fa-solid fa-id-card" style={{ fontSize: "12px" }}></i>
                  </span>
                </p>
              </div>
              <div className="thumb">
                <Image src={icontwo} alt={t.qura.metaPlatform} />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>{t.qura.metaTech}</h5>
                <p>{t.qura.metaTechVal}</p>
              </div>
              <div className="thumb">
                <Image src={iconthree} alt={t.qura.metaTech} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">{t.qura.overviewTitle}</h3>
              <p>{t.qura.overviewP1}</p>
              <p>{t.qura.overviewP2}</p>
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
                  {t.qura.quote}
                </blockquote>
              </div>
              <div className="author">
                <h4>{t.qura.quoteAuthor}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">{t.qura.resultsTitle}</h3>
              <p>{t.qura.resultsP1}</p>
              <p>{t.qura.resultsP2}</p>
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
                <Image src={img} alt={`Qura ID 0${(idx % 6) + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default QuraDetailsMain;
