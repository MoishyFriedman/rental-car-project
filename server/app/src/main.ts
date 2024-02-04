import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(process.env.SERVER_PORT);
  console.log(`server running on http://localhost:${process.env.SERVER_PORT}`);
}
bootstrap();
