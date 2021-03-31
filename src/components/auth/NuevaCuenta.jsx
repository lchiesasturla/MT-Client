import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/AlertaContext';
import AuthContext from '../../context/auth/AuthContext';

const NuevaCuenta = (props) => {

    const {alert, showAlert} = useContext(AlertaContext);
    const {mensaje, autenticado, registrarUsuario} = useContext(AuthContext);

    const [user, setUser] = useState({
        nombre: '',
        email:'',
        password:'',
        repassword:''
    });

    // En caso de que el usuario se haya autenticado o registrado o sea un registro duplicado
    useEffect(() => {
        if(autenticado){
            props.history.push('/proyectos');
        }

        if(mensaje){
            showAlert(mensaje.msg, mensaje.categoria);
        }
        //eslint-disable-next-line
    }, [mensaje, autenticado, props.history])

    const {nombre, email, password, repassword} = user;

    const handleChange = e => {
        setUser({...user, 
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || repassword.trim() === ''){
            showAlert('Todos los campos son obligatorios', 'alerta-error');
            return;
        }

        if(password.length < 6) {
            showAlert('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        if(password !== repassword){
            showAlert('Los dos passwords deben ser iguales', 'alerta-error');
            return;
        }

        registrarUsuario({
            nombre,
            email,
            password
        })
    }



    return (
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.categoria}`}>{alert.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Crea una cuenta</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={handleChange}
                        />
                    </div>
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
                        <label htmlFor="repassword">Confirmar tu Password</label>
                        <input
                            type="password"
                            id="repassword"
                            name="repassword"
                            placeholder="Confirma tu password"
                            value={repassword}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a iniciar sesion
                </Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;