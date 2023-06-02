import express from "express";
import { createComment } from "../controller/Comment/createComment.controller";
import { getCommentByProductId } from "../controller/Comment/getAllComment.controller";
import { deleteComment } from "../controller/Comment/deleteComment.controller";
import { updateComment } from "../controller/Comment/updateComment.controller";

const router = express.Router();

router.get("/comment/:productId", getCommentByProductId);
router.post("/comment/:id", deleteComment);
router.post("/comment", createComment);
router.put("/comment/:id", updateComment);

export default router;