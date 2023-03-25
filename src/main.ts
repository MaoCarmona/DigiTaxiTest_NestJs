import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';  
import * as Apidocs from '../swagger.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerModule.setup('/docs',app,SwaggerModule.createDocument(app,Apidocs))
  await app.listen(3000);
}
bootstrap();
