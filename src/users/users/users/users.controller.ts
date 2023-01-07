import { Body, Controller, Delete, Get, Param, Post, Put, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateEmployeeDto, UpdateEmployeeDto } from 'src/employee/dto/employee.dto';
import { ResponseDto } from 'src/shared/dto/response.dto';
import { HttpExceptionFilter } from 'src/shared/exception-filters/http-exception.filter';
import { CreateUsersDto, VerifyUsersDto, GetUserDto } from 'src/users/dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  // Users create
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe())
  @Post('create')
  @ApiBody({ type: CreateUsersDto })
  async createUser(@Body() createUsersDto: CreateUsersDto): Promise<ResponseDto> {
    return await this.usersService.createUser(createUsersDto);
  }

  // OTP verify
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe())
  @Post('verifyOTP/:id')
  @ApiBody({ type: VerifyUsersDto })
  @ApiParam({ name: 'id' })
  async verifyOTP(@Body() verifyUsersDto: VerifyUsersDto, @Param() params: any): Promise<ResponseDto> {
    return await this.usersService.verifyOTP(verifyUsersDto, params.id);
  }

  // OTP verify
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe())
  @Post('sendOTP/:id')
  @ApiParam({ name: 'id' })
  async sendOTP(@Param() params: any): Promise<ResponseDto> {
    return await this.usersService.sendOTP(params.id);
  }

  // Employee update
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: GetUserDto })
  @Post('getUser')
  async getUser(@Body() getUserDTO: GetUserDto): Promise<ResponseDto> {
    return await this.usersService.getUser(getUserDTO);
  }
}
