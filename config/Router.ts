import * as express from "express";
import * as jwt from "express-jwt";
import {UserRoute} from "../app/user/routes/user.route";
import {ProductRoute} from "../app/product/routes/product.route";
import {config} from "../config";

interface IROUTER {
    path: string;
    middleware: any[];
    handler: express.Router;
}

export const ROUTER: IROUTER[] = [
    {
        handler: UserRoute,
        middleware: [],
        path: "/user",
    },
    {
        handler: ProductRoute,
        middleware: [
            jwt({secret: config.SECRET}),
        ],
        path: "/product",
    },
];
