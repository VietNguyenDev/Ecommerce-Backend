import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import sequelize from './db';

class Role extends Model<InferAttributes<Role>, InferCreationAttributes<Role>> {
    public id!: CreationOptional<number>;
    public name?: string
}

Role.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        tableName: "roles",
        modelName: "Role"
    }
);

export default Role;