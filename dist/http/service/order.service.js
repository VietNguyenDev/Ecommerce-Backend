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
function createOrder({ userId, data }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let result = [];
            const { cartItems } = data;
            const createOrder = yield model_1.default.models.Order.create({
                shippingId: data.shippingId,
                userId: userId,
                status: 'pending'
            });
            const findListCartById = yield model_1.default.models.Cart.findAll({ where: { id: cartItems } });
            const orderData = yield model_1.default.models.OrderDetail.bulkCreate(findListCartById.map((item) => ({
                orderId: createOrder.id,
                productId: item.productId,
                productColor: item.productColor,
                productSize: item.productSize,
                price: item.subTotal,
                quantity: item.quantity,
                cartId: item.cartId,
            })));
            result.push(...orderData);
            yield model_1.default.models.Cart.destroy({ where: { id: cartItems } });
            if (result.length > 0) {
                return result;
            }
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function getAllOrdersByUserId({ page, limit, userId, sortBy }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (page < 1 || limit < 1) {
                return (0, error_1.abort)(500, 'Invalid page or limit');
            }
            const result = yield model_1.default.models.Order.findAndCountAll({
                where: { userId: userId },
                order: [[sortBy, 'DESC']],
                offset: (page - 1) * limit,
                include: [
                    {
                        model: model_1.default.models.Shipping,
                        as: 'shipping',
                    },
                ],
                limit: limit,
            });
            if (!result) {
                return (0, error_1.abort)(500, 'Order not found');
            }
            return result;
        }
        catch (error) {
            return (0, error_1.abort)(400, error.message);
        }
    });
}
;
function getAllOrders({ page, limit }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (page < 1 || limit < 1) {
                return (0, error_1.abort)(500, 'Invalid page or limit');
            }
            const result = yield model_1.default.models.Order.findAndCountAll({
                include: [
                    {
                        model: model_1.default.models.Shipping,
                        as: 'shipping',
                    },
                ],
                offset: (page - 1) * limit,
                limit: limit,
            });
            if (!result) {
                return (0, error_1.abort)(500, 'Order not found');
            }
            //Lấy tất cả các OrderDetail của mỗi đơn hàng
            const orderDetail = yield model_1.default.models.OrderDetail.findAll({
                include: [
                    {
                        model: model_1.default.models.Product,
                        as: 'product',
                    },
                ],
            });
            //Gắn các OrderDetail vào Order tương ứng
            result.rows.forEach((order) => {
                order.orderDetail = orderDetail.filter((detail) => detail.orderId === order.id);
            });
            return result;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
;
function getOrderById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield model_1.default.models.Order.findAll({
                where: { id: id },
                include: [
                    {
                        model: model_1.default.models.Shipping,
                        as: 'shipping',
                    },
                ],
            });
            const orderDetail = yield model_1.default.models.OrderDetail.findAll({
                where: { orderId: id },
                include: [
                    {
                        model: model_1.default.models.Product,
                        as: 'product',
                    },
                ],
            });
            const data = Object.assign(Object.assign({}, result[0].dataValues), { orderDetail: orderDetail });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
;
function getOrderDetailById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield model_1.default.models.OrderDetail.findAll({
                where: { orderId: id },
                include: [
                    {
                        model: model_1.default.models.Product,
                        as: 'product',
                    },
                ],
            });
            if (!result) {
                return (0, error_1.abort)(500, 'Order not found');
            }
            return result;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
;
function updateStatus({ status, orderId }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const checkOrder = yield model_1.default.models.Order.findOne({ where: { id: orderId } });
            if (!checkOrder) {
                return (0, error_1.abort)(500, 'Order not found');
            }
            const result = yield model_1.default.models.Order.update({ status: status }, { where: { id: orderId } });
            return result;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
exports.default = { createOrder, getAllOrdersByUserId, getAllOrders, getOrderById, getOrderDetailById, updateStatus };
//# sourceMappingURL=order.service.js.map