"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAllProduct_controller_1 = require("../controller/Product/getAllProduct.controller");
const createProduct_controller_1 = require("../controller/Product/createProduct.controller");
const updateProduct_controller_1 = require("../controller/Product/updateProduct.controller");
const deleteProduct_controller_1 = require("../controller/Product/deleteProduct.controller");
const auth_1 = require("../middleware/auth");
const permission_1 = __importDefault(require("../middleware/permission"));
const router = express_1.default.Router();
//get product
router.get('/products', getAllProduct_controller_1.getAllProducts);
//create product
router.post('/products', auth_1.auth, permission_1.default, createProduct_controller_1.createProduct);
router.put('/products/:id', auth_1.auth, permission_1.default, updateProduct_controller_1.updateProduct);
router.post('/products/:id', auth_1.auth, permission_1.default, deleteProduct_controller_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=product.routes.js.map