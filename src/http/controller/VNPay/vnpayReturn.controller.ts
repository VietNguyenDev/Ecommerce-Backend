import { Request, Response } from 'express';
import config from 'config';
import querystring from 'qs';
import crypto from 'crypto';

function sortObject(obj: { [key: string]:any }) {
	let sorted: {[key: string] :any} = {};
	let str = [];
	let key;
	for (key in obj){
		if (obj.hasOwnProperty(key)) {
		str.push(encodeURIComponent(key));
		}
	}
	str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}

function vnpayReturn(req: Request, res: Response) {
    let vnp_Params: { [key: string]:any } = req.query;
    let secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    let tmnCode = config.get('vnp_TmnCode');
    let secretKey: string = config.get('vnp_HashSecret');

    let signData = querystring.stringify(vnp_Params, { encode: false });
    let hmac = crypto.createHmac('sha512', secretKey);
    let signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

    if(signed === secureHash){
        //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
        res.render('success', {code: vnp_Params['vnp_ResponseCode']});
    } else {
        res.render('success', {code: '97'});
    }
}

export default vnpayReturn;