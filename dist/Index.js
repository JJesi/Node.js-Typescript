"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cluster = require("cluster");
const os_1 = require("os");
const process_1 = require("process");
const config_1 = require("./config");
const Server_1 = require("./config/Server");
if (cluster.isMaster) {
    console.log(`\n -------------------> RUN ${process_1.env.NODE_ENV} ENVIRONMENT \n`);
    for (const cpu of os_1.cpus()) {
        cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
        console.log("Worker " + worker.process.pid + " died with code: " + code + ", and signal: " + signal);
        console.log("Starting a new worker");
        cluster.fork();
    });
}
else {
    const port = Number(process_1.env.PORT) || config_1.config.PORT_APP || 3000;
    new Server_1.Server().Start().then((server) => {
        server.listen(port);
        server.on("error", (error) => {
            if (error.syscall !== "listen") {
                throw error;
            }
            switch (error.code) {
                case "EACCES":
                    console.error("Port requires elevated privileges");
                    process.exit(1);
                    break;
                case "EADDRINUSE":
                    console.error("Port is already in use");
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        });
        server.on("listening", () => {
            console.log("Server is running in process " + process.pid + " listening on PORT " + port + "\n");
        });
    });
}
//# sourceMappingURL=Index.js.map