"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const product_repository_1 = require("../repository/product.repository");
class ProductService {
    static FindByText(text) {
        return typeorm_1.getCustomRepository(product_repository_1.ProductRepository).findByText(text);
    }
    static BulkCreate(Products) {
        return typeorm_1.getCustomRepository(product_repository_1.ProductRepository).bulkCreate(Products);
    }
    static FindOneById(id) {
        return typeorm_1.getCustomRepository(product_repository_1.ProductRepository).findOneById(id);
    }
    static Find() {
        return typeorm_1.getCustomRepository(product_repository_1.ProductRepository).find();
    }
    static Remove(sample) {
        return typeorm_1.getCustomRepository(product_repository_1.ProductRepository).remove(sample);
    }
    static RemoveById(id) {
        return typeorm_1.getCustomRepository(product_repository_1.ProductRepository).removeById(id);
    }
    static Save(sample) {
        return typeorm_1.getCustomRepository(product_repository_1.ProductRepository).save(sample);
    }
    static FindProductByUserId(userId) {
        return typeorm_1.getCustomRepository(product_repository_1.ProductRepository).findProductByUserId(userId);
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map