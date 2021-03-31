import React, { useEffect, useContext } from 'react';
import Proyecto from './Proyecto';
import ProyectoContext from '../../context/proyectos/ProyectoContext'
import AuthContext from '../../context/auth/AuthContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListadoProyectos = () => {

    // Extraer proyectos de state inicial
    const { proyectos, obtenerProyectos } = useContext(ProyectoContext);
    const { cargando } = useContext(AuthContext);

    useEffect(() => {
        if(!cargando)
            obtenerProyectos();
        //eslint-disable-next-line
    }, [cargando])


    if (proyectos.length === 0) return <p>No hay proyectos</p>;

    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListadoProyectos;