"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("../models/product.model");
const user_model_1 = require("../models/user.model");
const product_service_1 = require("../services/product.service");
class ProductController {
    static All(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ProductList = yield product_service_1.ProductService.Find();
            return res.send(ProductList);
        });
    }
    static Find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const product = yield product_service_1.ProductService.FindOneById(id);
            return product ? res.status(200).send(product) : res.status(404).send({ text: "NOT FOUND" });
        });
    }
    static Create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = new product_model_1.Product();
            product.name = req.body.name;
            product.desc = req.body.description;
            try {
                const Result = yield product_service_1.ProductService.Save(product);
                return res.status(200).send(Result);
            }
            catch (ex) {
                return res.status(404).send({ text: "ERROR" });
            }
        });
    }
    static Update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = new product_model_1.Product();
            product.id = req.params.id;
            product.name = req.body.name;
            product.desc = req.body.description;
            try {
                const Result = yield product_service_1.ProductService.Save(product);
                return Result ? res.status(200).send() : res.status(404).send({ text: "NOT FOUND" });
            }
            catch (ex) {
                return res.status(404).send({ text: "ERROR" });
            }
        });
    }
    static Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                yield product_service_1.ProductService.RemoveById(id);
                return res.status(204).send();
            }
            catch (ex) {
                return res.status(404).send({ text: "ERROR" });
            }
        });
    }
    static addProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_model_1.User();
            user.id = req.body.userId;
            const product = new product_model_1.Product();
            product.name = req.body.name;
            product.desc = req.body.desc;
            product.user = user;
            try {
                const ProductResult = yield product_service_1.ProductService.Save(product);
                console.log("Am In NewProduct:" + ProductResult);
                if (ProductResult) {
                    return res.status(200).send({ message: "New Product Created Successfully!!", result: ProductResult });
                }
                else {
                    res.status(404).send({ text: "NOT FOUND" });
                }
            }
            catch (ex) {
                return res.status(404).send({ text: "ERROR" });
            }
        });
    }
    static userProductList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_model_1.User();
            user.id = req.params.userID;
            console.log(req.params.userID);
            try {
                const ProductResult = yield product_service_1.ProductService.FindProductByUserId(req.params.userID);
                console.log("Am In User Product List:" + ProductResult.userId);
                if (ProductResult) {
                    return res.status(200).send({ message: "Successfully Get User Product List !!", result: ProductResult });
                }
                else {
                    res.status(404).send({ text: "NOT FOUND" });
                }
            }
            catch (ex) {
                return res.status(404).send({ text: "ERROR" });
            }
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map