import { CreateCarInput } from '../dto/create-car.input';
import { UpdateCarInput } from '../dto/update-car.input';
import { Cars } from '../entities/car.entity';

export const car = new Cars();
car.availability = true;
car.color = 'blue';
car.description = 'big and fast car';
car.hour_price = 20;
car.id = '12345';
car.image =
  'https://img.freepik.com/free-vector/gray-sedan-car-isolated-white-vector_53876-67104.jpg?w=826&t=st=1703764829~exp=1703765429~hmac=8c4fde2a21a964bd0809814e9dd2669f2fe0262c8fb4bae5e91df0c29c32e617';
car.image_alt = 'car';
car.license_plate = '85245693';
car.location = '';
car.manufacturer_model = 'toyota corolla';
car.seats_number = 5;
car.year = 2021;

export const carInput: CreateCarInput = {
  color: 'red',
  hour_price: 30,
  description: 'big car',
  image:
    'https://img.freepik.com/free-vector/gray-sedan-car-isolated-white-vector_53876-67104.jpg?w=826&t=st=1703764829~exp=1703765429~hmac=8c4fde2a21a964bd0809814e9dd2669f2fe0262c8fb4bae5e91df0c29c32e617',
  image_alt: 'car',
  license_plate: '7707707',
  location: '',
  manufacturer_model: 'jeep',
  seats_number: 7,
  year: 2024,
};
export const updateCar: UpdateCarInput = {
  id: '12345',
  availability: true,
  color: 'blue',
  hour_price: 20,
  description: 'big car',
  image:
    'https://img.freepik.com/free-vector/gray-sedan-car-isolated-white-vector_53876-67104.jpg?w=826&t=st=1703764829~exp=1703765429~hmac=8c4fde2a21a964bd0809814e9dd2669f2fe0262c8fb4bae5e91df0c29c32e617',
  image_alt: 'car',
  license_plate: '12345678',
  location: '',
  manufacturer_model: 'jeep',
  seats_number: 5,
  year: 2024,
};
