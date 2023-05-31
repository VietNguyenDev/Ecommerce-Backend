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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.abort = void 0;
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        Object.setPrototypeOf(this, AppError.prototype);
        Error.captureStackTrace(this, this.constructor);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
    }
}
const abort = (status, message) => {
    throw new AppError(message, status);
};
exports.abort = abort;
const handleError = (func) => {
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield func(req, res, next);
        }
        catch (error) {
            if (!error.status) {
                error.status = 500;
            }
            res.status(error.status).json({
                message: error.message //Something error
            });
        }
    });
};
exports.handleError = handleError;
//# sourceMappingURL=error.js.map