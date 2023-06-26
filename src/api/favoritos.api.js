import axios from "axios";

export const postFavoritosRequest = async (producto) =>
    await axios.post("http://localhost:5000/favoritos", producto);

export const getFavoritosRequest = async () =>
    await axios.get("http://localhost:5000/favoritos");

export const deleteFavoritosRequest = async (id) =>
    await axios.delete(`http://localhost:5000/favoritos/${id}`);

export const obtenerFavoritoRequest = async (id) =>
    await axios.get(`http://localhost:5000/favoritos/${id}`);

export const updateFavoritoRequest = async (id, newFields) =>
    await axios.put(`http://localhost:5000/favoritos/${id}`, newFields);