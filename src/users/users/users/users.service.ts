import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateEmployeeDto, EmployeeDto, UpdateEmployeeDto } from 'src/employee/dto/employee.dto';
import { Employee } from 'src/employee/entities/employee.entity';
import { ResponseDto } from 'src/shared/dto/response.dto';
import { CommonService } from 'src/shared/services/common.service';
import { MailServiceTemplateService } from 'src/shared/services/mail-service-template.service';
import { CreateUsersDto, GetUserDto, VerifyUsersDto } from 'src/users/dto/users.dto';
import { Users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { constant } from 'src/shared/constant/constant';

const jwt = require('jsonwebtoken')

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Users)
  private readonly usersRepository: Repository<Users>,
    private readonly commonService: CommonService,
    private _jwtService : JwtService,
    private readonly mailTemplateService: MailServiceTemplateService) {

  }

  async createUser(createUsersDto: CreateUsersDto): Promise<ResponseDto> {
    let decodedData = JSON.parse(this.commonService.decode(createUsersDto.encryptPayload))
    
    const alreadyHaveAcc: any = await this.usersRepository.findOne({
      where: {
        email: decodedData.email,
      }
    });
    if (alreadyHaveAcc) {
      alreadyHaveAcc.isEmailExist = true;
      return this.commonService.buildCustomResponse([alreadyHaveAcc], constant.messages.API.users.emailExists, "201");
    }
    
    const user = new Users();
    user.id = uuid();
    user.name = decodedData.name;
    user.username = decodedData.userName;
    user.email = decodedData.email;
    user.password = this.commonService.encode(decodedData.password);

    const empDetails = await this.usersRepository.save(user);
    return this.commonService.buildCustomResponse([empDetails], constant.messages.API.users.createUser, "201");
  }

  async sendOTP(id: string): Promise<ResponseDto> {
    const user = await this.usersRepository.findOne({
      where: {
        id: id
      }
    });
    if (!user) {
      const errors = { username: 'User is not found.' };
      throw new HttpException(errors, 404);
    }

    user.otp = (Math.floor(100000 + Math.random() * 900000)).toString();
    user.optTime = new Date();

    this.usersRepository.update(user.id, user);

    this.mailTemplateService.userRegistered(user);
    return this.commonService.buildCustomResponse([], constant.messages.API.users.OTPsent, "200");
  }

  async verifyOTP(verifyUsersDto: VerifyUsersDto, id: string): Promise<ResponseDto> {

    let endDate = new Date();
    let startDate = new Date();
    startDate.setMinutes(startDate.getMinutes() -5);

    const qbSql = await this.usersRepository.createQueryBuilder('users');
    qbSql.where(' users.id = (:id) and users.otp= (:otp) and users.opt_time between :startDate and :endDate', {
      id: id,
      otp: verifyUsersDto.otp,
      startDate: startDate,
      endDate: endDate
    });

    const user = await qbSql.getOne();

    if (!user) {
      const errors = { username: constant.messages.API.users.OTPverificationFail };
      throw new HttpException(errors, 404);
    }
    user.passwordFlag = 1;
    user.updatedDate = new Date();
    this.usersRepository.update(user.id, user);

    return this.commonService.buildCustomResponse({isOTPverified: true}, constant.messages.API.users.OTPverified, "200");
  }

  async getUser(getUserDTO: GetUserDto): Promise<ResponseDto> {
    let decodedData = JSON.parse(this.commonService.decode(getUserDTO.encryptPayload));
    let lists: any = [];
    try {
      lists = await this.usersRepository.findOne({
        where: {
          email: decodedData.email
        }
      });
      if (!lists) {
        return this.commonService.buildCustomResponse(lists, constant.messages.API.users.noAccount, "200");
      }
      if (lists && (this.commonService.decode(lists.password) !== decodedData.password)) {
        lists = {iscredentialsDidntMatch: true}
        return this.commonService.buildCustomResponse(lists, constant.messages.API.users.wrongCredentials, "200");
      }
      if (lists.passwordFlag === 0) {
        return this.commonService.buildCustomResponse({isnotVerified: true, id: lists.id}, constant.messages.API.users.notVerified, "200");
      } 
      
      let obj = {
        username: lists.username,
        email: lists.email,
        name: lists.name,
        active: lists.active
      }

      let token = this._jwtService.sign(obj);
      lists.token = token;

    } catch (err) {
      console.error("Err in get user API", err)
    }

    return this.commonService.buildCustomResponse(lists, constant.messages.API.users.getSuccess, "200");
  } 

}
