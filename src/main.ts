import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const Port = 3333;
  await app.listen(Port , () => {    
    console.log(`app start with port ${Port}`);
  });
}
bootstrap();
