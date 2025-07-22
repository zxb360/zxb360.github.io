import styled from "styled-components";
import '../index.css';
import spaceStarWars from '../assets/espaco.jpg';
import starDestroyer from '../assets/essesemfundo.png';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import logoReact from '../assets/react.svg';
import logoJest from '../assets/jest.png';
import logoTypescript from '../assets/typescript.png';
import logoVite from '../assets/vite.svg';
import { useEffect, useRef } from "react";
import ProjectStarWars from "../project/ProjectStarWars";


const Section = styled.section`
  background-image: url(${spaceStarWars});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`
// const H1 = styled.h1`
//   margin: 0;
//   padding: 40rem 0 40rem 0;
//   text-align: center;
//   font-size: 100pt;
// `

const H4 = styled.h4`
  padding-top: 5rem;
  text-align: center;
  font-size: 30pt;
  margin: 0;
`
const Ul = styled.ul`
  text-align: center;
  list-style: none;
  font-size: 20pt;
`
const Paragraph = styled.p`
  text-align: center;
  font-size: 14pt;
  width: 800px;
  margin: auto;
  padding: 30px;
`
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5rem 0 5rem 0;
`
const Img = styled.img`
  width: 100px;
`
const ImgDestroy = styled.img`
  width: 1600px;
  align-text: center;
`

gsap.registerPlugin(ScrollTrigger);

export default function SectionIntro() {
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;
    gsap.fromTo(imgRef.current, { x: -1000 }, { x: 0, duration: 80 });

  }, [])

  return (
    <>
      <Section>
        <Div>
          <ImgDestroy
            ref={imgRef}
            src={starDestroyer} 
            alt="imperial destroyer" />
        </Div>
        <H4>Projeto StarWars planets.</H4>
        <Paragraph>
          O desenvolvimento desse projeto foi baseado em filtros de planetas do universo de Star Wars,
          no projeto original era criado contextAPI para facilitar ultilização do estado global
          para que fosse aplicado em todos os componentes em geral, esse é um resumo do projeto
          para esse portfólio. API utilizada: "https://swapi.info/api/planets".
        </Paragraph>
        <Ul>
          <li>Context API do React para gerenciar estado.</li>
          <li>React Hook useState;</li>
          <li>React Hook useContext;</li>
          <li>React Hook useEffect;</li>
          <li>React Hooks customizados.</li>
          <li>Testes para garantir que aplicação possua uma boa cobertura de testes.</li>
        </Ul>
        <Div>
          <Img src={logoVite} alt="vite" />
          <Img src={logoReact} alt="react" />
          <Img src={logoTypescript} alt="typescript" />
          <Img src={logoJest} alt="jest" />
        </Div>
      </Section>
      <Section>
        <ProjectStarWars />
      </Section>
    </>
  )
}
