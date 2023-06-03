import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class Shipping extends Model<InferAttributes<Shipping>, InferCreationAttributes<Shipping>> {
    public id!: CreationOptional<number>;
    public userId!: number;
    public fullName?: string;
    public address?: string;
    public province?: string;
    public district?: string;
    public ward?: string;
    public postcode?: string;
    public phone?: string;
    public createdAt?: Date;
    public updatedAt?: Date
}

Shipping.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        fullName: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        }, 
        province: {
            type: DataTypes.STRING
        },
        district: {
            type: DataTypes.STRING
        },
        ward: {
            type: DataTypes.STRING
        },
        postcode: {
            type: DataTypes.STRING
        }, 
        phone: {
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
        tableName: 'shipping_detail',
        modelName: "Shipping"
    }
)

export default Shipping;