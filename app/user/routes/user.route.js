"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("../controllers");
exports.UserRoute = express.Router()
    // User's List
    /**
     * @api {get} /api/user/listofuser User's List
     * @apiGroup Users
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
     *    @apiSampleRequest /api/user/listofuser
     * @apiErrorExample {json} Product error
     *    HTTP/1.1 500 Internal Server Error
     */
    .get("/listofuser", controllers_1.UserController.UserList)
    // Sign Up
    /**
     * @api {post} /api/user/register New User
     * @apiGroup Users
     * @apiParam {String} name User Name
     * @apiParam {String} password Password
     * @apiParam {String} email User Email
     * @apiParam {Number} mobileNo Login User Name
     * @apiParamExample {json} Input
     *    {
     *      "name":"demo",
     *      "password":"xxxxxxx",
     *      "email":"demo@gmail.com",
     *      "mobileNo": "demo",
     *    }
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "message": "New User Created Successfully",
     *      "status": "1"
     *    }
     *    @apiSampleRequest /api/user/register
     * @apiErrorExample {json} Register error
     *    HTTP/1.1 500 Internal Server Error
     */
    .post("/register", controllers_1.UserController.Create)
    // Login
    /**
     * @api {post} /api/user/login User Login
     * @apiGroup Users
     * @apiParam {String} name Name
     * @apiParam {String} password Password
     * @apiParam {Number} mobileNo Login User MobileNo
     * @apiParamExample {json} Input
     *    {
     *      "name":"",
     *      "password":"",
     *      "mobileNo": ""
     *    }
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "message": "Login Successfully!",
     *      "status": "1"
     *    }
     *    @apiSampleRequest /api/user/login
     * @apiErrorExample {json} Register error
     *    HTTP/1.1 500 Internal Server Error
     */
    .post("/login", controllers_1.UserController.Login)
    // Edit
    /**
     * @api {put} /api/user/profileUpdates/:userId Profile
     * @apiGroup Users
     * @apiParam {Number} userId Unique Id
     * @apiParam {String} userName User Name
     * @apiParam {String} userEmail User Email-Id
     * @apiParam {Number} mobileNo Login User Name
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     *   {
     *       "userId":"",
     *       "email":""
     *   }
     * @apiSuccessExample {json} Success
     *  HTTP/1.1 200 OK
     *  {
     *      "message":"Successfully Updated"
     *  }
     *  @apiSampleRequest /api/user/profileUpdates/:userId
     *  @apiErrorExample {json} Register Error
     *   HTTP/1.1 500 Internal Server Error
     */
    .put("/profileUpdates/:userId", controllers_1.UserController.Update)
    // GetOneUser
    /**
     * @api {get} /api/user/receiveUser/:userId Get One User Data
     * @apiGroup Users
     * @apiParam {String} userId Unique Id
     * @apiParamExample {json} Input
     *    {
     *      "userId": "",
     *    }
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "message": "Successfully Get User Data"
     *    }
     *    @apiSampleRequest /api/user/receiveUser/:userId
     * @apiErrorExample {json} Register error
     *    HTTP/1.1 500 Internal Server Error
     */
    .get("/receiveUser/:userId", controllers_1.UserController.getOneUser)
    // Remove User
    /**
     * @api {delete} /api/user/deleteUser/:userId Remove User Data
     * @apiGroup Users
     * @apiParam {String} userId User Id
     * @apiParamExample {json} Input
     *    {
     *      "userId": "",
     *    }
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "message": "Successfully Removed"
     *    }
     *    @apiSampleRequest /api/user/deleteUser/:userId
     * @apiErrorExample {json} Register error
     *    HTTP/1.1 500 Internal Server Error
     */
    .delete("/deleteUser/:userId", controllers_1.UserController.removeUser);
//# sourceMappingURL=user.route.js.map