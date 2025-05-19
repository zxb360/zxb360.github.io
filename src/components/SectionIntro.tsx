import styled from "styled-components";
import '../index.css';
import spaceStarWars from '../../public/espaco.jpg'
import ProjectStarWars from "../page/ProjectStarWars";

const Section = styled.section`
  background-image: url(${spaceStarWars});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`
const H1 = styled.h1`
  margin: 0;
  padding: 30rem 0 50rem 0;
  text-align: center;
  font-size: 100pt;
`

export default function SectionIntro() {
  return (
    <>
      <Section>
          <H1>Em uma galaxia muito, muito distante...</H1>
          <ProjectStarWars />
      </Section>
    </>
  )
}
