"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAllCategory_controller_1 = require("../controller/Category/getAllCategory.controller");
const getCategoryById_controller_1 = require("../controller/Category/getCategoryById.controller");
const createCategory_controller_1 = require("../controller/Category/createCategory.controller");
const deleteCategory_controller_1 = require("../controller/Category/deleteCategory.controller");
const updateCategory_controller_1 = require("../controller/Category/updateCategory.controller");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.get("/category", getAllCategory_controller_1.getAllCategories);
router.get("/category/:id", getCategoryById_controller_1.getCategoryById);
router.post("/category", auth_1.auth, createCategory_controller_1.createCategory);
router.post("/category/:id", auth_1.auth, deleteCategory_controller_1.deleteCategory);
router.put("/category/:id", auth_1.auth, updateCategory_controller_1.updateCategory);
exports.default = router;
//# sourceMappingURL=category.routes.js.map