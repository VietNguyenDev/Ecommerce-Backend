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
exports.createOrder = void 0;
const order_service_1 = __importDefault(require("../../service/order.service"));
const error_1 = require("../../helper/error");
function createOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const { shippingId, cartItems, paymentMethod, paymentMethodTitle } = req.body;
            const parserId = parseInt(userId);
            const result = yield order_service_1.default.createOrder({ userId: parserId, data: { shippingId, cartItems, paymentMethod, paymentMethodTitle } });
            return res.status(200).send({
                message: "Create order successfully",
                result: result,
            });
        }
        catch (error) {
            return (0, error_1.abort)(error.status, error.message);
        }
    });
}
exports.createOrder = createOrder;
//# sourceMappingURL=createOrder.controller.js.map