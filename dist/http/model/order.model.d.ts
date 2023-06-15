import { Model, InferAttributes, InferCreationAttributes, CreationOptional, Association } from 'sequelize';
import Shipping from './shipping_detail.model';
declare class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
    id: CreationOptional<number>;
    userId: number;
    status?: string;
    shippingId: number;
    createdAt?: Date;
    updatedAt?: Date;
    readonly shipping?: Shipping;
    static associations: {
        shipping: Association<Order, Shipping>;
    };
}
export default Order;
