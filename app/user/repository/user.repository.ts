import {EntityRepository, getCustomRepository, Repository} from "typeorm";
import {User} from "../models";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    public bulkCreate(Users: User[]): Promise<any> {
        return this.manager.createQueryBuilder().insert().into(User).values(Users).execute();
    }

    public async removeById(id: number): Promise<User> {
        const itemToRemove: User = await this.findOne({id});
        return this.manager.remove(itemToRemove);
    }

    public findByText(text: string): Promise<User[]> {
        return this.manager.find(User, {where: {text}});
    }

    public findOneById(id: number): Promise<User> {
        return this.manager.findOne(User, {where: {id}});
    }

    public login(mobileNo: string): Promise<User> {
        return this.manager.findOne(User, {where: {mobileNo}});
    }

    public findById(id: number): Promise<User> {
        return this.manager.findOne(User, {where: {id}});
    }
}
