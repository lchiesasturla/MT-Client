import React, {useContext} from 'react';
import AuthContext from '../../context/auth/AuthContext';

const Header = () => {

    const {usuario, logout} = useContext(AuthContext);

    return ( 
        <header className="app-header">
            {usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p> : null}
            
            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => logout()}
                >
                    Cerrar Sesion
                </button>
            </nav>
        </header>
    );
}
 
export default Header;