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
exports.logIn = void 0;
const joi_1 = __importDefault(require("joi"));
const error_1 = require("../../helper/error");
const auth_service_1 = __importDefault(require("../../service/auth.service"));
function validate(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const schema = joi_1.default.object({
                email: joi_1.default.string().email().required(),
                password: joi_1.default.string().min(6).required()
            });
            return schema.validateAsync({ email, password });
        }
        catch (error) {
            return (0, error_1.abort)(400, 'Validate error');
        }
    });
}
function logIn(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            yield validate(email, password);
            const data = yield auth_service_1.default.logIn(email, password);
            return res.status(200).json({
                message: 'User logged in successfully',
                data: data
            });
        }
        catch (error) {
            return (0, error_1.abort)(error.status, error.message);
        }
    });
}
exports.logIn = logIn;
;
//# sourceMappingURL=logIn.controller.js.map