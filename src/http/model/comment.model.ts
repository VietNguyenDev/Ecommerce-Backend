import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class Comment extends Model<InferAttributes<Comment>, InferCreationAttributes<Comment>> {
    declare id: CreationOptional<number>;
    declare productId: number;
    declare userId: number;
    declare content: Text;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Comment.init({
        id: {  
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        productId: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
        },
        content: {
            type: DataTypes.TEXT,
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
        tableName: 'comments',
        modelName: 'Comment',
    }
);

export default Comment;