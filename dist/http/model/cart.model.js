"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./db"));
class Cart extends sequelize_1.Model {
}
Cart.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED
    },
    productId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER
    },
    subTotal: {
        type: sequelize_1.DataTypes.INTEGER
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
    tableName: 'cart',
    modelName: 'Cart'
});
exports.default = Cart;
//# sourceMappingURL=cart.model.js.map