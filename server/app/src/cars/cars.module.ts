import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsResolver } from './cars.resolver';
import { Cars } from './entities/car.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cars])],
  providers: [CarsResolver, CarsService],
  exports: [CarsService],
})
export class CarsModule {}
