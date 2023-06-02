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
declare function createShipping({ userId, fullName, address, province, district, ward, postcode, phone }: Shipping): Promise<import("../model/shipping_detail.model").default>;
declare function getShippingByUserId(userId: number): Promise<import("../model/shipping_detail.model").default | null>;
declare function updateShipping(id: number, { fullName, address, province, district, ward, postcode, phone }: Shipping): Promise<[affectedCount: number]>;
declare function deleteShipping(id: number): Promise<undefined>;
declare const _default: {
    createShipping: typeof createShipping;
    getShippingByUserId: typeof getShippingByUserId;
    updateShipping: typeof updateShipping;
    deleteShipping: typeof deleteShipping;
};
export default _default;
