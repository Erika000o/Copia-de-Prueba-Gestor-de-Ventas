import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from '../assets/image/logo.jpeg';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <header>
          <h1>Gestor de ventas</h1>
        </header>
        <form>
          <div className="input-group">
            <label htmlFor="username">Usuario:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="button-group">
            <button className="button1" type="submit">
              Ingresar
            </button>
            <button
              className="button1"
              type="button"
              onClick={() => navigate('/registros')}
            >
              Registrar
            </button>
          </div>
        </form>
        <div className="red-card">
          <img src={logo} alt="logo" className='logo'/>
        </div>
      </div>
    </>
  );
}

export default Home;