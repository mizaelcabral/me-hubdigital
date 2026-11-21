import React, { useState } from "react";

const AbblaProcess = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section ux-process bg-tertiary fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Processo de Desenvolvimento
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Metodologia de Entrega Abbla</h2>
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
                  <div className="intro-btn">
                    <h4>Diagnóstico & Canais</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Levantamento aprofundado dos canais de comunicação, regras de
                    triagem de mensagens e mapeamento da operação para múltiplos
                    atendentes simultâneos.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Diagnóstico e Canais"
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
                  <div className="intro-btn">
                    <h4>Jornadas & Funis Kanban</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Desenho da jornada do cliente, definição dos estágios do
                    pipeline de vendas em modelo Kanban e estruturação de filas
                    dinâmicas de conversas.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Jornadas e Funis Kanban"
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
                  <div className="intro-btn">
                    <h4>Integração Meta Cloud API</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Conexão direta com a infraestrutura em nuvem da Meta,
                    garantindo máxima estabilidade e conformidade oficial para o
                    WhatsApp Business.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Integração Meta Cloud API"
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
                  <div className="intro-btn">
                    <h4>Chatbots & Automação No-Code</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Construção visual e interativa de fluxos automatizados de
                    resposta, menus de autoatendimento e regras de direcionamento
                    inteligente.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Chatbots e Automação No-Code"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 4 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Agentes de IA (OpenAI / Gemini)</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Integração de modelos de linguagem como OpenAI e Gemini para
                    qualificação autônoma 24/7 e transição contextual para
                    especialistas humanos.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Agentes de IA"
                  onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 5 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Homologação & Treinamento</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Validação de performance sob alto volume de mensagens
                    simultâneas, testes de entrega e capacitação prática da equipe
                    operacional.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Homologação e Treinamento"
                  onClick={() => setImgTab(imgTab === 5 ? -1 : 5)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbblaProcess;
