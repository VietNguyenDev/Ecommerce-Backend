"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./db"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    password: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    role: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    },
    fullName: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    dateOfBirth: {
        type: sequelize_1.DataTypes.DATE,
    },
    address: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    gender: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    },
    image: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    refreshToken: {
        type: sequelize_1.DataTypes.STRING(255),
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    }
}, {
    tableName: 'users',
    modelName: 'User',
    sequelize: db_1.default,
});
exports.default = User;
//# sourceMappingURL=user.model.js.map