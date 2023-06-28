import React, { useContext, useEffect, useState } from "react";
import "./Favoritos.css";
import "bootstrap/dist/css/bootstrap.css";
import imagenes from "./imagenes";
import {
  getFavoritosRequest,
  postFavoritosRequest,
} from "./api/favoritos.api";
import { Form, Formik } from "formik";
import { useFavorito } from "./context/FavoritoContext";
import { useNavigate, useParams } from "react-router-dom";

function Favoritos() {
  const { createFavorito, getFavorito, updateFavorito } = useFavorito();
  const [favorito, setFavorito] = useState({
    titulo: "",
    descripcion: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const cargar = async () => {
      if (params.id) {
        const favorito = await getFavorito(params.id);
        console.log(favorito);
        setFavorito({
          titulo: favorito.titulo,
          descripcion: favorito.descripcion,
        });
      }
    };
    cargar();
  }, []);

  return (
    <div className="container">
      <div className="formulario">
        <h1 className="titulo">
          {params.id ? "Editando Producto" : "Nueva entrada"}
        </h1>
        <Formik
          initialValues={favorito}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            console.log(values);
            if (params.id) {
              await updateFavorito(params.id, values);
              navigate("/ListaFavoritos");
            } else {
              await createFavorito(values);
            }
            actions.resetForm();
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="label">Título</label>
                <input
                  type="text"
                  name="titulo"
                  className="form-control"
                  onChange={handleChange}
                  value={values.titulo}
                />
              </div>

              <div className="form-group">
                <label className="label">Descripción</label>
                <textarea
                  name="descripcion"
                  rows="3"
                  className="form-control"
                  placeholder="Escribe la descripción del producto"
                  onChange={handleChange}
                  value={values.descripcion}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Favoritos;
