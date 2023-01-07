import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

// Request DTO
export class CreateUsersDto {

    // @ApiProperty()
    // @IsNotEmpty()
    // name: string;

    // @ApiProperty()
    // username: string;

    // @ApiProperty()
    // email: string;

    // @ApiProperty()
    // password: string;

    @ApiProperty()
    @IsNotEmpty()
    encryptPayload: string;
}

export class VerifyUsersDto {

    @ApiProperty()
    @IsNotEmpty()
    otp: string;
}

export class GetUserDto {
    // @ApiProperty()
    // @IsNotEmpty()
    // email: string;

    // @ApiProperty()
    // @IsNotEmpty()
    // password: string;
    @ApiProperty()
    @IsNotEmpty()
    encryptPayload: string;
}