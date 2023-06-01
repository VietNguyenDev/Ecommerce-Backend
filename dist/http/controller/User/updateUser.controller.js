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
const user_service_1 = __importDefault(require("../../service/user.service"));
const error_1 = require("../../helper/error");
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const parsedId = parseInt(id, 10);
            const { fullName, phoneNumber, dateOfBirth, address, gender, image } = req.body;
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