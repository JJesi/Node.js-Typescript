import * as crypto from "crypto";
import {getCustomRepository} from "typeorm";
import {User} from "../models";
import {UserRepository} from "../repository/user.repository";


export class UserService {

    public static FindByText(text: string): Promise<User[]> {
        return getCustomRepository(UserRepository).findByText(text);
    }

    public static BulkCreate(Users: User[]): Promise<User[]> {
        return getCustomRepository(UserRepository).bulkCreate(Users);
    }

    public static FindOneById(id: number): Promise<User> {
        return getCustomRepository(UserRepository).findOneById(id);
    }

    public static Find(): Promise<User[]> {
        return getCustomRepository(UserRepository).find();
    }

    public static Remove(sample: User): Promise<User> {
        return getCustomRepository(UserRepository).remove(sample);
    }

    public static RemoveById(id: number): Promise<User> {
        return getCustomRepository(UserRepository).removeById(id);
    }

    public static Save(sample: User): Promise<User> {
        return getCustomRepository(UserRepository).save(sample);
    }

    public static Login(mobileNo: string): Promise<User> {
        return getCustomRepository(UserRepository).login(mobileNo);
    }
    public static getUserData(id: number): Promise<User> {
        return getCustomRepository(UserRepository).findById(id);
    }

    public static FindOne(id: number): Promise<User> {
        return getCustomRepository(UserRepository).findOne(id);
    }

}
