import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListadoTareas = () => {

    const { proyecto, eliminarProyecto } = useContext(ProyectoContext);
    const { tareasproyecto } = useContext(TareaContext);

    if (!proyecto) return <h2>Selecciona un proyecto</h2>;

    const [proyectoActual] = proyecto;
    
    return (
        <Fragment>

            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea">No hay tareas</li>)
                    :
                    <TransitionGroup>
                        {tareasproyecto.map(tarea => (
                            <CSSTransition 
                                key={tarea._id} 
                                timeout={200}
                                classNames="tarea"
                            >
                                <Tarea tarea={tarea} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
                <button
                    type="button"
                    className="btn btn-eliminar"
                    onClick={() => eliminarProyecto(proyectoActual._id)}
                >Eliminar proyecto &times;</button>
            </ul>

        </Fragment>
    );
}

export default ListadoTareas;