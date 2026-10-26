import Parcours from './Parcours'
import Projets from './Projets'
import Competences from './Competences'  
import Acceuil from './Acceuil'
import Header from './Header'
import Interet from './Interet'
import ProjetsAvenir from './ProjetsAvenir'
import Contact from './Contact'
import Footer from './footer'
function App() {
  return (
    <div>
      <Header/>
      <Acceuil/>
      <Parcours/>
      <Competences/>
      <Projets/>
      <Interet/>
      <ProjetsAvenir />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
