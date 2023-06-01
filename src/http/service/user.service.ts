import db from "../model";
import { abort } from "../helper/error";

interface UserOptions {
    fullName?: string;
    phoneNumber?: string;
    dateOfBirth?: Date;
    address?: string;
    gender?: number;
    image?: string;
}

async function getUserById(id: number) {
    try {
        const user = await db.models.User.findByPk(id);
    if (!user) {
        abort(404, "User not found");
    }
    return user;
    } catch (error: any) {
        return abort(400, error.message);
    }
}

async function getAllUser() {
    try {
        const users = await db.models.User.findAll();

        return users;

    } catch (error: any) {
        return abort(400, error.message);
    }
}

async function updateUser(id: number, {fullName, phoneNumber, dateOfBirth, address, gender, image}: UserOptions) {
    try {
        const user = await db.models.User.findByPk(id);

        if(!user) {
            abort(404, "User not found");
        }

        const data = await db.models.User.update({fullName, phoneNumber, dateOfBirth, address, gender, image}, {where: {id: id}});

        return data;
    } catch(error: any) {
        return abort(400, error.message);
    }
}

async function deleteUser(id: number) {
    try {
        const user = await db.models.User.findByPk(id);

        if(!user) {
            abort(404, "User not found");
        }

        const data = await db.models.User.destroy({where: {id: id}});
    } catch (error: any) {
        return abort(400, error.message);
    }
}

export default { getUserById, getAllUser, updateUser, deleteUser };