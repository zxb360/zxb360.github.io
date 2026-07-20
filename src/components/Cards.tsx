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
  const cardClasses = `flex flex-col items-center gap-2 border-2 
      border-black rounded-lg p-2 bg-zinc-800 w-60 h-70 ${className}`;

  return (
    <div className={cardClasses}>
      <h3 className="font-bold text-base text-center">{title}</h3>
      <img src={imagem} alt={title} className="w-30 h-30 object-cover rounded-lg" />
      <h4 className="text-center text-sm">{subtitulo}</h4>
      <label className="text-sm">
        Link:
        {" "}
        <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
      </label>
      <label className="text-sm">
        Github:
        {" "}
        <a className="text-blue-500 text-sm" href={github} target="_blank" rel="noopener noreferrer">{title}</a>
      </label>
    </div>
  );
}
