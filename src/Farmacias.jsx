import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";


  
function Farmacias(){
    return(
        <>
        <div class="container">
            <div class="row justify-content-center" id="mapa">
                <div class="col-sm-12">
                    <div class="descripcion">
                        <h1 class="map-text" >ENCUENTRA TU FARMACIA MAS CERCANA</h1>
                        <br/>
                    </div>
                </div>
            <div class="col-sm-12 col-md-12">
                <div class="map">
                    <iframe class= "iframe-map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d16325.460093475087!2d-71.55163385687474!3d-33.02385033929693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfarmacias!5e1!3m2!1ses-419!2scl!4v1680150689091!5m2!1ses-419!2scl" width="1080" height="720" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <h1>Tu ubicación: Plaza Vergara, Viña del Mar.</h1>
                </div>
            </div>
        </div>
    
        <Footer/>

    
      
        <script src="js/app.js"></script>
    
        </>
    )

}

export default Farmacias;
    
    