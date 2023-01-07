import { Injectable } from '@nestjs/common';
import { MailServiceService } from './mail-service.service';
var ejs = require('ejs');

@Injectable()
export class MailServiceTemplateService {

    constructor(
        private mailService: MailServiceService,
    ) { }

    capitalizeFirstLetter(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }


    userRegistered(users: any){

        const data = {
            name: this.capitalizeFirstLetter(users.name),
            email: users.email,
            otp: users.otp
        }

        let template = `<table role="presentation" border="0" cellpadding="0" cellspacing="0" style="font-family:system-ui;max-width: 400px;background-color: #f4f5f6;padding: 0px 20px;border-radius: 20px; margin: 20px auto 10px;">
        <tr>
            <td>
              <p style="margin-bottom: 5px"><b>Dear  <%= name %></b></p>
              <h2 style="color: #3a5c44;margin: 0px 0px 10px"> Welcome to Employee Management App! </h2>
              <p style="font-weight: 500"> Thank you for registering with us. Find your account details as below to verify your email account</p>
              <p style="margin-bottom: 0px"> Email:  <b><%= email %></b></p>
              <p style="margin-top: 5px"> OTP:  <span style="border: 1px dashed #3a5c44;border-radius: 5px; background-color: #3a5c4422; color: #3a5c44; margin-left: 5px;font-weight: bold;padding: 0 5px;"><%= otp %></span></p>
              <p style="margin-bottom: 0px">Regards,</p>
              <p style="margin-top: 5px">Admin</p>
            </td>
         </tr>
    </table>`;

        this.mailService.sendEmail(users.email, 'Thank you for registering with CGP', '', ejs.render(template, data))
    }
}
