"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShipping = void 0;
const joi_1 = __importDefault(require("joi"));
const shipping_service_1 = __importDefault(require("../../service/shipping.service"));
const error_1 = require("../../helper/error");
function validate(userId, fullName, address, province, district, ward, postcode, phone) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const schema = joi_1.default.object({
                userId: joi_1.default.number().min(0).required(),
                fullName: joi_1.default.string().required(),
                address: joi_1.default.string().required(),
                province: joi_1.default.string().required(),
                district: joi_1.default.string().required(),
                ward: joi_1.default.string().required(),
                postcode: joi_1.default.string().required(),
                phone: joi_1.default.string().required(),
            });
            return schema.validateAsync({ userId, fullName, address, province, district, ward, postcode, phone });
        }
        catch (error) {
            return (0, error_1.abort)(400, 'Validate error');
        }
    });
}
function createShipping(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId, fullName, address, province, district, ward, postcode, phone } = req.body;
            yield validate(userId, fullName, address, province, district, ward, postcode, phone);
            const data = yield shipping_service_1.default.createShipping({ userId, fullName, address, province, district, ward, postcode, phone });
            return res.status(200).send({
                message: "Create shipping successfully",
                data: data
            });
        }
        catch (error) {
            return (0, error_1.abort)(error.status, error.message);
        }
    });
}
exports.createShipping = createShipping;
//# sourceMappingURL=createShipping.controller.js.map