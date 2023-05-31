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
exports.createCategory = void 0;
const categories_service_1 = __importDefault(require("../../service/categories.service"));
const error_1 = require("../../helper/error");
function createCategory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { categoryName } = req.body;
            const category = yield categories_service_1.default.createCategory({ categoryName });
            return res.status(200).send({
                message: 'Create category successfully',
                data: category
            });
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
exports.createCategory = createCategory;
//# sourceMappingURL=createCategory.controller.js.map