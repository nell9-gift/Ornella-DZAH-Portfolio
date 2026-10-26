import './Contact.css'
const email = 'ornelladzah720@gmail.com'
const lienGmail = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent('Contact depuis votre portfolio')}`
const liens = [
  { nom: 'E-mail', texte: 'ornelladzah720@gmail.com', adresse: lienGmail },
  { nom: 'GitHub', texte: 'github.com/nell9-gift', adresse: 'https://github.com/nell9-gift' },
  { nom: 'LinkedIn', texte: 'linkedin.com/in/ornella-dzah', adresse: 'https://www.linkedin.com/in/ornella-dzah-9b6518395?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
]

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-boite">
        <span >Contact</span>
        <h2>Un projet, un stage, une opportunité ?</h2>
        <p>
          Je suis ouverte aux échanges et aux collaborations.
          N'hésitez pas à m'écrire, je vous répondrai avec plaisir.
        </p>

     <a href={lienGmail} target="_blank" rel="noreferrer" className="bouton">
  Me contacter par e-mail
</a>

        <ul className="contact-liens">
          {liens.map((lien) => (
            <li key={lien.nom}>
              <span className="contact-nom">{lien.nom}</span>
              <a href={lien.adresse} target="_blank" rel="noreferrer">
                {lien.texte}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact