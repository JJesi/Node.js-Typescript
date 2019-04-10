"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function anyCheck(req, res, next) {
    const value = "this";
    const value2 = "this";
    value === value2 ? next() : res.json({ error: "error anyCheck" });
}
exports.anyCheck = anyCheck;
function anyCheckTwo(req, res, next) {
    const value = "this";
    const value2 = "this";
    value === value2 ? next() : res.json({ error: "error anyCheck" });
}
exports.anyCheckTwo = anyCheckTwo;
function CheckCreate(req, res, next) {
    req.body.text && typeof req.body.text === "string" ? next() : res.status(404).send({ text: "ERROR" });
}
exports.CheckCreate = CheckCreate;
function CheckUpdate(req, res, next) {
    req.body.id && req.body.text && typeof req.body.id === "number" && typeof req.body.text === "string" ?
        next() : res.status(404).send({ text: "ERROR" });
}
exports.CheckUpdate = CheckUpdate;
function CheckDelete(req, res, next) {
    req.body.id && typeof req.body.id === "number" ? next() : res.status(404).send({ text: "ERROR" });
}
exports.CheckDelete = CheckDelete;
//# sourceMappingURL=user.middleware.js.map