"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const http = require("http");
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");
const Database_1 = require("./Database");
const Router_1 = require("./Router");
class Server {
    static ConnectDB() {
        return Database_1.Connection;
    }
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
    }
    Start() {
        return Server.ConnectDB().then(() => {
            this.ExpressConfiguration();
            this.ConfigurationRouter();
            return this.server;
        });
    }
    App() {
        return this.app;
    }
    ExpressConfiguration() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: "50mb" }));
        this.app.use(methodOverride());
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization");
            res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE,OPTIONS");
            next();
        });
        this.app.use(morgan("combined"));
        this.app.use(cors());
        this.app.use("/", express.static(path.resolve("./public")));
        this.app.use((err, req, res, next) => {
            err.status = 404;
            next(err);
        });
    }
    ConfigurationRouter() {
        for (const route of Router_1.ROUTER) {
            this.app.use("/api" + route.path, route.middleware, route.handler);
        }
        this.app.use((req, res, next) => {
            res.status(404);
            res.json({
                error: "Not found",
            });
            next();
        });
        this.app.use((err, req, res, next) => {
            if (err.name === "UnauthorizedError") {
                res.status(401).json({
                    error: "Please send a valid Token...",
                });
            }
            next();
        });
        this.app.use((err, req, res, next) => {
            res.status(err.status || 500);
            res.json({
                error: err.message,
            });
            next();
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map