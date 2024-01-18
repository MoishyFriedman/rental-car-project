import { CreateCarInput } from './create-car.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarInput extends PartialType(CreateCarInput) {
  @Field()
  id: string;
}
