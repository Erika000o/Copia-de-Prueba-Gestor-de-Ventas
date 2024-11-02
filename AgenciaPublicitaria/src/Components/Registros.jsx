import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registros() {
  // Estado para controlar si se está registrando un usuario o un cliente
  const [registroTipo, setRegistroTipo] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false); // Estado para mostrar el card
  const [mensaje, setMensaje] = useState(''); // Mensaje personalizado
  const [PalabraClave, setPalabraClave] = useState(''); // Palabra clave

  const navigate = useNavigate();

  // Manejar el tipo de registro seleccionado
  const handleRegistroTipo = (tipo) => {
    setRegistroTipo(tipo);
  };

  // Manejar el registro exitoso y mostrar el card
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true); // Muestra el card emergente
    if (registroTipo === 'cliente') {
      setMensaje('Cliente registrado con éxito');
    } else if (registroTipo === 'usuario') {
      setMensaje('Usuario registrado con éxito');
    }
  };

  // Ocultar el card de confirmación
  const handleClose = () => {
    setShowConfirmation(false); // Oculta el card
    setRegistroTipo(''); // Reinicia el formulario
  };

  return (
    <div className="container">
      {/* Card emergente de confirmación */}
      {showConfirmation && (
        <div className="overlay">
          <div className="confirmation-card">
            <p>{mensaje}</p>
            <button onClick={handleClose}>Aceptar</button>
          </div>
        </div>
      )}

      <div className="card">
        <h2>¿Qué desea registrar?</h2>
        {/* Selección del tipo de registro */}
        {registroTipo === '' ? (
          <>
            <button onClick={() => handleRegistroTipo('cliente')} className="button1">
              Registrar Cliente
            </button>
            <button onClick={() => handleRegistroTipo('usuario')} className="button1">
              Registrar Usuario
            </button>

            <button onClick={() => navigate('/')} className="button2">Volver</button>
          </>
        ) : (
          <>
            {/* Formulario para registrar cliente */}
            {registroTipo === 'cliente' && (
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="documento">Documento:</label>
                  <input type="text" id="documento" name="documento" required />
                </div>
                <div className="input-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className="input-group">
                  <label htmlFor="apellidos">Apellidos:</label>
                  <input type="text" id="apellidos" name="apellidos" required />
                </div>
                <div className="input-group">
                  <label htmlFor="telefono">Teléfono:</label>
                  <input type="text" id="telefono" name="telefono" required />
                </div>
                <div className="input-group">
                  <label htmlFor="direccion">Dirección:</label>
                  <input type="text" id="direccion" name="direccion" required />
                </div>
                <div className="input-group">
                  <label htmlFor="barrio">Barrio:</label>
                  <input type="text" id="barrio" name="barrio" required />
                </div>
                <div className="input-group">
                  <label htmlFor="ciudad">Ciudad:</label>
                  <input type="text" id="ciudad" name="ciudad" required />
                </div>
                <div className="input-group">
                  <label htmlFor="Palabra Clave">Palabra Clave:</label>
                  <input type="text" value={PalabraClave} id="Palabra Clave" name="Palabra Clave" onChange={(e) => setPalabraClave(e.target.value)} title='Ingrese una Palabra clave segura' required />
                </div>
                <div>
                  <button className="button1" type="submit">Registrar Cliente</button>
                  <button onClick={() => setRegistroTipo('')} className="button1">Volver</button>
                </div>
              </form>
            )}

            {/* Formulario para registrar usuario */}
            {registroTipo === 'usuario' && (
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className="input-group">
                  <label htmlFor="apellido">Apellido:</label>
                  <input type="text" id="apellido" name="apellido" required />
                </div>
                <div className="input-group">
                  <label htmlFor="cedula">Cédula:</label>
                  <input type="text" id="cedula" name="cedula" required />
                </div>
                <div>
                  <button className="button1" type="submit">Registrar Usuario</button>
                  <button onClick={() => setRegistroTipo('')} className="button1">Volver</button>
                </div>
              </form>

            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Registros;