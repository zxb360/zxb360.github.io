// src/page/Contato.tsx

import styled from "styled-components";
import Navega from "../components/Navega";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Importe os ícones que deseja usar
import '../index.css'; // Mantenha seu CSS global

const Header = styled.header`
  background-color: #1f2937;
`;

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;
  background-color: #f0f2f5; // Um fundo claro para a seção de contato
  min-height: 80vh; // Garante que ocupe a maior parte da tela
`;

const H2 = styled.h2`
  font-size: 4rem;
  text-align: center;
  font-family: "Big Shoulders Inline", sans-serif;
  font-weight: 900;
  color: #333; // Cor mais escura para o título
  margin-bottom: 3rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 2rem; // Espaçamento entre os ícones
  margin-top: 2rem;
`;

const SocialIconLink = styled.a`
  color: #007bff; // Cor padrão para os ícones
  font-size: 3rem;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px); // Efeito de leve levantamento ao passar o mouse
    color: #0056b3; // Cor mais escura ao passar o mouse
  }
`;

const ContactParagraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  max-width: 700px;
  line-height: 1.6;
`;

export default function Contato() {
  return (
    <>
      <Header>
        <Navega />
      </Header>
      <ContactContainer>
        <H2>Entre em Contato!</H2>
        <ContactParagraph>
          Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente,
          uma pergunta ou apenas quer trocar uma ideia sobre tecnologia, sinta-se à vontade para me contatar
          através das minhas redes sociais ou por e-mail.
        </ContactParagraph>
        <SocialLinks>
          <SocialIconLink href="https://www.linkedin.com/in/jaeder-azevedo" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIconLink>
          <SocialIconLink href="https://github.com/zxb360" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink href="" target="_blank">
            <FaEnvelope />
          </SocialIconLink>
          {/* Adicione mais ícones conforme necessário, como Twitter, Behance, etc. */}
          {/* Exemplo: <SocialIconLink href="https://twitter.com/seu-usuario-twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></SocialIconLink> */}
        </SocialLinks>
        <ContactParagraph>
          Prefere um contato mais direto? Envie-me um e-mail para: <strong>zizaoba@icloud.com</strong>
        </ContactParagraph>
      </ContactContainer>
    </>
  );
}