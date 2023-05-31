import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
declare class Payment extends Model<InferAttributes<Payment>, InferCreationAttributes<Payment>> {
    id: CreationOptional<number>;
    userId: number;
    orderId: number;
    status?: string;
    code?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export default Payment;
