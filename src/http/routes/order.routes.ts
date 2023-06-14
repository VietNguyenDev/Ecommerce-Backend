import express from 'express';
import { getOrderDetailById } from '../controller/Order/getOrderDetailById.controller';
import { getOrderById } from '../controller/Order/getOrderById.controller';
import { createOrder } from '../controller/Order/createOrder.controller';
import { getAllOrders } from '../controller/Order/getAllOrders.controller';
import { getAllOrdersByUserId } from '../controller/Order/getAllOrdersByUserId.controller';
import { updateStatus } from '../controller/Order/updateStatus.controller';

const router = express.Router();

router.post('/order/:userId', createOrder);
router.get('/order', getAllOrders);
router.get('/order/user/:userId', getAllOrdersByUserId);
router.get('/order/:id', getOrderById);
router.get('/order/detail/:orderId', getOrderDetailById);
router.put('/order/status/:orderId', updateStatus);

export default router;