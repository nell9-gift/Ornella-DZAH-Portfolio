function CarteProjet({ numero, titre, description, technologies, image, lien }) {
  return (
    <article className="projet-carte">
      <div className="projet-image">
        {image ? (
          <img src={image} alt={titre} />
        ) : (
          <span className="projet-initiale">{titre[0]}</span>
        )}
        <span className="projet-numero">{numero}</span>
      </div>

      <div className="projet-contenu">
        <h3>{titre}</h3>
        <p>{description}</p>

        <div className="etiquettes">
          {technologies.map((tech) => (
            <span className="etiquette" key={tech}>{tech}</span>
          ))}
        </div>

        {lien && (
          <a href={lien} target="_blank" rel="noreferrer" className="projet-lien">
            Voir le projet →
          </a>
        )}
      </div>
    </article>
  )
}

export default CarteProjet