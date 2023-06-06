"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./db"));
class OrderDetail extends sequelize_1.Model {
}
OrderDetail.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED
    },
    orderId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED
    },
    productId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED
    },
    cartId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED
    },
    productColor: {
        type: sequelize_1.DataTypes.STRING
    },
    productSize: {
        type: sequelize_1.DataTypes.STRING
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    sequelize: db_1.default,
    tableName: 'order_detail',
    modelName: "OrderDetail"
});
exports.default = OrderDetail;
//# sourceMappingURL=order_detail.model.js.map