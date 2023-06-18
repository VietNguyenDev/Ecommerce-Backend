import { Request, Response } from 'express';
import moment from 'moment';
import config from 'config';
import querystring from 'qs';
import crypto from 'crypto';

function querydr(req: Request, res: Response) {
    process.env.TZ = 'Asia/Ho_Chi_Minh';
    const date = new Date();

    let tmnCode = config.get('vnp_TmnCode');
    let secretKey: string = config.get('vnp_HashSecret');
    let vnp_Api = config.get('vnp_Api');

    let vnp_TxnRef = req.body.orderId;
    let vnp_TransactionDate = req.body.transDate;

    let vnp_RequestId = moment(date).format('HHmmss');
    let vnp_Version = '2.1.0';
    let vnp_Command = 'querydr';
    let vnp_OrderInfo = 'Truy van GD ma:' + vnp_TxnRef;

    let vnp_IpAddr: string | undefined = req.headers['x-forwarded-for'] as string || req.connection.remoteAddress || req.socket.remoteAddress 

    
}