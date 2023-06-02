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
exports.createFavorite = void 0;
const favorite_service_1 = __importDefault(require("../../service/favorite.service"));
const error_1 = require("../../helper/error");
function createFavorite(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId, productId } = req.body;
            const data = yield favorite_service_1.default.createFavorite({ userId, productId });
            return res.status(200).json({
                message: "Create favorite successfully",
                data: data
            });
        }
        catch (error) {
            return (0, error_1.abort)(error.status, error.message);
        }
    });
}
exports.createFavorite = createFavorite;
//# sourceMappingURL=createFavorite.controller.js.map