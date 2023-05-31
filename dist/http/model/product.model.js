"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./db"));
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    productName: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    productCode: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    productImg: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    productSize: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    productColor: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    originalPrice: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    },
    discount: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    },
    productDescription: {
        type: sequelize_1.DataTypes.TEXT,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: db_1.default,
    tableName: 'products',
    modelName: 'Product',
});
exports.default = Product;
//# sourceMappingURL=product.model.js.map