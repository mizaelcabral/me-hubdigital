import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import QuraDetailsMain from "@/components/containers/project/QuraDetailsMain";
import QuraProcess from "@/components/containers/project/QuraProcess";
import { useLanguage } from "@/context/LanguageContext";

const ProjectQura = () => {
  const { t } = useLanguage();

  return (
    <Layout header={2} footer={5} video={0}>
      <Head>
        <title>{t.meta.quraTitle}</title>
      </Head>
      <CmnBanner
        title={t.banner.quraTitle}
        navigation={t.banner.quraTitle}
        parent={t.nav.projects}
        parentLink="our-projects"
        content={t.banner.quraContent}
      />
      <QuraDetailsMain />
      <QuraProcess />
    </Layout>
  );
};

export default ProjectQura;
