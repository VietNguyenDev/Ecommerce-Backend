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
exports.updateComment = void 0;
const joi_1 = __importDefault(require("joi"));
const comment_service_1 = __importDefault(require("../../service/comment.service"));
const error_1 = require("../../helper/error");
function validate(content) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const schema = joi_1.default.object({
                content: joi_1.default.string().required(),
            });
            return schema.validateAsync({ content });
        }
        catch (error) {
            return (0, error_1.abort)(400, 'Validate error');
        }
    });
}
function updateComment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const parserId = parseInt(id);
            const { content } = req.body;
            yield validate(content);
            const data = yield comment_service_1.default.updateComment(parserId, content);
            return res.status(200).send({
                message: "Update comment successfully",
                data: data
            });
        }
        catch (error) {
            return (0, error_1.abort)(error.status, error.message);
        }
    });
}
exports.updateComment = updateComment;
//# sourceMappingURL=updateComment.controller.js.map