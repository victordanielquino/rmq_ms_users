import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return await 'Hello World! desde microservice';
  }

  findOne(id: string) {
    console.log('request id: ', id);
    return {
      username: 'victor',
      password: '12345',
    };
  }
}
