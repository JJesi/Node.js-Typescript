import * as express from "express";
import * as JWT from "jsonwebtoken";
import { config } from "../../../config";

export class JWTService {

    public static signToken(params: { name: string, role: string }, options?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            JWT.sign(params, config.SECRET, options || undefined, (err, token) => {
                if (err) {
                    reject(err);
                }
                resolve(token);
            });
        });
    }
}
