import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
    public id!: CreationOptional<number>;
    public userId!: number;
    public status?: string;
    public shippingId!: number;
    public createdAt?: Date;
    public updatedAt?: Date;
}

Order.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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