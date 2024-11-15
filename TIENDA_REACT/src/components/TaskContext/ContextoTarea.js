import React, { createContext, useState } from 'react';


// Crear el contexto para compartir datos de tareas en toda la aplicación
export const ContextoTareas = createContext();

export const ProveedorTareas = ({ children }) => {
    // Estado para almacenar la lista de tareas
    const [tareas, setTareas] = useState([]);

    // Función para agregar una nueva tarea
    const agregarTarea = (texto) => {
        const nuevaTarea = { id: Date.now(), texto, completada: false };
        console.log("Nueva tarea creada", nuevaTarea); // visualizar el id de la tarea
        setTareas([...tareas, nuevaTarea]);
    };

    // Función para alternar el estado de completado de una tarea
    const alternarCompletadoTarea = (id) => {
        const tareasActualizadas = tareas.map((tarea) => {
            if (tarea.id === id) {
                return { ...tarea, completada: !tarea.completada };
            }
            return tarea;
        });
        console.log("Tarea actualizada", tareasActualizadas.find(t => t.id === id)); // Ver el cambio en la consola
        setTareas(tareasActualizadas);
    };

    // Función para eliminar una tarea por id
    const eliminarTarea = (id) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
    };

    // Proveer datos y funciones a otros componentes
    return (
        <ContextoTareas.Provider value={{ tareas, agregarTarea, eliminarTarea, alternarCompletadoTarea }}>
            {children}
        </ContextoTareas.Provider>
    );
};
