import React, {useContext} from 'react';
import TareaContext from '../../context/tareas/TareaContext';
const Tarea = ({ tarea }) => {

    const {eliminarTarea, obtenerTareas, actualizarTarea, guardarTareaActual} = useContext(TareaContext);

    const handleDelete = tarea => {
        console.log(tarea);
        eliminarTarea(tarea._id);
        obtenerTareas(tarea.proyecto);
    }

    const handleState = tarea => {
        tarea.estado = !tarea.estado;
        actualizarTarea(tarea);
    }

    const handleUpdate = tarea => {
        guardarTareaActual(tarea);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado
                    ? <button type="button" className="completo" onClick={() => handleState(tarea)}>Completo</button>
                    : <button type="button" className="incompleto" onClick={() => handleState(tarea)}>Incompleto</button>
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick = {() => handleUpdate(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => handleDelete(tarea)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;