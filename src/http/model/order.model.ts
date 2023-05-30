import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
    declare id: CreationOptional<number>;
    declare userId: number;
    declare status: string;
    declare shippingId: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Order.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        status: {
            type: DataTypes.STRING,
        },
        shippingId: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        tableName: 'orders',
        modelName: 'Order',
    }
);

export default Order;