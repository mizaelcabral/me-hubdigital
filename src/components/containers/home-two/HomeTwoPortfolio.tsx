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

const HomeTwoPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleTabClick = (filter: any) => {
    setActiveFilter(filter);
  };
  return (
    <section className="section portfolio portfolio-two portfolio-filter fade-wrapper">
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
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  projetos & cases
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  projetos & cases
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  projetos & cases
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  projetos & cases
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  projetos & cases
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="portfolio">
                  projetos & cases
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="portfolio">
                  projetos & cases
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-xl-4 text-center">
            <div className="portfolio-two__filter-btn section__header g-ind">
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === "*" ? "active" : ""}
                onClick={() => handleTabClick("*")}
              >
                <span>01</span>
                Todos
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".design" ? "active" : ""}
                onClick={() => handleTabClick(".design")}
              >
                <span>02</span>
                Design
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".development" ? "active" : ""}
                onClick={() => handleTabClick(".development")}
              >
                <span>03</span>
                Desenvolvimento
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".technology" ? "active" : ""}
                onClick={() => handleTabClick(".technology")}
              >
                <span>04</span>
                Inteligência Artificial
              </button>
            </div>
          </div>
        </div>
        <div className="row masonry-grid">
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main technology ${
              activeFilter === ".technology" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single portfolio__single-active topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={one} alt="SaaS & Web App" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">SaaS & Web App</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design ${
              activeFilter === ".design" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={two} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Agente IA Suporte</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${
              activeFilter === ".development" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={three} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">E-commerce Alta Escala</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main technology ${
              activeFilter === ".technology" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={four} alt="Checkout Personalizado" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Checkout Personalizado</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design ${
              activeFilter === ".design" || activeFilter === "*" ? "" : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={five} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Automação WhatsApp</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${
              activeFilter === ".development" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="portfolio">
                <Image src={six} alt="UI/UX & Design Figma" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">UI/UX & Design Figma</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoPortfolio;
