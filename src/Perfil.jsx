import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import { Link } from "react-router-dom";
import imagenes from "./imagenes";


function Perfil(){
    return(
        <>
            <div class="container">

                <div class="perfil">
            
                <div class="clase-perfil">
                <div class="imagen-perfil">
                <img src={imagenes.robert} alt="Foto-de-perfil"/>
                
                </div>
                <h1>Roberto Vitar Gomez</h1>
                </div>
            
                <div class="info-perfil">
                
                <div class="clase-info-perfil">
                
                <div class="info"> 
                    <span>Correo:</span>
                </div>
                
                <div class="edit">
                    <p>roberto@agenciaboo.com</p>
                    <span class="material-symbols-outlined" id="editar">edit</span>
                </div>
                
                </div>
                
                <div class="clase-info-perfil">
                
                <div class="info ">
                    <span>Número de contacto:</span>
                </div>
                
                <div class="edit">
                    <p>+569 6161 4311</p>
                    <span class="material-symbols-outlined" id="editar">edit</span>
                </div>
                
                </div>

                <div class="clase-info-perfil">
                
                <div class="info">
                <span>Edad:</span>
                </div>
                
                <div class="edit">
                <p>32 años </p>
                <span class="material-symbols-outlined" id="editar">edit</span>
                </div>
                
                </div>
            
                <div class="clase-info-perfil">
                
                <div class="info">
                <span>Sexo:</span>
                </div>
                
                <div class="edit">
                <p>Masculino </p>
                <span class="material-symbols-outlined" id="editar">edit</span>
                </div>
                
                </div>
            
                <div class="clase-info-perfil">
                
                <div class="info">
                <span>Fecha de nacimiento:</span>
                </div>
                
                <div class="edit">
                <p>11/05/1990 </p>
                <span class="material-symbols-outlined" id="editar">edit</span>
                </div>

                </div>
            
                <div class="clase-info-perfil">
                
                <div class="info">
                <span>Nacionalidad:</span>
                </div>
                
                <div class="edit">
                <p>Peruano
                </p>
                <span class="material-symbols-outlined" id="editar">edit</span>
                </div>
                
                </div>
                </div>
                <div class="favoritos">
                    <div class="clase-favoritos">
                        <h2>Mis Favoritos</h2>
                        <div class="imagenes-favoritos">
                            <div class="row justify-content-center">
                                <div class="col-sm-4  ">
                                <a href="producto.html" id="imagen-fav"><img src={imagenes.medi3} alt="Favorito 1"/></a>
                                </div>
                            
                                <div class="col-sm-4  ">
                                    <a href="producto.html" id="imagen-fav"><img src={imagenes.hot} alt="Favorito 2"/></a>
                                </div>
                                <div class="col-sm-4  ">
                                    <a href="producto.html" id="imagen-fav"><img src={imagenes.centrum} alt="Favorito 3"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='/Favoritos' class="ver-todos">Ver todos</Link>
            </div>
            </div>
  

        </>
    )
}

export default Perfil;