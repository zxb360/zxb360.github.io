// import styled from "styled-components";
// import Navega from "./Navega";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import bgImage from "../../public/final_image_ziza.png";
import Navega from "./Navega";

const BackgroundPerfil = styled.header`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90vh;
  color: #000
`
// src/components/Timeline.tsx


gsap.registerPlugin(ScrollTrigger);

const TimelineSection = styled.section`
  padding: 8rem 0;
  background-color: #f0f2f5; /* Fundo claro para a linha do tempo */
  color: #333;
  position: relative;
  overflow: hidden; /* Para garantir que as animações não causem scroll indesejado */
`;

const TimelineH2 = styled.h2`
  font-size: 4rem;
  text-align: center;
  font-family: "Big Shoulders Inline", sans-serif;
  font-weight: 900;
  color: #333;
  margin-bottom: 5rem;
`;

const TimelineContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding: 0 1rem;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #007bff; /* Cor da linha central */
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    z-index: 1;
  }

  @media (max-width: 768px) {
    &::after {
      left: 30px; /* Desloca a linha para a esquerda em telas menores */
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  box-sizing: border-box; /* Garante que padding e border não aumentem a largura */
  opacity: 0; /* Inicia invisível para a animação */

  &:nth-child(even) {
    left: 50%;
  }

  &:nth-child(odd)::after,
  &:nth-child(even)::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #007bff;
    top: 15px;
    border-radius: 50%;
    z-index: 2;
  }

  &:nth-child(even)::after {
    left: -16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    &:nth-child(even) {
      left: 0%;
    }
    &:nth-child(odd)::after,
    &:nth-child(even)::after {
      left: 15px; /* Ajusta a posição do círculo em telas menores */
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  &::before {
    content: '';
    position: absolute;
    top: 22px;
    width: 0;
    height: 0;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
    right: 30px;
    z-index: 2;
  }

  ${TimelineItem}:nth-child(even) &::before {
    left: 30px;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }

  @media (max-width: 768px) {
    &::before {
      right: auto;
      left: -9px;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #007bff;
`;

const TimelineYear = styled.small`
  color: #666;
  font-size: 1rem;
`;

export default function Timeline() {
  const timelineRefs = useRef<HTMLDivElement[]>([]);
  timelineRefs.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !timelineRefs.current.includes(el)) {
      timelineRefs.current.push(el);
    }
  };

  useEffect(() => {
    timelineRefs.current.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // Quando o topo do elemento atinge 80% da viewport
            end: "bottom 20%",
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
            // markers: true, // Para debug
          }
        }
      );
    });
  }, []);

  return (
    <>
    <BackgroundPerfil><Navega /></BackgroundPerfil>
    <TimelineSection>
      <TimelineH2>Minha Jornada</TimelineH2>
      <TimelineContainer>
        <TimelineItem ref={addToRefs}>
          <TimelineContent>
            <TimelineTitle>Análise e Desenvolvimento de Sistemas</TimelineTitle>
            <TimelineYear>Estácio FIB, Salvador-BA | 2018 - 2021</TimelineYear>
            <p>Formação em tecnologia com foco em desenvolvimento de sistemas, abrangendo lógica de programação, banco de dados, e fundamentos de desenvolvimento de software.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem ref={addToRefs}>
          <TimelineContent>
            <TimelineTitle>Desenvolvedor Full-Stack</TimelineTitle>
            <TimelineYear>Trybe | 2022 - 2023</TimelineYear>
            <p>Curso intensivo com mais de 1.500 horas de programação, cobrindo front-end (React, Redux, Context API), back-end (Node.js, Express, SQL, NoSQL), e desenvolvimento ágil, incluindo TDD e Docker.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem ref={addToRefs}>
          <TimelineContent>
            <TimelineTitle>Introdução ao UX/UI</TimelineTitle>
            <TimelineYear>Google (Coursera) | 2024</TimelineYear>
            <p>Curso que abordou os princípios de User Experience e User Interface, focando na criação de produtos digitais centrados no usuário e com alta usabilidade.</p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem ref={addToRefs}>
          <TimelineContent>
            <TimelineTitle>Estudo Contínuo</TimelineTitle>
            <TimelineYear>Atualmente</TimelineYear>
            <p>Aprimorando habilidades em <Highlight>UX, Java e CSS/Sass</Highlight>, buscando certificações e explorando novas tecnologias como IA generativa para expandir meu conhecimento.</p>
          </TimelineContent>
        </TimelineItem>
        {/* Adicione mais itens conforme necessário */}
      </TimelineContainer>
    </TimelineSection>
    </>
  );
}

const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;