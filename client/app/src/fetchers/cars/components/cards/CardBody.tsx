import { DivBox } from "../../../global/styled/styled";
import { Car } from "../../interfaces/interfaces";
import Titles from "./cardTitles/CardTitles";
import ActionBar from "./actionBar/ActionBarCard";

export default function CardImg(prop: { car: Car }) {
  return (
    <DivBox way="column" width="50%" space="space-between">
      <Titles model={prop.car.manufacturer_model} description={prop.car.description} />
      <ActionBar hour_price={prop.car.hour_price} seats_number={prop.car.seats_number} />
    </DivBox>
  );
}
