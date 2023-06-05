interface CartOptions {
    productId: number;
    userId: number;
    quantity: number;
    productSize: string;
    productColor: string;
}
declare function addItemToCart({ productId, userId, quantity, productSize, productColor }: CartOptions): Promise<any>;
declare function emptyCart(userId: number): Promise<number>;
declare function deleteCart(id: number): Promise<number>;
declare function updateCart(id: number, { productId, quantity, productColor, productSize }: CartOptions): Promise<[affectedCount: number]>;
declare function getCartByUserId(userId: number): Promise<any[]>;
declare const _default: {
    addItemToCart: typeof addItemToCart;
    emptyCart: typeof emptyCart;
    deleteCart: typeof deleteCart;
    updateCart: typeof updateCart;
    getCartByUserId: typeof getCartByUserId;
};
export default _default;
