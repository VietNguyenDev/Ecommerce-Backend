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
exports.auth = void 0;
const jwt_1 = require("../helper/jwt");
const user_model_1 = __importDefault(require("../model/user.model"));
function getUser(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const authorization = req.headers.authorization || '';
        if (authorization === '')
            return false;
        //kiểm tra kiểu authorization
        if (!authorization.startsWith('Bearer '))
            return false;
        //lấy token
        const token = authorization.slice(7, authorization.length);
        //revert token to user
        const payload = yield (0, jwt_1.verifyToken)(token);
        if (payload === false)
            return false;
        //tìm user theo id
        const user = yield user_model_1.default.findOne({ where: { id: payload.id } });
        if (!user)
            return false;
        return user;
    });
}
function auth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield getUser(req);
        //Check if user is logged in
        if (!user) {
            return res.status(401).send({
                message: 'You must be logged in',
            });
        }
        req.body.user = user;
        return next();
    });
}
exports.auth = auth;
//# sourceMappingURL=auth.js.map