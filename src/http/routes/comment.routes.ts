import express from "express";
import { createComment } from "../controller/Comment/createComment.controller";
import { getCommentByProductId } from "../controller/Comment/getAllComment.controller";
import { deleteComment } from "../controller/Comment/deleteComment.controller";
import { updateComment } from "../controller/Comment/updateComment.controller";
import { auth } from "../middleware/auth";

const router = express.Router();

router.get("/comment/:productId", getCommentByProductId);
router.post("/comment/:id", auth, deleteComment);
router.post("/comment", auth, createComment);
router.put("/comment/:id", auth, updateComment);

export default router;