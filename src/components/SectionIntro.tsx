import styled from "styled-components";
import '../index.css';
import ProjectNunes from "./ProjectNunes";
import ProjectStarWars from "./ProjectStarWars";
import ImagePerfil from "../assets/perfil-lego.png";

// import { useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-top: 5rem;
    text-align: justify;

    div {
        padding: 3rem;
    }

    .section-social h3 {
        text-align: justify;
        color: green;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        list-style: none;
        padding-top: 1rem;
        margin: 0;
        font-size: 23px;
        color: green;
    }

    li {
        padding: 1rem;
        margin: 0;
    }
`;

// const rotate = keyframes`
//     from {
//         transform: rotate(0deg);
//     }
//     to {
//     transform: rotate(360deg);
//     } 
// `

// const Rotate = styled.div`
//     display: inline-block;
//     font-size: 2rem;
//     animation: ${rotate} 8s linear infinite;
//     padding: 1.2rem;
//     `

export default function SectionIntro() {

    // useLayoutEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.to(".section-skills", {
    //         x: 350,
    //         opacity: 1,
    //         rotate: 360,
    //         scrollTrigger: {
    //             trigger: ".section-intro",
    //             markers: true,
    //             start: "top 100%",
    //             end: "bottom 80%",
    //             scrub: true,
    //         }
    //     })

    //     return () => {
    //         gsap.killTweensOf(".section-skills");
    //     }
    // }, []);

  return (
    <>
        <Section>
            <div>
                <h2 style={{ fontSize: 40, color: "green" }}> 
                    Sobre Jaeder Azevedo
                </h2>
                <h2 style={{ fontSize: 23, color: "green" }}>
                👋 Olá, eu sou Jaeder Azevedo!
                </h2>
                <br />
                <p>
                💻 Desenvolvedor Full-Stack | Apaixonado por Tecnologia e Inovação
                Formado em Análise e Desenvolvimento de Sistemas pela Estácio FIB, especializei-me em desenvolvimento full-stack pela Trybe, com foco em React, Node.js e TypeScript. Minha trajetória combina experiência prática e constante aprendizado — porque tecnologia nunca para, e eu também não.
                </p>
                <p>
                🚀 O que me move?
                Transformar ideias em código eficiente e impactante. Seja criando aplicações web e mobile, explorando IA generativa, otimizando performance ou implementando testes automatizados, meu objetivo é sempre entregar soluções inovadoras e funcionais.
                </p>
                <p>
                📚 Sempre aprendendo!
                Recentemente, concluí um curso de Introdução ao UX/UI pelo Google e sigo aprimorando minhas habilidades com certificações em UX, Java e CSS/Sass.
                </p>
                <p>
                🔎 Busco desafios que impulsionem a tecnologia e criem valor para empresas e pessoas. Se você quer construir algo incrível, vamos conversar! 🚀
                </p>
                <div className="section-social">
                    <h3 style={{ fontSize: 40 }}>REDES SOCIAIS</h3>
                    <ul>
                        <li>_INSTAGRAM</li>
                        <li>_FACEBOOK</li>
                        <li>_GITHUB</li>
                        <li>_X</li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={ ImagePerfil } alt="jaeder" />
            </div>
        </Section>
        <ProjectNunes />
        <ProjectStarWars />
    </>
  )
}
