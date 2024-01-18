import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import {
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { GraphqlCacheInterceptor } from '../helpres/interceptors/graphqlCache.interceptor';
import { GraphqlCacheKey } from 'src/helpres/decorator/graphqlCacheKey';
import { jwtGuard } from 'src/auth/jwt/jwt.guard';
import { Roles } from 'src/auth/roles/decorator/roles';
import { Role } from 'src/auth/roles/types/roles.enum';

const pubSub = new PubSub();

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  @UsePipes(new ValidationPipe())
  signUp(@Args('createUserInput') createUserInput: CreateUserInput) {
    try {
      const newUser = this.usersService.create(createUserInput);
      pubSub.publish('newUser', { newUser: 'user created' });
      return newUser;
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  @Query(() => [User], { name: 'users' })
  @UseInterceptors(CacheInterceptor)
  @CacheKey('users')
  @Roles(Role.ADMIN)
  findAll() {
    try {
      return this.usersService.findAll();
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  @UseInterceptors(GraphqlCacheInterceptor)
  @GraphqlCacheKey('userById')
  @Query(() => User, { name: 'userById' })
  findOneById(@Args('id', { type: () => String }) id: string) {
    try {
      return this.usersService.findOneById(id);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }
  @UseInterceptors(GraphqlCacheInterceptor)
  @GraphqlCacheKey('userByEmail')
  @Query(() => User, { name: 'userByEmail' })
  findOneByEmail(@Args('email', { type: () => String }) email: string) {
    try {
      return this.usersService.findOneByEmail(email);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  @Mutation(() => User)
  @UseGuards(jwtGuard)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    try {
      return this.usersService.update(updateUserInput.id, updateUserInput);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  @Mutation(() => User)
  @UseGuards(jwtGuard)
  @Roles(Role.ADMIN)
  removeUser(@Args('id', { type: () => String }) id: string) {
    try {
      return this.usersService.remove(id);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }

  @Subscription(() => String)
  newUser() {
    try {
      return pubSub.asyncIterator(['newUser']);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }
}
