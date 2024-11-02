import React from 'react';

const Modal = ({ onClose, children }) => {
    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
                <span style={styles.close} onClick={onClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
// Estilos integrados en el componente
const styles = {
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, // Asegúrate de que esté por encima de otros elementos
    },
    modalContent: {
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '400px', // Ajusta el ancho según sea necesario
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
    },
};