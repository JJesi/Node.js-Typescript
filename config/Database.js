"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("../config");
exports.Connection = typeorm_1.createConnection({
    database: config_1.config.DATABASE.DB,
    entities: [
        "app/*/models/*",
    ],
    host: config_1.config.DATABASE.SERVER,
    logging: false,
    password: config_1.config.DATABASE.PASSWORD,
    port: config_1.config.DATABASE.PORT_DB,
    synchronize: false,
    type: config_1.DIALECT,
    username: config_1.config.DATABASE.USER_DB,
});
//# sourceMappingURL=Database.js.map