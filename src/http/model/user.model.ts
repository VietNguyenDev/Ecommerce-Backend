import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    public id!: CreationOptional<number>;
    public email!: string;
    public password!: string;
    public role!: number;
    public fullName?: string;
    public phoneNumber?: string;
    public dateOfBirth?: Date;
    public address?: string;
    public gender?: number;
    public image?: string;
    public refreshToken?: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

User.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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