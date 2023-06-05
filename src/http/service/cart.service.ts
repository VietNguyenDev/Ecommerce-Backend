import db from '../model/db';
import { abort } from '../helper/error';
import productService from './product.service';
import Product from '../model/product.model';
import Cart from '../model/cart.model';


interface CartOptions {
    productId: number;
    userId: number;
    quantity: number;
    productSize: string;
    productColor: string;
}

async function addItemToCart({productId, userId, quantity, productSize, productColor}: CartOptions) {
    try {
        const checkProduct: Product = await db.models.Product.findByPk(productId) as Product ;
        if(!checkProduct) {
            abort(404, "Product not found");
        }
        
        const checkUser = await db.models.User.findByPk(userId);
        if(!checkUser) {
            abort(404, "User not found");
        }

        const checkCart: Cart = await db.models.Cart.findOne({where: {productId: productId, userId: userId, productSize: productSize, productColor: productColor}}) as Cart;

        if(checkCart) {
            const result: number[] = await db.models.Cart.update({
                quantity: quantity,
                subTotal: quantity * checkProduct.originalPrice,
            }, {
                where: {id: checkCart.id}
            });
            return {
                products: checkProduct,
                ...result,
            };
        };

        const result = await db.models.Cart.create({
            productId: productId,
            userId: userId,
            quantity: quantity,
            subTotal: quantity * checkProduct.originalPrice,
            productSize: productSize,
            productColor: productColor,
        });

        return {
            products: checkProduct,
            ...result.dataValues,
        }
    } catch (error: any) {
        return abort(500, error.message);
    }
}

async function emptyCart(userId:number) {
    try {
        const checkUser = await db.models.User.findByPk(userId);
        if(!checkUser) {
            abort(404, "User not found");
        }

        const result = await db.models.Cart.destroy({where: {userId: userId}});
        return result;
    } catch(error: any) {
        return abort(500, error.message);
    }
}

async  function deleteCart(id: number) {
    try {
        const checkCart = await db.models.Cart.findByPk(id);
        if(!checkCart) {
            abort(404, "Cart not found");
        }

        const result = await db.models.Cart.destroy({where: {id: id}});
        return result;
    } catch(error: any) {
        return abort(500, error.message);
    }
}

async function updateCart(id: number, {productId, quantity, productColor,  productSize}: CartOptions) {
    try {
        const checkCart = await db.models.Cart.findByPk(id);
        if(!checkCart) {
            abort(404, "Cart not found");
        }

        const checkProduct: Product = await db.models.Product.findByPk(productId) as Product;
        if(!checkProduct) {
            abort(404, "Product not found");
        }

        const result = await db.models.Cart.update({
            productId: productId,
            quantity: quantity,
            subTotal: quantity * checkProduct.originalPrice,
            productColor: productColor,
            productSize: productSize,
        }, {
            where: {id: id}
        });

        return result;
    } catch(error: any) {
        return abort(500, error.message);
    }
}

async function getCartByUserId(userId: number) {
    try {
        const checkUser = await db.models.User.findByPk(userId);
        if(!checkUser) {
            abort(404, "User not found");
        }
        
        const result = await db.models.Cart.findAll({ where: { userId: userId } });
        const products = await Promise.all(
            result.map(async (item: any) => {
                const product = await productService.getProductById(item.productId);
                return {
                    ...item.dataValues,
                    product: product,
                };
            })
        );

        return products;
    } catch(error: any) {
        return abort(500, error.message);
    }
}

export default { addItemToCart, emptyCart, deleteCart, updateCart, getCartByUserId };