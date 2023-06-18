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
exports.updateUser = void 0;
const joi_1 = __importDefault(require("joi"));
const user_service_1 = __importDefault(require("../../service/user.service"));
const error_1 = require("../../helper/error");
const cloudinary_1 = __importDefault(require("../../config/cloudinary"));
function validate(fullName, phoneNumber, dateOfBirth, address, gender, image) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const schema = joi_1.default.object({
                fullName: joi_1.default.string().required(),
                phoneNumber: joi_1.default.string().required(),
                dateOfBirth: joi_1.default.date().required(),
                address: joi_1.default.string().required(),
                gender: joi_1.default.number().min(1).max(2).required(),
                image: joi_1.default.string().required(),
            });
            return schema.validateAsync({ fullName, phoneNumber, dateOfBirth, address, gender, image });
        }
        catch (error) {
            return (0, error_1.abort)(400, 'Validate error');
        }
    });
}
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const parsedId = parseInt(id, 10);
            const { file } = req;
            const userImage = yield (0, cloudinary_1.default)(file === null || file === void 0 ? void 0 : file.path, file === null || file === void 0 ? void 0 : file.filename);
            const image = userImage.secure_url;
            const { fullName, phoneNumber, dateOfBirth, address, gender } = req.body;
            yield validate(fullName, phoneNumber, dateOfBirth, address, gender, image);
            const data = yield user_service_1.default.updateUser(parsedId, { fullName, phoneNumber, dateOfBirth, address, gender, image });
            return res.status(200).send({
                message: 'Update successfully',
                data: data
            });
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
exports.updateUser = updateUser;
//# sourceMappingURL=updateUser.controller.js.map