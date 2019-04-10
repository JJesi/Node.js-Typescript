import { EntityRepository, Repository } from "typeorm";
import { Product } from "../models/product.model";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    public bulkCreate(Products: Product[]): Promise<any> {
        return this.manager.createQueryBuilder().insert().into(Product).values(Products).execute();
    }

    public async removeById(id: number): Promise<Product> {
        const itemToRemove: Product = await this.findOne({id});
        return this.manager.remove(itemToRemove);
    }

    public findByText(text: string): Promise<Product[]> {
        return this.manager.find(Product, {where: {text}});
    }

    public findOneById(id: number): Promise<Product> {
        return this.manager.findOne(Product, {where: {id}});
    }

    public findProductByUserId(userId: number): Promise<Product> {
        return this.manager.findOne(Product, {where: {userId}});
    }
}
