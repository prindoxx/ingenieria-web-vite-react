import React, { useState } from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


function Login() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    
    const onSubmit = () => {
        event.preventDefault();
        var dato1 = $("#email").val();
        var dato2 = $("#password").val();
        //console.log(dato1)

        var url = "http://localhost:4000";
        $.ajax({
            data: JSON.stringify({ "email": dato1, "password": dato2 }),
            contentType: "application/json",
            type: "POST",
            dataType: "json",
            url: url + "/login",
        })
            .done(function (data, textStatus, jqXHR) {
                if (data.error) {
                    console.log("Inicio fallido");
                    } else {
                        console.log("Inicio de sesion exitoso");
                        console.log(data);
                    alert("Inicio de sesion exitoso");
                    if (data.datos === "admin") {
                        navigate("/admin"); 
                    } else if (data.datos === "usuario") {
                        navigate("/"); 
                    }
                    }
                })
            .fail(function (jqXHR, textStatus, errorThrown) {
                if (console && console.log) {
                    console.log("La solicitud a fallado: " + textStatus);
                }
            });

        const mystyle2 = {
            color: "red"
        };
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <div>
                <section class="contact-box">
                    <form className= "contact-form" action="" onSubmit={handleSubmit(onSubmit)}>
                        <h2>Iniciar sesión</h2>
                        <div className="mb-3">
                            <label htmlFor="email">Email: </label>
                            <input id="email" type="email" name="email" placeholder="Example@mail.com" className="form-control rounded-0" {...register('email', {
                                required: 'El campo correo es obligatorio',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Ingresa un correo electrónico válido'
                                }
                            })} />
                             {errors.email && <p>{errors.email.message}</p>}
                             
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Contraseña: </label>
                            <input id="password" type="password" name="password" placeholder="Contraseña" className="form-control rounded-0" {...register('password', {
                                required: 'El campo contraseña es obligatorio'
                            })} />
                            {errors.password && <p>{errors.password.message}</p>}
                            <p>¿No tienes una cuenta? <Link to='/Registrarse'>Registrate</Link></p>
                            <p>¿Haz olvidado tu contraseña? <Link to='/Recuperarcontraseña'>Recuperar la contraseña</Link></p>
                        </div>
                        <button type="submit" id="registrarse">Iniciar sesión</button>

                    </form>
                    </section>
                </div>
                            
            </div>
            
            
        </>
    )
}

export default Login;