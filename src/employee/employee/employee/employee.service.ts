import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateEmployeeDto, EmployeeDto, UpdateEmployeeDto } from 'src/employee/dto/employee.dto';
import { Employee } from 'src/employee/entities/employee.entity';
import { ResponseDto } from 'src/shared/dto/response.dto';
import { CommonService } from 'src/shared/services/common.service';
import { Repository } from 'typeorm';
import { uuid } from 'uuidv4';
import { constant } from 'src/shared/constant/constant';

@Injectable()
export class EmployeeService {

  constructor(@InjectRepository(Employee)
  private readonly employeeRepository: Repository<Employee>,
    private readonly commonService: CommonService,) {

  }

  async createEmployee(employeeData: CreateEmployeeDto): Promise<ResponseDto> {

    const employees = new Employee();
    employees.id = uuid();
    employees.name = employeeData.name;
    employees.gender = employeeData.gender;
    employees.DOB = employeeData.DOB;
    employees.DOJ = employeeData.DOJ;
    employees.hobbies = employeeData.hobbies;
    employees.experience = employeeData.experience;

    const empDetails = await this.employeeRepository.save(employees);

    return this.commonService.buildCustomResponse([empDetails], constant.messages.API.employee.createSuccess, "201");
  }

  async getEmployeeLists(DOJ: any): Promise<ResponseDto> {
    let lists: any;
    if (DOJ) {
      lists = await this.employeeRepository.find({
      where: {
        active: true,
        DOJ: DOJ
      }
    });
  } else {
      lists = await this.employeeRepository.find({
      where: {
        active: true,
      }
    });
  }
    const empData = plainToClass(EmployeeDto, lists);
    return this.commonService.buildCustomResponse(empData, constant.messages.API.employee.getEmployees, "200");
  }

  async updateEmployee(updateEmployeeDto: UpdateEmployeeDto, id: string): Promise<ResponseDto> {

    const employees = await this.employeeRepository.findOne({
      where: {
        id: id
      }
    });
    if (!employees) {
      const errors = { username: 'Employee is not found.' };
      throw new HttpException(errors, 404);
    }

    employees.name = updateEmployeeDto.name;
    employees.DOB = updateEmployeeDto.DOB;
    employees.DOJ = updateEmployeeDto.DOJ;
    employees.gender = updateEmployeeDto.gender;
    employees.hobbies = updateEmployeeDto.hobbies;
    employees.experience = updateEmployeeDto.experience;

    this.employeeRepository.update(employees.id, employees);

    return this.commonService.buildCustomResponse([], constant.messages.API.employee.editEmployee, "200");
  }

  async employeeDelete(id: string): Promise<ResponseDto> {

    const employees = await this.employeeRepository.findOne({
      where: {
        id: id
      }
    });
    if (!employees) {
      const errors = { username: 'Employee is not found.' };
      throw new HttpException(errors, 404);
    }

    employees.active = false;

    this.employeeRepository.update(employees.id, employees);

    return this.commonService.buildCustomResponse([], constant.messages.API.employee.deleteEmployee, "200");
  }
}
