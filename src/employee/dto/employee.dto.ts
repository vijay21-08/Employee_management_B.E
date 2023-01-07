import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Exclude, Expose, Type } from "class-transformer";
import { Gender } from "../entities/employee.entity";

// Request DTO
export class CreateEmployeeDto {

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    hobbies: string;

    @ApiProperty()
    experience: string;

    @ApiProperty()
    DOB: Date;

    @ApiProperty()
    DOJ: Date;

    @ApiProperty()
    gender: Gender;
}

export class UpdateEmployeeDto {

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    hobbies: string;

    @ApiProperty()
    experience: string;

    @ApiProperty()
    DOB: Date;

    @ApiProperty()
    DOJ: Date;

    @ApiProperty()
    gender: Gender;

}


// Response DTO
@Exclude()
export class EmployeeDto {

    @ApiProperty()
    @Expose()
    id: string;

    @ApiProperty()
    @Expose()
    name: string;

    @ApiProperty()
    @Expose()
    hobbies: string;

    @ApiProperty()
    @Expose()
    experience: string;
    
    @ApiProperty()
    @Expose()
    gender: string;

    @ApiProperty()
    @Expose()
    DOB: Date;

    @ApiProperty()
    @Expose()
    DOJ: Date;
}
