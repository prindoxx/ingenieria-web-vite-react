import React, { useState } from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Admin() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDeleteUser = () => {
    event.preventDefault();

    var url = "http://localhost:4000";
    $.ajax({
      data: JSON.stringify({ email: email }),
      contentType: "application/json",
      type: "DELETE",
      dataType: "json",
      url: url+"/eliminarUsuario",
    })
      .done(function (data, textStatus, jqXHR) {
        if (data.error) {
          console.log("El email no existe");
          alert("El email no existe");
        } else {
          console.log("Usuario eliminado exitosamente");
          alert("Usuario eliminado exitosamente");
        }
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        if (console && console.log) {
          console.log("La solicitud ha fallado: " + textStatus);
        }
      });
  };

  

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h2>Panel de Administración</h2>
          <form onSubmit={handleDeleteUser}>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Example@mail.com"
                className="form-control rounded-0"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <button type="submit" id="eliminarUsuario">
              Eliminar Usuario
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Admin;
