import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import BlogSingleBanner from "@/components/layout/banner/BlogSingleBanner";
import BlogDetailsCloudGateways from "@/components/containers/blog/BlogDetailsCloudGateways";

const ArquiteturaCloudGateways = () => {
  return (
    <>
      <Head>
        <title>Arquitetura Cloud e Gateways: Maximizando o Seu ROI — ME Hubdigital</title>
        <meta
          name="description"
          content="Aprenda como uma arquitetura cloud resiliente e o roteamento inteligente multi-gateway reduzem custos com servidores e maximizam o ROI do seu checkout."
        />
        <meta
          property="og:title"
          content="Arquitetura Cloud e Gateways: Maximizando o Seu ROI — ME Hubdigital"
        />
        <meta
          property="og:description"
          content="Aprenda como uma arquitetura cloud resiliente e o roteamento inteligente multi-gateway reduzem custos com servidores e maximizam o ROI do seu checkout."
        />
        <meta property="og:image" content="/images/news/cloud-gateways-banner.png" />
      </Head>
      <Layout header={2} footer={5} video={0}>
        <BlogSingleBanner
          title="Arquitetura Cloud e Gateways: Maximizando o Seu ROI"
          category="Software Web & Cloud"
        />
        <BlogDetailsCloudGateways />
      </Layout>
    </>
  );
};

export default ArquiteturaCloudGateways;
