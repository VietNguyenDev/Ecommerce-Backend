import db from "../model";
import { abort } from "../helper/error";
import Order from "../model/order.model";
import { Model } from "sequelize";

async function createOrder({userId, data}: {userId: number, data: any}) {
    try {
        let result: any[] = [];
        const { cartItems } = data;

        const createOrder: Order = await db.models.Order.create({
            shippingId: data.shippingId,
            userId: userId,
            status: 'pending'
        });

        const findListCartById = await db.models.Cart.findAll({ where: { id: cartItems } });
        const orderData = await db.models.OrderDetail.bulkCreate(
            findListCartById.map((item: any) => ({
                orderId: createOrder.id,
                productId: item.productId,
                productColor: item.productColor,
                productSize: item.productSize,
                price: item.subTotal,
                quantity: item.quantity,
                cartId: item.cartId,
            }))
        );

        result.push(...orderData);

        await db.models.Cart.destroy({ where: { id: cartItems } });

        if(result.length > 0) {
            return result;
        }
    } catch(error: any) {
        return abort(500, error.message);
    }
}

async function getAllOrdersByUserId({page, limit, userId, sortBy}: {page: number, limit: number, userId: number, sortBy: string}) {
    try {
        if (page < 1 || limit < 1) {
            return abort(500, 'Invalid page or limit');
        }

        const result = await db.models.Order.findAndCountAll({
            where: { userId: userId },
            order: [[sortBy, 'DESC']],
            offset: (page - 1) * limit,
            include: [
                {
                    model: db.models.Shipping,
                    as: 'shipping',
                },
            ],
            limit: limit,
        });

        if(!result) {
            return abort(500, 'Order not found');
        }

        return result;
    } catch(error: any) {
        return abort(400, error.message);
    }
};

async function getAllOrders({page, limit}: {page: number, limit: number}) {
    try {
        if(page < 1 || limit < 1) {
            return abort(500, 'Invalid page or limit');
        }

        const result = await db.models.Order.findAndCountAll({
            include: [
                {
                    model: db.models.Shipping,
                    as: 'shipping',
                },
            ],
            offset: (page - 1) * limit,
            limit: limit,
        });
        if(!result) {
            return abort(500, 'Order not found');
        }

        //Lấy tất cả các OrderDetail của mỗi đơn hàng
        const orderDetail = await db.models.OrderDetail.findAll({
            include: [
                {
                    model: db.models.Product,
                    as: 'product',
                },
            ],
        });

        //Gắn các OrderDetail vào Order tương ứng
        result.rows.forEach((order: any) => {
            order.orderDetail = orderDetail.filter((detail: any) => detail.orderId === order.id);
        });
        
        return result;
    } catch(error: any) {
        return abort(500, error.message);
    }
};

async function getOrderById(id: number) {
    try {
        const result = await db.models.Order.findAll({
            where: { id: id },
            include: [
                {
                    model: db.models.Shipping,
                    as: 'shipping',
                },
            ],
        });

        const orderDetail = await db.models.OrderDetail.findAll({
            where: { orderId: id },
            include: [
                {
                    model: db.models.Product,
                    as: 'product',
                },
            ],
        });

        const data: Model<any> = {
            ...(result[0] as Model<any>).dataValues,
            orderDetail: orderDetail,
        };

        return data;
    } catch(error: any){
        return abort(500, error.message);
    }
};

async function getOrderDetailById(id: number) {
    try {
        const result = await db.models.OrderDetail.findAll({
            where: { orderId: id },
            include: [
                {
                    model: db.models.Product,
                    as: 'product',
                },
            ],
        });

        if(!result) {
            return abort(500, 'Order not found');
        }

        return result;
    } catch(error: any) {
        return abort(500, error.message);
    }
};

async function updateStatus({status, orderId}: {status: string, orderId: number}) {
    try {
        const checkOrder = await db.models.Order.findOne({ where: { id: orderId } });
        if(!checkOrder) {
            return abort(500, 'Order not found');
        }

        const result = await db.models.Order.update(
            { status: status },
            { where: { id: orderId } }
        );

        return result;
    } catch(error: any) {
        return abort(500, error.message);
    }
}

export default { createOrder, getAllOrdersByUserId, getAllOrders, getOrderById, getOrderDetailById, updateStatus };