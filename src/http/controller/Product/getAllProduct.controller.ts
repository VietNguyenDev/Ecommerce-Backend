import productService from "../../service/product.service";
import { abort } from "../../helper/error";
import { Request, Response } from "express";
interface getListOptions {
    limit: number;
    page: number
}

export async function getAllProducts(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    try {
        const { limit, page } = req.query;

        const parsedLimit = parseInt(limit as string, 10);
        const parsedPage = parseInt(page as string, 10);

        const options: getListOptions = {
            limit: parsedLimit,
            page: parsedPage
        };

        const product = await productService.getAllProducts(options)

        return res.status(200).send(product);
    } catch(error: any) {
        return abort(500, error.message)
    }
}