import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import imagenes from "./imagenes";
import React, { useState, useEffect } from "react";
function Perfil() {
  function traerDatos() {
    fetch("perfil.json")
      .then((response) => response.json())
      .then((data) => {
        setDatos(data);
        mostrarSiguienteDato();
      });
  }
  function mostrarSiguienteDato() {
    if (index < datos.length) {
      const item = datos[index];
      const res = document.querySelector("#res");

      const perfilHTML = `
            <div class="clase-perfil">
                <div class="imagen-perfil">
                    <img src=${item.foto} alt="Foto-de-perfil"/>
                </div>
                <h1 id="res-nombre">${item.nombre}</h1>
            </div>
            <div class="clase-info-perfil">
                <div class="info">
                    <span>Correo:</span>
                </div>
                <div class="edit">
                    <p>${item.correo}</p>
                    <span class="material-symbols-outlined" id="editar">edit</span>
                </div>
            </div>
            <div class="clase-info-perfil">
                <div class="info ">
                    <span>Número de contacto:</span>
                </div>
                
                <div class="edit">
                    <p>${item.numero}</p>
                    <span class="material-symbols-outlined" id="editar">edit</span>
                </div>
            </div>
        
            <div class="clase-info-perfil">
                <div class="info">
                    <span>Edad:</span>
                </div>
        
                <div class="edit">
                    <p>${item.edad} años </p>
                    <span class="material-symbols-outlined" id="editar">edit</span>
                </div>
            </div>
        
            <div class="clase-info-perfil">
                <div class="info">
                    <span>Sexo:</span>
                </div>
                
                <div class="edit">
                    <p>${item.sexo}</p>
                    <span class="material-symbols-outlined" id="editar">edit</span>
                </div>
            </div>
        
            <div class="clase-info-perfil">
                <div class="info">
                    <span>Fecha de nacimiento:</span>
                </div>
                
                <div class="edit">
                    <p>${item.nacimiento}</p>
                    <span class="material-symbols-outlined" id="editar">edit</span>
                </div>
            </div>
        
            <div class="clase-info-perfil">
                <div class="info">
                    <span>Nacionalidad:</span>
                </div>
                
                <div class="edit">
                    <p>${item.nacionalidad}</p>
                    <span class="material-symbols-outlined" id="editar">edit</span>
                </div>
            </div>
            <!-- Resto de los elementos del perfil -->
        `;

      res.innerHTML = perfilHTML;

      setIndex(index + 1);
    }
  }
  const [datos, setDatos] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    traerDatos();
  }, []);
  return (
    <div class="container">
      <div class="perfil">
        <div class="info-perfil" id="res">
          <div class="clase-perfil ">
            <div class="imagen-perfil">
              <img src={imagenes.robert} alt="Foto-de-perfil" />
            </div>
            <h1 id="res-nombre">Roberto Vitar</h1>
          </div>

          <div class="clase-info-perfil">
            <div class="info">
              <span>Correo:</span>
            </div>

            <div class="edit">
              <p>roberto@agenciaboo.com</p>
              <span class="material-symbols-outlined" id="editar">
                edit
              </span>
            </div>
          </div>

          <div class="clase-info-perfil">
            <div class="info ">
              <span>Número de contacto:</span>
            </div>

            <div class="edit">
              <p>+569 6161 4311</p>
              <span class="material-symbols-outlined" id="editar">
                edit
              </span>
            </div>
          </div>

          <div class="clase-info-perfil">
            <div class="info">
              <span>Edad:</span>
            </div>

            <div class="edit">
              <p>32 años </p>
              <span class="material-symbols-outlined" id="editar">
                edit
              </span>
            </div>
          </div>

          <div class="clase-info-perfil">
            <div class="info">
              <span>Sexo:</span>
            </div>

            <div class="edit">
              <p>Masculino </p>
              <span class="material-symbols-outlined" id="editar">
                edit
              </span>
            </div>
          </div>

          <div class="clase-info-perfil">
            <div class="info">
              <span>Fecha de nacimiento:</span>
            </div>

            <div class="edit">
              <p>11/05/1990 </p>
              <span class="material-symbols-outlined" id="editar">
                edit
              </span>
            </div>
          </div>

          <div class="clase-info-perfil">
            <div class="info">
              <span>Nacionalidad:</span>
            </div>

            <div class="edit">
              <p>Peruano</p>
              <span class="material-symbols-outlined" id="editar">
                edit
              </span>
            </div>
          </div>
        </div>
        <button 
            className="ver-todos"id="botonSiguiente"onClick={mostrarSiguienteDato}>Siguiente
        </button>

        <div class="favoritos">
          <div class="clase-favoritos">
            <h2>Mis Favoritos</h2>
            <div class="imagenes-favoritos">
              <div class="row justify-content-center">
                <div class="col-sm-4  ">
                <Link to="/Producto" class="imagen-fav">
                    <img src={imagenes.medi3} alt="Favorito 1" />
                </Link>
                </div>

                <div class="col-sm-4  ">
                <Link to="/Producto" class="imagen-fav">
                    <img src={imagenes.hot} alt="Favorito 2" />
                </Link>
                </div>
                <div class="col-sm-4  ">
                <Link to="/Producto" class="imagen-fav">
                    <img src={imagenes.centrum} alt="Favorito 3" />
                </Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/Favoritos" class="ver-todos">
            Ver todos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
