import styled from "styled-components";
import '../index.css';
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const StyleyText = {
    titleH3: styled.h3`
    font-family: "Big Shoulders Inline", sans-serif;
    font-optical-sizing: auto;
    font-weight: weight;
    font-style: normal;
    font-size: 9rem;
    color: white;
    width: 100%;
    max-width: 100px;
    opacity: 0;
    transform: translateX(-1000px);
    `
}

export default function SectionIntro() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".section-skills", {
            x: 350,
            opacity: 1,
            rotate: 360,
            scrollTrigger: {
                trigger: ".section-intro",
                markers: true,
                start: "top 100%",
                end: "bottom 80%",
                scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf(".section-skills");
        }
    }, []);

  return (
    <>
        <section className="section-intro">
            <StyleyText.titleH3 className="section-skills">SKILLS and PROJECT</StyleyText.titleH3>
            <div className="models-itens">
                <section className="model-1 skill-react">
                </section>
                <section className="model-2 skill-node">
                </section>
            </div>
        </section>
    </>
  )
}
