import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";

function Recuperarcontraseña(){
    return(
        <>
        <div class="container">
            <h1 id="register">Recuperar contraseña</h1>
            <form id="registro">
                <label id="register" for="email">Introduce aquí tu correo electrónico para poder recuperar tu contraseña:</label>
                <input type="email" id="email" name="email"/>
                <button id="registrarse" type="submit">Recuperar contraseña</button>
            </form>
        </div>
        </>
    )
}

export default Recuperarcontraseña;