import './Interet.css'

const interets = ['Peinture', 'Lecture', 'Design', 'Cuisine', 'Voyages']

function Interets() {
  return (
    <section id="interets" className="interets">
      <div className="interets-contenu">
        <p className="interets-intro">Au-delà du code</p>

        <div className="interets-mots">
          {interets.map((mot) => (
            <span className="interet" key={mot}>{mot}</span>
          ))}
        </div>

        <p className="interets-texte">
          La peinture et le design nourrissent ma créativité, tandis que la lecture enrichit mes connaissances et ma façon de voir le monde. La cuisine me permet d’explorer de nouvelles saveurs, et les voyages éveillent ma curiosité et mon ouverture d’esprit. Autant de passions qui inspirent ma manière de penser, de créer et d’aborder les défis.

        </p>
      </div>
    </section>
  )
}

export default Interets