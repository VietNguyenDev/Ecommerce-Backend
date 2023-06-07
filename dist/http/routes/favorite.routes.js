"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getFavoriteById_controller_1 = require("../controller/Favorite/getFavoriteById.controller");
const deleteFavorite_controller_1 = require("../controller/Favorite/deleteFavorite.controller");
const createFavorite_controller_1 = require("../controller/Favorite/createFavorite.controller");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.get("/favorite/:userId", auth_1.auth, getFavoriteById_controller_1.getFavoriteByUserId);
router.post("/favorite/:id", auth_1.auth, deleteFavorite_controller_1.deleteFavorite);
router.post("/favorite", auth_1.auth, createFavorite_controller_1.createFavorite);
exports.default = router;
//# sourceMappingURL=favorite.routes.js.map