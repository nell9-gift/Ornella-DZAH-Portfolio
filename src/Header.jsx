import './Header.css'

function Header() {
  return (
    <header className="header">
      <h2 className="logo">Mon Portfolio</h2>
      <nav className="menu">
        <a href="#accueil">Accueil</a>
       <a href="#competences">Compétences</a>
        <a href="#projets">Projets</a>
      </nav>
      <a href="#contact" className="bouton">Me contacter</a>
    </header>
  )
}

export default Header