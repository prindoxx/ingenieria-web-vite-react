import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import imagenes from './imagenes'
import Footer from "./Footer";



function Noencontrado() {
  return (
    <>
      <div class="container">

        <div class="no-encontrado resultados" >
          <h1 id="resultado">Resultados para la búsqueda: </h1>
          <p class="no-encontrados">No se encontraron productos con ese nombre.</p>
          <h1 id="resultado">Productos que te podrían interesar.</h1>
          <div id="div-catalogo">

             <div class="row justify-content-center">
                            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                                <a href="/Producto">
                       
                                    <img id="xd" src={imagenes.medi2}/>
                                </a>
                                <p>

                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>
                                    <br />
                                    <span>Descripcion</span>
                                </div>
                                </p>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                                <a href="/Producto">
                                    <img id="xd" src={imagenes.medi3}/>
                                </a>
                                <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>
                                    <br />
                                    <span>Descripcion</span>
                                </div>
                                </p>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                                <a href="/Producto">
                                    <img id="xd" src={imagenes.panales}/>
                                </a>
                                <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>
                                    <br />
                                    <span>Descripcion</span>
                                </div>
                                </p>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">   
                                
                                <a href="/Producto">
                                    <img id="xd" src={imagenes.centrum}/>
                                </a>
                                <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>
                                    <br />
                                    <span>Descripcion</span>
                                </div>
                                </p>
                            </div>
                                
                            <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">   
                                <a href="/Producto">
                                    <img id="xd" src={imagenes.hipoglos}/>
                                </a>
                                <p>
                                <div class="desc-producto">
                                    <span>Titulo</span>
                                    <span class="material-symbols-outlined" id="iconos">
                                        favorite
                                    </span>
                                    <br />
                                    <span>Descripcion</span>
                                </div>
                                </p>
                            </div>
                        </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Noencontrado;