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
function getAllProducts({ limit, page }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const offset = page * limit - limit;
            const data = yield model_1.default.models.Product.findAndCountAll({ offset, limit });
            return data;
        }
        catch (error) {
            (0, error_1.abort)(500, error.message);
        }
    });
}
function getProductById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield model_1.default.models.Product.findByPk(id);
            if (!data) {
                (0, error_1.abort)(404, "Product not found");
            }
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function createProduct({ productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield model_1.default.models.Product.findOne({ where: { productName: productName } });
            if (product) {
                (0, error_1.abort)(409, "Product already exists");
            }
            const data = yield model_1.default.models.Product.create({ productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function deleteProduct(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield model_1.default.models.Product.findByPk(id);
            if (!product) {
                (0, error_1.abort)(404, "Product not already exists");
            }
            yield model_1.default.models.Product.destroy({ where: { id: id } });
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function updateProduct(id, { productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield model_1.default.models.Product.findByPk(id);
            if (!product) {
                (0, error_1.abort)(404, "Product not already exists");
            }
            const data = yield model_1.default.models.Product.update({ productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription }, { where: { id: id } });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
exports.default = { getAllProducts, getProductById, createProduct, deleteProduct, updateProduct };
//# sourceMappingURL=product.service.js.map