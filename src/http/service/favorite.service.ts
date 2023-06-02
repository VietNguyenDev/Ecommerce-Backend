import db from "../model";
import { abort } from "../helper/error";
import productService from "./product.service";

interface Favorite {
    userId: number;
    productId: number;
}

async function createFavorite({userId, productId}: Favorite) {
    try {
        await productService.getProductById(productId);
        const favorite = await db.models.Favorite.create({userId, productId});

        if(favorite){
            return abort(400, "Product already exists in favorite list");
        }

        const result = await db.models.Favorite.create({userId, productId});

        return result;
    } catch(error: any) {
        return abort(500, error.message);
    }
}

async function getFavoriteByUserId(userId: number) {
    try {
        const data = await db.models.Favorite.findOne({where: {userId: userId}});

        return data;
    } catch(error: any) {
        return abort(500, error.message);
    }
}

async function deleteFavorite(id: number) {
    try {
        const favorite = await db.models.Favorite.findByPk(id);

        if(!favorite) {
            return abort(404, "Favorite not found");
        }

        const data = await db.models.Favorite.destroy({where: {id: id}});

        return data;
    } catch(error: any) {
        return abort(500, error.message);
    }
}

export default { createFavorite, getFavoriteByUserId, deleteFavorite };