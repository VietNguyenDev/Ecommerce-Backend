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
exports.getAllOrders = void 0;
const order_service_1 = __importDefault(require("../../service/order.service"));
const error_1 = require("../../helper/error");
function getAllOrders(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { page, limit } = req.query;
            const parserPage = parseInt(page);
            const parserLimit = parseInt(limit);
            const result = yield order_service_1.default.getAllOrders({ page: parserPage, limit: parserLimit });
            return res.status(200).send({
                message: "Get all orders successfully",
                result: result,
            });
        }
        catch (error) {
            return (0, error_1.abort)(error.status, error.message);
        }
    });
}
exports.getAllOrders = getAllOrders;
;
//# sourceMappingURL=getAllOrders.controller.js.map