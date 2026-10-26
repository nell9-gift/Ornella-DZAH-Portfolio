import './Acceuil.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel, FaGitAlt, FaPython } from 'react-icons/fa'

const technologies = [
  { nom: 'HTML', icone: FaHtml5, couleur: '#E34F26' },
  { nom: 'CSS', icone: FaCss3Alt, couleur: '#1572B6' },
  { nom: 'JavaScript', icone: FaJs, couleur: '#F0DB4F' },
  { nom: 'React', icone: FaReact, couleur: '#61DAFB' },
  { nom: 'PHP', icone: FaPhp, couleur: '#777BB4' },
  { nom: 'Laravel', icone: FaLaravel, couleur: '#FF2D20' },
  { nom: 'Git', icone: FaGitAlt, couleur: '#F05032' },
  { nom: 'Python', icone: FaPython, couleur: '#3776AB' }
]
function Accueil() {
  return (
    <section id="accueil" className="accueil">
      <div className="accueil-texte">
        <h1>
          Bonjour, je suis <span className="nom">Ornella DZAH</span>
        </h1>
        <p className="accroche">
         Je suis étudiante en troisième année de formation d’ingénieur des travaux informatiques, spécialisée en génie logiciel. Passionnée par le développement logiciel, je conçois des applications web modernes et performantes en alliant créativité, rigueur technique et sens de l’innovation.

        </p>
        <div className="accueil-boutons">
          <a href="#projets" className="bouton">Voir mes projets</a>
          <a href="/cv.pdf" download className="bouton-secondaire">
            Télécharger mon CV
          </a>
        </div>
         <div className="technologies">
  <span className="technologies-titre">Technologies que j'utilise</span>
  <div className="technologies-icones">
    {technologies.map((tech) => {
      const Icone = tech.icone
      return (
        <span
  className="techno"
  key={tech.nom}
  title={tech.nom}
  style={{ color: tech.couleur }}
>
  <Icone />
</span>
      )
    })}
  </div>
</div>
        
      </div>

      <div className="photo-zone">
        <div className="photo-fond"></div>
        <img
          src="/images/photo.png"
          alt="Ornella DZAH"
          className="photo-personne"
        />
      </div>
    </section>
  )
}

export default Accueil