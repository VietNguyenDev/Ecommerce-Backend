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
const model_1 = __importDefault(require("../model"));
const error_1 = require("../helper/error");
function createShipping({ userId, fullName, address, province, district, ward, postcode, phone }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shipping = yield model_1.default.models.Shipping.create({ userId, fullName, address, province, district, ward, postcode, phone });
            return shipping;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function getShippingByUserId(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shipping = yield model_1.default.models.Shipping.findOne({
                where: {
                    userId: userId,
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            });
            return shipping;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function updateShipping(id, { fullName, address, province, district, ward, postcode, phone }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shipping = yield model_1.default.models.Shipping.findByPk(id);
            if (!shipping) {
                return (0, error_1.abort)(404, "Shipping not found");
            }
            const data = yield model_1.default.models.Shipping.update({ fullName, address, province, district, ward, postcode, phone }, { where: { id: id } });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function deleteShipping(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shipping = yield model_1.default.models.Shipping.findByPk(id);
            if (!shipping) {
                return (0, error_1.abort)(404, "Shipping not found");
            }
            const data = yield model_1.default.models.Shipping.destroy({ where: { id: id } });
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
exports.default = { createShipping, getShippingByUserId, updateShipping, deleteShipping };
//# sourceMappingURL=shipping.service.js.map