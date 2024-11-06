import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'please move on /api to check swagger API doc';
  }
}
