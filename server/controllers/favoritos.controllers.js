import { pool } from "../db.js";

export const getFavoritos = async (req, res) => {
    const [result] = await pool.query(
        "SELECT * FROM favoritos ORDER BY createdAt ASC"
    );
    res.json(result);
}

export const getFavorito = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM favoritos WHERE id = ?", [
        req.params.id,
    ]);
    if (result.length === 0)
        return res.status(404).json({ message: "Favorito no encontrado" });
    res.json(result);
}

export const createFavoritos = async (req, res) => {
    const { titulo, descripcion } = req.body;
    const [result] = await pool.query(
        "INSERT INTO favoritos(titulo, descripcion) VALUES (?, ?)",
        [titulo, descripcion]
    );
    console.log(result)
    res.json({
        id: result.insertId,
        titulo,
        descripcion,
    });
}

export const updateFavoritos = async (req, res) => {
    const result = await pool.query("UPDATE favoritos SET ? WHERE id = ?", [
        req.body,
        req.params.id,
    ]);
    res.json(result);
}

export const deleteFavoritos = async (req, res) => {
    const [result] = await pool.query("DELETE FROM favoritos WHERE id = ?", [
        req.params.id,
    ]);

    if (result.affectedRows === 0)
        return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
}

