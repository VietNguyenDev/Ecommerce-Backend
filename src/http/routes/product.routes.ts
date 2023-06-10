import express from 'express';
import { getAllProducts } from '../controller/Product/getAllProduct.controller';
import { createProduct } from '../controller/Product/createProduct.controller';
import { updateProduct } from '../controller/Product/updateProduct.controller';
import { deleteProduct } from '../controller/Product/deleteProduct.controller';
import { auth } from '../middleware/auth';
import permission from '../middleware/permission';

const router = express.Router();

router.get('/products', getAllProducts);
router.post('/products', auth, permission, createProduct);
router.put('/products/:id', auth, permission, updateProduct);
router.post('/products/:id', auth, permission, deleteProduct);

export default router;