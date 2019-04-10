import { IsEmail } from "class-validator";
import {BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Product} from "./product.model";
@Entity("user")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column("text")
    public userName: string;

    @Column("text")
    @IsEmail()
    public email: string;

    @Column("text")
    public password: string;

    @Column("text")
    public mobileNo: string;

    @Column("text")
    public otp: string;

    // @OneToOne((type) => Product, (product) => product.user)
    // public product: Product;

    @ManyToMany((type) => Product) // you told each user can have their own groups, right?
    @JoinTable() // or this can be on User side if you want a bi-directional relation
    public product: Product;
}
