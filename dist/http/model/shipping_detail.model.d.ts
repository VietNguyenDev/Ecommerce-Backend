import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
declare class Shipping extends Model<InferAttributes<Shipping>, InferCreationAttributes<Shipping>> {
    id: CreationOptional<number>;
    userId: number;
    fullName?: string;
    address?: string;
    province?: string;
    district?: string;
    ward?: string;
    postcode?: string;
    phone?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export default Shipping;
