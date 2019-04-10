"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CheckCreate(req, res, next) {
    req.body.name && typeof req.body.name === "string" ? next() : res.status(404).send({ text: "ERROR" });
}
exports.CheckCreate = CheckCreate;
function CheckUpdate(req, res, next) {
    req.params.id && req.body.name && typeof req.params.id === "number" && typeof req.body.name === "string" ?
        next() : res.status(404).send({ text: "ERROR" });
}
exports.CheckUpdate = CheckUpdate;
function CheckDelete(req, res, next) {
    req.params.id && typeof req.params.id === "number" ? next() : res.status(404).send({ text: "ERROR" });
}
exports.CheckDelete = CheckDelete;
//# sourceMappingURL=product.middleware.js.map