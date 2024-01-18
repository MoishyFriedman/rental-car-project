import { Test, TestingModule } from '@nestjs/testing';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';
import { Cars } from './entities/car.entity';
import { InterceptorsConsumer } from '@nestjs/core/interceptors';
import { GraphqlCacheInterceptor } from 'src/helpres/interceptors/graphqlCache.interceptor';
import { CacheInterceptor } from '@nestjs/cache-manager';

describe('CarsResolver', () => {
  let carsResolver: CarsResolver;
  let carsService: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsResolver, CarsService],
    }).compile();

    carsResolver = module.get<CarsResolver>(CarsResolver);
    carsService = module.get<CarsService>(CarsService);
  });

  it('should be defined', async () => {
    let result: Cars[];
    jest
      .spyOn(carsService, 'findAll')
      .mockImplementation(() => Promise.resolve(result));
    expect(await carsService.findAll()).resolves.toBe(result);
  });
});
