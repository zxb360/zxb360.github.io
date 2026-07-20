type CardSociaisTypes = {
    id?: number | string;
    titulo: string;
    imagem: string;
    link: string;
}

export default function CardsSociais({
    titulo, link, imagem,
}: CardSociaisTypes) {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">{titulo}
        <img src={`/${imagem}`} alt={titulo} />
      </a>
    </>
  )
}
