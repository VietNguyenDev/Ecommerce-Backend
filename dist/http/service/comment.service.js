"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../model"));
const error_1 = require("../helper/error");
function createComment({ userId, productId, content }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //check user
            const user = yield model_1.default.models.User.findByPk(userId);
            if (!user) {
                return (0, error_1.abort)(404, "User not found");
            }
            //check product
            const product = yield model_1.default.models.Product.findByPk(productId);
            if (!product) {
                return (0, error_1.abort)(404, "Product not found");
            }
            const comment = yield model_1.default.models.Comment.create({ userId, productId, content });
            return comment;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function getCommentByProductId(productId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield model_1.default.models.Product.findByPk(productId);
            if (!product) {
                return (0, error_1.abort)(404, "Product not found");
            }
            const data = yield model_1.default.models.Comment.findAll({ where: { productId: productId } });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function deleteComment(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const comment = yield model_1.default.models.Comment.findByPk(id);
            if (!comment) {
                return (0, error_1.abort)(404, "Comment not found");
            }
            const data = yield model_1.default.models.Comment.destroy({ where: { id: id } });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function updateComment(id, content) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const comment = yield model_1.default.models.Comment.findByPk(id);
            if (!comment) {
                return (0, error_1.abort)(404, "Comment not found");
            }
            const data = yield model_1.default.models.Comment.update({ content: content }, { where: { id: id } });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
exports.default = { createComment, getCommentByProductId, deleteComment, updateComment };
//# sourceMappingURL=comment.service.js.map