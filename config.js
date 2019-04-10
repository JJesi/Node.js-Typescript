"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
exports.DIALECT = "mysql";
const LOCAL_CONFIGURATION = {
    DB: "typeScript_test_db",
    PASSWORD: "welcome123$",
    PORT_DB: 3306,
    SERVER: "127.0.0.1",
    USER_DB: "root",
};
const PRODUCTION_CONFIGURATION = {
    DB: process_1.env.DB || "typeScript_test_db",
    PASSWORD: process_1.env.PASSWORD || "welcome123$",
    PORT_DB: Number(process_1.env.PORT_DB) || 3306,
    SERVER: process_1.env.SERVER || "localhost",
    USER_DB: process_1.env.USER_DB || "root",
};
exports.config = {
    DATABASE: process_1.env.NODE_ENV === "PRODUCTION" ? PRODUCTION_CONFIGURATION : LOCAL_CONFIGURATION,
    PORT_APP: 3000,
    SECRET: "HltH3R3",
};
//# sourceMappingURL=config.js.map