import React, {useReducer} from 'react';
import AlertaReducer from './AlertaReducer';
import AlertaContext from './AlertaContext';
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

const AlertaState = props => {

    const initialState = {
        alert: null
    }

    const [state, dispatch] = useReducer(AlertaReducer, initialState);

    const showAlert = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });

        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            });
        }, 5000)
    }

    return (
        <AlertaContext.Provider
            value={{
                alert: state.alert,
                showAlert
            }}
        >
            {props.children}
        </AlertaContext.Provider>
    )
}

export default AlertaState;