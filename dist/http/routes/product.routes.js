"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAllProduct_controller_1 = require("../controller/Product/getAllProduct.controller");
const createProduct_controller_1 = require("../controller/Product/createProduct.controller");
const updateProduct_controller_1 = require("../controller/Product/updateProduct.controller");
const router = express_1.default.Router();
router.get('/products', getAllProduct_controller_1.getAllProducts);
router.post('/products', createProduct_controller_1.createProduct);
router.put('/products/:id', updateProduct_controller_1.updateProduct);
router.post('/products/:id', updateProduct_controller_1.updateProduct);
exports.default = router;
//# sourceMappingURL=product.routes.js.map