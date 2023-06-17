import express from 'express';
import { getAllProducts } from '../controller/Product/getAllProduct.controller';
import { createProduct } from '../controller/Product/createProduct.controller';
import { updateProduct } from '../controller/Product/updateProduct.controller';
import { deleteProduct } from '../controller/Product/deleteProduct.controller';
import { auth } from '../middleware/auth';
import permission from '../middleware/permission';
import upload from '../middleware/uploadImage';

const router = express.Router();
//get product
router.get('/products', getAllProducts);
//create product
router.post('/products',
    auth, 
    permission,
    upload.single('images'),
    createProduct
    );
router.put('/products/:id', auth, permission, updateProduct);
router.post('/products/:id', auth, permission, deleteProduct);

export default router;