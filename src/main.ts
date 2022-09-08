import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
<<<<<<< HEAD
        urls: [process.env.AMQP_URL],
        queue: 'main_queue',
=======
        urls: ['amqp://root:pass@localhost:5672'],
        queue: 'example_queue',
>>>>>>> stel-1
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
