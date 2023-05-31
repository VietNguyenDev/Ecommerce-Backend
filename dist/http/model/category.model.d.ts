import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
declare class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
    id: CreationOptional<number>;
    categoryName?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export default Category;
