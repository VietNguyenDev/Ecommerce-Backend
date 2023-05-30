import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class OrderDetail extends Model<InferAttributes<OrderDetail>, InferCreationAttributes<OrderDetail>> {
    declare id: CreationOptional<number>;
    declare price: number;
    declare orderId: number;
    declare productId: number;
    declare cartId: number;
    declare quantity: number;
    declare productColor: string;
    declare productSize: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

OrderDetail.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        price: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        orderId: {
            type: DataTypes.INTEGER.UNSIGNED
        }, 
        productId: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        cartId: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        quantity: {
            type: DataTypes.INTEGER.UNSIGNED
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
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        tableName: 'order_detail',
        modelName: "OrderDetail"
    }
);

export default OrderDetail;