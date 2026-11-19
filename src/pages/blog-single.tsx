import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import BlogSingleBanner from "@/components/layout/banner/BlogSingleBanner";
import BlogDetailsMain from "@/components/containers/blog/BlogDetailsMain";

const BlogSingle = () => {
  return (
    <>
      <Head>
        <title>Como Agentes de IA Reduzem Custos em Operações Web — ME Hubdigital</title>
        <meta
          name="description"
          content="Descubra como os agentes autônomos de Inteligência Artificial reduzem em até 60% os custos operacionais com suporte, infraestrutura e monitoramento web."
        />
        <meta property="og:title" content="Como Agentes de IA Reduzem Custos em Operações Web — ME Hubdigital" />
        <meta
          property="og:description"
          content="Descubra como os agentes autônomos de Inteligência Artificial reduzem em até 60% os custos operacionais com suporte, infraestrutura e monitoramento web."
        />
        <meta property="og:image" content="/images/news/poster.png" />
      </Head>
      <Layout header={2} footer={5} video={0}>
        <BlogSingleBanner />
        <BlogDetailsMain />
      </Layout>
    </>
  );
};

export default BlogSingle;
