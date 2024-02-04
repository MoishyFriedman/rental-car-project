import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarsService } from './cars.service';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { Car } from './models/car.model';
import { UseInterceptors } from '@nestjs/common';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { GraphqlCacheInterceptor } from 'src/helpres/interceptors/graphqlCache.interceptor';
import { GraphqlCacheKey } from 'src/helpres/decorator/graphqlCacheKey';

@Resolver(() => Car)
export class CarsResolver {
  constructor(private readonly carsService: CarsService) {}

  @Mutation(() => Car)
  createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    try {
      return this.carsService.create(createCarInput);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  @UseInterceptors(CacheInterceptor)
  @CacheKey('cars')
  @Query(() => [Car], { name: 'cars' })
  findAll() {
    try {
      return this.carsService.findAll();
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  @UseInterceptors(GraphqlCacheInterceptor)
  @GraphqlCacheKey('car')
  @Query(() => Car, { name: 'car' })
  findOne(@Args('id', { type: () => String }) id: string) {
    try {
      return this.carsService.findOne(id);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  @Mutation(() => Car)
  updateCar(@Args('updateCarInput') updateCarInput: UpdateCarInput) {
    try {
      console.log(updateCarInput);

      return this.carsService.update(updateCarInput.id, updateCarInput);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  @Mutation(() => Car)
  removeCar(@Args('id', { type: () => String }) id: string) {
    try {
      return this.carsService.remove(id);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }
}
