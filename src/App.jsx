import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Historia from './pages/Historia';
import Especialidades from './pages/Especialidades';
import Organizacion from './pages/Organizacion';
import Alianza from './pages/Alianza';
import Noticias from './pages/Noticias';
import Postula from './pages/Postula';
import Ayudanos from './pages/Ayudanos';
import Cancha from './pages/Cancha';
import Contacto from './pages/Contacto';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/organizacion" element={<Organizacion />} />
        <Route path="/alianza" element={<Alianza />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/postula" element={<Postula />} />
        <Route path="/ayudanos" element={<Ayudanos />} />
        <Route path="/cancha" element={<Cancha />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;