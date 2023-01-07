import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHERS = "OTHERS"
}

@Entity({name: "users"})
export class Users {

    @PrimaryGeneratedColumn("uuid", {name: "id"}) 
    id: string;

    @Column({ name: "name", length: 100})
    name: string;

    @Column({ name: "username", length: 50})
    username: string;

    @Column({ name: "email", length: 100})
    email: string;

    @Column({ name: "password", length: 200})
    password: string;

    @Column({ name: "password_flag", type: "integer" })
    passwordFlag: Number;
    
    @CreateDateColumn({type: "timestamp", name: "created_date"})
    createdDate: Date;

    @UpdateDateColumn({type: "timestamp", name: "updated_date"})
    updatedDate: Date;

    // 0 = INACTIVE , 1 = ACTIVE 
    @Column({ type: "boolean", name: "active", default: true })
    active: boolean;

    @Column({ name: "otp", length: 200})
    otp: string;

    @CreateDateColumn({type: "timestamp", name: "opt_time"})
    optTime: Date;
}
