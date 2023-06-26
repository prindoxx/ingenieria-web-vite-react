import React, { useContext, useEffect, useState } from "react";
import './styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import imagenes from "./imagenes";
import { getFavoritosRequest, postFavoritosRequest } from "./api/favoritos.api";
import { Form, Formik } from "formik";
import { useFavorito } from "./context/FavoritoContext";
import { useNavigate, useParams } from "react-router-dom";


function Favoritos() {

    const { createFavorito, getFavorito, updateFavorito } = useFavorito()
    const [favorito, setFavorito] = useState({
        titulo: "",
        descripcion: "",
    })

    const params = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const cargar = async () => {
          if (params.id) {
            const favorito = await getFavorito(params.id);
            console.log(favorito);
            setFavorito({
              title: favorito.title,
              description: favorito.description,
            });
          }
        };
        cargar();
      }, []);

    return (
        <>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <h1>{params.id ? "Editando Producto" : "Nueva entrada"}</h1>
                <Formik
                    initialValues={favorito}
                    enableReinitialize={true}
                    onSubmit={async (values, actions) => {
                        console.log(values)
                        if(params.id){
                            await updateFavorito(params.id, values)
                            navigate("/ListaFavoritos")
                        } else {
                            await createFavorito(values)
                        }
                        actions.resetForm()

                    }}
                >
                    {({ handleChange, handleSubmit, values, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <label>Producto</label>
                            <input type="text" name="titulo" onChange={handleChange} value={values.titulo}></input>

                            <label>Descripcion</label>
                            <textarea name="descripcion" rows="3" placeholder="Escribe descripcion del producto" onChange={handleChange} value={values.descripcion}></textarea>
                            <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando..." : "Enviar"}</button>
                        </Form>
                    )}
                </Formik>

            </div>
        </>
    )
}

export default Favoritos;









