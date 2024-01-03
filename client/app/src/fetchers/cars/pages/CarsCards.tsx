import { Box } from "@mui/material";
import CarCard from "../components/card/Card";
import { DivBox } from "../../global/components/styled/styled";

export const data = [
  {
    id: "111",
    license_plate: "123",
    seats_number: 7,
    description: "big car",
    manufacturer_model: "toyota",
    color: "blue",
    year: 2020,
    location: "",
    image:
      "https://img.freepik.com/free-vector/gray-sedan-car-isolated-white-vector_53876-67104.jpg?w=826&t=st=1703764829~exp=1703765429~hmac=8c4fde2a21a964bd0809814e9dd2669f2fe0262c8fb4bae5e91df0c29c32e617",
    image_alt: "car",
    availability: true,
    hour_price: 20,
    created_at: "",
    updated_at: "",
  },
  {
    id: "222",
    license_plate: "123",
    seats_number: 5,
    description: "big car",
    manufacturer_model: "toyota",
    color: "red",
    year: 2019,
    location: "",
    image: "https://img.freepik.com/free-vector/black-sedan-car-isolated-white-vector_53876-64403.jpg?size=626&ext=jpg&uid=R24043798&ga=GA1.1.1222167019.1703684132&semt=ais",
    image_alt: "car",
    availability: true,
    hour_price: 25,
    created_at: "",
    updated_at: "",
  },
  {
    id: "333",
    license_plate: "123",
    seats_number: 10,
    description: "big car",
    manufacturer_model: "toyota",
    color: "black",
    year: 2018,
    location: "",
    image: "https://img.freepik.com/free-vector/red-hatchback-car-isolated-white-vector_53876-64401.jpg?size=626&ext=jpg&uid=R24043798&ga=GA1.1.1222167019.1703684132&semt=ais",
    image_alt: "car",
    availability: true,
    hour_price: 10,
    created_at: "",
    updated_at: "",
  },
  {
    id: "444",
    license_plate: "123",
    seats_number: 5,
    description: "big car",
    manufacturer_model: "toyota",
    color: "blue",
    year: 2020,
    location: "",
    image:
      "https://img.freepik.com/free-vector/gray-sedan-car-isolated-white-vector_53876-67104.jpg?w=826&t=st=1703764829~exp=1703765429~hmac=8c4fde2a21a964bd0809814e9dd2669f2fe0262c8fb4bae5e91df0c29c32e617",
    image_alt: "car",
    availability: true,
    hour_price: 30,
    created_at: "",
    updated_at: "",
  },
  {
    id: "555",
    license_plate: "123",
    seats_number: 5,
    description: "big car",
    manufacturer_model: "toyota",
    color: "blue",
    year: 2020,
    location: "",
    image:
      "https://img.freepik.com/free-vector/gray-sedan-car-isolated-white-vector_53876-67104.jpg?w=826&t=st=1703764829~exp=1703765429~hmac=8c4fde2a21a964bd0809814e9dd2669f2fe0262c8fb4bae5e91df0c29c32e617",
    image_alt: "car",
    availability: true,
    hour_price: 15,
    created_at: "",
    updated_at: "",
  },
  {
    id: "666",
    license_plate: "123",
    seats_number: 5,
    description: "big car",
    manufacturer_model: "toyota",
    color: "red",
    year: 2019,
    location: "",
    image: "https://img.freepik.com/free-vector/black-sedan-car-isolated-white-vector_53876-64403.jpg?size=626&ext=jpg&uid=R24043798&ga=GA1.1.1222167019.1703684132&semt=ais",
    image_alt: "car",
    availability: true,
    hour_price: 20,
    created_at: "",
    updated_at: "",
  },
  {
    id: "777",
    license_plate: "123",
    seats_number: 5,
    description: "big car",
    manufacturer_model: "toyota",
    color: "black",
    year: 2018,
    location: "",
    image: "https://img.freepik.com/free-vector/red-hatchback-car-isolated-white-vector_53876-64401.jpg?size=626&ext=jpg&uid=R24043798&ga=GA1.1.1222167019.1703684132&semt=ais",
    image_alt: "car",
    availability: true,
    hour_price: 22,
    created_at: "",
    updated_at: "",
  },
  {
    id: "888",
    license_plate: "123",
    seats_number: 5,
    description: "big car",
    manufacturer_model: "toyota",
    color: "blue",
    year: 2020,
    location: "",
    image:
      "https://img.freepik.com/free-vector/gray-sedan-car-isolated-white-vector_53876-67104.jpg?w=826&t=st=1703764829~exp=1703765429~hmac=8c4fde2a21a964bd0809814e9dd2669f2fe0262c8fb4bae5e91df0c29c32e617",
    image_alt: "car",
    availability: true,
    hour_price: 30,
    created_at: "",
    updated_at: "",
  },
];
export default function CarsCards() {
  return (
    <>
      <DivBox wrap="wrap" gap="2vh" margin="2vh" min_height="100%" space="space-around">
        {data.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </DivBox>
    </>
  );
}
