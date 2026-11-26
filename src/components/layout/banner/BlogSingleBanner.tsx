import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface BlogSingleBannerProps {
  title?: string;
  category?: string;
}

const BlogSingleBanner = ({ title, category }: BlogSingleBannerProps) => {
  const { t } = useLanguage();
  const resolvedTitle = title || t.blogAi.bannerTitle;
  const resolvedCategory = category || t.blogAi.bannerCategory;

  return (
    <section
      className="cmn-banner bg-img"
      style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12">
            <div className="text-center text-lg-start">
              <h2 className="title title-anim">{resolvedTitle}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i>
                      {t.nav.home}
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {resolvedCategory}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingleBanner;
