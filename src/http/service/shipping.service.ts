import db from "../model";
import { abort } from "../helper/error";

interface Shipping {
    userId: number;
    fullName: string;
    address: string;
    province: string;
    district: string;
    ward: string;
    postcode: string;
    phone: string;
}

async function createShipping({userId, fullName, address, province, district, ward, postcode, phone}: Shipping) {
    try {
        const shipping = await db.models.Shipping.create({userId, fullName, address, province, district, ward, postcode, phone});

        return shipping;

    } catch(error: any) {
        return abort(500, error.message);
    }
}

async function getShippingByUserId(userId: number) {
    try {
        const shipping = await db.models.Shipping.findOne({
            where: {
                userId: userId,
            },
            order: [
                ['createdAt', 'DESC']
            ]
        });

        return shipping;
    } catch(error: any) {
        return abort(500, error.message);
    }
}

async function updateShipping(id: number, {fullName, address, province, district, ward, postcode, phone}: Shipping) {
    try {
        const shipping = await db.models.Shipping.findByPk(id);

        if(!shipping) {
            return abort(404, "Shipping not found");
        }

        const data = await db.models.Shipping.update({fullName, address, province, district, ward, postcode, phone}, {where: {id: id}});

        return data;
    } catch(error: any) {
        return abort(500, error.message);
    }
}

async function deleteShipping(id: number) {
    try {
        const shipping = await db.models.Shipping.findByPk(id);

        if(!shipping) {
            return abort(404, "Shipping not found");
        }

        const data = await db.models.Shipping.destroy({where: {id: id}});
    } catch(error: any) {
        return abort(500, error.message);
    }
}

export default { createShipping, getShippingByUserId, updateShipping, deleteShipping };