import React, { useState } from "react";

const QuraProcess = () => {
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
              <h2 className="title title-anim">Metodologia de Entrega Qura</h2>
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
                    <h4>Mapeamento Regulatório & LGPD</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Levantamento dos requisitos da ANVISA, normas de sigilo
                    médico e estruturação dos critérios de proteção de dados
                    sensíveis sob a LGPD.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Mapeamento Regulatório"
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
                    <h4>Arquitetura Criptográfica & QR Code</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Desenvolvimento do algoritmo de validação em tempo real com
                    QR Code dinâmico encriptado para verificação instantânea de
                    autenticidade.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Arquitetura Criptográfica"
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
                    <h4>Design da Carteira Mobile & UI/UX</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Criação de interface acessível e responsiva para
                    smartphones, permitindo visualização ágil da carteirinha
                    digital e histórico do paciente.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Design da Carteira Mobile"
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
                    <h4>Validação Biométrica & Segurança</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Implementação de camadas adicionais de proteção com
                    autenticação biométrica nativa do dispositivo para evitar
                    acessos não autorizados.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Validação Biométrica"
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
                    <h4>Módulo de Prescrições & Laudos</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Estruturação do repositório em nuvem de receitas, laudos
                    clínicos e documentos de tratamentos contínuos com
                    sincronização segura.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Módulo de Prescrições"
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
                    <h4>Homologação, Testes & Lançamento</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Auditoria técnica de segurança, validação de stress sob alto
                    volume de acessos e homologação completa com associações e
                    parceiros.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  aria-label="Alternar Homologação e Lançamento"
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

export default QuraProcess;
