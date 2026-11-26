import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import BlogSingleBanner from "@/components/layout/banner/BlogSingleBanner";
import BlogDetailsMain from "@/components/containers/blog/BlogDetailsMain";
import { useLanguage } from "@/context/LanguageContext";

const BlogSingle = () => {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t.meta.blogAiTitle}</title>
        <meta name="description" content={t.meta.blogAiDescription} />
        <meta property="og:title" content={t.meta.blogAiTitle} />
        <meta property="og:description" content={t.meta.blogAiDescription} />
        <meta property="og:image" content="/images/news/poster.png" />
      </Head>
      <Layout header={2} footer={5} video={0}>
        <BlogSingleBanner
          title={t.blogAi.bannerTitle}
          category={t.blogAi.bannerCategory}
        />
        <BlogDetailsMain />
      </Layout>
    </>
  );
};

export default BlogSingle;
