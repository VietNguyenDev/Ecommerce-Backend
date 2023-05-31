import express from 'express';
import { getAllProducts } from '../controller/Product/getAllProduct.controller';
import { createProduct } from '../controller/Product/createProduct.controller';
import { updateProduct } from '../controller/Product/updateProduct.controller';

const router = express.Router();

router.get('/products', getAllProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.post('/products/:id', updateProduct);

export default router;