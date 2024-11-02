import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Importando toast para notificaciones


import PendonM from '/PendonM.jpeg';
import PendonS from '/PendonS.jpeg';
import PendonL from '/PendonL.jpeg';
import PendonXL from '/PendonXL.jpeg';

import Tarjetas4x1 from '/Tarjetas4x1.jpeg';
import Tarjetas4x4 from '/Tarjetas4x4.jpg';
import Tarjeta4x4UV from '/Tarjetas4x4UV.jpeg';



import PendonesOptions from './PendonesOptions'; // Asegúrate de que la ruta sea correcta
import Modal from './Modal.jsx'; // Importa el componente Modal
import TarjetasOptions from './TarjetasOptions'; // Importa el componente TarjetasOptions

const Publicidad = () => {
  const [showPendones, setShowPendones] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [showOptions, setShowOptions] = useState(false); // Nuevo estado para mostrar el formulario

  const handleContinue = (data) => {
    console.log('Datos del pendón:', data);
    toast.success('Pendón agregado con éxito!'); // Notificación de éxito
    setShowOptions(false); // Cierra el formulario
  };

  const manejarSeleccion = (producto) => {
    if (producto === 'Pendones') {
        setShowOptions(false); // Asegúrate de que el formulario no se muestre al seleccionar 'Pendones'
        setProductoSeleccionado(producto); // Muestra los productos de Pendones
    } else if (producto === 'Tarjetas') {
        setShowOptions(false); // Asegúrate de que el formulario no se muestre al seleccionar 'Tarjetas'
        setProductoSeleccionado(producto); // Muestra los productos de Tarjetas
    } else {
        setProductoSeleccionado(producto);
        setShowOptions(false); // Cierra el formulario si se selecciona otro producto
    }
  };

  const handleProductSelection = (producto) => {
    setProductoSeleccionado(producto);
    setShowOptions(true); // Muestra el formulario solo al seleccionar un producto de Pendones
  };

  const renderizarProductos = () => {
    switch (productoSeleccionado) {
      case 'Pendones':
        return (
          <>
            <div className="product" onClick={() => handleProductSelection('Pendón talla S')}>
              <img src={PendonS} alt="Pendón talla S" />
              <h3>Pendón talla S</h3>
              <p>Pendón de 50 Cm x 70 Cm</p>
              <p>Precio: $28,000</p>
            </div>
            <div className="product" onClick={() => handleProductSelection('Pendón talla M')}>
              <img src={PendonM} alt="Pendón talla M" />
              <h3>Pendón talla M</h3>
              <p>Pendón de 70 Cm x 100 Cm</p>
              <p>Precio: $42,000</p>
            </div>
            <div className="product" onClick={() => handleProductSelection('Pendón talla L')}>
              <img src={PendonL} alt="Pendón talla L" />
              <h3>Pendón talla L</h3>
              <p>Pendón de 80 Cm x 120 Cm</p>
              <p>Precio: $67,000</p>
            </div>
            <div className="product" onClick={() => handleProductSelection('Pendón talla XL')}>
              <img src={PendonXL} alt="Pendón talla XL" />
              <h3>Pendón talla XL</h3>
              <p>Pendón de 100 Cm x 150 Cm</p>
              <p>Precio: $90,000</p>
            </div>
          </>
        );
      case 'Tarjetas':
        return (
          <>
            <div className="product" onClick={() => handleProductSelection('Tarjetas Barniz 4*1')}>
              <img src={Tarjetas4x1} alt="Tarjetas Barniz 4*1" />
              <h3>Tarjetas Barniz 4*1</h3>
              <p>1000 Parte frontal full color barnizada / respaldo blanco y negro</p>
              <p>Precio: $80,000</p>
            </div>
            <div className="product" onClick={() => handleProductSelection('Tarjetas Barniz 4*1 Mate UV')}>
              <img src={Tarjetas4x4} alt="Tarjetas Barniz 4*1 Mate UV" />
              <h3>Tarjetas Barniz 4*1 Mate UV</h3>
              <p>Parte frontal a color Mate con Brillo UV parcial y respaldo en escala de grises</p>
              <p>Precio: $120,000</p>
            </div>
            <div className="product" onClick={() => handleProductSelection('Tarjetas Barniz 4*4')}>
              <img src={Tarjeta4x4UV} alt="Tarjetas Barniz 4*4" />
              <h3>Tarjetas Barniz 4*4</h3>
              <p>Ambos lados a color mate con brillo UV parcial</p>
              <p>Precio: $150,000</p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const renderizarFormulario = () => {
    switch (productoSeleccionado) {
        case 'Pendones':
            return <PendonesOptions onBack={() => setShowOptions(false)} onContinue={handleContinue} />;
        case 'Tarjetas':
            return <TarjetasOptions onBack={() => setShowOptions(false)} onContinue={handleContinue} />;
        default:
            return null;
    }
  };

  return (
    <section id="publicidad" className="service-section">
      <h2>Productos de Publicidad</h2>
      <div className="product-submenu">
        <button onClick={() => manejarSeleccion('Pendones')}>Pendones</button>
        <button onClick={() => manejarSeleccion('Tarjetas')}>Tarjetas</button>
        <button onClick={() => manejarSeleccion('Volantes')}>Volantes</button>
        <button onClick={() => manejarSeleccion('Stickers')}>Stickers</button>
        <button onClick={() => manejarSeleccion('Impresión Digital')}>Impresión Digital</button>
      </div>
      <div className="products-container">
        {productoSeleccionado === 'Pendones' && renderizarProductos()} {/* Muestra los productos solo si Pendones está seleccionado */}
      </div>

      {showOptions && (
        <Modal onClose={() => setShowOptions(false)}>
          {renderizarProductos()}
        </Modal>
      )}
    </section>
  );
};

export default Publicidad;