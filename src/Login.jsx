import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { appendErrors, useForm } from "react-hook-form";


function Login() {
    const{register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
        <div class="login">
            <h2>Iniciar sesión</h2>
            <form class="login-form" id="formulario-login" onSubmit={handleSubmit(onSubmit)} noValidate>
                <input id="nombre" name="nombre" type="text" placeholder="Nombre de usuario" {...register('nombre',{
                    required: true,
                })}/>
                {errors.nombre?.type === 'required' && <p style={{color: "red"}}>El campo nombre es obligatorio</p>}
                <input id="contrasenya" name="contrasenya" type="password" placeholder="Contraseña" {...register('contrasenya',{
                    required: true,
                })}/>
                {errors.contrasenya?.type === 'required' && <p style={{color: "red"}}>El campo contraseña es obligatorio</p>}
                <button id="alfa" type="submit">Iniciar sesión</button>
            </form>
            <p>¿No tienes una cuenta? <Link to='/Registrarse'>Registrate</Link></p>
            <p>¿Haz olvidado tu contraseña? <Link to='/Recuperarcontraseña'>Recuperar la contraseña</Link></p>
        </div>
        </>
    )
}

export default Login;