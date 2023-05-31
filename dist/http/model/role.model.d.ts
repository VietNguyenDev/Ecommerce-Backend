import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
declare class Role extends Model<InferAttributes<Role>, InferCreationAttributes<Role>> {
    id: CreationOptional<number>;
    name?: string;
}
export default Role;
