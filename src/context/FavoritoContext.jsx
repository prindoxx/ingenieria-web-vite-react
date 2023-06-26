import { createContext, useContext, useState } from "react";
import { deleteFavoritosRequest, getFavoritosRequest, obtenerFavoritoRequest, postFavoritosRequest, updateFavoritoRequest } from "../api/favoritos.api";

export const FavoritoContext = createContext();

export const useFavorito = () => {
    const context = useContext(FavoritoContext)
    if (!context) {
        throw new Error("useFavorito debe usarse dentro de un FavoritoContextProvider")
    }
    return context;
}

export const FavoritoContextProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([])

    async function loadFavoritos() {
        const response = await getFavoritosRequest()
        setFavoritos(response.data)
    }

    const getFavorito = async (id) => {
        try {
            const response = await obtenerFavoritoRequest(id)
            return response.data
        } catch (error) {
            console.error(error)
        }
    }

    const deleteFavorito = async (id) => {
        try {
            const respuesta = await deleteFavoritosRequest(id)
            console.log(respuesta)
            setFavoritos(favoritos.filter(favorito => favorito.id !== id))
        } catch (error) {
            console.error(error)
        }
    }

    const createFavorito = async (favorito) => {
        try {
            const response = await postFavoritosRequest(favorito)
            console.log(response)

        } catch (error) {
            console.error(error)
        }
    }

    const updateFavorito = async (id, newFields) => {
        try {
            const response = await updateFavoritoRequest(id, newFields)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <FavoritoContext.Provider value={{ favoritos, loadFavoritos, deleteFavorito, createFavorito, getFavorito, updateFavorito }}>{children}</FavoritoContext.Provider>
    )
}