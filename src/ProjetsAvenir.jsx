import './ProjetsAvenir.css'

const projetsAVenir = [
  {
    statut: 'En préparation',
    titre: "Plateforme de vente et de location d'appartements",
    description:
      "Application web en cours de conception : analyse des besoins, choix de l'architecture et des technologies.",
    technologies: ['Django', 'Python'],
  },
  {
    statut: 'Prévu',
    titre: 'Projet de fin d\'études',
    description: "À compléter : Encore a definir",
    technologies: ['A definir'],
  },
   {
    statut: 'Prévu',
    titre: 'Plateforme de vente de boisson ',
    description: "À compléter : EPlateforme qui permetra a des vendeurs de boison d informatiser leur processus de vente",
    technologies: ['react', 'python', 'postman', 'SQLserver'],
  },
]

function ProjetsAVenir() {
  return (
    <section id="a-venir" className="avenir">
      <div className="avenir-contenu">
        <div className="avenir-titre">
          
          <h2>Ce que je prépare</h2>
          <p>
            Des projets en cours de conception ou prévus pour la suite
            de ma formation.
          </p>
        </div>

        <div className="avenir-liste">
          {projetsAVenir.map((projet) => (
            <article className="avenir-projet" key={projet.titre}>
              <span className="avenir-statut">{projet.statut}</span>
              <h3>{projet.titre}</h3>
              <p>{projet.description}</p>
              <p className="avenir-tech">{projet.technologies.join(' · ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjetsAVenir