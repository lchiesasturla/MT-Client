import React, {useContext} from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const Proyecto = ({proyecto}) => {

    const {proyectoActual} = useContext(ProyectoContext);
    const {obtenerTareas} = useContext(TareaContext);

    const selectProyecto = id => {
        proyectoActual(id);
        obtenerTareas(id);
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => selectProyecto(proyecto._id)}
            >
            {proyecto.nombre}    
            </button>
        </li>
     );
}
 
export default Proyecto;