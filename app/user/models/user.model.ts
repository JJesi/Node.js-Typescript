import { IsEmail } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
