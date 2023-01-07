import { Injectable, NestMiddleware, Inject } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Http2ServerResponse } from 'http2';
import { CommonService } from '../services/common.service';


@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private _jwtService: JwtService,
    private commonService: CommonService
  ) {}
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers.authorization) {
      let token = req.headers.authorization.replace("Bearer ", "");
      let isValid = this._jwtService.verify(token)
    }
    next();
  }
}
