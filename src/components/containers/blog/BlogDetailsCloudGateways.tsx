import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImg from "public/images/news/cloud-gateways-banner.png";
import routingImg from "public/images/news/cloud-gateways-routing.png";
import roiImg from "public/images/news/cloud-gateways-roi.png";
import blogOne from "public/images/blog/one.webp";
import blogTwo from "public/images/blog/two.webp";
import portFour from "public/images/portfolio/four.webp";
import portSeven from "public/images/portfolio/seven.webp";
import portThree from "public/images/portfolio/three.webp";
import { useLanguage } from "@/context/LanguageContext";

const BlogDetailsCloudGateways = () => {
  const { t } = useLanguage();

  return (
    <section className="section blog-main blog-details fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-xl-8">
            <div className="blog-details__content">
              <div className="bd-thumb fade-top">
                <Image src={bannerImg} alt={t.blogCloud.bannerTitle} priority />
              </div>
              <div className="bd-content">
                <div className="bd-meta">
                  <div className="meta__left">
                    <p>
                      <strong>{t.blogShared.writtenBy}</strong>{" "}
                      {t.blogShared.author}
                    </p>
                    <span></span>
                    <p>18/11/2026</p>
                    <span></span>
                    <p>{t.blogCloud.readTime}</p>
                  </div>
                </div>
                <div className="bd-content-info">
                  <h4 className="h4">{t.blogCloud.bannerTitle}</h4>
                  <div className="paragraph">
                    <p>{t.blogCloud.p1}</p>
                    <p>{t.blogCloud.p2}</p>
                  </div>
                  <h4 className="h4">{t.blogCloud.h2}</h4>
                  <div className="paragraph">
                    <p>{t.blogCloud.p3}</p>
                    <p>{t.blogCloud.p4}</p>
                  </div>
                </div>
              </div>
              <div className="bd-group">
                <Image src={routingImg} alt={t.blogCloud.h3} className="fade-top" />
                <Image src={roiImg} alt={t.blogCloud.h4} className="fade-top" />
              </div>
              <div className="bd-content ">
                <div className="bd-content__alt">
                  <h4 className="h4">{t.blogCloud.h3}</h4>
                  <p>{t.blogCloud.p5}</p>
                  <ul>
                    {t.blogCloud.pillars.map((pillar, idx) => (
                      <li key={idx}>
                        <strong>{pillar.title}</strong> {pillar.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bd-quote">
                <blockquote>
                  <q className="light-title-lg">{t.blogCloud.quote}</q>
                </blockquote>
              </div>
              <div className="bd-content">
                <div className="bd-content__alt mt-0">
                  <h4 className="h4">{t.blogCloud.h4}</h4>
                  <p>{t.blogCloud.p6}</p>
                  <p>{t.blogCloud.p7}</p>
                </div>
              </div>
              <div className="bd-tags">
                <div className="tags-left">
                  <p>{t.blogShared.tags}</p>
                  <div className="tags-content">
                    {t.blogCloud.postTags.map((tag, idx) => (
                      <Link href="/blog" key={idx}>
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="tags-right">
                  <p>{t.blogShared.share}</p>
                  <ul className="social">
                    <li>
                      <Link
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Twitter / X"
                      >
                        <i className="fa-brands fa-x-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://api.whatsapp.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="WhatsApp"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="blog-details__pagination">
              <div className="row gaper">
                <div className="col-md-6">
                  <div className="single">
                    <Link href="/blog-single">
                      <i className="fa-solid fa-arrow-left-long"></i>
                      {t.blogCloud.prevLabel}
                    </Link>
                    <div className="latest-single">
                      <div className="latest-thumb">
                        <Link href="/blog-single">
                          <Image src={blogOne} alt={t.blogCloud.prevTitle} />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>{t.blogCloud.prevCategory}</p>
                        <p>
                          <Link href="/blog-single">
                            {t.blogCloud.prevTitle}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single single--alt">
                    <Link href="/portfolio">
                      {t.blogCloud.nextLabel}
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                    <div className="latest-single">
                      <div className="latest-thumb">
                        <Link href="/portfolio">
                          <Image src={portFour} alt={t.blogCloud.nextTitle} />
                        </Link>
                      </div>
                      <div className="latest-content">
                        <p>{t.blogShared.casesPortfolio}</p>
                        <p>
                          <Link href="/portfolio">{t.blogCloud.nextTitle}</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section pb-0 comment-form fade-top">
                <div className="section__header">
                  <h2 className="h2 text-start">{t.blogShared.leaveComment}</h2>
                </div>
                <form
                  action="#"
                  method="post"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="form-group-wrapper">
                    <div className="form-group-single">
                      <input
                        type="text"
                        name="comment-name"
                        id="commentName"
                        placeholder={t.blogShared.namePlaceholder}
                        required
                      />
                    </div>
                    <div className="form-group-single">
                      <input
                        type="email"
                        name="comment-email"
                        id="commentemail"
                        placeholder={t.blogShared.emailPlaceholder}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group-single">
                    <textarea
                      name="comment-message"
                      id="commentMessage"
                      placeholder={t.blogCloud.commentPlaceholder}
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  <div className="cta__group">
                    <button type="submit" className="btn btn--ocotonary">
                      {t.blogShared.publishBtn}
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="blog-main__sidebar">
              <div className="widget ">
                <div className="widget__head">
                  <h5 className="h5">{t.blogShared.searchTitle}</h5>
                </div>
                <div className="widget-search">
                  <form
                    action="#"
                    method="post"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="form-group-input">
                      <input
                        type="search"
                        name="blog-search"
                        id="blogSearch"
                        placeholder={t.blogShared.searchPlaceholder}
                      />
                      <button type="submit" aria-label={t.blogShared.searchTitle}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="widget ">
                <div className="widget__head">
                  <h5 className="h5">{t.blogShared.categoriesTitle}</h5>
                </div>
                <div className="widget__list">
                  <ul>
                    {t.blogShared.categories.map((cat, idx) => (
                      <li key={idx}>
                        <Link href="/blog">{cat}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="widget">
                <div className="widget__head">
                  <h5 className="h5">{t.blogShared.recentTitle}</h5>
                </div>
                <div className="widget__latest">
                  <div className="latest-single ">
                    <div className="latest-thumb">
                      <Link href="/arquitetura-cloud-gateways">
                        <Image src={blogTwo} alt={t.blogCloud.bannerTitle} />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>18/11/2026</p>
                      <p>
                        <Link href="/arquitetura-cloud-gateways">
                          {t.blogCloud.bannerTitle}
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="latest-single ">
                    <div className="latest-thumb">
                      <Link href="/blog-single">
                        <Image src={blogOne} alt={t.blogAi.bannerTitle} />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>18/11/2026</p>
                      <p>
                        <Link href="/blog-single">{t.blogAi.bannerTitle}</Link>
                      </p>
                    </div>
                  </div>
                  <div className="latest-single ">
                    <div className="latest-thumb">
                      <Link href="/portfolio">
                        <Image src={portSeven} alt={t.blogCloud.recent3} />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>{t.blogShared.casesCloud}</p>
                      <p>
                        <Link href="/portfolio">{t.blogCloud.recent3}</Link>
                      </p>
                    </div>
                  </div>
                  <div className="latest-single ">
                    <div className="latest-thumb">
                      <Link href="/portfolio">
                        <Image src={portThree} alt={t.blogCloud.recent4} />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>{t.blogShared.casesSales}</p>
                      <p>
                        <Link href="/portfolio">{t.blogCloud.recent4}</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget">
                <div className="widget__head">
                  <h5 className="h5">{t.blogShared.tagsTitle}</h5>
                </div>
                <div className="widget__tags">
                  <ul>
                    <li><Link href="/blog">cloud</Link></li>
                    <li><Link href="/blog">gateways</Link></li>
                    <li><Link href="/blog">devops</Link></li>
                    <li><Link href="/blog">checkout</Link></li>
                    <li><Link href="/blog">roi</Link></li>
                    <li><Link href="/blog">uptime</Link></li>
                    <li><Link href="/blog">saas</Link></li>
                  </ul>
                </div>
              </div>
              <div className="widget widget-big ">
                <Link href="/contact-us">
                  <Image
                    src={portSeven}
                    alt="ME Hubdigital"
                    style={{ borderRadius: "12px", width: "100%", height: "auto" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsCloudGateways;
