import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cars } from './entities/car.entity';
import { Cache } from 'cache-manager';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Cars)
    private carsRepository: Repository<Cars>,
    @Inject(CACHE_MANAGER) private cacheManger: Cache,
  ) {}

  async create(createCarInput: CreateCarInput) {
    const car = this.carsRepository.create(createCarInput);
    const newCar = await this.carsRepository.save(car);
    await this.cacheManger.reset();
    return newCar;
  }

  async findAll() {
    const cars = await this.carsRepository.find();
    console.log('from db');
    return cars;
  }

  async findOne(id: string) {
    const car = await this.carsRepository.findOneBy({ id });
    console.log('from db');
    return car;
  }

  async update(id: string, updateCarInput: UpdateCarInput) {
    await this.carsRepository.update(id, updateCarInput);
    const updateCar = await this.findOne(id);
    await this.cacheManger.reset();
    return updateCar;
  }

  async remove(id: string) {
    const car = await this.findOne(id);
    if (car) {
      await this.carsRepository.delete(id);
      await this.cacheManger.reset();
      return car;
    }
    throw new Error('car not found');
  }
}
