import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main', true);
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(5001);
  logger.log(`Application is running on ${await app.getUrl()}`);
}

bootstrap();