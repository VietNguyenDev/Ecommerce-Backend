import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare email: string;
    declare password: string;
    declare role: number;
    declare fullName: string;
    declare phoneNumber: string;
    declare dateOfBirth: Date;
    declare address: string;
    declare gender: number;
    declare image: string;
    declare refreshToken: string;
    declare createdAt: Date;
    declare updatedAt: Date;
}

User.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(255),
        },
        password: {
            type: DataTypes.STRING(255),
        },
        role: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        fullName: {
            type: DataTypes.STRING(255),
        },
        phoneNumber: {
            type: DataTypes.STRING(255),
        },
        dateOfBirth: {
            type: DataTypes.DATE,
        },
        address: {
            type: DataTypes.STRING(255),
        },
        gender: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        image: {
            type: DataTypes.STRING(255),
        },
        refreshToken: {
            type: DataTypes.STRING(255),
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        }   
    }, {
        tableName: 'users',
        modelName: 'User',
        sequelize,
    }
);

export default User;