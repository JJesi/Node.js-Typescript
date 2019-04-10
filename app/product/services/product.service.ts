import { getCustomRepository } from "typeorm";
import { Product } from "../models/product.model";
import { ProductRepository } from "../repository/product.repository";

export class ProductService {
    public static FindByText(text: string): Promise<Product[]> {
        return getCustomRepository(ProductRepository).findByText(text);
    }

    public static BulkCreate(Products: Product[]): Promise<Product[]> {
        return getCustomRepository(ProductRepository).bulkCreate(Products);
    }

    public static FindOneById(id: number): Promise<Product> {
        return getCustomRepository(ProductRepository).findOneById(id);
    }

    public static Find(): Promise<Product[]> {
        return getCustomRepository(ProductRepository).find();
    }

    public static Remove(sample: Product): Promise<Product> {
        return getCustomRepository(ProductRepository).remove(sample);
    }

    public static RemoveById(id: number): Promise<Product> {
        return getCustomRepository(ProductRepository).removeById(id);
    }

    public static Save(sample: Product): Promise<Product> {
        return getCustomRepository(ProductRepository).save(sample);
    }

    public static FindProductByUserId(userId: number): Promise<Product> {
        return getCustomRepository(ProductRepository).findProductByUserId(userId);
    }
}
