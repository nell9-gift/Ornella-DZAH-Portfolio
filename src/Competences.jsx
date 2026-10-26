import './Competences.css'

const categories = [
  {
    titre: 'Frontend',
    description:
      "Je conçois des interfaces claires et responsives, qui s'adaptent aussi bien aux ordinateurs qu'aux téléphones.",
    pratique: 'Ce portfolio, réalisé avec React.',
    competences: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    titre: 'Backend',
    description:
      "Je développe la logique côté serveur : routes, contrôleurs, traitement des données et connexion à la base de données.",
    pratique: 'La plateforme ARTILO, développée avec Laravel pendant mon stage.',
    competences: ['PHP', 'Laravel', 'Python', 'Java'],
  },
  {
    titre: 'Bases de données',
    description:
      "Je conçois et interroge des bases de données pour stocker et retrouver l'information de façon fiable.",
    pratique: 'La plateforme ARTILO, qui utilise une base de données MySQL.',
    competences: ['SQL Server', 'Oracle', 'PostgreSQL'],
  },
  {
    titre: 'Outils',
    description:
      "J'utilise des outils de développement pour travailler proprement et suivre l'évolution de mon code.",
    pratique: 'Versionnement de mes projets avec Git.',
    competences: ['Git', 'VS Code'],
  },
]

function Competences() {
  return (
    <section id="competences" className="competences">
      <span >Mes compétences</span>
      <h2>Les technologies que j'utilise</h2>

      <div className="competences-grille">
        {categories.map((categorie) => (
          <div className="competence-carte" key={categorie.titre}>
            <h3>{categorie.titre}</h3>
            <p className="competence-description">{categorie.description}</p>

            <div className="etiquettes">
              {categorie.competences.map((nom) => (
                <span className="etiquette" key={nom}>{nom}</span>
              ))}
            </div>

            {categorie.pratique && (
              <p className="competence-pratique">
                <strong>Mis en pratique :</strong> {categorie.pratique}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Competences