import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class Payment extends Model<InferAttributes<Payment>, InferCreationAttributes<Payment>> {
    declare id: CreationOptional<number>;
    declare userId: number;
    declare orderId: number;
    declare status: string;
    declare code: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Payment.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        orderId: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        status: {
            type: DataTypes.STRING,
        },
        code: {
            type: DataTypes.INTEGER.UNSIGNED,
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
        tableName: 'payments',
        modelName: 'Payment',
    }
);

export default Payment;
