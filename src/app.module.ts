import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { AuthMiddleware } from './shared/middleware/authmiddleware';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { CommonService } from './shared/services/common.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "postgres",
      "password": "root",
      "database": "employee_manage",
      "synchronize": false,
      "autoLoadEntities": true,
      "entities": ["dist/**/*.entity.js"],
      "logging": ["query", "error"]
    }),
    EmployeeModule,
    UsersModule,
    JwtModule.register({
      secret: "test",
      signOptions: {expiresIn:  "8h"}
    })
  ],
  controllers: [AppController],
  providers: [AppService, CommonService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('employee');
  }
}
