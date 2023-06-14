import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, Association } from 'sequelize';
import sequelize from './db';
import Shipping from './shipping_detail.model';

class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
    public id!: CreationOptional<number>;
    public userId!: number;
    public status?: string;
    public shippingId!: number;
    public createdAt?: Date;
    public updatedAt?: Date;

    public readonly shipping?: Shipping;

    public static associations: {
        shipping: Association<Order, Shipping>;
    };
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

Order.belongsTo(Shipping, { foreignKey: 'shippingId', as: 'shipping' });


export default Order;