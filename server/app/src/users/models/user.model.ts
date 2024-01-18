import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/auth/roles/types/roles.enum';

@ObjectType()
export class User {
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  phone_number: string;

  @Field()
  roles: Role;
}
