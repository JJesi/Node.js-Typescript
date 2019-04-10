"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_repository_1 = require("../repository/user.repository");
class UserService {
    static FindByText(text) {
        return typeorm_1.getCustomRepository(user_repository_1.UserRepository).findByText(text);
    }
    static BulkCreate(Users) {
        return typeorm_1.getCustomRepository(user_repository_1.UserRepository).bulkCreate(Users);
    }
    static FindOneById(id) {
        return typeorm_1.getCustomRepository(user_repository_1.UserRepository).findOneById(id);
    }
    static Find() {
        return typeorm_1.getCustomRepository(user_repository_1.UserRepository).find();
    }
    static Remove(sample) {
        return typeorm_1.getCustomRepository(user_repository_1.UserRepository).remove(sample);
    }
    static RemoveById(id) {
        return typeorm_1.getCustomRepository(user_repository_1.UserRepository).removeById(id);
    }
    static Save(sample) {
        return typeorm_1.getCustomRepository(user_repository_1.UserRepository).save(sample);
    }
    static Login(mobileNo) {
        return typeorm_1.getCustomRepository(user_repository_1.UserRepository).login(mobileNo);
    }
    static getUserData(id) {
        return typeorm_1.getCustomRepository(user_repository_1.UserRepository).findById(id);
    }
    static FindOne(id) {
        return typeorm_1.getCustomRepository(user_repository_1.UserRepository).findOne(id);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map