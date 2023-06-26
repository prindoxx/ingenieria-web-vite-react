import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



function Registrarse() {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const captcha = useRef(null);
  const navigate = useNavigate();

  const onChange = () => {
    if(captcha.current.getValue()){
      cambiarCaptchaValido(true);
    }
    
  };

  const onSubmit = () => {
    event.preventDefault();
    var dato1 = $("#email").val();
    var dato2 = $("#password").val();
    var dato3 = $("#name").val();
    console.log(dato1)

    if(captcha.current.getValue()){
      cambiarCaptchaValido(true);
    }else{
    cambiarCaptchaValido(false);
    }

    var url = "http://localhost:4000";
    if(captcha.current.getValue()){
      cambiarCaptchaValido(true);
    
        $.ajax({
          data: JSON.stringify({ "name": dato3, "email": dato1, "password": dato2 }),
          contentType: "application/json",
          type: "POST",
          dataType: "json",
          url: url + "/registro",
          
        })
        .done(function (data, textStatus, jqXHR) {
          console.log(data); // Ejemplo de cómo mostrar la respuesta en la consola
          if (data.error) {
            console.log("fallaste ctm")
        
          } else {
            alert('Te has registrado correctamente')
            console.log("wena registrado")
            navigate("/Perfil")
          }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          if (console && console.log) {
            console.log("La solicitud a fallado: " + textStatus);
          }
        });
    }else{
      cambiarCaptchaValido(false);
    }
      
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h2>Registrarse</h2>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="name">Nombre: </label>
              <input id="name" type="text" name="name" placeholder="Brayan" className="form-control rounded-0" {...register('name', {
                required: 'El campo nombre es obligatorio'
              })} />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
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
              <label htmlFor="password">Contraseña: </label>
              <input id="password" type="password" name="password" placeholder="Contraseña" className="form-control rounded-0" {...register('password', {
                required: 'El campo contraseña es obligatorio'
              })} />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="recaptcha">
            <ReCAPTCHA
                ref={captcha}
                sitekey="6LfLZcgmAAAAALn1v9gltEqVI9BWc40EfpPqgXhv"
                onChange={onChange}
            />,
            </div>
            {captchaValido === false && <div className="error-captcha">Por favor acepta el captcha</div>}
            <button type="submit" className="btn btn-success" onSubmit={handleSubmit}>Registrarse</button>
          </form>
        </div>

      </div>
    </>
  )
}

export default Registrarse;