import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
    public id!: CreationOptional<number>;
    public productName!: string;
    public productCode!: string;
    public productImg?: string;
    public productSize!: string;
    public productColor!: string;
    public originalPrice!: number;
    public discount?: number;
    public productDescription?: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

Product.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        productName: {
            type: DataTypes.STRING(255),
        },
        productCode: {
            type: DataTypes.STRING(255),
        },
        productImg: {
            type: DataTypes.STRING(255),
        },
        productSize: {
            type: DataTypes.STRING(255),
        },
        productColor: {
            type: DataTypes.STRING(255),
        },
        originalPrice: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        discount: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        productDescription: {
            type: DataTypes.TEXT,
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
        tableName: 'products',
        modelName: 'Product',
    }
)

export default Product;