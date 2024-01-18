import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Users } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    @Inject(CACHE_MANAGER) private cacheManger: Cache,
  ) {}
  async create(createUserInput: CreateUserInput) {
    const user = this.usersRepository.create(createUserInput);
    const newUser = await this.usersRepository.save(user);
    await this.cacheManger.reset();
    return newUser;
  }

  findAll() {
    const users = this.usersRepository.find();
    console.log('from db');
    return users;
  }

  findOneById(id: string) {
    const userBiId = this.usersRepository.findOneBy({ id });
    console.log('from db');
    return userBiId;
  }

  findOneByEmail(email: string) {
    const userByEmail = this.usersRepository.findOne({ where: { email } });
    console.log('from db');
    return userByEmail;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    await this.usersRepository.update(id, updateUserInput);
    await this.cacheManger.reset();
    const updateUser = this.findOneById(id);
    return updateUser;
  }

  async remove(id: string) {
    const user = await this.findOneById(id);
    if (user) {
      await this.usersRepository.delete(id);
      await this.cacheManger.reset();
      return user;
    }
    throw new Error('user not found');
  }
}
