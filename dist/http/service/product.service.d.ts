declare function getAllProducts({ limit, page }: {
    limit: number;
    page: number;
}): Promise<{
    rows: import("../model/product.model").default[];
    count: number;
} | undefined>;
declare function getProductById(id: number): Promise<import("../model/product.model").default | null>;
interface ProductOptions {
    productName: string;
    productCode: string;
    productImg: string;
    productSize: string;
    productColor: string;
    originalPrice: number;
    discount: number;
    productDescription: string;
}
declare function createProduct({ productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription }: ProductOptions): Promise<import("../model/product.model").default>;
declare function deleteProduct(id: number): Promise<undefined>;
declare function updateProduct(id: number, { productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription }: ProductOptions): Promise<[affectedCount: number]>;
declare const _default: {
    getAllProducts: typeof getAllProducts;
    getProductById: typeof getProductById;
    createProduct: typeof createProduct;
    deleteProduct: typeof deleteProduct;
    updateProduct: typeof updateProduct;
};
export default _default;
