import productService from "../../service/product.service";
import { abort } from "../../helper/error";
import { Request, Response } from "express";

export async function updateProduct(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const { productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription } = req.body;
        const parseId = parseInt(id);

        const data = await productService.updateProduct(parseId, { productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription });

        return res.status(200).send({
            message: 'Update data successfully',
            data: data
        });
    } catch(error: any) {
        return abort(500, error.message);
    }
}