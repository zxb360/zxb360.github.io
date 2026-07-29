import { useState } from "react";

const stackIcons = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    alt: "Vite",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "Next.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    alt: "SQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    alt: "MySQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
    alt: "Bash",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    alt: "Tailwind",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    alt: "Docker",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg",
    alt: ".NET",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    alt: "C#",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg",
    alt: "Fedora",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    alt: "Java",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    alt: "Spring Boot",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-plain.svg",
    alt: "API Rest",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
    alt: "JWT",
  },
];

const VISIBLE_COUNT = 6;
const ITEM_WIDTH = 96;

export default function StackIcons() {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, stackIcons.length - VISIBLE_COUNT);

  const handlePrev = () => setIndex((current) => Math.max(0, current - 1));
  const handleNext = () => setIndex((current) => Math.min(maxIndex, current + 1));

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between gap-2 sm:gap-3">
        <button
          type="button"
          onClick={handlePrev}
          disabled={index === 0}
          className="bg-[var(--surface-color)] p-2 text-3xl disabled:cursor-not-allowed disabled:opacity-50 sm:text-4xl"
          aria-label="Voltar ícones"
        >
          ‹
        </button>

        <div className="min-w-0 flex-1 overflow-hidden bg-[var(--surface-color)] px-2 py-3">
          <div
            className="flex gap-4 transition-transform duration-300"
            style={{ transform: `translateX(-${index * (ITEM_WIDTH + 16)}px)` }}
          >
            {stackIcons.map((stack) => (
              <div
                key={stack.alt}
                className="flex min-w-24 flex-col items-center justify-center gap-2"
              >
                <img
                  src={stack.src}
                  alt={stack.alt}
                  className="h-12 w-12 object-contain sm:h-16 sm:w-16"
                />
                <span className="text-xs text-center text-[var(--text-color)]">{stack.alt}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={index === maxIndex}
          className="bg-[var(--surface-color)] p-2 text-3xl disabled:cursor-not-allowed disabled:opacity-50 sm:text-4xl"
          aria-label="Avançar ícones"
        >
          ›
        </button>
      </div>
    </div>
  );
}
