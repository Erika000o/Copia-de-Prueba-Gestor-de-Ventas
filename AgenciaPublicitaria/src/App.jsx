import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './components/Inicio.jsx';
import Registros from './components/Registros.jsx';
import Publicidad from './components/Publicidad.jsx';
import DisenoGrafico from './components/DisenoGrafico.jsx';
import MarketingDigital from './components/MarketingDigital.jsx';
import './App.css';

// Simulación de productos y trabajos
const servicios = {
  publicidad: {
    pendones: [
      { name: 'Pendón talla S', description: 'Pendón de 50 Cm x 70 Cm', price: 28000, image: PendonS},
      { name: 'Pendón talla M', description: 'Pendón de 70 Cm x 100 Cm', price: 42000, image: PendonM },
      { name: 'Pendón talla L', description: 'Pendón de 80 Cm x 120 Cm', price: 67000, image: PendonL },
      { name: 'Pendón talla XL', description: 'Pendón de 100 Cm x 150 Cm', price: 90000, image: PendonXL }
    ],
    tarjetas: [
      { name: 'Tarjetas Barniz 4*1', description: '1000 Parte frontal full color barnizda / respaldo blanco y negro', price: 80000, image: Tarjetas4x1 },
      { name: 'Tarjetas Barniz 4*1 Mate UV', description: 'Parte frontal a color Mate con Brillo UV parcial y respaldo en escala de grises', price: 120000, image: Tarjetas4x1UV },
      { name: 'Tarjetas Barniz 4*4', description: 'Tarjetas 4x4 Mate UV - Ambos lados a color mate con brillo UV parcial', price: 150000, image: Tarjeta4x4UV }
    ],
    }
    };





const App = () => {
  return (
    <Router>
      <>
        <header className="menu">
          <div className="menu-header">
            <h2>Menú</h2>
          </div>
          <ul className="menu-items">
            <li><Link to="/">Inicio Sesion</Link></li>
            <li className="dropdown">
              <Link to="#">Servicios</Link>
              <ul className="submenu">
                <li><Link to="/publicidad">Publicidad</Link></li>
                <li><Link to="/diseno-grafico">Diseño Gráfico</Link></li>
                <li><Link to="/marketing-digital">Marketing Digital</Link></li>
              </ul>
            </li>
          </ul>
        </header>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registros" element={<Registros />} />
          <Route path="/publicidad" element={<Publicidad />} />
          <Route path="/diseno-grafico" element={<DisenoGrafico />} />
          <Route path="/marketing-digital" element={<MarketingDigital />} />

        </Routes>
      </>
    </Router>
  );
};

export default App;