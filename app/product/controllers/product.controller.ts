import * as express from "express";
import { Product } from "../models/product.model";
import { User } from "../models/user.model";
import { ProductService } from "../services/product.service";

export class ProductController {

    public static async All(req: express.Request, res: express.Response) {
        const ProductList = await ProductService.Find();
        return res.send(ProductList);
    }

    public static async Find(req: express.Request, res: express.Response) {
        const id: number = req.params.id;
        const product = await ProductService.FindOneById(id);
        return product ? res.status(200).send(product) : res.status(404).send({text: "NOT FOUND"});
    }

    public static async Create(req: express.Request, res: express.Response) {
        const product = new Product();
        product.name = req.body.name;
        product.desc = req.body.description;

        try {
            const Result = await ProductService.Save(product);
            return res.status(200).send(Result);
        } catch (ex) {
            return res.status(404).send({text: "ERROR"});
        }
    }

    public static async Update(req: express.Request, res: express.Response) {

        const product   = new Product();
        product.id      = req.params.id;
        product.name    = req.body.name;
        product.desc    = req.body.description;

        try {
            const Result = await ProductService.Save(product);
            return Result ? res.status(200).send() : res.status(404).send({text: "NOT FOUND"});
        } catch (ex) {
            return res.status(404).send({text: "ERROR"});
        }

    }

    public static async Delete(req: express.Request, res: express.Response) {
        const id: number = req.params.id;

        try {
            await ProductService.RemoveById(id);
            return res.status(204).send();
        } catch (ex) {
            return res.status(404).send({text: "ERROR"});
        }
    }

    public static async addProduct(req: express.Request, res: express.Response) {
        const user      = new User();
        user.id         = req.body.userId;

        const product   = new Product();
        product.name    = req.body.name;
        product.desc    = req.body.desc;
        product.user    = user;
        try {
            const ProductResult = await ProductService.Save(product);
            console.log("Am In NewProduct:" + ProductResult);
            if (ProductResult) {
                return res.status(200).send({message : "New Product Created Successfully!!", result: ProductResult});
            } else {
                res.status(404).send({text: "NOT FOUND"});
            }
        } catch (ex) {
            return res.status(404).send({text: "ERROR"});
        }
    }

    public static async userProductList(req: express.Request, res: express.Response) {
        const user      = new User();
        user.id         = req.params.userID;
        console.log(req.params.userID);
        try {
            const ProductResult = await ProductService.FindProductByUserId(req.params.userID);
            console.log("Am In User Product List:" + ProductResult.userId);
            if (ProductResult) {
                return res.status(200).send({message : "Successfully Get User Product List !!", result: ProductResult});
            } else {
                res.status(404).send({text: "NOT FOUND"});
            }

        } catch (ex) {
            return res.status(404).send({text: "ERROR"});
        }
    }
}
