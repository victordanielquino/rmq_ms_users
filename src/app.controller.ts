import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('findAll')
  async findAll(data: string) {
    console.log(data);
    // return this.appService.getHello();
  }

  @MessagePattern('findOne')
  findOne(@Payload() id: string) {
    console.log('request:', id);
    return this.appService.findOne(id);
  }

  @MessagePattern('createOne')
  async createOne(@Payload() userDTO: any) {
    console.log('microservice: user: ', userDTO);
    return userDTO;
  }

  @EventPattern('updateOne')
  async updateOne(data: string) {
    console.log(data);
    // return this.appService.getHello();
  }

  @EventPattern('deleteOne')
  async deleteOne(data: string) {
    console.log(data);
    // return this.appService.getHello();
  }
}
