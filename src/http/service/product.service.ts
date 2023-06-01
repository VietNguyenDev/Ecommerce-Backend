import db from "../model";
import { abort } from "../helper/error";

async function getAllProducts({limit, page}: {limit: number, page: number}) {
    try {
        const offset = page * limit - limit;
        const data = await db.models.Product.findAndCountAll({offset, limit});

        return data;
    } catch (error: any) {
        abort(500, error.message);
    }
}


async function getProductById(id: number) {
    try {
        const data = await db.models.Product.findByPk(id);

        if(!data) {
            abort(404, "Product not found");
        }

        return data;
    } catch (error: any) {
        return abort(500, error.message);
    }
}

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

async function createProduct({productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription}:  ProductOptions) {
    try {
        const product = await db.models.Product.findOne({where: {productName: productName}});
        if(product) {
            abort(409, "Product already exists");
        }
        const data = await db.models.Product.create({productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription});

        return data;
        
    } catch (error: any) {
        return abort(500, error.message);
    }
}

async function deleteProduct(id: number) {
    try {
        const product = await db.models.Product.findByPk(id);

        if(!product) {
            abort(404, "Product not already exists");
        }

        await db.models.Product.destroy({where: {id: id}});
    } catch (error: any) {
        return abort(500, error.message);
    }
}

async function updateProduct(id: number, {productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription}: ProductOptions) {
    try {
        const product = await db.models.Product.findByPk(id);
        if(!product) {
            abort(404, "Product not already exists");
        }

        const data = await db.models.Product.update({productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription}, {where: {id: id}});

        return data;
    } catch (error: any) {
        return abort(500, error.message);
    }
}

export default { getAllProducts, getProductById, createProduct, deleteProduct, updateProduct };