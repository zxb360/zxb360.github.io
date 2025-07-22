import styled from "styled-components"
import { NavLink } from "react-router-dom";

const H1Title = styled.h1`
  font-family: "Big Shoulders Inline", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  font-size: 3rem;
  margin: 0;
  padding: 0;
  text-align: center;
  text-bold: 900;
  color:rgb(255, 255, 255);
  display: inline-block;
  text-decoration: none;
`;

// const Menu = styled.menu`
//   font-size: 1.5rem;
//   margin: 0;
//   padding: 0;
//   text-align: center;
//   text-bold: 900;
// `;

function Navega() {
  return (
    <>
      <nav className="navegation">
        <NavLink to='/'><H1Title>Jaeder Carvalho Azevedo</H1Title></NavLink>
        <NavLink to='/projetos'><H1Title>Projetos</H1Title></NavLink>
        <NavLink to='/sobre'><H1Title>Sobre</H1Title></NavLink>
        <NavLink to='/contato'><H1Title>Contato</H1Title></NavLink>
      </nav>
    </>
  )
}

export default Navega