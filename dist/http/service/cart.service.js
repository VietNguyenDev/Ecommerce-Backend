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
const db_1 = __importDefault(require("../model/db"));
const error_1 = require("../helper/error");
const product_service_1 = __importDefault(require("./product.service"));
function addItemToCart({ productId, userId, quantity, productSize, productColor }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const checkProduct = yield db_1.default.models.Product.findByPk(productId);
            if (!checkProduct) {
                (0, error_1.abort)(404, "Product not found");
            }
            const checkUser = yield db_1.default.models.User.findByPk(userId);
            if (!checkUser) {
                (0, error_1.abort)(404, "User not found");
            }
            const checkCart = yield db_1.default.models.Cart.findOne({ where: { productId: productId, userId: userId, productSize: productSize, productColor: productColor } });
            if (checkCart) {
                const result = yield db_1.default.models.Cart.update({
                    quantity: quantity,
                    subTotal: quantity * checkProduct.originalPrice,
                }, {
                    where: { id: checkCart.id }
                });
                return Object.assign({ products: checkProduct }, result);
            }
            ;
            const result = yield db_1.default.models.Cart.create({
                productId: productId,
                userId: userId,
                quantity: quantity,
                subTotal: quantity * checkProduct.originalPrice,
                productSize: productSize,
                productColor: productColor,
            });
            return Object.assign({ products: checkProduct }, result.dataValues);
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function emptyCart(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const checkUser = yield db_1.default.models.User.findByPk(userId);
            if (!checkUser) {
                (0, error_1.abort)(404, "User not found");
            }
            const result = yield db_1.default.models.Cart.destroy({ where: { userId: userId } });
            return result;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function deleteCart(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const checkCart = yield db_1.default.models.Cart.findByPk(id);
            if (!checkCart) {
                (0, error_1.abort)(404, "Cart not found");
            }
            const result = yield db_1.default.models.Cart.destroy({ where: { id: id } });
            return result;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function updateCart(id, { productId, quantity, productColor, productSize }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const checkCart = yield db_1.default.models.Cart.findByPk(id);
            if (!checkCart) {
                (0, error_1.abort)(404, "Cart not found");
            }
            const checkProduct = yield db_1.default.models.Product.findByPk(productId);
            if (!checkProduct) {
                (0, error_1.abort)(404, "Product not found");
            }
            const result = yield db_1.default.models.Cart.update({
                productId: productId,
                quantity: quantity,
                subTotal: quantity * checkProduct.originalPrice,
                productColor: productColor,
                productSize: productSize,
            }, {
                where: { id: id }
            });
            return result;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function getCartByUserId(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const checkUser = yield db_1.default.models.User.findByPk(userId);
            if (!checkUser) {
                (0, error_1.abort)(404, "User not found");
            }
            const result = yield db_1.default.models.Cart.findAll({ where: { userId: userId } });
            const products = yield Promise.all(result.map((item) => __awaiter(this, void 0, void 0, function* () {
                const product = yield product_service_1.default.getProductById(item.productId);
                return Object.assign(Object.assign({}, item.dataValues), { product: product });
            })));
            return products;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
exports.default = { addItemToCart, emptyCart, deleteCart, updateCart, getCartByUserId };
//# sourceMappingURL=cart.service.js.map