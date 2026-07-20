import Cards from "./Cards";
import { projetos } from '../data/projetosCards';
// import CardsSociais from "./CardsSociais";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';


export default function Navega() {
  return (
    <>
      <nav className="flex flex-col p-4 lg:flex-row lg:items-start">
        
        <div className="flex flex-col justify-center gap-4 lg:flex-1">
          <div className="rounded-[10px] border-2 border-black bg-zinc-900 p-4 shadow-[10px_10px_0_rgba(0,0,0,0.25)] lg:flex-1">
            <h3 className="mb-4 text-2xl font-bold">SOBRE...</h3>
            <p className="indent-4 leading-6 text-sm">
              Meu nome é Jaeder, acredito ser uma pessoa legal, social, esforçada, além de curiosa. Estou sempre em busca de evolução e acredito nas pessoas, pois procuro aprender e crescer diante de cada desafio.
            </p>
            <p className="indent-4 leading-6 mt-4 text-sm">
              Gosto de transformar ideias em realidade, desenvolver soluções para agregar a sociedade. Criar, aprender são motivações que fazem sentido durante o percurso da vida.
            </p>
            <p className="indent-4 leading-6 mt-4 text-sm">
              Também valorizo os momentos simples como minha família e esposa, meus pais, irmãos e sobrinhos.
            </p>
            <p className="indent-4 leading-6 mt-4 text-sm">
              Busco evoluir tanto na vida pessoal quanto profissional, aprendizado contínuo para construir soluções que possam fazer a diferença.
            </p>
          </div>
          <img className="w-150" src="./final_image_ziza.png" alt="jaeder lego" />    
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:flex-1">
          {projetos.map((projeto) => (
            <Cards
              key={projeto.id}
              title={projeto.title}
              subtitulo={projeto.subtitulo}
              link={projeto.link}
              github={projeto.github}
              imagem={projeto.imagem}
              className="shadow-[6px_6px_0_rgba(0,0,0,0.22)]"
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-black bg-zinc-800 shadow-[5px_5px_0_rgba(0,0,0,0.18)]">
            <FaInstagram color="#E1306C" size={40} />
          </a>
          <a href="https://github.com/zxb360" target="_blank" rel="noopener noreferrer" className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-black bg-zinc-800 shadow-[5px_5px_0_rgba(0,0,0,0.18)]">
            <FaGithub color="#000000" size={40} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-black bg-zinc-800 shadow-[5px_5px_0_rgba(0,0,0,0.18)]">
            <FaLinkedin color="#0A66C2" size={40} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-black bg-zinc-800 shadow-[5px_5px_0_rgba(0,0,0,0.18)]">
            <FaTwitter color="#1DA1F2" size={40} />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-black bg-zinc-800 shadow-[5px_5px_0_rgba(0,0,0,0.18)]">
            <FaWhatsapp color="#25D366" size={40} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-black bg-zinc-800 shadow-[5px_5px_0_rgba(0,0,0,0.18)]">
            <FaYoutube color="#FF0000" size={40} />
          </a>
        </div>
      </nav>
    </>
  )
}