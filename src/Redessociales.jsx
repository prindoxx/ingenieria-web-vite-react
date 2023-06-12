import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import imagenes from "./imagenes";


function Redessociales(){
    return(
        <>
        <div class="container">
        
            <div class="row">
                <h1 id="titulo" class="display-3">Redes sociales</h1>
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                    <a href="producto.html">
                        <img id="redes" src={imagenes.insta}/>
                        <p>Instagram</p>
                    </a>
                </div>

                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                    <a href="producto.html">
                    <img id="redes" src={imagenes.face}/>
                    <p>facebook</p>
                    </a>
                </div>

                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" id="catalogo-li">
                    <a href="producto.html">
                    <img id="redes" src={imagenes.twiter}/>
                    <p>Twitter</p>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Redessociales;