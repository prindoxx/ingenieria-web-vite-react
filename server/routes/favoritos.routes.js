import { Router } from "express";
import { getFavoritos, createFavoritos, deleteFavoritos, updateFavoritos } from "../controllers/favoritos.controllers.js";
const router = Router()

router.get('/favoritos', getFavoritos)
router.post('/favoritos', createFavoritos)
router.put('/favoritos/:id', updateFavoritos)
router.delete('/favoritos/:id', deleteFavoritos)

export default router