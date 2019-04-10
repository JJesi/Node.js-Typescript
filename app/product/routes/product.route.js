"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const product_controller_1 = require("../controllers/product.controller");
const ProductMiddleware = require("../middlewares/product.middleware");
exports.ProductRoute = express.Router()
    .get("/", product_controller_1.ProductController.All)
    // Product Detail
    /**
     * @api {get} /api/product/:id Get Product Detail
     * @apiGroup Product
     * @apiParam {Number} id Users unique ID
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     *    {
     *      "name":"demo",
     *      "description":"xxxxxxx"
     *    }
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "message": "Study",
     *      "status": "1"
     *    }
     *    @apiSampleRequest /api/product/:id
     * @apiErrorExample {json} Product error
     *    HTTP/1.1 500 Internal Server Error
     */
    .get("/:id", product_controller_1.ProductController.Find)
    // Create Product
    /**
     * @api {post} /api/product Create a product
     * @apiGroup Product
     * @apiParam {String} name product Name
     * @apiParam {String} description product description
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     *    {
     *      "name": "demo",
     *      "description":"demo"
     *    }
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "message": "Study",
     *      "status": "1"
     *    }
     *    @apiSampleRequest /api/product
     * @apiErrorExample {json} Product error
     *    HTTP/1.1 500 Internal Server Error
     */
    .post("/", [ProductMiddleware.CheckCreate], product_controller_1.ProductController.Create)
    // Update Product
    /**
     * @api {put} /api/product/:id Update a product
     * @apiGroup Product
     * @apiParam {String} name product Name
     * @apiParam {String} description product description
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     *    {
     *      "name": "demo",
     *      "description":"demo"
     *    }
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "message": "Study",
     *      "status": "1"
     *    }
     *    @apiSampleRequest /api/product/:id
     * @apiErrorExample {json} Product error
     *    HTTP/1.1 500 Internal Server Error
     */
    .put("/:id", [ProductMiddleware.CheckUpdate], product_controller_1.ProductController.Update)
    // Delete Product
    /**
     * @api {delete} /api/product/:id Delete a product
     * @apiGroup Product
     * @apiParam {String} name product Name
     * @apiParam {String} description product description
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     *    {
     *      "name": "demo",
     *      "description":"demo"
     *    }
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "message": "Study",
     *      "status": "1"
     *    }
     *    @apiSampleRequest /api/product/:id
     * @apiErrorExample {json} Product error
     *    HTTP/1.1 500 Internal Server Error
     */
    .delete("/:id", [ProductMiddleware.CheckDelete], product_controller_1.ProductController.Delete)
    // Create Product
    /**
     * @api {post} /api/product/addProduct Add Product
     * @apiGroup User Product
     * @apiParam {String} name Product Name
     * @apiParam {String} desc Product Description
     * @apiParam {Number} userId Product User
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     *    {
     *        "name":"",
     *        "desc":"",
     *        "userId":""
     *    }
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *        "message":"New Product Created Successfully"
     *    }
     * @apiSampleRequest /api/product/addProduct
     * @apiErrorExample {json} Register Error
     *    HTTP/1.1 500 Internal Server Error
     */
    .post("/addProduct", product_controller_1.ProductController.addProduct)
    // Get User Product
    /**
     * @api {get} /api/product/userProductList/:userID Get User Product
     * @apiGroup User Product
     * @apiParam {Number} userId Product User
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     *    {
     *        "name":"",
     *        "desc":"",
     *        "userId":""
     *    }
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *        "message":"Successfully Get User Product"
     *    }
     * @apiSampleRequest /api/product/userProductList/:userID
     * @apiErrorExample {json} Register Error
     *    HTTP/1.1 500 Internal Server Error
     */
    .get("/userProductList/:userID", product_controller_1.ProductController.userProductList);
//# sourceMappingURL=product.route.js.map