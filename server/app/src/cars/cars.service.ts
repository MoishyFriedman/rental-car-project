import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './schemas/car.schema';
import { Model } from 'mongoose';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) {}

  async create(createCarDto: CreateCarDto) {
    const createdCar = new this.carModel(createCarDto);
    return createdCar.save();
  }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  findOne(id: string) {
    return this.carModel.findById(id).exec();
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return this.carModel.findByIdAndUpdate(id, updateCarDto).exec();
  }

  remove(id: string) {
    return this.carModel.findByIdAndDelete(id).exec();
  }
}
