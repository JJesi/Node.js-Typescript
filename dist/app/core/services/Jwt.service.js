"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JWT = require("jsonwebtoken");
const config_1 = require("../../../config");
class JWTService {
    static signToken(params, options) {
        return new Promise((resolve, reject) => {
            JWT.sign(params, config_1.config.SECRET, options || undefined, (err, token) => {
                if (err) {
                    reject(err);
                }
                resolve(token);
            });
        });
    }
}
exports.JWTService = JWTService;
//# sourceMappingURL=Jwt.service.js.map