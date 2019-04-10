import { createConnection } from "typeorm";
import { config, DIALECT } from "../config";

export const Connection = createConnection({
    database: config.DATABASE.DB,
    entities: [
        "app/*/models/*",
    ],
    host: config.DATABASE.SERVER,
    logging: false,
    password: config.DATABASE.PASSWORD,
    port: config.DATABASE.PORT_DB,
    synchronize: false,
    type: DIALECT,
    username: config.DATABASE.USER_DB,
});
