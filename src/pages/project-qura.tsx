import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import QuraDetailsMain from "@/components/containers/project/QuraDetailsMain";
import QuraProcess from "@/components/containers/project/QuraProcess";

const ProjectQura = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <Head>
        <title>Software ID Carteira Qura — ME Hubdigital</title>
      </Head>
      <CmnBanner
        title="Software ID Carteira Qura"
        navigation="Software ID Carteira Qura"
        parent="Projetos"
        parentLink="our-projects"
        content="Plataforma de identificação digital e gestão segura de documentos médicos com QR Code autenticado e conformidade regulatória para pacientes e especialistas."
      />
      <QuraDetailsMain />
      <QuraProcess />
    </Layout>
  );
};

export default ProjectQura;
