"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addItemToCart_controller_1 = require("../controller/Cart/addItemToCart.controller");
const deleteCart_controller_1 = require("../controller/Cart/deleteCart.controller");
const emptyCart_controller_1 = require("../controller/Cart/emptyCart.controller");
const getCart_controller_1 = require("../controller/Cart/getCart.controller");
const updateCart_controller_1 = require("../controller/Cart/updateCart.controller");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.get('/cart/:userId', auth_1.auth, getCart_controller_1.getCart);
router.post('/cart', auth_1.auth, addItemToCart_controller_1.addItemToCart);
router.put('/cart/:id', auth_1.auth, updateCart_controller_1.updateCart);
router.post('/cart/:id', auth_1.auth, deleteCart_controller_1.deleteCart);
router.post('/cart/empty/:userId', auth_1.auth, emptyCart_controller_1.emptyCart);
exports.default = router;
//# sourceMappingURL=cart.routes.js.map