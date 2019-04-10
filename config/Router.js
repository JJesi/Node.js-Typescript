"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("express-jwt");
const user_route_1 = require("../app/user/routes/user.route");
const product_route_1 = require("../app/product/routes/product.route");
const config_1 = require("../config");
exports.ROUTER = [
    {
        handler: user_route_1.UserRoute,
        middleware: [],
        path: "/user",
    },
    {
        handler: product_route_1.ProductRoute,
        middleware: [
            jwt({ secret: config_1.config.SECRET }),
        ],
        path: "/product",
    },
];
//# sourceMappingURL=Router.js.map