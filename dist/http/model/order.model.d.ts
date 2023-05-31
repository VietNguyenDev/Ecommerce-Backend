import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
declare class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
    id: CreationOptional<number>;
    userId: number;
    status?: string;
    shippingId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export default Order;
