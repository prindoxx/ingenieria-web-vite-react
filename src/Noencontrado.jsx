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

            <div class="row">
              <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">

                <a href="producto.html">
                  <img id="xd" src={imagenes.medi1} />
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

                <a href="producto.html">
                  <img id="xd" src="images/213062-capsulas-vitamina-e-30-unidades.jpg" />
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

                <a href="producto.html">
                  <img id="xd" src="images/274648-hot-lubricante-de-40-ml.jpg" />
                </a>              <p>
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

                <a href="producto.html">
                  <img id="xd" src="images/288110-comprimido-berries-20-unidades.jpg" />
                </a>            <p>
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

                <a href="producto.html">
                  <img id="xd" src="images/295823-vitamin-c--20-tabletas-efervecentes-sabor-limon-1000-mg (1).jpg" />
                </a>            <p>
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
    </>
  )
}

export default Noencontrado;