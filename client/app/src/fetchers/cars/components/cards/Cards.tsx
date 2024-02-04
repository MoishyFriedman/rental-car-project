import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_CARS } from "../../../global/graphql/graphql.queries";
import { Car } from "../../interfaces/interfaces";
import { DivBox } from "../../../global/styled/styled";
import CarCard from "./Card";

export default function CarsCards() {
  const [cars, setCars] = useState<Car[]>([]);
  const { loading, error, data } = useQuery(GET_ALL_CARS);

  useEffect(() => {
    async function getData() {
      try {
        if (error) throw error;
        if (!loading && data) setCars(await data.cars);
      } catch (error) {
        if (error instanceof Error) console.log(error.message);
      }
    }
    getData();
  }, [loading, data]);

  return (
    <DivBox wrap="wrap" gap="2vh" margin="2vh" min_height="100%" space="space-around">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </DivBox>
  );
}
