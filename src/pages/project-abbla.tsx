import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectDetailsMain from "@/components/containers/project/ProjectDetailsMain";
import AbblaProcess from "@/components/containers/project/AbblaProcess";

const ProjectAbbla = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <Head>
        <title>Project Abbla — Software CRM Atendimento | ME Hubdigital</title>
      </Head>
      <CmnBanner
        title="Project Abbla"
        navigation="Project Abbla"
        parent="Projetos"
        parentLink="our-projects"
        content="Conheça o AbblaHUB: ecossistema omnichannel com atendimento inteligente, conexão com API oficial da Meta, automações no-code e agentes de IA."
      />
      <ProjectDetailsMain />
      <AbblaProcess />
    </Layout>
  );
};

export default ProjectAbbla;
