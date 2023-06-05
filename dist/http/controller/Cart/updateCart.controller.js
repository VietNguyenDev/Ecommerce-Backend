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
exports.updateCart = void 0;
const cart_service_1 = __importDefault(require("../../service/cart.service"));
const error_1 = require("../../helper/error");
function updateCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const parserId = parseInt(id);
            const { productId, userId, quantity, productSize, productColor } = req.body;
            const result = yield cart_service_1.default.updateCart(parserId, { productId, userId, quantity, productSize, productColor });
            res.status(200).send({
                message: "Update cart successfully",
                result: result,
            });
        }
        catch (error) {
            return (0, error_1.abort)(error.status, error.message);
        }
    });
}
exports.updateCart = updateCart;
;
//# sourceMappingURL=updateCart.controller.js.map