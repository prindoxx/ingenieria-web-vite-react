import React, { useEffect} from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import imagenes from "./imagenes";
import { deleteFavoritosRequest} from "./api/favoritos.api";
import { useFavorito } from "./context/FavoritoContext";
import {useNavigate } from "react-router-dom";



function ListaFavoritos() {

    const {favoritos, loadFavoritos} = useFavorito();

    const {deleteFavorito} = useFavorito();
    const navigate = useNavigate();

    useEffect(() => {
        
        loadFavoritos()
    }, [])
    function render(){
        if (favoritos.length === 0) return <h1>Lista vacía</h1>
        return <div>
        <br></br>
        <br></br>
        <br></br>
        {favoritos.map(favoritos => (
            <div key={favoritos.id}>
                <h2>{favoritos.titulo}</h2>
                <p>{favoritos.descripcion}</p>
                <span>{favoritos.createdAt}</span>
                <button onClick={()=> deleteFavorito(favoritos.id)}>Eliminar</button>
                <button onClick={()=> navigate(`/edit/${favoritos.id}`)}>Editar</button>
            </div>
        ))
        }
    </div>
    }
    return (
        <div>
            <h1>Lista productos</h1>
            {render()}
        </div>
    )
}

export default ListaFavoritos;









