import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { EmployeeController } from './employee/employee/employee.controller';
import { EmployeeService } from './employee/employee/employee.service';
import { CommonService } from 'src/shared/services/common.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    CommonService
],
})
export class EmployeeModule {}
