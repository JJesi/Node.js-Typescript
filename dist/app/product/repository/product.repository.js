"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const product_model_1 = require("../models/product.model");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
    bulkCreate(Products) {
        return this.manager.createQueryBuilder().insert().into(product_model_1.Product).values(Products).execute();
    }
    removeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const itemToRemove = yield this.findOne({ id });
            return this.manager.remove(itemToRemove);
        });
    }
    findByText(text) {
        return this.manager.find(product_model_1.Product, { where: { text } });
    }
    findOneById(id) {
        return this.manager.findOne(product_model_1.Product, { where: { id } });
    }
    findProductByUserId(userId) {
        return this.manager.findOne(product_model_1.Product, { where: { userId } });
    }
};
ProductRepository = __decorate([
    typeorm_1.EntityRepository(product_model_1.Product)
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map