import { Request } from 'express';
import moment from 'moment';
import config from 'config';
import request, { CoreOptions, RequestCallback, Response} from 'request';
import querystring from 'qs';
import crypto from 'crypto';

function querydr(req: Request, res: Response) {
    try {
        process.env.TZ = 'Asia/Ho_Chi_Minh';
    const date = new Date();

    let vnp_TmnCode = config.get('vnp_TmnCode');
    let secretKey: string = config.get('vnp_HashSecret');
    let vnp_Api = config.get('vnp_Api');

    let vnp_TxnRef = req.body.orderId;
    let vnp_TransactionDate = req.body.transDate;

    let vnp_RequestId = moment(date).format('HHmmss');
    let vnp_Version = '2.1.0';
    let vnp_Command = 'querydr';
    let vnp_OrderInfo = 'Truy van GD ma:' + vnp_TxnRef;

    let vnp_IpAddr: string | undefined = req.headers['x-forwarded-for'] as string || req.connection.remoteAddress || req.socket.remoteAddress 

    let currCode = 'VND';
    let vnp_CreateDate = moment(date).format('YYYYMMDDHHmmss');
    
    let data = vnp_RequestId + "|" + vnp_Version + "|" + vnp_Command + "|" + vnp_TmnCode + "|" + vnp_TxnRef + "|" + vnp_TransactionDate + "|" + vnp_CreateDate + "|" + vnp_IpAddr + "|" + vnp_OrderInfo;
    
    let hmac = crypto.createHmac("sha512", secretKey);
    let vnp_SecureHash = hmac.update(new Buffer(data, 'utf-8')).digest("hex");

    let dataObj = {
        'vnp_RequestId': vnp_RequestId,
        'vnp_Version': vnp_Version,
        'vnp_Command': vnp_Command,
        'vnp_TmnCode': vnp_TmnCode,
        'vnp_TxnRef': vnp_TxnRef,
        'vnp_OrderInfo': vnp_OrderInfo,
        'vnp_TransactionDate': vnp_TransactionDate,
        'vnp_CreateDate': vnp_CreateDate,
        'vnp_IpAddr': vnp_IpAddr,
        'vnp_SecureHash': vnp_SecureHash
    };

    const option : any = {
        url: vnp_Api,
        method: 'POST',
        json: true,
        body: dataObj
    }

    return option

    // request(option, function (error: any, response: Response){
    //         console.log(response);
    //     }
    // );
    } catch (error: any) {
        console.log(error);
    }

}

export default querydr;