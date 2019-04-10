import * as express from "express";
import * as crypto from "crypto";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import * as JWT from "jsonwebtoken";
import {config} from "../../../config";

export class UserController {
    // Get All User List
    public static async UserList(req: express.Request, res: express.Response) {
        console.log("AM in User list:");
        try {
            const userData = await UserService.Find();
            if (userData) {
                const Result    = userData;
                return res.status(200).send({message: "Users List", result: Result});
            } else {
                return res.status(400).send({message: "Users Not Found"});
            }
        } catch (ex) {
            console.log(ex);
            return res.status(404).send({text: "ERROR"});
        }
    }
    // Create New User
    public static async Create(req: express.Request, res: express.Response) {
        const user = new User();
        user.userName = req.body.name;
        user.mobileNo = req.body.mobileNo;
        user.email    = req.body.email;
        user.password = crypto.pbkdf2Sync(
            req.body.password, new Buffer("x!123$$$", "base64"), 10000, 64, "sha256").toString("base64");
        try {
            console.log(req.body);
            const Result = await UserService.Save(user);
            return res.status(200).send({message : "New User Created Successfully.", resultData: Result});
        } catch (ex) {
            console.log(ex);
            return res.status(404).send({text: "ERROR"});
        }
    }

    public static async Login(req: express.Request, res: express.Response) {
        const user = new User();
        user.mobileNo = req.body.mobileNo;
        console.log("Am in Login" + req.body.name);
        user.password = crypto.pbkdf2Sync(
            req.body.password, new Buffer("x!123$$$", "base64"), 10000, 64, "sha256").toString("base64");

        try {
            const Result = await UserService.Login(req.body.mobileNo);
            console.log(Result);
            const password = crypto.pbkdf2Sync(
                req.body.password, new Buffer("x!123$$$", "base64"), 10000, 64, "sha256").toString("base64");
            if (password === Result.password) {
                const jwtpayload: any = {};
                jwtpayload.id = Result.id;
                JWT.sign(jwtpayload, config.SECRET, undefined, (err, token) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).send({text: "ERROR"});
                    }
                    const returnParam: any = Result;
                    returnParam.token = token;
                    return res.status(200).send(returnParam);
                });
            } else {
                return res.status(400).send({message: "Invalid username and password"});
            }
            // return res.status(200).send(Result);
        } catch (ex) {
            console.log(ex);
            return res.status(404).send({text: "ERROR"});
        }
    }

    public static async Update(req: express.Request, res: express.Response) {
        const id: number = req.params.userId;
        console.log("AM in update:" + req.params.userId);
        try {
            if (id) {
                const userData = await UserService.FindOne(id);
                if (userData) {
                    userData.userName   = req.body.userName;
                    userData.mobileNo   = req.body.mobileNo;
                    userData.email      = req.body.userEmail;
                    const Result        = await UserService.Save(userData);
                    return res.status(200).send(Result);
                } else {
                    return res.status(400).send({message: "Invalid UserId"});
                }
            }
        } catch (ex) {
            console.log(ex);
            return res.status(404).send({text: "ERROR"});
        }
    }

    public static async getOneUser(req: express.Request, res: express.Response) {
        const id: number = req.params.userId;
        console.log("AM in get:" + id);
        try {
            const userData = await UserService.FindOne(id);
            if (userData) {
                const Result    = userData;
                return res.status(200).send(Result);
            } else {
                return res.status(400).send({message: "Invalid UserId"});
            }
        } catch (ex) {
            console.log(ex);
            return res.status(404).send({text: "ERROR"});
        }
    }
    public static async removeUser(req: express.Request, res: express.Response) {
        const id: number = req.params.userId;
        console.log("AM in delete:" + id);
        try {
            const userData = await UserService.RemoveById(id);
            if (userData) {
                const Result    = userData;
                return res.status(200).send({message: "This user data deleted successfully!", result: Result});
            } else {
                return res.status(400).send({message: "User Not Found"});
            }
        } catch (ex) {
            console.log(ex);
            return res.status(404).send({text: "ERROR"});
        }
    }

}
