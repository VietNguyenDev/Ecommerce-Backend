import express from 'express';
import { getAllProducts } from '../controller/Product/getAllProduct.controller';

const router = express.Router();

router.get('/products', getAllProducts);

export default router;