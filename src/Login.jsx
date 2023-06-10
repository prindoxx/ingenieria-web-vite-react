import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import { Link } from "react-router-dom";


function Login() {
    return (
        <>
        <div class="login">
            <h2>Iniciar sesión</h2>
            <form class="login-form" id="formulario-login">
                <input id="nombre" name="nombre" type="text" placeholder="Nombre de usuario"/>
                <input id="contrasenya" name="contrasenya" type="password" placeholder="Contraseña"/>
                <button id="alfa" type="submit">Iniciar sesión</button>
            </form>
            <p>¿No tienes una cuenta? <Link to='/Registrarse'>Registrate</Link></p>
            <p>¿Haz olvidado tu contraseña? <Link to='/Recuperarcontraseña'>Recuperar la contraseña</Link></p>
        </div>
        </>
    )
}

export default Login;