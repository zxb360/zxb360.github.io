import styled from "styled-components";
import '../index.css';
import { useLayoutEffect, useRef } from "react";
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
    margin-bottom: 250px;
    max-width: 100px;
    opacity: 0;
    transform: translateX(-1000px);
    `,
}

export default function SectionIntro() {
    const elementsRef = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".section-skills", {
            x: 350,
            opacity: 1,
            rotate: 360,
            scrollTrigger: {
                trigger: ".section-title",
                markers: true,
                start: "top 90%",
                end: "bottom 60%",
                scrub: true,
            }
        })

        return () => {
            gsap.killTweensOf(".section-skills");
        }
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(elementsRef, {
            x: "50vw",
            ease: "none",
            scrollTrigger: {
                trigger: elementsRef.current,
                markers: true,
                start: "top 90%",
                end: "bottom 60%",
                scrub: true,
            }
        })
        // const ctx = gsap.context(() => {
        //     timeLineRef.current = gsap.timeline({
        //         scrollTrigger: {
        //             trigger: ".skill-item",
        //             markers: true,
        //             start: "top 90%",
        //             end: "bottom 60%",
        //             scrub: true,
        //         }
        //     }).fromTo(
        //         ".model-1",
        //         {
        //             x: -1000,
        //             opacity: 0
        //         },
        //         {
        //             x: 700,
        //             opacity: 1,
        //             duration: 1
        //         }
        //     )
        // }, elementsRef);

        return () => {
            gsap.killTweensOf(".skill-item");
        }
    }, []);

  return (
    <>
        <section className="section-intro">
            <div className="section-title">
                <StyleyText.titleH3 className="section-skills">PROJECT</StyleyText.titleH3>
            </div>
            <div className="models-itens">
                <div className="model-1 skill-item" ref={elementsRef.current}>
                    <ul>
                        <li className="item">J</li>
                        <li className="item">A</li>
                        <li className="item">V</li> 
                        <li className="item">A</li>
                        <li className="item">S</li>
                        <li className="item">C</li>
                        <li className="item">R</li>
                        <li className="item">I</li>
                        <li className="item">P</li>
                        <li className="item">T</li>
                    </ul>
                </div>
                <section className="model-2 skill-item">
                </section>
            </div>
        </section>
    </>
  )
}
