import express from "express";
import { getAllCategories } from "../controller/Category/getAllCategory.controller";
import { getCategoryById } from "../controller/Category/getCategoryById.controller";
import { createCategory } from "../controller/Category/createCategory.controller";
import { deleteCategory } from "../controller/Category/deleteCategory.controller";
import { updateCategory } from "../controller/Category/updateCategory.controller";
import { auth } from "../middleware/auth";

const router = express.Router();

router.get("/category", getAllCategories);
router.get("/category/:id", getCategoryById);
router.post("/category", auth, createCategory);
router.post("/category/:id", auth, deleteCategory);
router.put("/category/:id", auth, updateCategory);

export default router;