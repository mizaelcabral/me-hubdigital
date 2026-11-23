import React, { useState } from "react";

const RootCareProcess = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section ux-process bg-tertiary fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Processo de Atendimento & Entrega
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Jornada Integrada RootCare</h2>
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
                    <h4>Triagem Inteligente & Agendamento Ágil</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Mapeamento inicial das necessidades clínicas do paciente e
                    agendamento de consulta online com especialistas de forma
                    simples, transparente e sem burocracias.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Triagem Inteligente"
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
                    <h4>Teleconsulta Criptografada & Prontuário Digital</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Realização de atendimento médico humanizado por videochamada
                    segura, com prontuário eletrônico unificado protegido por
                    criptografia de ponta a ponta e em conformidade com o CFM.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Teleconsulta Criptografada"
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
                    <h4>Prescrição Eletrônica & Apoio Terapêutico</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Emissão de receitas médicas digitais com certificado ICP-Brasil,
                    válidas em todo o território nacional, com orientação ética e
                    respaldo documental para terapias controladas.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Prescrição Eletrônica"
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
                    <h4>Acolhimento Contínuo & Suporte ao Paciente</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Rede ativa de suporte e acompanhamento pós-consulta para
                    monitoramento da evolução do paciente, suporte a dúvidas e
                    garantia de adesão segura ao tratamento prescrito.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Acolhimento Contínuo"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RootCareProcess;