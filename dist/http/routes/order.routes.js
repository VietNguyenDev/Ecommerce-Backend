"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getOrderDetailById_controller_1 = require("../controller/Order/getOrderDetailById.controller");
const getOrderById_controller_1 = require("../controller/Order/getOrderById.controller");
const createOrder_controller_1 = require("../controller/Order/createOrder.controller");
const getAllOrders_controller_1 = require("../controller/Order/getAllOrders.controller");
const getAllOrdersByUserId_controller_1 = require("../controller/Order/getAllOrdersByUserId.controller");
const updateStatus_controller_1 = require("../controller/Order/updateStatus.controller");
const router = express_1.default.Router();
router.post('/order/:userId', createOrder_controller_1.createOrder);
router.get('/order', getAllOrders_controller_1.getAllOrders);
router.get('/order/user/:userId', getAllOrdersByUserId_controller_1.getAllOrdersByUserId);
router.get('/order/:id', getOrderById_controller_1.getOrderById);
router.get('/order/:id/detail', getOrderDetailById_controller_1.getOrderDetailById);
router.put('/order/:id/status', updateStatus_controller_1.updateStatus);
exports.default = router;
//# sourceMappingURL=order.routes.js.map