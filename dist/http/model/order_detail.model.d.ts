import { Model, InferAttributes, InferCreationAttributes, CreationOptional, Association } from 'sequelize';
import Product from './product.model';
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
    readonly product?: Product;
    static associations: {
        product: Association<OrderDetail, Product>;
    };
}
export default OrderDetail;
