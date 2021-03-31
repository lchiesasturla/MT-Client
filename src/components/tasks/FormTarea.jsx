import React, {useContext, useState, useEffect} from 'react';
import ProyectoContext from '../../context/proyectos/ProyectoContext';
import TareaContext from '../../context/tareas/TareaContext';

const FormTarea = () => {

    const {proyecto} = useContext(ProyectoContext);
    const {tareaselec, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea} = useContext(TareaContext);

    const [tarea, setTarea] = useState({
        nombre: ''
    })

    const {nombre} = tarea;

    useEffect(() => {
        if(tareaselec !== null){
            setTarea(tareaselec)
        }else{
            setTarea({
                nombre: ''
            })
        }
    }, [tareaselec])

    if(!proyecto) return null;

    const [proyectoActual] = proyecto;

    const handleChange = e =>{
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        if(tareaselec === null){
            tarea.proyecto = proyectoActual._id;
            agregarTarea(tarea);
        }else{
            actualizarTarea(tarea);
        }
        obtenerTareas(proyectoActual._id)
        setTarea({nombre: ''});
    }

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaselec ? "Modificar tarea" : "Agregar Tarea"}
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio.</p>: null}
        </div>

    );
}

export default FormTarea;