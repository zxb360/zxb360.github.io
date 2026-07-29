type CardsTypes = {
  id?: number | string;
  title: string;
  subtitulo?: string;
  link?: string;
  github?: string;
  imagem?: string;
  className?: string;
};

export default function Cards({ title, subtitulo, link, github, imagem, className = "" }: CardsTypes) {
  const cardClasses = `flex flex-col items-center gap-1 border-2 
      border-black rounded-3xl sm:rounded-4xl p-3 bg-[var(--surface-color)] text-[var(--text-color)] shadow-[5px_5px_0_rgba(0,0,0,0.22)] w-full max-w-72 min-h-60 sm:max-w-64 md:max-w-72 xl:max-w-none ${className}`;

  return (
    <div className={cardClasses}>
      <h3 className="font-bold text-sm text-center">{title}</h3>
      <img src={imagem} alt={title} className="h-20 w-20 rounded-lg object-cover sm:h-24 sm:w-24" />
      <h4 className="text-center text-xs leading-snug">{subtitulo}</h4>
      <label className="max-w-full text-sm">
        Link:
        {" "}
        <a className="text-sm text-blue-500 break-words" href={link} target="_blank" rel="noopener noreferrer">{title}</a>
      </label>
      <label className="max-w-full text-sm">
        Github:
        {" "}
        <a className="text-sm text-blue-500 break-words" href={github} target="_blank" rel="noopener noreferrer">{title}</a>
      </label>
    </div>
  );
}
