import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
  @Prop()
  license_plate: string;

  @Prop()
  seats_number: number;

  @Prop()
  description: string;

  @Prop()
  manufacturer_model: string;

  @Prop()
  color: string;

  @Prop()
  year: number;

  @Prop()
  location: string;

  @Prop()
  image: string;

  @Prop()
  image_alt: string;

  @Prop()
  hour_price: number;

  @Prop()
  availability: boolean;
}

export const CarSchema = SchemaFactory.createForClass(Car);
