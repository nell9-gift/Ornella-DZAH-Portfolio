import './Projets.css'
import CarteProjet from './CarteProjet'

const projets = [
  {
    titre: 'ARTILO',
    description:
      "Plateforme de mise en relation entre particuliers et artisans, développée pendant mon stage chez THESYMO Technologies.",
    technologies: ['Laravel', 'PHP'],
    image: '/images/artilo.png',
    lien: 'https://github.com/nell9-gift/Artilo',
  },
  {
    titre: 'Mon portfolio',
    description:
      "Portfolio personnel responsive, conçu pour présenter mon parcours et mes réalisations.",
    technologies: ['React', 'CSS', 'Vite'],
    image: '/images/Portfolio.png',
    lien: '',
  },
  {
    titre: 'Comptaflow',
    description: "Décris ici un autre projet : son but et ce que tu y as fait.",
    technologies: ['Laravel', 'PHP', 'MySQL'],
    image: '/images/Comptaflow.png',
    lien: 'https://github.com/nell9-gift/Comptaflow',
  },
]

function Projets() {
  return (
    <section id="projets" className="projets">
      
      <h2>Quelques-unes de mes réalisations</h2>

      <div className="projets-grille">
        {projets.map((projet, index) => (
          <CarteProjet
            key={projet.titre}
            numero={String(index + 1).padStart(2, '0')}
            titre={projet.titre}
            description={projet.description}
            technologies={projet.technologies}
            image={projet.image}
            lien={projet.lien}
          />
        ))}
      </div>
    </section>
  )
}

export default Projets