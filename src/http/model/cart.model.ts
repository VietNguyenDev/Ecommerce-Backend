import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreateOptions } from "sequelize";
import sequelize from "./db";

class Cart extends Model<InferAttributes<Cart>, InferCreationAttributes<Cart>> {
    declare id: number;
    declare userId: number;
    declare productId: number;
    declare quantity: number;
    declare subTotal: number;
    declare productColor: string;
    declare productSize: string;
    declare createdAt: Date;
    declare updateAt: Date
}

Cart.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        productId: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        subTotal: {
            type: DataTypes.INTEGER
        },
        productColor: {
            type: DataTypes.STRING
        },
        productSize: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updateAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        tableName: 'cart',
        modelName: 'Cart'
    }
)

export default Cart;