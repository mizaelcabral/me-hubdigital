import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/blog/one.webp";
import two from "public/images/blog/two.webp";
import { useLanguage } from "@/context/LanguageContext";

const HomeBlog = () => {
  const { t } = useLanguage();

  return (
    <section className="section blog fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="section__header text-center">
              <div>
                <span className="sub-title">
                  {t.homeBlog.subTitle}
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
              <h2 className="title title-anim">{t.homeBlog.title}</h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top">
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={one} alt={t.homeBlog.post1Title} />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">{t.homeBlog.post1Title}</Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    {t.homeBlog.post1Category}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>{t.homeBlog.featured}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top">
              <div className="blog__single-thumb topy-tilt">
                <Link href="/arquitetura-cloud-gateways">
                  <Image src={two} alt={t.homeBlog.post2Title} />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="/arquitetura-cloud-gateways">
                    {t.homeBlog.post2Title}
                  </Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    {t.homeBlog.post2Category}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>{t.homeBlog.featured}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
