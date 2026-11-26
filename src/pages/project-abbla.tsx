import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectDetailsMain from "@/components/containers/project/ProjectDetailsMain";
import AbblaProcess from "@/components/containers/project/AbblaProcess";
import { useLanguage } from "@/context/LanguageContext";

const ProjectAbbla = () => {
  const { t } = useLanguage();

  return (
    <Layout header={2} footer={5} video={0}>
      <Head>
        <title>{t.meta.abblaTitle}</title>
      </Head>
      <CmnBanner
        title={t.banner.abblaTitle}
        navigation={t.banner.abblaTitle}
        parent={t.nav.projects}
        parentLink="our-projects"
        content={t.banner.abblaContent}
      />
      <ProjectDetailsMain />
      <AbblaProcess />
    </Layout>
  );
};

export default ProjectAbbla;
