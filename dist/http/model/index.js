"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("./db"));
const user_model_1 = __importDefault(require("./user.model"));
const product_model_1 = __importDefault(require("./product.model"));
const category_model_1 = __importDefault(require("./category.model"));
const shipping_detail_model_1 = __importDefault(require("./shipping_detail.model"));
const order_model_1 = __importDefault(require("./order.model"));
const order_detail_model_1 = __importDefault(require("./order_detail.model"));
const comment_model_1 = __importDefault(require("./comment.model"));
const cart_model_1 = __importDefault(require("./cart.model"));
const favorites_model_1 = __importDefault(require("./favorites.model"));
const payment_model_1 = __importDefault(require("./payment.model"));
const role_model_1 = __importDefault(require("./role.model"));
const db = {};
db.Sequelize = sequelize_1.Sequelize;
db.sequelize = db_1.default;
db.models = {
    User: user_model_1.default,
    Product: product_model_1.default,
    Category: category_model_1.default,
    Shipping: shipping_detail_model_1.default,
    Order: order_model_1.default,
    OrderDetail: order_detail_model_1.default,
    Comment: comment_model_1.default,
    Cart: cart_model_1.default,
    Favorite: favorites_model_1.default,
    Payment: payment_model_1.default,
    Role: role_model_1.default,
};
db_1.default
    .authenticate()
    .then(() => {
    console.log("Connection has been established successfully.");
})
    .catch((error) => {
    console.error("Unable to connect to the database: ", error);
});
exports.default = db;
//# sourceMappingURL=index.js.map