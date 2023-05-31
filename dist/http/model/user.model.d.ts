import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
declare class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    id: CreationOptional<number>;
    email: string;
    password: string;
    role: number;
    fullName?: string;
    phoneNumber?: string;
    dateOfBirth?: Date;
    address?: string;
    gender?: number;
    image?: string;
    refreshToken?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export default User;
