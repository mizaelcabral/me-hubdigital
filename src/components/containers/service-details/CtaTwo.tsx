import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const CtaTwo = () => {
  const { t } = useLanguage();

  return (
    <section className="cta-two section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div
              className="cta-two-wrapper bg-img"
              style={{ backgroundImage: "url('/images/cta-two-bg.png')" }}
            >
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="cta-two__content">
                    <span>{t.ctaTwo.greeting}</span>
                    <h2 className="title-anim">{t.ctaTwo.title}</h2>
                    <h5>
                      <Link href="tel:+5583986817291">
                        {t.ctaTwo.callPrefix} +55 (83) 98681-7291
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-start text-lg-end">
                    <Link href="contact-us" className="btn btn--tertiary">
                      {t.ctaTwo.button}
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTwo;
