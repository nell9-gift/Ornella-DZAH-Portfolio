import './footer.css'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const email = 'ornelladzah72O@gmail.com'
const lienGmail = `https://mail.google.com/mail/?view=cm&to=${email}`

const navigation = [
  { nom: 'Accueil', lien: '#accueil' },

  { nom: 'Parcours', lien: '#parcours' },
  { nom: 'Compétences', lien: '#competences' },
  { nom: 'Projets', lien: '#projets' },
  { nom: 'Contact', lien: '#contact' },
]

const reseaux = [
  { nom: 'GitHub', icone: FaGithub, lien: 'https://github.com/nell9-gift' },
  { nom: 'LinkedIn', icone: FaLinkedinIn, lien: 'https://www.linkedin.com/in/ornella-dzah-9b6518395?utm_source=share_via&utm_content=profile&utm_medium=member_android'  },
  { nom: 'E-mail', icone: FaEnvelope, lien: lienGmail },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-principal">
        <div className="footer-marque">
          <p className="footer-nom">Ornella DZAH</p>
          <p className="footer-phrase">
            Je transforme des idées en applications web intuitives,
            modernes et performantes.
          </p>
          <div className="footer-reseaux">
            {reseaux.map((reseau) => {
              const Icone = reseau.icone
              return (
                <a
                  key={reseau.nom}
                  href={reseau.lien}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={reseau.nom}
                  title={reseau.nom}
                  className="footer-reseau"
                >
                  <Icone />
                </a>
              )
            })}
          </div>
        </div>

        <nav className="footer-colonne" aria-label="Navigation du pied de page">
          <h4>Navigation</h4>
          <ul>
            {navigation.map((page) => (
              <li key={page.nom}>
                <a href={page.lien}>{page.nom}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-colonne">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={lienGmail} target="_blank" rel="noreferrer">{email}</a>
            </li>
            <li>
              <a href="/cv.pdf" download="CV-Ornella-DZAH.pdf">Télécharger mon CV</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bas">
        <p>© {new Date().getFullYear()} Ornella DZAH. Tous droits réservés.</p>
       
        <a href="#accueil" className="footer-retour">Retour en haut ↑</a>
      </div>
    </footer>
  )
}

export default Footer