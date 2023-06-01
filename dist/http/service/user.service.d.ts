interface UserOptions {
    fullName?: string;
    phoneNumber?: string;
    dateOfBirth?: Date;
    address?: string;
    gender?: number;
    image?: string;
}
declare function getUserById(id: number): Promise<import("../model/user.model").default | null>;
declare function getAllUser(): Promise<import("../model/user.model").default[]>;
declare function updateUser(id: number, { fullName, phoneNumber, dateOfBirth, address, gender, image }: UserOptions): Promise<[affectedCount: number]>;
declare function deleteUser(id: number): Promise<undefined>;
declare const _default: {
    getUserById: typeof getUserById;
    getAllUser: typeof getAllUser;
    updateUser: typeof updateUser;
    deleteUser: typeof deleteUser;
};
export default _default;
