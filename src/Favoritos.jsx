import React, { useEffect, useState } from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import imagenes from "./imagenes";
import { getFavoritosRequest } from "./api/favoritos.api";

function Favoritos(){

    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        async function loadFavoritos(){
            const response = await getFavoritosRequest()
            setFavoritos(response.data)
        }
        loadFavoritos()
    },[])
    return(
        <>
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1>favoritos</h1>
            {
                favoritos.map(favoritos => (
                    <div>
                        <h2>{favoritos.titulo}</h2>
                        <p>{favoritos.descripcion}</p>
                        <span>{favoritos.createdAt}</span>
                    </div>
                ))
            }
            
        </div>
        </>  
    )
}

export default Favoritos;
         
      
      
      
      
      
      
      
      
      