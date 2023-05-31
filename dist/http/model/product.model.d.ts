import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
declare class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
    id: CreationOptional<number>;
    productName: string;
    productCode: string;
    productImg?: string;
    productSize: string;
    productColor: string;
    originalPrice: number;
    discount?: number;
    productDescription?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export default Product;
