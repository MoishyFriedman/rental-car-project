interface Car {
  id: string;
  license_plate: string;
  seats_number: number;
  description: string;
  manufacturer_model: string;
  color: string;
  year: number;
  location: string;
  image: string;
  image_alt: string;
  availability: boolean;
  hour_price: number;
  created_at: string;
  updated_at: string;
}

export type { Car };
