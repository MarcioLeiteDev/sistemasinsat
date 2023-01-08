import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar'
import Topo from './components/layouts/Topo'
import Bottom from './components/layouts/Bottom'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Carros from './components/pages/Carros'
import Motos from './components/pages/Motos'
import Caminhao from './components/pages/Caminhao'
import Frotas from './components/pages/Frotas'
import Pessoal from './components/pages/Pessoal';
import Cargas from './components/pages/Cargas';
import Monitoramento from './components/pages/Monitoramento';
import Contato from './components/pages/Contato';


import 'aos/dist/aos.css'

function App() {
  return (
    <Router>
      <Topo />
      <Navbar />

        <Routes>

          <Route path="/" element={ <Home /> }> </Route>

          <Route path="/quem-somos" element={ <About /> }> </Route>

          <Route path="/rastreador-carro" element={ <Carros /> }> </Route>

          <Route path="/rastreador-moto" element={ <Motos /> }> </Route>

          <Route path="/rastreador-caminhao" element={ <Caminhao /> }> </Route>

          <Route path="/rastreador-frotas" element={ <Frotas /> }> </Route>

          <Route path="/rastreador-pessoal" element={ <Pessoal /> }> </Route>

          <Route path="/rastreador-cargas" element={ <Cargas /> }> </Route>

          <Route path="/monitoramento" element={ <Monitoramento /> }> </Route>

          <Route path="/contato" element={ <Contato /> }> </Route>

        </Routes>


      <Footer />
      <Bottom />

    </Router>

  );
}

export default App;
