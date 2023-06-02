import express from "express";
import { getFavoriteByUserId } from "../controller/Favorite/getFavoriteById.controller";
import { deleteFavorite } from "../controller/Favorite/deleteFavorite.controller";
import { createFavorite } from "../controller/Favorite/createFavorite.controller";

const router = express.Router();

router.get("/favorite/:userId", getFavoriteByUserId);
router.delete("/favorite/:id", deleteFavorite);
router.post("/favorite", createFavorite);

export default router;