import express from 'express';
import { createPaymentUrl } from '../controller/VNPay/createPaymentUrl.controller';

const router = express.Router();

router.post('/vnpay/create-payment-url', createPaymentUrl);

export default router;