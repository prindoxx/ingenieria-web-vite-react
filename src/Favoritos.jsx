import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import imagenes from "./imagenes";

function Favoritos(){
    return(
        <>
            <section class="favoritas">
                <h2>Mis Favoritos</h2>
                <div class="clase-favoritas">
                    <div class="clase-favorita">
                        <img src={imagenes.hipoglos} alt="Imagen 1"/>
                        <p>Descripción <a href="otra-pagina.html" class="ver-mas">Ver más</a></p>
                    </div>
                    <div class="clase-favorita">
                        <img src={imagenes.vitamin} alt="Imagen 2"/>
                        <p>Descripción<a href="otra-pagina.html" class="ver-mas">Ver más</a></p>
                    </div>
                    <div class="clase-favorita">
                        <img src={imagenes.hot} alt="Imagen 3"/>
                        <p>Descripción<a href="otra-pagina.html" class="ver-mas">Ver más</a></p>
                    </div>
                </div>
            </section>  
        </>  
    )
}

export default Favoritos;
         
      
      
      
      
      
      
      
      
      