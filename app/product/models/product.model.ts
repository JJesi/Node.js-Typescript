import { IsEmail } from "class-validator";
import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user.model";

@Entity("product")
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column("text")
    public name: string;

    @Column("text")
    public desc: string;

    @Column("text")
    public userId: string;

    @OneToOne((type) => User, (user) => user.product)
    @JoinColumn()
    public user: User;
}
