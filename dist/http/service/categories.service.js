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
function getCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categories = yield model_1.default.models.Category.findAll({});
            return categories;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function getCategoryById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const category = yield model_1.default.models.Category.findByPk(id);
            if (!category) {
                (0, error_1.abort)(404, "Category not found");
            }
            return category;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function createCategory({ categoryName }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const category = yield model_1.default.models.Category.findOne({ where: { categoryName: categoryName } });
            if (category) {
                (0, error_1.abort)(409, "Category already exists");
            }
            const data = yield model_1.default.models.Category.create({ categoryName });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function deleteCategory(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const category = yield model_1.default.models.Category.findByPk(id);
            if (!category) {
                (0, error_1.abort)(404, "Category not found");
            }
            const data = yield model_1.default.models.Category.destroy({ where: { id: id } });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function updateCategory(id, { categoryName }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const category = yield model_1.default.models.Category.findByPk(id);
            if (!category) {
                (0, error_1.abort)(404, "Category not found");
            }
            const data = yield model_1.default.models.Category.update({ categoryName }, { where: { id: id } });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
exports.default = { getCategories, getCategoryById, createCategory, deleteCategory, updateCategory };
//# sourceMappingURL=categories.service.js.map