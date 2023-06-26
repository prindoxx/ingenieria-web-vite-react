import { Router } from "express";
import { getFavoritos, createFavoritos, deleteFavoritos, updateFavoritos, getFavorito } from "../controllers/favoritos.controllers.js";
const router = Router()

router.get('/favoritos', getFavoritos)
router.post('/favoritos', createFavoritos)
router.get('/favoritos/:id', getFavorito)
router.put('/favoritos/:id', updateFavoritos)
router.delete('/favoritos/:id', deleteFavoritos)

export default router