import axios from "axios";

export const getFavoritosRequest = async () =>
    await axios.get("http://localhost:5000/favoritos");