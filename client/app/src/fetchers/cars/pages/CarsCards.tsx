import CarCard from "../components/card/Card";
import { DivBox } from "../../global/styled/styled";
import { useEffect, useState } from "react";
import { Car } from "../interfaces/interfaces";
import axios from "axios";

export default function CarsCards() {
  const [data, setData] = useState<Car[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const resolve = await axios.get(`${import.meta.env.VITE_SERVER_URL}/cars`);
        if (resolve.statusText !== "OK") throw resolve;
        setData(resolve.data);
      } catch (error) {
        if (error instanceof Error) console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <DivBox wrap="wrap" gap="2vh" margin="2vh" min_height="100%" space="space-around">
      {data.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </DivBox>
  );
}
