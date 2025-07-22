import styled from "styled-components";
import Navega from "../components/Navega";
import fotoJaeder from "../../public/perfil_Jaeder.jpg"; // Certifique-se de que o caminho da imagem está correto
import '../index.css'; // Mantenha seu CSS global

const Header = styled.header`
  background-color: #1f2937;
`;

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  background-color: #e9ecef; // Um fundo claro para a seção "Sobre"
  min-height: 80vh;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 4rem;
  font-family: "Big Shoulders Inline", sans-serif;
  font-weight: 900;
  color: #333;
  margin-bottom: 3rem;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%; // Para uma imagem redonda de perfil
  object-fit: cover;
  margin-bottom: 2rem;
  border: 5px solid #007bff; // Uma borda para destacar a imagem
`;

const AboutContent = styled.div`
  max-width: 800px;
  color: #444;
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: left; // Para o texto fluir melhor
`;

const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;

export default function Sobre() {
  return (
    <>
      <Header>
        <Navega />
      </Header>
      <AboutContainer>
      <ProfileImage src={fotoJaeder} alt="Imagem de Perfil" />
        <H2>Sobre Mim</H2>
        {/* Você pode adicionar uma imagem sua aqui. Se não tiver, pode remover este componente. */}
        {/* <ProfileImage src="/path/to/sua-foto.jpg" alt="Sua Foto de Perfil" /> */}
        <AboutContent>
          <p>
            Olá! Meu nome é Jaeder Azevedo e sou um <Highlight>Desenvolvedor Full-Stack</Highlight> apaixonado por transformar ideias em soluções digitais inovadoras. Com uma formação sólida em Análise e Desenvolvimento de Sistemas pela Estácio FIB e uma especialização aprofundada em desenvolvimento full-stack pela <Highlight>Trybe</Highlight>, trago uma combinação de conhecimento teórico e prático em tecnologias de ponta.
          </p>
          <p>
            Minha expertise abrange o ecossistema <Highlight>React</Highlight> e <Highlight>Node.js</Highlight>, com forte domínio em <Highlight>TypeScript</Highlight>, garantindo código robusto e escalável. Sou motivado pela constante evolução tecnológica e busco sempre aprimorar minhas habilidades. Minha jornada tem sido de aprendizado contínuo, explorando desde a otimização de performance até a implementação de testes automatizados para garantir a qualidade e confiabilidade das aplicações.
          </p>
          <p>
            Recentemente, expandi meus horizontes com um curso de <Highlight>Introdução ao UX/UI pelo Google</Highlight>, o que me permite criar não apenas sistemas funcionais, mas também experiências de usuário intuitivas e agradáveis. Além disso, estou sempre em busca de novas certificações e conhecimentos, com foco atual em aprimorar minhas habilidades em <Highlight>UX, Java e CSS/Sass</Highlight>.
          </p>
          <p>
            Acredito que a tecnologia tem o poder de resolver problemas complexos e criar valor real. Estou em busca de novos desafios que me permitam contribuir para projetos impactantes e colaborar com equipes inovadoras. Se você procura um desenvolvedor engajado, proativo e com paixão por tecnologia, vamos construir algo incrível juntos!
          </p>
        </AboutContent>
      </AboutContainer>
    </>
  );
}