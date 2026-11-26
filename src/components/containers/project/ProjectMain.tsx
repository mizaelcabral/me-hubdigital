import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import hrfour from "public/images/projects/hr-four.png";
import hrfive from "public/images/projects/hr-five.png";
import hrsix from "public/images/projects/hr-six.png";
import abblaCapa from "public/images/projects/projeto-abbla/PROJETO-ABBLA-CAPA.png";
import quraCapa from "public/images/projects/projeto-qura/PROJETO-QURA-CAPA.png";
import rootcareCapa from "public/images/projects/projeto-rootcare/PROJETO-ROOTCARE-CAPA.png";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);
const ProjectMain = () => {
  const slider = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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

  const cards = [
    {
      href: "project-abbla",
      img: abblaCapa,
      line1: t.projectsMain.abblaLine1,
      line2: t.projectsMain.abblaLine2,
    },
    {
      href: "project-qura",
      img: quraCapa,
      line1: t.projectsMain.quraLine1,
      line2: t.projectsMain.quraLine2,
    },
    {
      href: "project-rootcare",
      img: rootcareCapa,
      line1: t.projectsMain.rootcareLine1,
      line2: t.projectsMain.rootcareLine2,
    },
    {
      href: "project-single",
      img: hrfour,
      line1: t.projectsMain.lmsLine1,
      line2: t.projectsMain.lmsLine2,
    },
    {
      href: "project-single",
      img: hrfive,
      line1: t.projectsMain.brandLine1,
      line2: t.projectsMain.brandLine2,
    },
    {
      href: "project-single",
      img: hrsix,
      line1: t.projectsMain.webLine1,
      line2: t.projectsMain.webLine2,
    },
  ];

  const allCards = [...cards, ...cards];

  return (
    <section className="section project-sl" ref={slider}>
      {allCards.map((card, idx) => (
        <div className="project-sl__single" key={idx}>
          <div className="thumb">
            <Link href={card.href}>
              <Image src={card.img} alt={`${card.line1} ${card.line2}`} />
            </Link>
          </div>
          <div className="content">
            <h2>
              <Link href={card.href}>
                {card.line1}
                <br />
                {card.line2}
              </Link>
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectMain;
