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
const bcrypt_1 = __importDefault(require("bcrypt"));
const error_1 = require("../helper/error");
const jwt_1 = require("../helper/jwt");
function signIn(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const findUser = yield model_1.default.models.User.findOne({ where: { email: email } });
            if (findUser) {
                return (0, error_1.abort)(400, 'Email already exists');
            }
            const salt = parseInt(process.env.SALT, 10);
            const hashPassword = yield bcrypt_1.default.hash(password, salt);
            const data = yield model_1.default.models.User.create({
                email,
                password: hashPassword,
                role: 2,
                refreshToken: process.env.REFRESH_TOKEN
            });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
;
function logIn(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const findUser = yield model_1.default.models.User.findOne({ where: { email: email } });
            if (!findUser) {
                return (0, error_1.abort)(400, 'Email not found');
            }
            const isMatch = yield bcrypt_1.default.compare(password, findUser.password);
            if (!isMatch) {
                return (0, error_1.abort)(400, 'Password is incorrect');
            }
            const accessToken = yield (0, jwt_1.generateToken)({ id: findUser.id });
            return accessToken;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
;
exports.default = { signIn, logIn };
//# sourceMappingURL=auth.service.js.map