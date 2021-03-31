import React, { Fragment, useState, useContext } from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';

const NuevoProyecto = () => {

    const {formulario, errorForm, mostrarFormulario, agregarProyecto, mostrarError} = useContext(ProyectoContext);

    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const {nombre} = proyecto;

    const handleChange = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(nombre === ''){
            mostrarError();
            return;
        }

        agregarProyecto(proyecto);

        setProyecto({nombre: ''})
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            >
                Nuevo Proyecto
            </button>

            {formulario 
            ?
            (<form
                className="formulario-nuevo-proyecto"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre del proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                />

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar proyecto"
                />
            </form>)
            : null    
        }
        {errorForm ? <p className="mensaje error">El nombre del proyecto es obligatorio</p>: null}
        </Fragment>
    );
}

export default NuevoProyecto;