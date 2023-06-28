import React, { useEffect } from "react";
//import "./styles.css";
import "./ListaFavoritos.css"
import "bootstrap/dist/css/bootstrap.css";
import imagenes from "./imagenes";
import { deleteFavoritosRequest } from "./api/favoritos.api";
import { useFavorito } from "./context/FavoritoContext";
import { Link, useNavigate } from "react-router-dom";

function ListaFavoritos() {
  const { favoritos, loadFavoritos } = useFavorito();
  const { deleteFavorito } = useFavorito();
  const navigate = useNavigate();

  useEffect(() => {
    loadFavoritos();
  }, []);

  function render() {
    if (favoritos.length === 0) return <h1>Oops! No hay nada por aqui 👀</h1>;
    return (
      <div className="lista-container">
        {favoritos.map((favorito) => (
          <div className="favorito" key={favorito.id}>
            <h2>{favorito.titulo}</h2>
            <p>{favorito.descripcion}</p>
            <span>{favorito.createdAt}</span>
            <div className="botones">
              <button
                className="editar-btn"
                onClick={() => navigate(`/edit/${favorito.id}`)}
              >
                Editar
              </button>
              <button
                className="eliminar-btn"
                onClick={() => deleteFavorito(favorito.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
        
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="titulo">Foro saludable</h1>
      {render()}
      <br />
      <Link to="/Favoritos" class="ver-todos">
            Agregar nuevo
          </Link>
    </div>
  );
}

export default ListaFavoritos;