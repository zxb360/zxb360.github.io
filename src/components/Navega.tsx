import styled from "styled-components"

const H1Title = styled.h1`
  font-family: "Big Shoulders Inline", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  text-align: center;
  text-bold: 900;
`;

const Menu = {
  e: styled.menu`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  text-align: center;
  text-bold: 900;

`, 
p: styled.p`
  fontSize: "1.5rem",
  margin: 0,
  padding: 0,
  textAlign: "center",
  textBold: 900,
`
};

function Navega() {
  return (
    <nav className="navegation">
        <Menu.e>menu</Menu.e>
        <H1Title>
          Jaeder Carvalho Azevedo
        </H1Title>
        <button>Linkedin</button>
    </nav>
  )
}

export default Navega