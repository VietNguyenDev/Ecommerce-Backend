import productService from "../../service/product.service";
import { abort } from "../../helper/error";
import { Request, Response } from "express";

export async function deleteProduct(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const parseId = parseInt(id as string, 10);

        const data = await productService.deleteProduct(parseId);

        return res.status(200).send({
            message: 'Delete data successfully',
            data: data
        });
    } catch (error: any) {
        return abort(500, error.message);
    }
}

