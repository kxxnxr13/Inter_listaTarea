// src/components/AgregarTarea.js
import React, { useContext, useState } from 'react';
import { ContextoTareas } from '../TaskContext/ContextoTarea';

const AgregarTarea = () => {
    const { agregarTarea } = useContext(ContextoTareas);
    const [texto, setTexto] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (texto.trim() !== '') { // Evita agregar tareas vacías
            agregarTarea(texto);
            setTexto(''); // Limpiar el campo de entrada después de agregar
        }
    };

    return (
        <form onSubmit={manejarEnvio}>
            <input
                type="text"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="Escribe una tarea"
            />
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

export default AgregarTarea;

