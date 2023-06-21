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

function vnpIPN(req: Request, res: Response) {
    let vnp_Params: { [key: string]:any } = req.query;
    let secureHash = vnp_Params['vnp_SecureHash'];

    let orderId = vnp_Params['vnp_TxnRef'];
    let rspCode = vnp_Params['vnp_ResponseCode'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);
    let secretKey: string = config.get('vnp_HashSecret');
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let hmac = crypto.createHmac('sha512', secretKey);
    let signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

    let paymentStatus = '0';
    // Giả sử '0' là trạng thái khởi tạo giao dịch, chưa có IPN. Trạng thái này được lưu khi yêu cầu thanh toán chuyển hướng sang Cổng thanh toán VNPAY tại đầu khởi tạo đơn hàng.
    //let paymentStatus = '1'; // Giả sử '1' là trạng thái thành công bạn cập nhật sau IPN được gọi và trả kết quả về nó
    //let paymentStatus = '2'; // Giả sử '2' là trạng thái thất bại bạn cập nhật sau IPN được gọi và trả kết quả về nó

    let checkOrderId = true; // Mã đơn hàng "giá trị của vnp_TxnRef" VNPAY phản hồi tồn tại trong CSDL của bạn
    let checkAmount = true; // Kiểm tra số tiền "giá trị của vnp_Amout/100" trùng khớp với số tiền của đơn hàng trong CSDL của bạn

    if(signed === secureHash){ //Kiểm tra checksum
        if(checkOrderId){
            if(checkAmount){
                if(paymentStatus == "0") {//kiểm tra tình trạng giao dịch trước khi cập nhật tình trạng thanh toán
                    if(rspCode == "00") {
                        //thanh cong
                        //paymentStatus = '1'
                        // Ở đây cập nhật trạng thái giao dịch thanh toán thành công vào CSDL của bạn
                        res.status(200).json({RspCode: '00', Message: 'Success'})
                    } else {
                        //that bai
                        //paymentStatus = '2'
                        // Ở đây cập nhật trạng thái giao dịch thanh toán thất bại vào CSDL của bạn
                        res.status(200).json({RspCode: '00', Message: 'Success'})
                    }
                } else {
                    res.status(200).json({RspCode: '02', Message: 'This order has been updated to the payment status'})
                }
            } else {
                res.status(200).json({RspCode: '04', Message: 'Amount invalid'})
            }
        } else {
            res.status(200).json({RspCode: '01', Message: 'Order not found'})
        }
    } else {
        res.status(200).json({RspCode: '97', Message: 'Invalid checksum'})
    }
}

export default vnpIPN;