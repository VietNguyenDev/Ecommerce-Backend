import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreateOptions } from "sequelize";
import sequelize from "./db";

class Cart extends Model<InferAttributes<Cart>, InferCreationAttributes<Cart>> {
    public id!: number;
    public userId!: number;
    public productId!: number;
    public quantity?: number;
    public subTotal?: number;
    public productColor?: string;
    public productSize?: string;
    public createdAt?: Date;
    public updateAt?: Date
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