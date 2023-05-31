import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
declare class Favorite extends Model<InferAttributes<Favorite>, InferCreationAttributes<Favorite>> {
    id: CreationOptional<number>;
    productId: number;
    userId: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export default Favorite;
