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
const product_service_1 = __importDefault(require("./product.service"));
function createFavorite({ userId, productId }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield product_service_1.default.getProductById(productId);
            const favorite = yield model_1.default.models.Favorite.findOne({ where: { productId: productId } });
            if (favorite) {
                return (0, error_1.abort)(400, "Product already exists in favorite list");
            }
            const result = yield model_1.default.models.Favorite.create({ userId, productId });
            return result;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function getFavoriteByUserId(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield model_1.default.models.Favorite.findOne({ where: { userId: userId } });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
function deleteFavorite(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const favorite = yield model_1.default.models.Favorite.findByPk(id);
            if (!favorite) {
                return (0, error_1.abort)(404, "Favorite not found");
            }
            const data = yield model_1.default.models.Favorite.destroy({ where: { id: id } });
            return data;
        }
        catch (error) {
            return (0, error_1.abort)(500, error.message);
        }
    });
}
exports.default = { createFavorite, getFavoriteByUserId, deleteFavorite };
//# sourceMappingURL=favorite.service.js.map