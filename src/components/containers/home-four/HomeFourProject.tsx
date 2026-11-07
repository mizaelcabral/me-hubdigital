import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/projects/one.png";
import two from "public/images/projects/two.png";
import three from "public/images/projects/three.png";
import four from "public/images/projects/four.png";
import five from "public/images/projects/five.png";
import six from "public/images/projects/six.png";
import seven from "public/images/projects/seven.png";
import eight from "public/images/projects/eight.png";

const HomeFourProject = () => {
  return (
    <section className="section projects-s pt-0 fade-wrapper">
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={five} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    Plataforma SaaS de Gestão de Operações B2B
                  </Link>
                </h4>
                <p>
                  Desenvolvimento de software completo com dashboard em tempo
                  real, controle de acessos corporativos e alta disponibilidade.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={four} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">Agente IA Suporte</Link>
                </h4>
                <p>
                  Implantação de agente autônomo com LLM treinada na base da
                  empresa, atendendo clientes 24/7 com resolução ágil de dúvidas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper align-items-end">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={one} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    E-commerce Global de Alta Conversão
                  </Link>
                </h4>
                <p>
                  Ecossistema de vendas digitais com catálogo dinâmico,
                  navegação ultrarrápida e arquitetura modular pronta para alta
                  escala.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={eight} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    Gateway de Pagamento com Split e Checkout Seguro
                  </Link>
                </h4>
                <p>
                  Infraestrutura financeira com integração via webhook,
                  aprovação inteligente de pagamentos e conformidade com padrão
                  PCI-DSS.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={six} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    Automação Inteligente de Atendimento WhatsApp
                  </Link>
                </h4>
                <p>
                  Fluxos conversacionais com inteligência artificial para
                  qualificação de leads, agendamentos automáticos e suporte ágil.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={two} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    Design System & Interface Corporativa
                  </Link>
                </h4>
                <p>
                  Criação de identidade visual, prototipagem no Figma e
                  componentes reutilizáveis para garantir coesão em todos os
                  produtos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper align-items-end ">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={three} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    Migração Cloud & Microsserviços
                  </Link>
                </h4>
                <p>
                  Reestruturação de infraestrutura em nuvem na AWS com
                  contêineres Docker, esteiras CI/CD e monitoramento contínuo
                  com SLA.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="projects-s__single topy-tilt fade-top">
              <div className="thumb">
                <Link href="project-single">
                  <Image src={seven} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4>
                  <Link href="project-single">
                    Portal Institucional com Blog Otimizado para SEO
                  </Link>
                </h4>
                <p>
                  Arquitetura moderna em Next.js com carregamento instantâneo,
                  métricas Core Web Vitals no verde e alta visibilidade
                  orgânica.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <Link href="our-projects" className="btn btn--secondary">
                carregar mais
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFourProject;
