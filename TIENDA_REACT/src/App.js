import React from 'react';
import { ProveedorTareas } from './components/TaskContext/ContextoTarea';
import AgregarTarea from './components/LISTA DE TAREAS/AgregarTarea';
import ListaDeTareas from './components/LISTA DE TAREAS/ListaTarea';

import './components/LISTA DE TAREAS/estilos.css';


const App = () => {
    return (
        <div className="App">
            <ProveedorTareas>
                <div className="gestor-tareas">
                    <h1>Gestor de Tareas</h1>
                    <AgregarTarea />
                    <ListaDeTareas />
                </div>
            </ProveedorTareas>

        </div>
    );
};

export default App;
