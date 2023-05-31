"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const databaseConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Nguyenviet2510",
    DB: "ecommerce",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
exports.default = databaseConfig;
//# sourceMappingURL=db.config.js.map