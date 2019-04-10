"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Jwt_service_1 = require("../services/Jwt.service");
class JWTController {
    static Index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = req.body.payload;
            const token = yield Jwt_service_1.JWTService.signToken(payload);
            return res.send(token);
        });
    }
}
exports.JWTController = JWTController;
//# sourceMappingURL=Jwt.controller.js.map