import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

function Registrarse() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const captcha = useRef(null);
  
  const onChange = () => {
    if(captcha.current.getValue()){
      cambiarCaptchaValido(true);
    }
    
  };

  const onSubmit = (data) => {
    if(captcha.current.getValue()){
      cambiarCaptchaValido(true);
      console.log(JSON.stringify(data));
      alert('Te has registrado correctamente')
  }else{
    cambiarCaptchaValido(false);
  }
    
  };


  const mystyle = {
    float: "right",
    marginBottom: "5px"
  };
  const mystyle2 = {
    color: "red"
  };
  return (
    <>
      <div className="container text-center">
        <h1 id="register">Registro</h1>
        <div className="login">
          <form id="formulario-registro" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label id="register" htmlFor="nombre">Nombre:</label>
              <input style={mystyle} type="text" id="nombr" name="nombre" {...register('nombre', {
                required: 'El campo nombre es obligatorio' 
              })} />
              {errors.nombre && <p style={mystyle2}>{errors.nombre.message}</p>}
            </div>
            <div className="mb-3">
              <label id="register" htmlFor="apellido">Apellido:</label>
              <input style={mystyle} type="text" id="apellido" name="apellido" {...register('apellido', {
                required: 'El campo apellido es obligatorio'
              })} />
              {errors.apellido && <p style={mystyle2}>{errors.apellido.message}</p>}
            </div>
            <div className="mb-3">
              <label id="register" htmlFor="email">Correo electrónico:</label>
              <input style={mystyle} type="email" id="email" name="email" {...register('email', {
                required: 'El campo correo es obligatorio',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Ingresa un correo electrónico válido'
                }
              })} />
              {errors.email && <p style={mystyle2}>{errors.email.message}</p>}
            </div>
            <div className="mb-3">
              <label id="register" htmlFor="contrasena">Contraseña:</label>
              <input style={mystyle} type="password" id="contrasena" name="contrasena" {...register('contrasena', {
                required: 'El campo contraseña es obligatorio'
              })} />
              {errors.contrasena && <p style={mystyle2}>{errors.contrasena.message}</p>}
            </div>
            <div className="recaptcha">
            <ReCAPTCHA
                ref={captcha}
                sitekey="6LfLZcgmAAAAALn1v9gltEqVI9BWc40EfpPqgXhv"
                onChange={onChange}
            />,
            </div>
            {captchaValido === false && <div className="error-captcha">Por favor acepta el captcha</div>}
            <button id="registrarse" type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registrarse;