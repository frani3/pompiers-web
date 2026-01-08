import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Historia from './pages/Historia';
import Especialidades from './pages/Especialidades';
import Organizacion from './pages/Organizacion';

function App() {
  return (
    <BrowserRouter basename="/pompiers-web">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/organizacion" element={<Organizacion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;