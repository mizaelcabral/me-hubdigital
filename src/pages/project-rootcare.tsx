import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import RootCareDetailsMain from "@/components/containers/project/RootCareDetailsMain";
import RootCareProcess from "@/components/containers/project/RootCareProcess";

const ProjectRootCare = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <Head>
        <title>Software de Consulta Médica — RootCare | ME Hubdigital</title>
      </Head>
      <CmnBanner
        title="Software de Consulta Médica"
        navigation="Software de Consulta Médica"
        parent="Projetos"
        parentLink="our-projects"
        content="Ecossistema completo de telemedicina e acolhimento clínico humanizado, integrando agendamento ágil de consultas, prontuário seguro e acompanhamento médico contínuo."
      />
      <RootCareDetailsMain />
      <RootCareProcess />
    </Layout>
  );
};

export default ProjectRootCare;