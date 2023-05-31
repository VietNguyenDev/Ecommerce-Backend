import { Sequelize } from "sequelize";
import sequelize from "./db";
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
    }
}

const db: Database = {} as Database;
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.models = {
  User: User,
  Product: Product,
  Category: Category,
  Shipping: Shipping,
  Order: Order,
  OrderDetail: OrderDetail,
  Comment: Comment,
  Cart: Cart,
  Favorite: Favorite,
  Payment: Payment,
  Role: Role,
};

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export default db;