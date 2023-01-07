import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { CommonService } from 'src/shared/services/common.service';
import { UsersService } from './users/users/users.service';
import { UsersController } from './users/users/users.controller';
import { MailServiceService } from 'src/shared/services/mail-service.service';
import { MailServiceTemplateService } from 'src/shared/services/mail-service-template.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
      secret: "test",
      signOptions: {expiresIn:  "8h"}
    }),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    CommonService,
    MailServiceService,
    MailServiceTemplateService
],
})
export class UsersModule {}
