import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dotlarge from "public/images/agency/dot-large.png";
import one from "public/images/service/one.png";

const HomeThreeServices = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section service-f fade-wrapper ">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary g-ind">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      nossos serviços
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">soluções corporativas</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="our-services"
                      className="btn btn--primary text-capitalize"
                    >
                      ver todos serviços
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    01
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Agentes de IA</h4>
                  <div className="p-single">
                    <p>
                      Desenvolvemos agentes inteligentes e autônomos integrados
                      aos seus sistemas para automatizar operações, atendimento
                      e fluxos de alta complexidade.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Automação de Suporte 24/7
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Triagem Inteligente de Leads
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Integração LLM & RAG
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Agentes de Vendas no WhatsApp
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    02
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Aplicações Web</h4>
                  <div className="p-single">
                    <p>
                      Construímos portais corporativos, plataformas SaaS e
                      aplicações sob medida com arquitetura modular, microsserviços
                      e máxima eficiência operacional.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Painéis Administrativos
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Plataformas SaaS Escaláveis
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      APIs RESTful & GraphQL
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Engenharia Next.js & Cloud
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    03
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>E-commerce & Gateways</h4>
                  <div className="p-single">
                    <p>
                      Projetamos ecossistemas de e-commerce robustos e integramos
                      gateways de pagamento com split transparente, antifraude
                      ativo e altíssima conversão.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Lojas Virtuais de Alta Escala
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Checkouts Transparentes
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Split de Pagamentos & Pix
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Regras Antifraude Avançadas
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    04
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Hospedagem & Nuvem Cloud</h4>
                  <div className="p-single">
                    <p>
                      Estruturamos servidores dedicados e ambientes serverless
                      otimizados para 99.9% de uptime, segurança cibernética e
                      baixa latência em todo o Brasil.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Arquitetura AWS & Vercel
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Monitoramento 24/7 & SLA
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Backups Diários Automatizados
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Certificados SSL & Segurança
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={dotlarge} alt="Image" className="dot-img" />
    </section>
  );
};

export default HomeThreeServices;
