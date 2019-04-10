import * as express from "express";

export function CheckCreate(req: express.Request, res: express.Response, next: express.NextFunction) {
    req.body.name && typeof req.body.name === "string" ? next() : res.status(404).send({text: "ERROR"});
}

export function CheckUpdate(req: express.Request, res: express.Response, next: express.NextFunction) {
    req.params.id && req.body.name && typeof req.params.id === "number" && typeof req.body.name === "string" ?
        next() : res.status(404).send({text: "ERROR"});
}

export function CheckDelete(req: express.Request, res: express.Response, next: express.NextFunction) {
    req.params.id && typeof req.params.id === "number" ? next() : res.status(404).send({text: "ERROR"});
}
