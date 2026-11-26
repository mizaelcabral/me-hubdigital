import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectMain from "@/components/containers/project/ProjectMain";
import WorkStepsProject from "@/components/containers/project/WorkStepsProject";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import { useLanguage } from "@/context/LanguageContext";

const OurProjects = () => {
  const { t } = useLanguage();

  return (
    <>
      <Head>
        <title>{t.meta.projectsTitle}</title>
      </Head>
      <Layout header={2} footer={5} video={0}>
        <CmnBanner
          title={t.banner.projectsTitle}
          navigation={t.banner.projectsTitle}
        />
        <ProjectMain />
        <WorkStepsProject />
        <CtaTwo />
      </Layout>
    </>
  );
};

export default OurProjects;
