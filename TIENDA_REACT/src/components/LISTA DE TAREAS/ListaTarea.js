// src/components/ListaDeTareas.js
import React, { useContext } from 'react';
import { ContextoTareas } from '../TaskContext/ContextoTarea';

const ListaDeTareas = () => {
    const { tareas, eliminarTarea, alternarCompletadoTarea } = useContext(ContextoTareas);

    return (
        <div className="lista-tareas">
            <h2>Lista de Tareas</h2>
            {tareas.length > 0 ? (
                tareas.map((tarea) => (
                    <div key={tarea.id} className="item-tarea">
                        <input
                            type="checkbox"
                            checked={tarea.completada}
                            onChange={() => {
                                console.log(
                                    `Tarea ${tarea.id} marcada como ${!tarea.completada ? 'completada' : 'no completada'}`
                                );
                                alternarCompletadoTarea(tarea.id);
                            }}
                        />
                        <span className={tarea.completada ? "completada" : ""}>
                            {tarea.texto}
                        </span>
                        <button
                            onClick={() => eliminarTarea(tarea.id)}
                            className="boton-eliminar"
                        >
                            Eliminar
                        </button>
                    </div>
                ))
            ) : (
                <p>No hay tareas pendientes</p>
            )}
        </div>
    );
};

export default ListaDeTareas;
