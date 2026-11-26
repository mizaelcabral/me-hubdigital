import React, { useState, useEffect } from "react";
import Image from "next/image";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import videoframe from "public/images/video-frame.png";
import { useLanguage } from "@/context/LanguageContext";

const STEP_PERCENTS = ["25", "50", "75", "100"];
const STEP_BG = [
  "/images/work/thumb-one.png",
  "/images/work/thumb-two.png",
  "/images/work/thumb-three.png",
  "/images/work/thumb-four.png",
];
const STEP_EXTRA_CLASS = ["", " work-two", " work-three", " work-four"];

const WorkStepsProject = () => {
  const [hover, setHover] = useState(1);
  const [videoActive, setVideoActive] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (typeof window !== "undefined") {
        const deviceWidth = window.innerWidth;

        if (deviceWidth > 576) {
          const workImgItems = document.querySelectorAll<HTMLElement>(
            ".work-steps__single"
          );

          workImgItems.forEach((item) => {
            const contentBox = item.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            if (item.children[2] instanceof HTMLElement) {
              item.children[2].style.transform = `translateX(${dx}px)`;
            }
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section className="section work-steps work-alt fade-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__header--secondary">
                <div className="row gaper align-items-center">
                  <div className="col-12 col-lg-5 col-xxl-5">
                    <div className="section__header text-center text-lg-start mb-0">
                      <span className="sub-title">
                        {t.workSteps.subTitle}
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <h2 className="title title-anim">{t.workSteps.title}</h2>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                    <div className="text-center text-lg-start">
                      <p>{t.workSteps.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {t.workSteps.steps.map((label, idx) => (
              <div className="col-12 col-sm-6 col-xl-3" key={idx}>
                <div
                  className={
                    "work-steps__single fade-top" +
                    STEP_EXTRA_CLASS[idx] +
                    (hover === idx ? " work-steps__single-active" : " ")
                  }
                  onMouseEnter={() => setHover(idx)}
                >
                  <span>
                    {STEP_PERCENTS[idx]}
                    <br />%
                  </span>
                  <h5>{label}</h5>
                  <div
                    className="work-thumb-hover d-none d-md-block"
                    style={{
                      backgroundImage: `url('${STEP_BG[idx]}')`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="video-frame video-btn d-none d-md-flex"
          onClick={() => setVideoActive(true)}
        >
          <Image src={videoframe} alt="Image" />
          <i className="fa-sharp fa-solid fa-play"></i>
        </button>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkStepsProject;
