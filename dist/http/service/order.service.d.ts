import Order from "../model/order.model";
declare function createOrder({ userId, data }: {
    userId: number;
    data: any;
}): Promise<any[] | undefined>;
declare function getAllOrdersByUserId({ page, limit, userId, sortBy }: {
    page: number;
    limit: number;
    userId: number;
    sortBy: string;
}): Promise<{
    rows: Order[];
    count: number;
}>;
declare function getAllOrders({ page, limit }: {
    page: number;
    limit: number;
}): Promise<{
    rows: Order[];
    count: number;
}>;
declare function getOrderById(id: number): Promise<{
    order: any[];
    orderDetail: any[];
}>;
declare function getOrderDetailById(id: number): Promise<import("../model/order_detail.model").default[]>;
declare function updateStatus({ status, orderId }: {
    status: string;
    orderId: number;
}): Promise<[affectedCount: number]>;
declare const _default: {
    createOrder: typeof createOrder;
    getAllOrdersByUserId: typeof getAllOrdersByUserId;
    getAllOrders: typeof getAllOrders;
    getOrderById: typeof getOrderById;
    getOrderDetailById: typeof getOrderDetailById;
    updateStatus: typeof updateStatus;
};
export default _default;
