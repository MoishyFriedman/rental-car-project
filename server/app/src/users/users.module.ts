import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { RolesGuard } from 'src/auth/roles/role.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
