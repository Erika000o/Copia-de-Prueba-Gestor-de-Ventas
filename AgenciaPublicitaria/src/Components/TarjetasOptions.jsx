import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Importar toast para notificaciones

const TarjetasOptions = ({ onBack, onContinue }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [customerInfo, setCustomerInfo] = useState('');
    const [file, setFile] = useState(null);
    const [palabraClave, setPalabraClave] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleContinue = () => {
        if (!palabraClave) {
            toast.error('Por favor, ingresa su palabra clave.'); // Notificación de error
            return;
        }
        // Lógica para continuar con la compra
        onContinue({ selectedSize, customerInfo, file, palabraClave });
    };

    return (
        <div style={styles.tarjetasOptions}>
            <h2 style={styles.title}>Selecciona el tamaño de la Tarjeta</h2>
            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} style={styles.select}>
                <option value="">Seleccione un tamaño</option>
                <option value="4x1 barniz">Tarjetas 4x1 barniz - Parte frontal a color barnizadas- respaldo en escala de grises - $80,000</option>
                <option value="4x1 Mate UV">Tarjetas 4x1 Mate UV - Parte frontal a color Mate con Brillo UV parcial - respaldo en escala de grises - $120,000</option>
                <option value="4x4 Mate UV">Tarjetas 4x4 Mate UV - Ambos lados a color mate con brillo UV parcial - $150,000</option>
            </select>

            <textarea
                placeholder="Nombre de establecimiento, información de contacto, servicios."
                value={customerInfo}
                onChange={(e) => setCustomerInfo(e.target.value)}
                maxLength={255} // Limita a 255 caracteres
                style={styles.textarea}
            />
            <div>
                {customerInfo.length} / 255 caracteres
            </div>

            <input type="file" onChange={handleFileChange} style={styles.inputFile} />
            <div>
                <input
                    type="text"
                    placeholder="Ingrese su palabra clave"
                    value={palabraClave}
                    onChange={(e) => setPalabraClave(e.target.value)}
                    title="Ingrese su palabra clave para verificar si está registrado en el sistema" // Tooltip agregado
                    style={styles.inputText}
                />
            </div>

            <div style={styles.buttonGroup}>
                <button>No tengo palabra clave, crear una</button>
                <button onClick={handleContinue}>Continuar con la compra</button>
            </div>
        </div>
    );
};

const styles = {
    tarjetasOptions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Alineado a la izquierda
        padding: '20px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        margin: '25px',
    },
    title: {
        fontSize: '24px',
        marginBottom: '30px',
        color: '#b71c1c',
        textAlign: 'left', // Alineado a la izquierda
        width: '100%', // Asegúrate de que ocupe todo el ancho
    },
    select: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    },
    textarea: {
        height: '100px',
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    },
    inputFile: {
        width: '100%',
        marginBottom: '15px',
    },
    inputText: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px',
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        gap: '15px',
    },
};

export default TarjetasOptions;
