import React, { useState } from "react";
import Image from "next/image";
import thumb from "public/images/faq-thumb.png";
import { useLanguage } from "@/context/LanguageContext";

const IDS = ["One", "Two", "Three", "Four"];

const FaqMain = () => {
  const [imgTab, setImgTab] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="section faq fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="faq__thumb fade-left">
              <Image src={thumb} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="accordion" id="accordion">
              {t.faq.items.map((item, idx) => {
                const suffix = IDS[idx] || String(idx);
                return (
                  <div
                    key={idx}
                    className={
                      "accordion-item content__space fade-top" +
                      (imgTab === idx ? " faq-one-active" : " ")
                    }
                  >
                    <h5 className="accordion-header" id={`heading${suffix}`}>
                      <button
                        className={
                          (imgTab === idx ? "  " : " collapsed") +
                          " accordion-button"
                        }
                        onClick={() => setImgTab(imgTab === idx ? -1 : idx)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${suffix}`}
                        aria-expanded={imgTab === idx ? "true" : "false"}
                        aria-controls={`collapse${suffix}`}
                      >
                        {item.q}
                      </button>
                    </h5>
                    <div
                      id={`collapse${suffix}`}
                      className={`accordion-collapse collapse${
                        imgTab === idx ? " show " : ""
                      }`}
                      aria-labelledby={`heading${suffix}`}
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqMain;
