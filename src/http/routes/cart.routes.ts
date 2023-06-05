import express from 'express';
import { addItemToCart } from '../controller/Cart/addItemToCart.controller';
import { deleteCart } from '../controller/Cart/deleteCart.controller';
import { emptyCart } from '../controller/Cart/emptyCart.controller';
import { getCart } from '../controller/Cart/getCart.controller';
import { updateCart } from '../controller/Cart/updateCart.controller';

const router = express.Router();

router.get('/cart/:userId', getCart);
router.post('/cart', addItemToCart);
router.put('/cart/:id', updateCart);
router.post('/cart/:id', deleteCart);
router.post('/cart/empty/:userId', emptyCart);

export default router;
