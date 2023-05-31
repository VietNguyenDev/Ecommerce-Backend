import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
    public id!: CreationOptional<number>;
    public categoryName?: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}

Category.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        categoryName: {
            type: DataTypes.STRING(255),
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
        tableName: 'categories',
        modelName: 'Category',
    }
);

export default Category;