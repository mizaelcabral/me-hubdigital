import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import BlogSingleBanner from "@/components/layout/banner/BlogSingleBanner";
import BlogDetailsCloudGateways from "@/components/containers/blog/BlogDetailsCloudGateways";
import { useLanguage } from "@/context/LanguageContext";

const ArquiteturaCloudGateways = () => {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t.meta.blogCloudTitle}</title>
        <meta name="description" content={t.meta.blogCloudDescription} />
        <meta property="og:title" content={t.meta.blogCloudTitle} />
        <meta property="og:description" content={t.meta.blogCloudDescription} />
        <meta
          property="og:image"
          content="/images/news/cloud-gateways-banner.png"
        />
      </Head>
      <Layout header={2} footer={5} video={0}>
        <BlogSingleBanner
          title={t.blogCloud.bannerTitle}
          category={t.blogCloud.bannerCategory}
        />
        <BlogDetailsCloudGateways />
      </Layout>
    </>
  );
};

export default ArquiteturaCloudGateways;
