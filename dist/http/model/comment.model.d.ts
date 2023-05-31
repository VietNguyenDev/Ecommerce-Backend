import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
declare class Comment extends Model<InferAttributes<Comment>, InferCreationAttributes<Comment>> {
    id: CreationOptional<number>;
    productId: number;
    userId: number;
    content?: Text;
    createdAt?: Date;
    updatedAt?: Date;
}
export default Comment;
