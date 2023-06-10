import React, { useState } from "react";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";

function Registrarse() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeContrasena = (event) => {
    setContrasena(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const datos = { nombre, apellido, email, contrasena };
    console.log(JSON.stringify(datos));
  };

  return (
    <>
      <div className="container text-center">
        <h1 id="register">Registro</h1>
        <div className="login">
          <form id="formulario-registro" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label id="register" htmlFor="nombr">Nombre:</label>
              <input type="text" id="nombr" name="nombr" value={nombre} onChange={handleChangeNombre} />
            </div>
            <div className="mb-3">
              <label id="register" htmlFor="apellido">Apellido:</label>
              <input type="text" id="apellido" name="apellido" value={apellido} onChange={handleChangeApellido} />
            </div>
            <div className="mb-3">
              <label id="register" htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" value={email} onChange={handleChangeEmail} />
            </div>
            <div className="mb-3">
              <label id="register" htmlFor="contrasena">Contraseña:</label>
              <input type="password" id="contrasena" name="contrasena" value={contrasena} onChange={handleChangeContrasena} />
            </div>
            <button id="registrarse" type="submit">Registrarse</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Registrarse;