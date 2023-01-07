import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateEmployeeDto, UpdateEmployeeDto } from 'src/employee/dto/employee.dto';
import { ResponseDto } from 'src/shared/dto/response.dto';
import { HttpExceptionFilter } from 'src/shared/exception-filters/http-exception.filter';
import { EmployeeService } from './employee.service';

@Controller('employee')
@ApiTags('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) { }

  // Employee lists
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe())
  @Get('list')
  @ApiQuery({ name: 'DOJ', required: false })
  async employeeList( @Query('DOJ') DOJ: string,): Promise<ResponseDto> {
    return await this.employeeService.getEmployeeLists(DOJ);
  }

  // Employee create
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe())
  @Post('create')
  @ApiBody({ type: CreateEmployeeDto })
  async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto): Promise<ResponseDto> {
    return await this.employeeService.createEmployee(createEmployeeDto);
  }

  // Employee update
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe())
  @Put('update/:id')
  @ApiParam({ name: 'id' })
  async cancelAppointment(@Body() updateEmployeeDto: UpdateEmployeeDto, @Param() params: any): Promise<ResponseDto> {
    return await this.employeeService.updateEmployee(updateEmployeeDto, params.id);
  }

  // Employee delete
  @UseFilters(new HttpExceptionFilter())
  @UsePipes(new ValidationPipe())
  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  async teamAvailabilityDelete(@Param() params: any): Promise<ResponseDto> {
    return await this.employeeService.employeeDelete(params.id);
  }
}
