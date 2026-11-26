import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import RootCareDetailsMain from "@/components/containers/project/RootCareDetailsMain";
import RootCareProcess from "@/components/containers/project/RootCareProcess";
import { useLanguage } from "@/context/LanguageContext";

const ProjectRootCare = () => {
  const { t } = useLanguage();

  return (
    <Layout header={2} footer={5} video={0}>
      <Head>
        <title>{t.meta.rootcareTitle}</title>
      </Head>
      <CmnBanner
        title={t.banner.rootcareTitle}
        navigation={t.banner.rootcareTitle}
        parent={t.nav.projects}
        parentLink="our-projects"
        content={t.banner.rootcareContent}
      />
      <RootCareDetailsMain />
      <RootCareProcess />
    </Layout>
  );
};

export default ProjectRootCare;
