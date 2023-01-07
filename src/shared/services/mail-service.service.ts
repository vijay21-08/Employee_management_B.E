import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailServiceService {
  public sendEmail = async (
    email: string,
    subject: string,
    text: string,
    html: any,
  ) => {
    // create reusable transporter object using the default SMTP transport
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: '587',
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'vijayksoftsuave@gmail.com', // generated ethereal user
          pass: 'ktnswjmxgexwspxu', // generated ethereal password
        },
      });
      // send mail with defined transport object
      const info = await transporter
        .sendMail({
          from: process.env.MAIL_SENDER, // sender address
          to: email, // list of receivers
          subject: subject, // Subject line
          text: text, // plain text body
          html: html, // html body
        })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log(error);
          throw new HttpException('Email not sent', HttpStatus.OK);
        });
    } catch (error) {
      console.error(error);
    }
  };
}
