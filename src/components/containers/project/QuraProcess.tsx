import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const QuraProcess = () => {
  const [imgTab, setImgTab] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="section ux-process bg-tertiary fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                {t.qura.processSub}
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">{t.qura.processTitle}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              {t.qura.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={
                    "service-f-single fade-top " +
                    (imgTab === idx ? " service-f-single-active" : " ")
                  }
                >
                  <div className="single-item">
                    <div className="intro-btn">
                      <h4>{step.title}</h4>
                    </div>
                  </div>
                  <div className="single-item p-single p-sm body-cn">
                    <p>{step.desc}</p>
                  </div>
                  <button
                    className="toggle-service-f"
                    aria-label={step.title}
                    onClick={() => setImgTab(imgTab === idx ? -1 : idx)}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuraProcess;
