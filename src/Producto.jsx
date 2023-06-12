import React from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import imagenes from "./imagenes";


function Producto(){
    return(
        <>
        <div class="producto" id="product">
            <img id="imagen-producto" src={imagenes.hot} alt="Imagen del Producto"/>
            <h1>Producto Ejemplo</h1>
            <p class="descripcion">Descripción del producto: Aquí puedes escribir una breve descripción de las características principales del producto.</p>
            <p class="precio">$9.990</p>
            <div class="botones">
                <button class="comprar">Comprar ahora</button>
                <button class="agregar">Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}

export default Producto;