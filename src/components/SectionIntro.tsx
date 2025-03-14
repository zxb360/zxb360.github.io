import styled from "styled-components";
import '../index.css';

const SectionH2 = {
    subTitleH2: styled.h2`
    font-family: "Big Shoulders Inline", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    font-size: 10rem;
    padding: 0;
    margin-bottom: 10px;
    text-align: center;
`,
    subParagraph: styled.p`
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    font-variation-settings:
    font-size: 1rem;
    width: 40%;
    margin: 0;
`, 
    divFlex: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`,
    TextStrong: styled.strong`
    font-weight: bold;
    font-size: 1.5rem;
`

}

export default function SectionIntro() {
  return (
    <>
        <section className="section-intro">
            <SectionH2.subTitleH2>Education</SectionH2.subTitleH2>
            <SectionH2.subTitleH2>2018 - 2021</SectionH2.subTitleH2>
        </section>
        <SectionH2.divFlex>
            <SectionH2.subParagraph>
                A formação em Análise e Desenvolvimento de Sistemas na Estácio FIB
                me proporcionou uma base sólida em programação, banco de dados,
                engenharia de software e outras áreas essenciais da TI.
                Através de projetos práticos e desafios reais, 
                desenvolvi habilidades técnicas e analíticas que me capacitam a criar 
                soluções inovadoras e eficientes. Acredito que a combinação 
                entre teoria e prática, aliada à qualidade do ensino da Estácio FIB, 
                me tornou um profissional completo e preparado para os desafios do mercado.
            </SectionH2.subParagraph>
            <div>
                <SectionH2.subParagraph><SectionH2.TextStrong>Faculdade:</SectionH2.TextStrong> Estacio.</SectionH2.subParagraph>
                <SectionH2.subParagraph><SectionH2.TextStrong>Curso:</SectionH2.TextStrong> Análise e Desenvolvimento de Sistemas.</SectionH2.subParagraph> 
            </div>
        </SectionH2.divFlex>
    </>
  )
}
