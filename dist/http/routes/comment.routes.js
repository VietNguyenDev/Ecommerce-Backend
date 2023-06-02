"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createComment_controller_1 = require("../controller/Comment/createComment.controller");
const getAllComment_controller_1 = require("../controller/Comment/getAllComment.controller");
const deleteComment_controller_1 = require("../controller/Comment/deleteComment.controller");
const updateComment_controller_1 = require("../controller/Comment/updateComment.controller");
const router = express_1.default.Router();
router.get("/comment/:productId", getAllComment_controller_1.getCommentByProductId);
router.delete("/comment/:id", deleteComment_controller_1.deleteComment);
router.post("/comment", createComment_controller_1.createComment);
router.put("/comment/:id", updateComment_controller_1.updateComment);
exports.default = router;
//# sourceMappingURL=comment.routes.js.map