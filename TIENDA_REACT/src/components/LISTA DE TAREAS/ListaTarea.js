import React, { useContext } from 'react';
import { ContextoTareas } from '..//TaskContext/ContextoTarea';

const ListaTareas = () => {
    const { tareas, alternarCompletadoTarea, eliminarTarea } = useContext(ContextoTareas);

    return (
        <ul>
            {tareas.map((tarea) => (
                <li key={tarea.id}>
                    <input
                        type="checkbox"
                        checked={tarea.completada}
                        onChange={() => alternarCompletadoTarea(tarea.id)}
                    />
                    <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
                        {tarea.texto}
                    </span>
                    <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default ListaTareas;
