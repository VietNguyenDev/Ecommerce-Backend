import express from 'express';
import { addItemToCart } from '../controller/Cart/addItemToCart.controller';
import { deleteCart } from '../controller/Cart/deleteCart.controller';
import { emptyCart } from '../controller/Cart/emptyCart.controller';
import { getCart } from '../controller/Cart/getCart.controller';
import { updateCart } from '../controller/Cart/updateCart.controller';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/cart/:userId', auth, getCart);
router.post('/cart', auth, addItemToCart);
router.put('/cart/:id', auth,  updateCart);
router.post('/cart/:id', auth,  deleteCart);
router.post('/cart/empty/:userId',auth,  emptyCart);

export default router;
