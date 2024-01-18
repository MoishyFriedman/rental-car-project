import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Car {
  @Field((type) => Int)
  seats_number: number;

  @Field()
  license_plate: string;

  @Field()
  description: string;

  @Field()
  manufacturer_model: string;

  @Field()
  color: string;

  @Field((type) => Int)
  year: number;

  @Field()
  location: string;

  @Field()
  image: string;

  @Field()
  image_alt: string;

  @Field((type) => Int)
  hour_price: number;

  @Field()
  availability: boolean;
}
