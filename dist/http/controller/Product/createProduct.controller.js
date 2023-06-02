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
exports.createProduct = void 0;
const joi_1 = __importDefault(require("joi"));
const product_service_1 = __importDefault(require("../../service/product.service"));
const error_1 = require("../../helper/error");
function validate(productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const schema = joi_1.default.object({
                productName: joi_1.default.string().required(),
                productCode: joi_1.default.string().required(),
                productImg: joi_1.default.string().required(),
                productSize: joi_1.default.string().required(),
                productColor: joi_1.default.string().required(),
                originalPrice: joi_1.default.number().min(0).required(),
                discount: joi_1.default.number().min(0).required(),
                productDescription: joi_1.default.string().required(),
            });
            return schema.validateAsync({ productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription });
        }
        catch (error) {
            return (0, error_1.abort)(400, 'Validate error');
        }
    });
}
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription } = req.body;
            yield validate(productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription);
            const data = yield product_service_1.default.createProduct({ productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription });
            return res.status(200).send({
                message: 'Create data successfully',
                data: data
            });
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
exports.createProduct = createProduct;
//# sourceMappingURL=createProduct.controller.js.map