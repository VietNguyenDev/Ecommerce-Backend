import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
declare class OrderDetail extends Model<InferAttributes<OrderDetail>, InferCreationAttributes<OrderDetail>> {
    id: CreationOptional<number>;
    price?: number;
    orderId: number;
    productId: number;
    cartId: number;
    quantity?: number;
    productColor?: string;
    productSize?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export default OrderDetail;
