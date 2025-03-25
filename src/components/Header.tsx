import styled from "styled-components";
import bgImage from "../assets/background_principal.png";

const BackgroundPerfil = styled.header`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 90vh;
  color: #000
  padding: 0;
  margin: 0;
`


export default function Header() {
  return (
    <>
        <BackgroundPerfil>
       
        </BackgroundPerfil>
    </>
  )
}
