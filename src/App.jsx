import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Historia from './pages/Historia';
import Especialidades from './pages/Especialidades';
import Organizacion from './pages/Organizacion';
import Alianza from './pages/Alianza';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/organizacion" element={<Organizacion />} />
        <Route path="/alianza" element={<Alianza />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;