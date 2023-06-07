"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signIn_controller_1 = require("../controller/Auth/signIn.controller");
const logIn_controller_1 = require("../controller/Auth/logIn.controller");
const router = express_1.default.Router();
router.post('/sign-in', signIn_controller_1.signIn);
router.post('/log-in', logIn_controller_1.logIn);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map