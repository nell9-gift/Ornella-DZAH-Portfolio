import './Parcours.css'

const etapes = [
  {
    annee: '2026',
    periode: 'Juin – août',
    titre: 'Stage pratique de 2e année',
    lieu: 'THESYMO Technologies',
    description:
      "Conception et développement d'ARTILO, une plateforme de mise en relation entre particuliers et professionnels de l'artisanat.",
  },
  {
    annee: '2025',
    periode: '2025 – 2026',
    titre: 'Tronc commun, 2e année',
    lieu: 'Institut Africain d’Informatique (IAI)',
    description: "Cette année m’a permis de renforcer mes bases en programmation, en conception de bases de données et en développement d’applications. À travers les travaux pratiques et les projets réalisés, j’ai développé ma logique de programmation, ma capacité à résoudre des problèmes et ma compréhension du cycle de développement logiciel."
,
  },
  {
    annee: '2024',
    periode: '2024 – 2025',
    titre: 'Tronc commun, 1re année',
    lieu: 'Institut Africain d’Informatique (IAI)',
    description: "Cette première année m’a permis d’acquérir les fondamentaux de l’informatique, notamment en algorithmique, en programmation et en systèmes informatiques. Elle a posé les bases de mon parcours en génie logiciel et développé mon esprit logique ainsi que ma capacité à analyser et à résoudre des problèmes."
    ,
  },
]

function Parcours() {
  return (
    <section id="parcours" className="parcours">
      <div className="parcours-contenu">
    <div className="parcours-photo">
          <div className="parcours-cadre">
            <img src="/images/parcours.jpeg" alt="Ornella DZAH" />
          </div>
        </div>
<div className="parcours-droite">
        <h2>Formation et expériences</h2>

        <ol className="parcours-liste">
          {etapes.map((etape) => (
            <li className="parcours-ligne" key={etape.titre}>
              <div className="parcours-date">
                <span className="parcours-annee">{etape.annee}</span>
                <span className="parcours-periode">{etape.periode}</span>
              </div>
              <div className="parcours-corps">
                <h3>{etape.titre}</h3>
                <p className="parcours-lieu">{etape.lieu}</p>
              </div>
              <p className="parcours-description">{etape.description}</p>
            </li>
          ))}
        </ol>
      </div>
        </div>
    </section>
  )
}

export default Parcours