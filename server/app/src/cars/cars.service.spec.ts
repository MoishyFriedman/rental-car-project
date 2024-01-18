import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CarsService } from './cars.service';
import { Cars } from './entities/car.entity';
import { car, carInput, updateCar } from './utils/test.helpers';
import { Cache } from 'cache-manager';

describe('CarsService', () => {
  let service: CarsService;
  let repo: Repository<Cars>;
  let cache: Cache;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CarsService,
        {
          provide: getRepositoryToken(Cars),
          useClass: Repository,
        },
        {
          provide: CACHE_MANAGER,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CarsService>(CarsService);
    repo = module.get<Repository<Cars>>(getRepositoryToken(Cars));
    cache = module.get<Cache>(CACHE_MANAGER);

    repo.find = jest.fn().mockResolvedValue([car]);
    repo.findOneBy = jest.fn().mockResolvedValue(car);
    repo.create = jest.fn().mockResolvedValue(car);
    repo.save = jest.fn().mockResolvedValue(car);
    repo.delete = jest.fn().mockResolvedValue(car);
    repo.update = jest.fn().mockResolvedValue(car);
    cache.reset = jest.fn();
  });

  it('find all cars', async () => {
    let result = await service.findAll();
    expect(result).toEqual([car]);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0]).toBeInstanceOf(Cars);
  });

  it('find one car', async () => {
    let result = await service.findOne('12345');
    expect(result).toEqual(car);
    expect(result).toBeInstanceOf(Cars);
  });

  it('create car', async () => {
    let result = await service.create(carInput);
    expect(repo.create).toHaveBeenCalledWith(carInput);
    expect(result).toEqual(car);
    expect(result).toBeInstanceOf(Cars);
  });

  it('update car', async () => {
    let result = await service.update(updateCar.id, updateCar);
    expect(repo.update).toHaveBeenCalledWith(updateCar.id, updateCar);
    expect(result).toEqual(car);
    expect(result).toBeInstanceOf(Cars);
  });

  it('delete car', async () => {
    let result = await service.remove('12345');
    expect(result).toEqual(car);
    expect(result).toBeInstanceOf(Cars);
  });
});
