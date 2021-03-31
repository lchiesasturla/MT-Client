import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/AlertaContext';
import AuthContext from '../../context/auth/AuthContext';
const Login = props => {

    const {alert, showAlert} = useContext(AlertaContext);
    const {mensaje, autenticado, login} = useContext(AuthContext);

    const [user, setUser] = useState({
        email:'',
        password:''
    });

    const {email, password} = user;

    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos');
        }

        if(mensaje){
            showAlert(mensaje.msg, mensaje.categoria);
        }
        //eslint-disable-next-line
    }, [mensaje, autenticado, props.history])

    const handleChange = e => {
        setUser({...user, 
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(email.trim() === '' || password.trim() === ''){
            showAlert('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        login({email, password});
    }

    return (
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.categoria}`}>{alert.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar sesion"
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener cuenta
                </Link>
            </div>
        </div>
    );
}
 
export default Login;