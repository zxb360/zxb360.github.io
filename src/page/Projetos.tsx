import styled from "styled-components"
import Navega from "../components/Navega"
import SectionIntro from "../components/SectionIntro"
import '../index.css';

export default function Projetos() {
    const Header = styled.header`
        background-color: #1f2937;
    `
    const Article = styled.article`
        color:rgb(37, 34, 34);
        text-align: center;
        width: 60%;
        padding: 2rem;
        margin: auto;
        display: flex;
        flex-direction: row;
        gap: 5rem;
    `
    const H2 = styled.h2`
        font-size: 20rem;
        text-align: center;
        font-family: "Big Shoulders Inline", sans-serif;
        font-optical-sizing: auto;
        font-weight: 900;
        font-style: normal;
        color: #000;
    `
    // const Section = styled.section`
    //     padding: 20rem;
    //     max-width: 800px;
    //     margin: auto;
    // `

  return (
    <>
        <Header>
            <Navega />
        </Header>         
        <H2>Projetos</H2>
        <Article>
            <div>
                <h3>FRONTEND</h3>
                <p>Nessa aba de projetos resolvi dividir em três seções.
                A primeira seção é de projetos Frontend, onde você encontrará projetos que desenvolvi utilizando React Vite.
                Pensei em criar um resumo basico visual e interativo desses projetos,
                para que você possa ter uma ideia do que foi desenvolvido e como foi feito.
                Irei deixar o link do projeto e o link do repositório no Github para que você possa ver o código fonte. 
                </p>
            </div>
            <div>
                <h3>BACKEND</h3>
                <p>A segunda seção é de projetos Backend, onde você encontrará projetos que desenvolvi utilizando NodeJS e Express.
                Assim como na seção de Frontend, irei deixar o link do projeto e o link do repositório no Github para que você possa ver o código fonte.
                </p>
            </div>
            <div>
                <h3>Generative</h3>
                 <p>Nessa aba de projetos resolvi dividir em três seções.
                A primeira seção é de projetos Frontend, onde você encontrará projetos que desenvolvi utilizando React Vite.
                Pensei em criar um resumo basico visual e interativo desses projetos,
                para que você possa ter uma ideia do que foi desenvolvido e como foi feito.
                Irei deixar o link do projeto e o link do repositório no Github para que você possa ver o código fonte. 
                </p>
            </div>
        </Article>
        <SectionIntro />
    </>
  )
}
