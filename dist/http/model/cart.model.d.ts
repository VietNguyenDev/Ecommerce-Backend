import { Model, InferAttributes, InferCreationAttributes } from "sequelize";
declare class Cart extends Model<InferAttributes<Cart>, InferCreationAttributes<Cart>> {
    id: number;
    userId: number;
    productId: number;
    quantity?: number;
    subTotal?: number;
    productColor?: string;
    productSize?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export default Cart;
