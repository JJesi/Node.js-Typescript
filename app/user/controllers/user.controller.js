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
const crypto = require("crypto");
const user_model_1 = require("../models/user.model");
const user_service_1 = require("../services/user.service");
const JWT = require("jsonwebtoken");
const config_1 = require("../../../config");
class UserController {
    // Get All User List
    static UserList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("AM in User list:");
            try {
                const userData = yield user_service_1.UserService.Find();
                if (userData) {
                    const Result = userData;
                    return res.status(200).send({ message: "Users List", result: Result });
                }
                else {
                    return res.status(400).send({ message: "Users Not Found" });
                }
            }
            catch (ex) {
                console.log(ex);
                return res.status(404).send({ text: "ERROR" });
            }
        });
    }
    // Create New User
    static Create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_model_1.User();
            user.userName = req.body.name;
            user.mobileNo = req.body.mobileNo;
            user.email = req.body.email;
            user.password = crypto.pbkdf2Sync(req.body.password, new Buffer("x!123$$$", "base64"), 10000, 64, "sha256").toString("base64");
            try {
                console.log(req.body);
                const Result = yield user_service_1.UserService.Save(user);
                return res.status(200).send({ message: "New User Created Successfully.", resultData: Result });
            }
            catch (ex) {
                console.log(ex);
                return res.status(404).send({ text: "ERROR" });
            }
        });
    }
    static Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_model_1.User();
            user.mobileNo = req.body.mobileNo;
            console.log("Am in Login" + req.body.name);
            user.password = crypto.pbkdf2Sync(req.body.password, new Buffer("x!123$$$", "base64"), 10000, 64, "sha256").toString("base64");
            try {
                const Result = yield user_service_1.UserService.Login(req.body.mobileNo);
                console.log(Result);
                const password = crypto.pbkdf2Sync(req.body.password, new Buffer("x!123$$$", "base64"), 10000, 64, "sha256").toString("base64");
                if (password === Result.password) {
                    const jwtpayload = {};
                    jwtpayload.id = Result.id;
                    JWT.sign(jwtpayload, config_1.config.SECRET, undefined, (err, token) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).send({ text: "ERROR" });
                        }
                        const returnParam = Result;
                        returnParam.token = token;
                        return res.status(200).send(returnParam);
                    });
                }
                else {
                    return res.status(400).send({ message: "Invalid username and password" });
                }
                // return res.status(200).send(Result);
            }
            catch (ex) {
                console.log(ex);
                return res.status(404).send({ text: "ERROR" });
            }
        });
    }
    static Update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.userId;
            console.log("AM in update:" + req.params.userId);
            try {
                if (id) {
                    const userData = yield user_service_1.UserService.FindOne(id);
                    if (userData) {
                        userData.userName = req.body.userName;
                        userData.mobileNo = req.body.mobileNo;
                        userData.email = req.body.userEmail;
                        const Result = yield user_service_1.UserService.Save(userData);
                        return res.status(200).send(Result);
                    }
                    else {
                        return res.status(400).send({ message: "Invalid UserId" });
                    }
                }
            }
            catch (ex) {
                console.log(ex);
                return res.status(404).send({ text: "ERROR" });
            }
        });
    }
    static getOneUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.userId;
            console.log("AM in get:" + id);
            try {
                const userData = yield user_service_1.UserService.FindOne(id);
                if (userData) {
                    const Result = userData;
                    return res.status(200).send(Result);
                }
                else {
                    return res.status(400).send({ message: "Invalid UserId" });
                }
            }
            catch (ex) {
                console.log(ex);
                return res.status(404).send({ text: "ERROR" });
            }
        });
    }
    static removeUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.userId;
            console.log("AM in delete:" + id);
            try {
                const userData = yield user_service_1.UserService.RemoveById(id);
                if (userData) {
                    const Result = userData;
                    return res.status(200).send({ message: "This user data deleted successfully!", result: Result });
                }
                else {
                    return res.status(400).send({ message: "User Not Found" });
                }
            }
            catch (ex) {
                console.log(ex);
                return res.status(404).send({ text: "ERROR" });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map