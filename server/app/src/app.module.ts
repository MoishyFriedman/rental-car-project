import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CarsModule,
    MongooseModule.forRoot(
      'mongodb+srv://moshe:12345@cluster0.4jpvyhb.mongodb.net/cars',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
