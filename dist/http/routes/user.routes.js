"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAllUser_controller_1 = require("../controller/User/getAllUser.controller");
const getUserById_controller_1 = require("../controller/User/getUserById.controller");
const updateUser_controller_1 = require("../controller/User/updateUser.controller");
const deleteUser_controller_1 = require("../controller/User/deleteUser.controller");
const router = express_1.default.Router();
router.get('/user', getAllUser_controller_1.getAllUser);
router.get('/user/:id', getUserById_controller_1.getUserById);
router.put('/user/:id', updateUser_controller_1.updateUser);
router.delete('/user/:id', deleteUser_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map