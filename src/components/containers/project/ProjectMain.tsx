import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import hrone from "public/images/projects/hr-one.png";
import hrtwo from "public/images/projects/hr-two.png";
import hrthree from "public/images/projects/hr-three.png";
import hrfour from "public/images/projects/hr-four.png";
import hrfive from "public/images/projects/hr-five.png";
import hrsix from "public/images/projects/hr-six.png";
import abblaCapa from "public/images/projects/projeto-abbla/PROJETO-ABBLA-CAPA.png";
import quraCapa from "public/images/projects/projeto-qura/PROJETO-QURA-CAPA.png";
import rootcareCapa from "public/images/projects/projeto-rootcare/PROJETO-ROOTCARE-CAPA.png";

gsap.registerPlugin(ScrollTrigger);
const ProjectMain = () => {
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ele = slider.current;

    if (window.innerWidth >= 992 && ele) {
      gsap.registerPlugin(ScrollTrigger);

      const rightSections = gsap.utils.toArray(".project-sl__single");

      const pin = gsap.to(rightSections, {
        xPercent: -100 * (rightSections.length - 3),
        ease: "none",
        scrollTrigger: {
          trigger: ele,
          pin: true,
          invalidateOnRefresh: true,
          start: "center center-=100",
          scrub: 1,
          end: () => "+=" + (slider.current?.offsetWidth || 0),
          markers: false,
        },
      });

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <section className="section project-sl" ref={slider}>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-abbla">
            <Image src={abblaCapa} alt="Software CRM Atendimento" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-abbla">
              Software CRM
              <br />
              Atendimento
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-qura">
            <Image src={quraCapa} alt="Software ID Carteira Qura" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-qura">
              Software ID
              <br />
              Carteira Qura
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-rootcare">
            <Image src={rootcareCapa} alt="Software de Consulta Médica" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-rootcare">
              Software de
              <br />
              Consulta Médica
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrfour} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              LMS web app
              <br />
              lication
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrfive} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              brand identity
              <br />
              difference
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrsix} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              digital website
              <br />
              development
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-abbla">
            <Image src={abblaCapa} alt="Software CRM Atendimento" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-abbla">
              Software CRM
              <br />
              Atendimento
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-qura">
            <Image src={quraCapa} alt="Software ID Carteira Qura" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-qura">
              Software ID
              <br />
              Carteira Qura
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-rootcare">
            <Image src={rootcareCapa} alt="Software de Consulta Médica" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-rootcare">
              Software de
              <br />
              Consulta Médica
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrfour} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              LMS web app
              <br />
              lication
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrfive} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              brand identity
              <br />
              difference
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="project-single">
            <Image src={hrsix} alt="Image" />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="project-single">
              digital website
              <br />
              development
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ProjectMain;
