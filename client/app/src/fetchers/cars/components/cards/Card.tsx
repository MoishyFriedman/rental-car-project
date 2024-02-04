import { Car } from "../../interfaces/interfaces";
import { Card } from "./card.styled";
import CardImg from "./cardImage/CardImage";
import CardBody from "./CardBody";

export default function CarCard(prop: { car: Car }) {
  return (
    <Card>
      <CardBody car={prop.car} />
      <CardImg img={prop.car.image} alt={prop.car.image_alt} />
    </Card>
  );
}
