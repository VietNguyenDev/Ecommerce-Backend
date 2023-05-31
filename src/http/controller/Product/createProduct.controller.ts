import productService from "../../service/product.service";
import { abort } from "../../helper/error";
import { Request, Response } from "express";
import Product from "../../model/product.model";

export async function createProduct(req: Request, res: Response) {
    try {
        const { productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription } = req.body;
        
        const data: Product = await productService.createProduct({ productName, productCode, productImg, productSize, productColor, originalPrice, discount, productDescription });

        return res.status(200).send({
            message: 'Create data successfully',
            data: data
        });
    } catch (error: any) {
        return abort(500, error.message);
    }
}