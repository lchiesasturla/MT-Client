import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';

const GuardRoute = ({ component: Component, ...props }) => {
    const { autenticado, cargando } = useContext(AuthContext);

    return (
        <Route
            {...props} render={props => !autenticado && !cargando
                ? 
                (
                    <Redirect to="/"/>
                )
                :
                (
                    <Component {...props}/>
                )
            }
        />
    );
}

export default GuardRoute;