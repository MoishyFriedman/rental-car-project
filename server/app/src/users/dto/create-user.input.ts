import { InputType, Field } from '@nestjs/graphql';
import { Matches } from 'class-validator';

const regexEmail = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPhone =
  /^(?:\+972|0)([23489]|5[012345689]|77|78|79|80|81|82|83|84|85|87|88|89|50[012345689]|51[23456789]|52[0123456789]|53[0123456789]|54[0123456789]|55[0123456789]|56[0123456789]|57[0123456789]|58[0123456789]|59[0123456789])-?\d{1,7}$/;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

@InputType()
export class CreateUserInput {
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  @Matches(regexEmail)
  email: string;

  @Field()
  @Matches(regexPassword)
  password: string;

  @Field()
  @Matches(regexPhone)
  phone_number: string;
}
