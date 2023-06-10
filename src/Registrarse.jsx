import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";


function Registrarse(){
    return(
        <>
        <div class="container text-center">
            <h1 id="register">Registro</h1>
            <div class="login">
            
                <form id="formulario-registro">
                    <div class="mb-3">
                        <label id="register" for="nombr">Nombre:</label>
                        <input type="text" id="nombr" name="nombr"/>
                    </div>
                    <div class="mb-3">
                        <label id="register" for="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" />
                    </div>
                    <div class="mb-3">
                        <label id="register" for="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div class="mb-3">
                        <label id="register" for="contrasena">Contraseña:</label>
                        <input type="password" id="contrasena" name="contrasena" />
                    </div>
                    
                    <button  id="registrarse" type="submit">Registrarse</button>
                </form>
            </div>
        </div>
        </>
    )

}

export default Registrarse;