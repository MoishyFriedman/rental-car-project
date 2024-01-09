import { IsInt, Min, Max } from 'class-validator';

export class CreateCarDto {
  @IsInt()
  @Min(0)
  @Max(8)
  license_plate: string;

  seats_number: number;

  description: string;
  manufacturer_model: string;
  color: string;
  year: number;
  location: string;
  image: string;
  image_alt: string;
  hour_price: number;
  availability: boolean;
}
