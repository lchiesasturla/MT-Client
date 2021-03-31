import React, { useReducer } from 'react';
import TareaContext from './TareaContext';
import TareaReducer from './TareaReducer';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';
import clienteAxios from '../../config/axios';

const TareaState = props => {
    const initialState = {
        tareasproyecto: [],
        errortarea: false,
        tareaselec: null
    }

    const [state, dispatch] = useReducer(TareaReducer, initialState);

    const obtenerTareas = async proyecto => {
        try {
            const response = await clienteAxios.get(`/api/tasks/${proyecto}`);
            dispatch({
                type: TAREAS_PROYECTO,
                payload: response.data.tasks
            })
        } catch (error) {
            console.log(error.response);
        }

    }

    const agregarTarea = async tarea => {
        try {
            const response = await clienteAxios.post('/api/tasks', tarea)
            dispatch({
                type: AGREGAR_TAREA,
                payload: response.data.task
            })
        } catch (error) {
            console.log(error.response);
        }

    }

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    const eliminarTarea = async id => {
        try {
            await clienteAxios.delete(`/api/tasks/${id}`);
        } catch (error) {
            console.log(error.response);
        }
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    const actualizarTarea = async tarea => {
        try {
            const response = await clienteAxios.put(`/api/tasks/${tarea._id}`, tarea);
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: response.data.task
            })
        } catch (error) {
            console.log(error.response);
        }

    }

    return (
        <TareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaselec: state.tareaselec,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;