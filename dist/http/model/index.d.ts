import { Sequelize } from "sequelize";
import User from "./user.model";
import Product from "./product.model";
import Category from "./category.model";
import Shipping from "./shipping_detail.model";
import Order from "./order.model";
import OrderDetail from "./order_detail.model";
import Comment from "./comment.model";
import Cart from "./cart.model";
import Favorite from "./favorites.model";
import Payment from "./payment.model";
import Role from "./role.model";
interface Database {
    Sequelize: typeof Sequelize;
    sequelize: Sequelize;
    models: {
        User: typeof User;
        Product: typeof Product;
        Category: typeof Category;
        Shipping: typeof Shipping;
        Order: typeof Order;
        OrderDetail: typeof OrderDetail;
        Comment: typeof Comment;
        Cart: typeof Cart;
        Favorite: typeof Favorite;
        Payment: typeof Payment;
        Role: typeof Role;
    };
}
declare const db: Database;
export default db;
