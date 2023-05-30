import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class Favorite extends Model<InferAttributes<Favorite>, InferCreationAttributes<Favorite>> {
    declare id: CreationOptional<number>;
    declare productId: number;
    declare userId: number;
    declare createdAt: Date;
    declare updatedAt: Date;
}

Favorite.init({
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
        tableName: 'favorites',
        modelName: 'Favorite',
    }
);

export default Favorite;