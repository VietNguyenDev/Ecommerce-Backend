import db from "../model";
import { abort } from "../helper/error";

interface Comment {
    userId: number;
    productId: number;
    content: Text;
}

async function createComment(   {userId, productId, content}: Comment) {
    try {
        //check user
        const user = await db.models.User.findByPk(userId);

        if(!user) {
            return abort(404, "User not found");
        }

        //check product

        const product = await db.models.Product.findByPk(productId);

        if(!product) {
            return abort(404, "Product not found");
        }

        const comment = await db.models.Comment.create({userId, productId, content});

        return comment;
    } catch(error: any) {
        return abort(500, error.message);
    }
}

async function getCommentByProductId(productId: number) {
    try {

        const product = await db.models.Product.findByPk(productId);

        if(!product) {
            return abort(404, "Product not found");
        }

        const data = await db.models.Comment.findAll({where: {productId: productId}});

        return data;
    } catch(error: any) {
        return abort(500, error.message);
    }
}

async function deleteComment(id: number) {
    try {
        const comment = await db.models.Comment.findByPk(id);

        if(!comment) {
            return abort(404, "Comment not found");
        }

        const data = await db.models.Comment.destroy({where: {id: id}});

        return data;
    } catch (error: any) {
        return abort(500, error.message);
    }
}

async function updateComment(id: number, content: Text) {
    try {
        const comment = await db.models.Comment.findByPk(id);

        if(!comment) {
            return abort(404, "Comment not found");
        }

        const data = await db.models.Comment.update({content: content}, {where: {id: id}});

        return data;

    } catch (error: any) {
        return abort(500, error.message);
    }
}

export default { createComment, getCommentByProductId, deleteComment, updateComment };