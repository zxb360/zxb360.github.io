import { useMemo } from "react";
import Cards from "./Cards";
import StackIcons from "./StackIcons";
import { projetos } from '../data/projetosCards';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaYoutube, FaFacebook } from 'react-icons/fa';
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { FaXTwitter } from "react-icons/fa6";

export default function Navega() {
  const { theme, toggleTheme } = useTheme();
  const iconButtonClasses = useMemo(
    () =>
      "flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface-color)] transition hover:-translate-y-0.5 sm:h-14 sm:w-14 lg:h-16 lg:w-16",
    []
  );

  const effectCards = useMemo(() => "transition hover:-translate-y-0.5", [])
  const sizeAll = useMemo(() => "clamp(2rem, 7vw, 4.375rem)", [])

  return (
    <>
      <nav className="mx-auto flex w-full max-w-[1536px] flex-col gap-4 p-3 sm:p-4 md:gap-5 lg:flex-row lg:flex-wrap lg:items-start 2xl:flex-nowrap">
        <div className="flex min-w-0 flex-col justify-center gap-4 lg:flex-[1_1_420px] 2xl:flex-[0_0_600px]">
          <div className="w-full rounded-3xl border-2 border-black bg-[var(--surface-color)] p-4 text-[var(--text-color)] sm:rounded-4xl sm:p-5">
            <h3 className="mb-4 text-xl font-bold sm:text-2xl">ABOUT ME...</h3>
            <p className="indent-4 text-sm leading-6 sm:text-base">
              My name is Jaeder, and I consider myself a friendly, outgoing, hardworking, and curious person. 
              I am always striving for growth and I believe in people, as I seek to learn and grow through 
              every challenge.            </p>
            <p className="mt-4 indent-4 text-sm leading-6 sm:text-base">
              I like turning ideas into reality and developing solutions that add value to society. 
              Creating and learning are motivations that bring meaning to life's journey.            </p>
            <p className="mt-4 indent-4 text-sm leading-6 sm:text-base">
              I also value simple moments, such as spending time with my family and my wife, my parents, siblings, 
              and nephews and nieces.            </p>
            <p className="mt-4 indent-4 text-sm leading-6 sm:text-base">
              I strive to evolve both personally and professionally through continuous learning, aiming to build solutions 
              that can make a difference.            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <img className="h-56 w-full rounded-3xl object-cover sm:h-auto sm:min-h-60 sm:w-60 sm:rounded-4xl" 
              src="./jaederAI.jpeg" alt="jaeder" />
            <div className="min-w-0 flex-1 rounded-3xl border-2 border-black bg-[var(--surface-color)] text-[var(--text-color)] shadow-[8px_8px_0_rgba(0,0,0,0.25)] sm:rounded-4xl">
              <h3 className="pt-5 text-center text-xl font-bold sm:text-2xl">STACK</h3>
              <StackIcons />
            </div>
          </div>
          <div className="w-full rounded-3xl border-2 border-black bg-[var(--surface-color)] p-4 text-[var(--text-color)] sm:rounded-4xl sm:p-5">
            <h3 className="mb-4 text-xl font-bold sm:text-2xl">ACADEMIC</h3>
            
            <h2 className="mt-4 text-lg sm:text-xl">
              Technologist Degree in Systems Analysis and Development | Estácio FIB
            </h2>
            <p className="mt-4 indent-4 text-sm leading-6 sm:text-base">
              Undergraduate degree focused on software development, emphasizing software engineering,
              systems architecture, databases, object-oriented programming, web development,
              systems modeling, and agile methodologies. The degree consolidated the technical
              foundation for analyzing, building, and maintaining scalable, high-quality applications.
            </p>
            <h2 className="mt-4 text-lg sm:text-xl">
              Full Stack Web Development Program | Trybe
            </h2>
            <p className="mt-4 indent-4 text-sm leading-6 sm:text-base">
              Hands-on, intensive program with over 1,500 hours of software development, based on real-world
              challenges and complete projects. Experience building Full Stack applications using JavaScript,
              TypeScript, React, Node.js, Express, SQL, Docker, and automated testing. During the program, I
              deepened my knowledge of algorithms, data structures, software engineering, API integration,
              agile methodologies, and collaborative development best practices.
            </p>
          </div>

        </div>
        {/* CARDS DE PROJETOS */}
        <div className="flex min-w-0 flex-wrap justify-center gap-3 lg:flex-[1_1_420px] lg:self-start 2xl:flex-[1_1_560px]">
          {projetos.map((projeto) => (
            <Cards
              key={projeto.id}
              title={projeto.title}
              subtitulo={projeto.subtitulo}
              link={projeto.link}
              github={projeto.github}
              imagem={projeto.imagem}
              className={effectCards}
            />
          ))}

          <div className="flex w-full justify-center sm:w-auto">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="flex h-36 w-60 items-center justify-center rounded-3xl border-2 
                border-black bg-zinc-800 p-2 transition hover:-translate-y-0.5 sm:h-48 
                  sm:rounded-4xl md:w-80 lg:w-72 xl:h-60 2xl:w-120"
          >
            {theme === "light" ? <FiMoon size={60} /> : <FiSun size={60} />}
          </button>
          </div>
        </div>
        {/* REDES SOCIAIS */}
        <div className="flex min-w-0 flex-col justify-between gap-4 lg:flex-[1_1_100%] xl:min-h-full 2xl:flex-[0_0_320px]">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 xl:justify-end">
            <a href="https://www.instagram.com/zizaoazevedo/" target="_blank" rel="noopener noreferrer" className={iconButtonClasses}>
              <FaInstagram color="#E1306C" size={sizeAll} />
            </a>
            <a href="https://github.com/zxb360" target="_blank" rel="noopener noreferrer" className={iconButtonClasses} >
              <FaGithub color="#000000" size={sizeAll} />
            </a>
            <a href="https://www.linkedin.com/in/jaeder-azevedo" target="_blank" rel="noopener noreferrer" className={iconButtonClasses}>
              <FaLinkedin color="#0A66C2" size={sizeAll} />
            </a>
            <a href="https://x.com/Zxb360" target="_blank" rel="noopener noreferrer" className={iconButtonClasses}>
              <FaXTwitter color="#000000" size={sizeAll} />
            </a>
            <a href="https://wa.me/+5571987197362" target="_blank" rel="noopener noreferrer" className={iconButtonClasses}>
              <FaWhatsapp color="#25D366" size={sizeAll} />
            </a>
            <a href="https://www.youtube.com/@zizaods" target="_blank" rel="noopener noreferrer" className={iconButtonClasses}>
              <FaYoutube color="#FF0000" size={sizeAll} />
            </a>
             <a href="https://www.facebook.com/zizao.azevedo" target="_blank" rel="noopener noreferrer" className={iconButtonClasses}>
              <FaFacebook color="#0A66C2" size={sizeAll} />
            </a>
          </div>
               {/* PROJETO PARA CONSTRUIR */}
          <div className="flex min-h-44 w-full flex-col items-center justify-center rounded-3xl border-2 border-black bg-[var(--surface-color)] p-4 text-center text-[var(--text-color)] transition hover:-translate-y-0.5 sm:min-h-52 sm:rounded-4xl xl:min-h-60">
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">Have a project in mind?</h2>
            <button 
              type="submit" 
              className="mt-3 max-w-full rounded-2xl bg-blue-500 p-4 text-sm break-all hover:bg-blue-700 sm:p-5 sm:text-base"
              onClick={() => window.location.href = 'mailto:zxb360@gmail.com'}
              >
              zxb360@gmail.com
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
