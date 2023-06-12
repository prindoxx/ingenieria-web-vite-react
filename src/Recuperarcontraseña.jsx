import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";

function Recuperarcontraseña() {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    const mystyle2 = {
        color: "red"
    };
    return (
        <>
            <div class="container" >
                <h1 id="register">Recuperar contraseña</h1>
                <form id="registro" onSubmit={handleSubmit(onSubmit)}>
                    <label id="register" for="email">Introduce aquí tu correo electrónico para poder recuperar tu contraseña:</label>
                    <input type="email" id="email" name="email" {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })} />
                    {errors.email?.type === 'required' && <p style={mystyle2}>El campo correo es obligatorio</p>}
                    {errors.email?.type === 'pattern' && <p style={mystyle2}>Ingresa un correo electrónico válido</p>}
                    <button id="registrarse" type="submit">Recuperar contraseña</button>
                </form>
            </div>
        </>
    )
}

export default Recuperarcontraseña;