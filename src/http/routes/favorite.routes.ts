import express from "express";
import { getFavoriteByUserId } from "../controller/Favorite/getFavoriteById.controller";
import { deleteFavorite } from "../controller/Favorite/deleteFavorite.controller";
import { createFavorite } from "../controller/Favorite/createFavorite.controller";
import { auth } from "../middleware/auth";

const router = express.Router();

router.get("/favorite/:userId", auth, getFavoriteByUserId);
router.post("/favorite/:id", auth, deleteFavorite);
router.post("/favorite", auth, createFavorite);

export default router;