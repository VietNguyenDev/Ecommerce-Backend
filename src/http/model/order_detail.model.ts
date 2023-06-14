import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional, Association } from 'sequelize';
import sequelize from './db';
import Product from './product.model';

class OrderDetail extends Model<InferAttributes<OrderDetail>, InferCreationAttributes<OrderDetail>> {
    public id!: CreationOptional<number>;
    public price?: number;
    public orderId!: number;
    public productId!: number;
    public cartId!: number;
    public quantity?: number;
    public productColor?: string;
    public productSize?: string;
    public createdAt?: Date;
    public updatedAt?: Date;

    public readonly product?: Product; // Thêm thuộc tính `product` để truy cập thông tin sản phẩm

    public static associations: {
        product: Association<OrderDetail, Product>;
    };
}

OrderDetail.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        orderId: {
            type: DataTypes.INTEGER.UNSIGNED
        }, 
        productId: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        cartId: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        quantity: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        productColor: {
            type: DataTypes.STRING
        },
        productSize: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        tableName: 'order_detail',
        modelName: "OrderDetail"
    }
);

OrderDetail.belongsTo(Product, { foreignKey: 'productId', as: 'product' });

export default OrderDetail;