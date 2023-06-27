import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function Admin() {
  const [mensaje, setMensaje] = useState("");

  const eliminarUsuario = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    try {
      const response = await axios.delete(
        `http://localhost:4000/eliminarUsuario/${encodeURIComponent(email)}`
      );

      if (response.data.error) {
        setMensaje("El usuario no existe en la base de datos.");
      } else {
        setMensaje("Usuario eliminado correctamente.");
      }
    } catch (error) {
      console.log("La solicitud ha fallado:", error.message);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h2>Admin</h2>
          <form onSubmit={eliminarUsuario}>
            <div className="mb-3">
              <label htmlFor="email">Correo: </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="ejemplo@mail.com"
                className="form-control rounded-0"
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Eliminar
            </button>
          </form>
          {mensaje && <p>{mensaje}</p>}
        </div>
      </div>
    </>
  );
}

export default Admin;