"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getShipping_controller_1 = require("../controller/Shipping/getShipping.controller");
const createShipping_controller_1 = require("../controller/Shipping/createShipping.controller");
const updateShipping_controller_1 = require("../controller/Shipping/updateShipping.controller");
const deleteShipping_controller_1 = require("../controller/Shipping/deleteShipping.controller");
const router = express_1.default.Router();
router.get("/shipping/:userId", getShipping_controller_1.getShippingByUserId);
router.post("/shipping/:id", deleteShipping_controller_1.deleteShipping);
router.post("/shipping", createShipping_controller_1.createShipping);
router.put("/shipping/:id", updateShipping_controller_1.updateShipping);
exports.default = router;
//# sourceMappingURL=shipping.routes.js.map