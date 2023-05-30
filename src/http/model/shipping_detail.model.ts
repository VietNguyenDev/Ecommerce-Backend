import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class Shipping extends Model<InferAttributes<Shipping>, InferCreationAttributes<Shipping>> {
    declare id: CreationOptional<number>;
    declare userId: number;
    declare fullName: string;
    declare address: string;
    declare province: string;
    declare district: string;
    declare ward: string;
    declare postcode: string;
    declare phone: string;
    declare createdAt: Date;
    declare updatedAt: Date
}

Shipping.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
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