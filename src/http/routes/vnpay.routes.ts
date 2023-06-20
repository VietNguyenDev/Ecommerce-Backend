import express from 'express';
import createPaymentUrl from '../controller/VNPay/createPaymentUrl.controller';
import querydr from '../controller/VNPay/querydr.controller';
import refund from '../controller/VNPay/refund.controller';
import vnpayReturn from '../controller/VNPay/vnpayReturn.controller';
import vnpIPN from '../controller/VNPay/vnpIPN.controller';

const router = express.Router();

router.post('/vnpay/create-payment-url', createPaymentUrl);
router.post('/vnpay/querydr', querydr);
router.post('/vnpay/refund', refund);
router.get('/vnpay/return', vnpayReturn);
router.post('/vnpay/ipn', vnpIPN);

export default router;