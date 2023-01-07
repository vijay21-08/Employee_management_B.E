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

@Entity({name: "employee"})
export class Employee {

    @PrimaryGeneratedColumn("uuid", {name: "id"}) 
    id: string;

    @Column({ name: "name", length: 100})
    name: string;

    @Column({ name: "hobbies", length: 50})
    hobbies: string;

    @Column({ name: "experience", length: 100})
    experience: string;

    @Column({ name: "gender", type: "enum", enum: Gender })
    gender: Gender;

    @Column({ name: "DOB", type: "date"})
    DOB: Date;

    @Column({ name: "DOJ", type: "date"})
    DOJ: Date;
    
    @CreateDateColumn({type: "timestamp", name: "created_date"})
    createdDate: Date;

    @UpdateDateColumn({type: "timestamp", name: "updated_date"})
    updatedDate: Date;

    // 0 = INACTIVE , 1 = ACTIVE 
    @Column({ type: "boolean", name: "active", default: true })
    active: boolean;
}
