import styled from "styled-components";
import Navega from "./Navega";
import bgImage from "../assets/final_image_ziza.png";

const BackgroundPerfil = styled.header`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90vh;
  color: #000
`
const TitleText = {
  paragrath: styled.p`
  font-size: 1 rem;
  color: white;
  font-weight: 400;
  position: relative;
  top: 30%;
  left: 13%;
  width:30%;
`, 
titleH2: styled.h2`
  font-size: 1.3rem;
  color: white;
  font-weight: 400;
  position: relative;
  top: 30%;
  left: 13%;
 
`}

function Header() {
  return (
    <div>
        <Navega />
        <BackgroundPerfil>
          <TitleText.titleH2>
            Sobre Jaeder Azevedo
          </TitleText.titleH2>
          <TitleText.paragrath>
              👋 Olá, eu sou Jaeder Azevedo!
              <br />
              💻 Desenvolvedor Full-Stack | Apaixonado por Tecnologia e Inovação

              Formado em Análise e Desenvolvimento de Sistemas pela Estácio FIB, especializei-me em desenvolvimento full-stack pela Trybe, com foco em React, Node.js e TypeScript. Minha trajetória combina experiência prática e constante aprendizado — porque tecnologia nunca para, e eu também não.
              <br />
              🚀 O que me move?
              Transformar ideias em código eficiente e impactante. Seja criando aplicações web e mobile, explorando IA generativa, otimizando performance ou implementando testes automatizados, meu objetivo é sempre entregar soluções inovadoras e funcionais.
              <br />
              📚 Sempre aprendendo!
              Recentemente, concluí um curso de Introdução ao UX/UI pelo Google e sigo aprimorando minhas habilidades com certificações em UX, Java e CSS/Sass.
              <br  />
              🔎 Busco desafios que impulsionem a tecnologia e criem valor para empresas e pessoas. Se você quer construir algo incrível, vamos conversar! 🚀
          </TitleText.paragrath>
        </BackgroundPerfil>
    </div>
  )
}

export default Header