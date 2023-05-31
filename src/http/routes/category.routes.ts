import express from "express";
import { getAllCategories } from "../controller/Category/getAllCategory.controller";
import { getCategoryById } from "../controller/Category/getCategoryById.controller";
import { createCategory } from "../controller/Category/createCategory.controller";
import { deleteCategory } from "../controller/Category/deleteCategory.controller";
import { updateCategory } from "../controller/Category/updateCategory.controller";

const router = express.Router();

router.get("/category", getAllCategories);
router.get("/category/:id", getCategoryById);
router.post("/category", createCategory);
router.post("/category/:id", deleteCategory);
router.put("/category/:id", updateCategory);

export default router;