import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/blog/one.png";
import two from "public/images/blog/two.png";

const HomeBlog = () => {
  return (
    <section className="section blog fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                INSIGHTS & BLOG
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Artigos & tendências de tecnologia</h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top">
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={one} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">
                    Como Agentes de IA Reduzem Custos em Operações Web
                  </Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    inteligência artificial
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>DESTAQUE</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top">
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={two} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">
                    Arquitetura Cloud e Gateways: Maximizando o Seu ROI
                  </Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    engenharia web
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>DESTAQUE</p>
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
