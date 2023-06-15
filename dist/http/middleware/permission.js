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
const Role_1 = require("../enums/Role");
const error_1 = require("../helper/error");
const db_1 = __importDefault(require("../model/db"));
const permission = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body.user;
        const userModel = yield db_1.default.models.User.findOne({ where: { id: user.id }, attributes: ['role'] });
        const role = userModel ? userModel.getDataValue('role') : null;
        if (role == Role_1.Role.USER) {
            return res.status(403).send({
                message: "No permission to access this resource"
            });
        }
        next();
    }
    catch (error) {
        return (0, error_1.abort)(error.status, error.message);
    }
});
exports.default = permission;
//# sourceMappingURL=permission.js.map