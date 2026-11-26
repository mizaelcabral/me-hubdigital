import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/portfolio/one.webp";
import two from "public/images/portfolio/two.webp";
import three from "public/images/portfolio/three.webp";
import four from "public/images/portfolio/four.webp";
import five from "public/images/portfolio/five.webp";
import six from "public/images/portfolio/six.webp";
import seven from "public/images/portfolio/seven.webp";
import dot from "public/images/portfolio/dot.png";
import { useLanguage } from "@/context/LanguageContext";

const PORTFOLIO_IMAGES = [one, two, three, four, five, six, seven];

const PortfolioText = () => {
  const [hover, setHover] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="section portfolio pb-0 fade-wrapper position-relative">
      <div className="portfolio__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="portfolio__text-slider"
        >
          {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
            <SwiperSlide key={idx}>
              <div className="portfolio__text-slider-single">
                <h2 className={idx % 2 === 1 ? "h1 str" : "h1"}>
                  <Link href="portfolio">
                    {t.portfolioText.marquee}
                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                  </Link>
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container-fluid">
        <div className="row gaper">
          {t.portfolioText.items.slice(0, 6).map((label, idx) => (
            <div className="col-12 col-sm-6 col-xl-3" key={idx}>
              <div
                className={
                  "portfolio__single topy-tilt fade-top" +
                  (hover === idx ? " portfolio__single-active" : " ")
                }
                onMouseEnter={() => setHover(idx)}
              >
                <Link href="portfolio">
                  <Image src={PORTFOLIO_IMAGES[idx]} alt={label} />
                </Link>
                <div className="portfolio__single-content">
                  <Link href="portfolio">
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                  <h4>
                    <Link href="portfolio">{label}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="portfolio__single-alt-wrapper fade-top">
              <div className="portfolio__single-alt topy-tilt">
                <h4>
                  <Link href="portfolio">{t.portfolioText.viewAll}</Link>
                </h4>
                <Link href="portfolio" className="arr">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <Image src={dot} alt="Image" className="dot-one" />
                <Image src={dot} alt="Image" className="dot-two" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 6 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(6)}
            >
              <Link href="portfolio">
                <Image
                  src={PORTFOLIO_IMAGES[6]}
                  alt={t.portfolioText.items[6]}
                />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">{t.portfolioText.items[6]}</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default PortfolioText;
