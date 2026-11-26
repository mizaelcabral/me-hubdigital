import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useLanguage } from "@/context/LanguageContext";

const NextPage = () => {
  const { t } = useLanguage();

  return (
    <section className="section next-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <Link href="contact-us" className="sub-title mb-0">
                {t.nextPage.subTitle}
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="next__text-slider-w">
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
          className="next__text-slider"
        >
          {Array.from({ length: 12 }).map((_, idx) => (
            <SwiperSlide key={idx}>
              <div className="next__text-slider-single">
                <h2 className={idx % 2 === 1 ? "h1 str" : "h1"}>
                  <Link href="contact-us">
                    {t.nextPage.marquee}
                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                  </Link>
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

export default NextPage;
